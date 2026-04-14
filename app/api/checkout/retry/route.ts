import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import stripe from "@/lib/stripe";
import supabaseAdmin from "@/lib/supabase-admin";
import { checkoutRatelimit } from "@/lib/ratelimit";
import logger from "@/lib/logger";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almostadultsacademy.vercel.app";
const PRICE_PER_SESSION_CENTS = 3500;

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const { success, reset } = await checkoutRatelimit.limit(userId);
  if (!success) {
    const retryAfter = Math.ceil((reset - Date.now()) / 1000);
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { enrollmentId } = body as { enrollmentId?: string };
  if (!enrollmentId) {
    return NextResponse.json({ error: "Missing enrollmentId" }, { status: 400 });
  }

  // Validate UUID format to prevent injection into DB queries
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  if (!uuidRegex.test(enrollmentId)) {
    return NextResponse.json({ error: "Invalid enrollmentId format" }, { status: 400 });
  }

  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("id, email")
    .eq("clerk_user_id", userId)
    .single();

  if (!profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  // Fetch the pending enrollment — must belong to this user
  const { data: enrollment } = await supabaseAdmin
    .from("enrollments")
    .select("id, course, preferred_time, billing_type, status")
    .eq("id", enrollmentId)
    .eq("parent_id", profile.id)
    .eq("status", "pending")
    .single();

  if (!enrollment) {
    return NextResponse.json({ error: "Pending enrollment not found" }, { status: 404 });
  }

  const productName = `Almost Adults Academy — ${enrollment.course}`;
  const description = enrollment.preferred_time
    ? `Preferred time: ${enrollment.preferred_time}`
    : undefined;

  let session;
  try {
    if (enrollment.billing_type === "one_time") {
      session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer_email: profile.email ?? undefined,
        line_items: [
          {
            price_data: {
              currency: "sgd",
              unit_amount: PRICE_PER_SESSION_CENTS,
              product_data: { name: productName, description },
            },
            quantity: 1,
          },
        ],
        metadata: { enrollment_id: enrollment.id, parent_id: profile.id, billing_type: "one_time" },
        success_url: `${SITE_URL}/dashboard?payment=success`,
        cancel_url: `${SITE_URL}/dashboard/enrollments`,
      });
    } else {
      session = await stripe.checkout.sessions.create({
        mode: "subscription",
        customer_email: profile.email ?? undefined,
        line_items: [
          {
            price_data: {
              currency: "sgd",
              unit_amount: PRICE_PER_SESSION_CENTS,
              recurring: { interval: "month" },
              product_data: { name: productName, description },
            },
            quantity: 1,
          },
        ],
        metadata: { enrollment_id: enrollment.id, parent_id: profile.id, billing_type: "recurring" },
        success_url: `${SITE_URL}/dashboard?payment=success`,
        cancel_url: `${SITE_URL}/dashboard/enrollments`,
      });
    }
  } catch (err) {
    logger.error({ err }, "Stripe checkout session creation failed");
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }

  if (!session.url) {
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
