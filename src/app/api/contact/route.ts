import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  fullName: z.string().min(2),
  phone: z.string().regex(/^[\d\s\-\+\(\)]{10,15}$/),
  email: z.string().email(),
  service: z.string().min(1),
  city: z.string().min(1),
  message: z.string().min(1).max(1000),
  contactMethod: z.enum(["phone", "email", "whatsapp"]),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Send email via Resend if API key is configured
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "LuminaSky Website <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "Luminaskywindows@gmail.com",
        replyTo: data.email,
        subject: `New Quote Request: ${data.service} — ${data.city} (${data.fullName})`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#1e3a8a;padding:20px 24px;border-radius:8px 8px 0 0">
              <h2 style="color:white;margin:0;font-size:20px">New Quote Request — LuminaSky</h2>
            </div>
            <div style="background:#f0f9ff;padding:24px;border:1px solid #bae6fd;border-top:none;border-radius:0 0 8px 8px">
              <table style="border-collapse:collapse;width:100%">
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600;width:40%">Name</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.fullName}</td></tr>
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Phone</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.phone}</td></tr>
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Email</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.email}</td></tr>
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Service</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.service}</td></tr>
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">City</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.city}</td></tr>
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Contact Via</td><td style="padding:8px 12px;border:1px solid #e5e7eb;text-transform:capitalize">${data.contactMethod}</td></tr>
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Message</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.message}</td></tr>
              </table>
              <p style="color:#6b7280;font-size:12px;margin-top:20px;margin-bottom:0">
                Sent from LuminaSky Glass Services website · ${new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })}
              </p>
            </div>
          </div>
        `,
      });
    } else {
      // Dev mode: log to console
      console.log("Contact form submission (no RESEND_API_KEY configured):", data);
    }

    return NextResponse.json({ success: true, message: "Message received" });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, message: "Validation failed" },
        { status: 400 }
      );
    }
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
