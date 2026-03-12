import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import stripe from "@/lib/stripe";
import supabaseAdmin from "@/lib/supabase-admin";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almostadultsacademy.vercel.app";
const PRICE_PER_SESSION_CENTS = 3500;

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  }

  const { enrollmentId } = await req.json();
  if (!enrollmentId) {
    return NextResponse.json({ error: "Missing enrollmentId" }, { status: 400 });
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

  return NextResponse.json({ url: session.url });
}
