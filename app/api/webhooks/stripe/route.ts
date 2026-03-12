import { NextRequest, NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import supabaseAdmin from "@/lib/supabase-admin";
import Stripe from "stripe";

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

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as Stripe.Checkout.Session;
      const enrollmentId = session.metadata?.enrollment_id;
      const parentId = session.metadata?.parent_id;
      const billingType = session.metadata?.billing_type;

      if (!enrollmentId || !parentId) break;

      // Update enrollment to confirmed
      await supabaseAdmin
        .from("enrollments")
        .update({ status: "confirmed" })
        .eq("id", enrollmentId);

      // Record payment
      await supabaseAdmin.from("payments").insert({
        enrollment_id: enrollmentId,
        parent_id: parentId,
        stripe_payment_intent_id: typeof session.payment_intent === "string"
          ? session.payment_intent
          : null,
        stripe_subscription_id: typeof session.subscription === "string"
          ? session.subscription
          : null,
        amount_sgd: 3500,
        billing_type: billingType ?? "one_time",
        status: "paid",
        paid_at: new Date().toISOString(),
      });
      break;
    }

    case "checkout.session.expired": {
      const session = event.data.object as Stripe.Checkout.Session;
      const enrollmentId = session.metadata?.enrollment_id;
      if (!enrollmentId) break;

      await supabaseAdmin
        .from("enrollments")
        .update({ status: "cancelled" })
        .eq("id", enrollmentId);
      break;
    }

    case "invoice.payment_succeeded": {
      const invoice = event.data.object as Stripe.Invoice;
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

      // Keep enrollment confirmed and log the recurring payment
      await supabaseAdmin.from("payments").insert({
        enrollment_id: payment.enrollment_id,
        parent_id: payment.parent_id,
        stripe_subscription_id: subscriptionId,
        amount_sgd: 3500,
        billing_type: "recurring",
        status: "paid",
        paid_at: new Date().toISOString(),
      });
      break;
    }

    case "invoice.payment_failed": {
      const invoice = event.data.object as Stripe.Invoice;
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

      await supabaseAdmin.from("payments").insert({
        enrollment_id: payment.enrollment_id,
        parent_id: payment.parent_id,
        stripe_subscription_id: subscriptionId,
        amount_sgd: 3500,
        billing_type: "recurring",
        status: "failed",
      });
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

      await supabaseAdmin
        .from("enrollments")
        .update({ status: "cancelled" })
        .eq("id", payment.enrollment_id);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
