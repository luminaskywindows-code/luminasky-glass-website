import { NextRequest, NextResponse } from "next/server";

const clip = (v: unknown, n = 1000) => (typeof v === "string" ? v.slice(0, n) : "");

/** Forwards a website lead to the Hub. The secret stays on the server. */
export async function POST(req: NextRequest) {
  const url = process.env.HUB_LEAD_WEBHOOK_URL;
  if (!url) return NextResponse.json({ ok: true, skipped: true });
  try {
    const b = await req.json();
    if (!clip(b.name, 120) || (!clip(b.phone) && !clip(b.email))) return NextResponse.json({ ok: false }, { status: 400 });
    const payload = {
      name: clip(b.name, 120), phone: clip(b.phone, 40), email: clip(b.email, 200), service: clip(b.service, 200), message: clip(b.message, 2000),
      source: clip(b.source, 120), utm_source: clip(b.utm_source, 120), utm_medium: clip(b.utm_medium, 120), utm_campaign: clip(b.utm_campaign, 120),
      utm_term: clip(b.utm_term, 200), gclid: clip(b.gclid, 300), referrer: clip(b.referrer, 300), landing_page: clip(b.landing_page, 300),
      first_visit_at: clip(b.first_visit_at, 40),
    };
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 8000);
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-webhook-secret": process.env.HUB_WEBHOOK_SECRET || "" },
      body: JSON.stringify(payload),
      signal: ctrl.signal,
    }).finally(() => clearTimeout(t));
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("hub-lead forward failed", e);
    return NextResponse.json({ ok: false }, { status: 502 });
  }
}
