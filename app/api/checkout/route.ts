import { NextRequest, NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import stripe from "@/lib/stripe";
import supabaseAdmin from "@/lib/supabase-admin";
import { checkoutRatelimit } from "@/lib/ratelimit";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://almostadultsacademy.vercel.app";
const PRICE_PER_SESSION_CENTS = 3500; // SGD $35.00
const ALLOWED_COURSES = [
  "Coding",
  "Essential Life Skills",
  "Creative Arts",
  "STEM",
  "Performing Arts",
  "Outdoor Classes",
];

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

  const body = await req.json();
  const { childName, childAge, course, preferredTime, billingType } = body;

  if (!childName || !childAge || !course || !billingType) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  if (!ALLOWED_COURSES.includes(course)) {
    return NextResponse.json({ error: "Invalid course selection" }, { status: 400 });
  }

  const age = Number(childAge);
  if (!Number.isInteger(age) || age < 5 || age > 12) {
    return NextResponse.json({ error: "Child age must be between 5 and 12" }, { status: 400 });
  }

  if (!["one_time", "recurring"].includes(billingType)) {
    return NextResponse.json({ error: "Invalid billing type" }, { status: 400 });
  }

  // Get the parent's profile from Supabase
  const { data: profile, error: profileError } = await supabaseAdmin
    .from("profiles")
    .select("id, email, name")
    .eq("clerk_user_id", userId)
    .single();

  if (profileError || !profile) {
    return NextResponse.json({ error: "Profile not found" }, { status: 404 });
  }

  // Upsert child record
  const { data: child, error: childError } = await supabaseAdmin
    .from("children")
    .upsert(
      { parent_id: profile.id, name: childName, age: Number(childAge) },
      { onConflict: "parent_id,name" }
    )
    .select("id")
    .single();

  if (childError || !child) {
    return NextResponse.json({ error: "Failed to save child" }, { status: 500 });
  }

  // Block if an active recurring subscription already exists for this child+course
  const { data: confirmedEnrollment } = await supabaseAdmin
    .from("enrollments")
    .select("id")
    .eq("child_id", child.id)
    .eq("parent_id", profile.id)
    .eq("course", course)
    .eq("status", "confirmed")
    .eq("billing_type", "recurring")
    .maybeSingle();

  if (confirmedEnrollment) {
    return NextResponse.json(
      { error: "Your child already has an active subscription for this course." },
      { status: 409 }
    );
  }

  // Reuse an existing pending enrollment to avoid duplicates
  const { data: existingEnrollment } = await supabaseAdmin
    .from("enrollments")
    .select("id")
    .eq("child_id", child.id)
    .eq("parent_id", profile.id)
    .eq("course", course)
    .eq("status", "pending")
    .maybeSingle();

  let enrollmentId: string;
  if (existingEnrollment) {
    enrollmentId = existingEnrollment.id;
  } else {
    const { data: enrollment, error: enrollmentError } = await supabaseAdmin
      .from("enrollments")
      .insert({
        child_id: child.id,
        parent_id: profile.id,
        course,
        preferred_time: preferredTime || null,
        billing_type: billingType,
        status: "pending",
      })
      .select("id")
      .single();

    if (enrollmentError || !enrollment) {
      return NextResponse.json({ error: "Failed to create enrollment" }, { status: 500 });
    }
    enrollmentId = enrollment.id;
  }

  // Build Stripe Checkout session
  const productName = `Almost Adults Academy — ${course}`;
  const description = preferredTime ? `Preferred time: ${preferredTime}` : undefined;

  let session;
  if (billingType === "one_time") {
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
      metadata: {
        enrollment_id: enrollmentId,
        parent_id: profile.id,
        billing_type: "one_time",
      },
      success_url: `${SITE_URL}/dashboard?payment=success`,
      cancel_url: `${SITE_URL}/enroll?payment=cancelled`,
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
      metadata: {
        enrollment_id: enrollmentId,
        parent_id: profile.id,
        billing_type: "recurring",
      },
      success_url: `${SITE_URL}/dashboard?payment=success`,
      cancel_url: `${SITE_URL}/enroll?payment=cancelled`,
    });
  }

  return NextResponse.json({ url: session.url });
}
