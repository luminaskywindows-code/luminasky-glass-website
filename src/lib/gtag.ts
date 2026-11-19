import { getSourceData } from "./source-tracking";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function getPageSlug(): string {
  if (typeof window === "undefined") return "";
  return window.location.pathname.replace(/^\//, "") || "homepage";
}

export function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17856467818/bl9RCKLCsaodEOqm0MJC",
    });
    // Where this visitor came from, so a WhatsApp click is attributed even if they edit the message
    let src: Record<string, string> = {};
    try {
      const sd = getSourceData();
      src = {
        lead_source: sd.source || "unknown",
        lead_campaign: sd.utm_campaign || "",
        lead_term: sd.utm_term || "",
        landing_page: sd.landing_page || "",
        has_gclid: sd.gclid ? "yes" : "no",
      };
    } catch { /* no source data */ }
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: getPageSlug(),
      ...src,
    });
  }
}

export function trackPhoneConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17856467818/n3QgCLDfm6wdEOqm0MJC",
    });
    window.gtag("event", "phone_click", {
      event_category: "engagement",
      event_label: getPageSlug(),
    });
  }
}

/** A form was sent (contact, quote, popup...): GA4 "generate_lead", marked as a key event in Analytics. */
export function trackFormLead(form: string) {
  if (typeof window !== "undefined" && window.gtag) {
    let src: Record<string, string> = {};
    try { const sd = getSourceData(); src = { lead_source: sd.source || "unknown", landing_page: sd.landing_page || "" }; } catch { /* no source data */ }
    window.gtag("event", "generate_lead", { form_name: form, event_label: getPageSlug(), ...src });
  }
}
