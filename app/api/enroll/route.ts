import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      parentName,
      parentEmail,
      parentPhone,
      childName,
      childAge,
      courseInterested,
      preferredTime,
      message,
    } = body;

    // Basic validation
    if (!parentName || !parentEmail || !childName || !childAge || !courseInterested) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #ff6b35, #ffd166); padding: 28px 32px;">
          <h1 style="color: #fff; margin: 0; font-size: 22px;">📋 New Enrollment Enquiry</h1>
          <p style="color: rgba(255,255,255,0.9); margin: 6px 0 0; font-size: 14px;">The Almost Adults Academy</p>
        </div>
        <div style="padding: 32px; background: #fff;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #374151;">
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e; width: 40%;">Parent / Guardian Name</td>
              <td style="padding: 10px 0;">${parentName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e;">Parent Email</td>
              <td style="padding: 10px 0;"><a href="mailto:${parentEmail}" style="color: #ff6b35;">${parentEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e;">Parent Phone</td>
              <td style="padding: 10px 0;">${parentPhone || "—"}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e;">Child's Name</td>
              <td style="padding: 10px 0;">${childName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e;">Child's Age</td>
              <td style="padding: 10px 0;">${childAge}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e;">Course Interested In</td>
              <td style="padding: 10px 0; color: #ff6b35; font-weight: 600;">${courseInterested}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f3f4f6;">
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e;">Preferred Time Slot</td>
              <td style="padding: 10px 0;">${preferredTime || "No preference"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-weight: bold; color: #1e1b2e; vertical-align: top;">Additional Message</td>
              <td style="padding: 10px 0;">${message || "—"}</td>
            </tr>
          </table>
        </div>
        <div style="padding: 16px 32px; background: #f9f9f9; text-align: center; font-size: 12px; color: #9ca3af;">
          Submitted via the Almost Adults Academy website enrollment form.
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Almost Adults Academy" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: parentEmail,
      subject: `📋 New Enrollment Enquiry — ${childName} (${courseInterested})`,
      html: htmlBody,
    });

    // Send a confirmation email to the parent
    await transporter.sendMail({
      from: `"The Almost Adults Academy" <${process.env.GMAIL_USER}>`,
      to: parentEmail,
      subject: "We received your enrollment enquiry! 🎉",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #ff6b35, #ffd166); padding: 28px 32px; border-radius: 12px 12px 0 0;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">Thanks, ${parentName}! 🎉</h1>
          </div>
          <div style="padding: 32px; background: #fff; border-radius: 0 0 12px 12px; border: 1px solid #f3f4f6;">
            <p style="color: #374151; font-size: 15px; line-height: 1.6;">
              Thank you for your interest in enrolling <strong>${childName}</strong> in our
              <strong>${courseInterested}</strong> program at The Almost Adults Academy.
            </p>
            <p style="color: #374151; font-size: 15px; line-height: 1.6;">
              Our team will be in touch with you shortly to confirm details and next steps.
            </p>
            <div style="margin: 24px 0; padding: 16px; background: #fff7f2; border-left: 4px solid #ff6b35; border-radius: 4px;">
              <p style="margin: 0; font-size: 14px; color: #ff6b35; font-weight: 600;">What's next?</p>
              <p style="margin: 8px 0 0; font-size: 14px; color: #374151;">
                Expect a reply within 1–2 business days. In the meantime, feel free to explore our
                <a href="https://almostadultsacademy.com/programs" style="color: #ff6b35;">programs page</a> or
                <a href="https://almostadultsacademy.com/timetable" style="color: #ff6b35;">class timetable</a>.
              </p>
            </div>
            <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
              — The Almost Adults Academy Team<br/>Small Humans, Big Plans
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Enrollment email error:", error);
    return NextResponse.json(
      { error: "Failed to send enrollment enquiry. Please try again." },
      { status: 500 }
    );
  }
}
