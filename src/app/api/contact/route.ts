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
  heardAbout: z.string().optional().default(""),
  referredBy: z.string().optional().default(""),
  source: z.string().optional().default("unknown"),
  utm_campaign: z.string().optional().default("-"),
  landing_page: z.string().optional().default("-"),
  referrer: z.string().optional().default("direct"),
  first_visit: z.string().optional().default("-"),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      const sourceLabel = data.source || "unknown";

      await resend.emails.send({
        from: "LuminaSky Website <onboarding@resend.dev>",
        to: process.env.CONTACT_EMAIL || "service@luminasky.com",
        replyTo: data.email,
        subject: `New Quote Request [${sourceLabel}]: ${data.service} — ${data.city} (${data.fullName})`,
        html: `
          <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
            <div style="background:#1e3a8a;padding:20px 24px;border-radius:8px 8px 0 0">
              <h2 style="color:white;margin:0;font-size:20px">New Quote Request - LuminaSky</h2>
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
                <tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Heard about us</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.heardAbout || "-"}</td></tr>
                ${data.referredBy ? `<tr><td style="padding:8px 12px;background:#f9fafb;border:1px solid #e5e7eb;font-weight:600">Referred by</td><td style="padding:8px 12px;border:1px solid #e5e7eb">${data.referredBy}</td></tr>` : ""}
              </table>

              <div style="margin-top:20px;padding:16px;background:#f3f4f6;border-radius:6px;border:1px solid #e5e7eb">
                <p style="margin:0 0 8px;font-weight:600;font-size:13px;color:#374151">Source (automatic)</p>
                <table style="border-collapse:collapse;width:100%;font-size:13px;color:#6b7280">
                  <tr><td style="padding:3px 0;width:40%">Source</td><td>${sourceLabel}</td></tr>
                  <tr><td style="padding:3px 0">Campaign</td><td>${data.utm_campaign}</td></tr>
                  <tr><td style="padding:3px 0">Landing page</td><td>${data.landing_page}</td></tr>
                  <tr><td style="padding:3px 0">Referrer</td><td>${data.referrer}</td></tr>
                  <tr><td style="padding:3px 0">First visit</td><td>${data.first_visit}</td></tr>
                </table>
              </div>

              <p style="color:#6b7280;font-size:12px;margin-top:20px;margin-bottom:0">
                Sent from LuminaSky Glass Services website · ${new Date().toLocaleString("en-US", { timeZone: "America/Toronto" })}
              </p>
            </div>
          </div>
        `,
      });
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
