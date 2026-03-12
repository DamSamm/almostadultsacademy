import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import supabaseAdmin from "@/lib/supabase-admin";

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  // Verify the webhook signature
  const svixId = req.headers.get("svix-id");
  const svixTimestamp = req.headers.get("svix-timestamp");
  const svixSignature = req.headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: "Missing svix headers" }, { status: 400 });
  }

  const body = await req.text();
  const wh = new Webhook(webhookSecret);

  let event: { type: string; data: Record<string, unknown> };
  try {
    event = wh.verify(body, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as typeof event;
  } catch {
    return NextResponse.json({ error: "Invalid webhook signature" }, { status: 400 });
  }

  const { type, data } = event;

  if (type === "user.created") {
    const emailAddresses = data.email_addresses as Array<{ email_address: string; id: string }>;
    const primaryEmailId = data.primary_email_address_id as string;
    const primaryEmail = emailAddresses.find((e) => e.id === primaryEmailId)?.email_address ?? "";

    await supabaseAdmin.from("profiles").insert({
      clerk_user_id: data.id as string,
      name: [data.first_name, data.last_name].filter(Boolean).join(" ") || null,
      email: primaryEmail,
    });
  }

  if (type === "user.updated") {
    const emailAddresses = data.email_addresses as Array<{ email_address: string; id: string }>;
    const primaryEmailId = data.primary_email_address_id as string;
    const primaryEmail = emailAddresses.find((e) => e.id === primaryEmailId)?.email_address ?? "";

    await supabaseAdmin
      .from("profiles")
      .update({
        name: [data.first_name, data.last_name].filter(Boolean).join(" ") || null,
        email: primaryEmail,
      })
      .eq("clerk_user_id", data.id as string);
  }

  if (type === "user.deleted") {
    await supabaseAdmin
      .from("profiles")
      .delete()
      .eq("clerk_user_id", data.id as string);
  }

  return NextResponse.json({ received: true });
}
