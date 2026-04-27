import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  try {
    const data = await resend.emails.send({
      from: "LuminaSky <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL || "Luminaskywindows@gmail.com"],
      subject: "✅ Test Email — LuminaSky Contact Form Working",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #1e3a8a; padding: 24px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0;">✅ Resend is Working!</h2>
          </div>
          <div style="background: #f0f9ff; padding: 24px; border: 1px solid #bae6fd; border-top: none; border-radius: 0 0 8px 8px;">
            <p style="color: #1e40af; font-size: 16px; margin-top: 0;">
              Your LuminaSky contact form email setup is configured correctly.
            </p>
            <table style="border-collapse: collapse; width: 100%; margin-top: 16px;">
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: 600; width: 40%;">Name</td>
                <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">Test Customer</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: 600;">Phone</td>
                <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">416-555-1234</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: 600;">Service</td>
                <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">Foggy Windows</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: 600;">City</td>
                <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">Toronto</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; background: #f9fafb; border: 1px solid #e5e7eb; font-weight: 600;">Message</td>
                <td style="padding: 8px 12px; border: 1px solid #e5e7eb;">This is a test message from the contact form setup.</td>
              </tr>
            </table>
            <p style="color: #6b7280; font-size: 12px; margin-top: 24px; margin-bottom: 0;">
              Sent from LuminaSky Glass Services website · ${new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })}
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      messageId: data.data?.id,
      message: "Test email sent! Check Luminaskywindows@gmail.com — inbox AND spam folder.",
    });
  } catch (error) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error("Test email error:", error);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
