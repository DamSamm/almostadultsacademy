import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import supabaseAdmin from "@/lib/supabase-admin";
import Stripe from "stripe";
import logger from "@/lib/logger";

/** Extracts the payment intent ID from an Invoice in Stripe v20+.
 * The field moved from `invoice.payment_intent` to `invoice.payments.data[0].payment.payment_intent`.
 * Falls back to null when the webhook payload doesn't expand the payments list.
 */
function extractInvoicePaymentIntent(invoice: Stripe.Invoice): string | null {
  const pi = invoice.payments?.data?.[0]?.payment?.payment_intent;
  return typeof pi === "string"
    ? pi
    : (pi as Stripe.PaymentIntent | undefined)?.id ?? null;
}

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Stripe webhook secret not configured" }, { status: 500 });
  }

  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature header" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  logger.info({ eventId: event.id, eventType: event.type }, "Processing Stripe event");

  const eventAge = Math.floor(Date.now() / 1000) - event.created;
  if (eventAge > 300) {
    logger.warn({ eventId: event.id, eventAge }, "Dropping stale Stripe event");
    return NextResponse.json({ received: true, skipped: "stale" });
  }

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const enrollmentId = session.metadata?.enrollment_id;
      const parentId = session.metadata?.parent_id;
      const billingType = session.metadata?.billing_type;

      if (!enrollmentId || !parentId) {
        logger.error({ sessionId: session.id }, "checkout.session.completed missing metadata");
        break;
      }

      const paymentIntentId = typeof session.payment_intent === "string" ? session.payment_intent : null;
      const sessionSubscriptionId = typeof session.subscription === "string" ? session.subscription : null;

      // NOTE: idempotency check must remain BEFORE the DB writes below.
      // On a Stripe retry where enrollment succeeded but payment insert failed,
      // we need to re-attempt the payment insert — which only works if we haven't
      // short-circuited here yet. Idempotency is on the *payment* row, not enrollment.

      // Idempotency for one-time payments: keyed on payment_intent id.
      if (paymentIntentId) {
        const { data: existingPayment } = await supabaseAdmin
          .from("payments")
          .select("id")
          .eq("stripe_payment_intent_id", paymentIntentId)
          .single();
        if (existingPayment) break;
      }

      // Idempotency for subscription checkouts: session.payment_intent is null;
      // use the subscription id instead (billing_type "recurring" initial payment).
      if (!paymentIntentId && sessionSubscriptionId) {
        const { data: existingSub } = await supabaseAdmin
          .from("payments")
          .select("id")
          .eq("stripe_subscription_id", sessionSubscriptionId)
          .eq("billing_type", "recurring")
          .single();
        if (existingSub) break;
      }

      // Update enrollment to confirmed
      const { error: enrollmentError } = await supabaseAdmin
        .from("enrollments")
        .update({ status: "confirmed" })
        .eq("id", enrollmentId);

      if (enrollmentError) {
        logger.error({ err: enrollmentError }, "Failed to confirm enrollment");
        return NextResponse.json({ error: "DB update failed" }, { status: 500 });
      }

      // Record payment
      const { error: paymentError } = await supabaseAdmin.from("payments").insert({
        enrollment_id: enrollmentId,
        parent_id: parentId,
        stripe_payment_intent_id: paymentIntentId,
        stripe_subscription_id: sessionSubscriptionId,
        amount_sgd: 3500,
        billing_type: billingType ?? "one_time",
        status: "paid",
        paid_at: new Date().toISOString(),
      });

      if (paymentError) {
        logger.error({ err: paymentError }, "Failed to record payment");
        return NextResponse.json({ error: "DB insert failed" }, { status: 500 });
      }
      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      const enrollmentId = session.metadata?.enrollment_id;
      if (!enrollmentId) break;

      const { error: expiredError } = await supabaseAdmin
        .from("enrollments")
        .update({ status: "cancelled" })
        .eq("id", enrollmentId)
        .eq("status", "pending"); // never cancel an already-confirmed enrollment

      if (expiredError) {
        logger.error({ err: expiredError }, "Failed to cancel expired enrollment");
        return NextResponse.json({ error: "DB update failed" }, { status: 500 });
      }
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;

      // The first invoice of a new subscription is already recorded via
      // checkout.session.completed — skip it here to avoid a duplicate.
      if (invoice.billing_reason === "subscription_create") break;

      const subRef = invoice.parent?.subscription_details?.subscription;
      const subscriptionId = typeof subRef === "string" ? subRef : null;
      if (!subscriptionId) break;

      // Find the enrollment tied to this subscription
      const { data: payment } = await supabaseAdmin
        .from("payments")
        .select("enrollment_id, parent_id")
        .eq("stripe_subscription_id", subscriptionId)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (!payment) break;

      const invoicePaymentIntentId = extractInvoicePaymentIntent(invoice);

      // Idempotency: skip if this invoice payment was already recorded
      if (invoicePaymentIntentId) {
        const { data: existingInvoicePayment } = await supabaseAdmin
          .from("payments")
          .select("id")
          .eq("stripe_payment_intent_id", invoicePaymentIntentId)
          .single();
        if (existingInvoicePayment) break;
      }

      // Keep enrollment confirmed and log the recurring payment
      const { error: recurringError } = await supabaseAdmin.from("payments").insert({
        enrollment_id: payment.enrollment_id,
        parent_id: payment.parent_id,
        stripe_subscription_id: subscriptionId,
        stripe_payment_intent_id: invoicePaymentIntentId,
        amount_sgd: 3500,
        billing_type: "recurring",
        status: "paid",
        paid_at: new Date().toISOString(),
      });

      if (recurringError) {
        logger.error({ err: recurringError }, "Failed to record recurring payment");
        return NextResponse.json({ error: "DB insert failed" }, { status: 500 });
      }
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;

      // If the very first payment of a subscription fails, the checkout session
      // will expire and checkout.session.expired handles the cancellation.
      if (invoice.billing_reason === "subscription_create") break;

      const subRef = invoice.parent?.subscription_details?.subscription;
      const subscriptionId = typeof subRef === "string" ? subRef : null;
      if (!subscriptionId) break;

      const { data: payment } = await supabaseAdmin
        .from("payments")
        .select("enrollment_id, parent_id")
        .eq("stripe_subscription_id", subscriptionId)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (!payment) break;

      const failedPaymentIntentId = extractInvoicePaymentIntent(invoice);

      // Idempotency: skip if this failure was already recorded
      if (failedPaymentIntentId) {
        const { data: existingFailed } = await supabaseAdmin
          .from("payments")
          .select("id")
          .eq("stripe_payment_intent_id", failedPaymentIntentId)
          .eq("status", "failed")
          .single();
        if (existingFailed) break;
      }

      const { error: failedPaymentError } = await supabaseAdmin.from("payments").insert({
        enrollment_id: payment.enrollment_id,
        parent_id: payment.parent_id,
        stripe_subscription_id: subscriptionId,
        stripe_payment_intent_id: failedPaymentIntentId,
        amount_sgd: 3500,
        billing_type: "recurring",
        status: "failed",
      });

      if (failedPaymentError) {
        logger.error({ err: failedPaymentError }, "Failed to record failed payment");
        return NextResponse.json({ error: "DB insert failed" }, { status: 500 });
      }
      break;
    }

    case "customer.subscription.deleted": {
      const subscription = event.data.object as Stripe.Subscription;

      const { data: payment } = await supabaseAdmin
        .from("payments")
        .select("enrollment_id")
        .eq("stripe_subscription_id", subscription.id)
        .limit(1)
        .single();

      if (!payment) break;

      const { error: cancelError } = await supabaseAdmin
        .from("enrollments")
        .update({ status: "cancelled" })
        .eq("id", payment.enrollment_id);

      if (cancelError) {
        logger.error({ err: cancelError }, "Failed to cancel enrollment");
        return NextResponse.json({ error: "DB update failed" }, { status: 500 });
      }

      // Cancel any pending payments tied to this subscription
      const { error: pendingCancelError } = await supabaseAdmin
        .from("payments")
        .update({ status: "cancelled" })
        .eq("stripe_subscription_id", subscription.id)
        .eq("status", "pending");

      if (pendingCancelError) {
        // Non-critical — enrollment is already cancelled, but log for visibility
        logger.error({ err: pendingCancelError }, "Failed to cancel pending payments");
      }
      break;
    }

    default:
      logger.info({ eventType: event.type }, "Unhandled Stripe event type");
  }

  return NextResponse.json({ received: true });
}
