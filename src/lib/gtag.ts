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
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: getPageSlug(),
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
