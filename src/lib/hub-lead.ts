import { getSourceData } from "@/lib/source-tracking";

export interface HubLead {
  name: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

/** Sends a website lead to the LuminaSky Hub with where the visitor came from. Never blocks the form. */
export function sendLeadToHub(lead: HubLead): void {
  if (typeof window === "undefined") return;
  try {
    const sd = getSourceData();
    const body = JSON.stringify({
      ...lead,
      source: sd.source,
      utm_source: sd.utm_source,
      utm_medium: sd.utm_medium,
      utm_campaign: sd.utm_campaign,
      utm_term: sd.utm_term,
      gclid: sd.gclid,
      referrer: sd.referrer,
      landing_page: sd.landing_page,
      first_visit_at: sd.first_visit_at,
    });
    fetch("/api/hub-lead", { method: "POST", headers: { "Content-Type": "application/json" }, body, keepalive: true }).catch(() => {});
  } catch {
    // the email to the office already went out; the Hub copy is a bonus
  }
}
