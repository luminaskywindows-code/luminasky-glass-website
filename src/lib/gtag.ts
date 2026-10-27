declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17856467818/bl9RCKLCsaodEOqm0MJC",
    });
  }
}

export function trackPhoneConversion() {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "conversion", {
      send_to: "AW-17856467818/_DtwCJ_CsaodEOqm0MJC",
    });
  }
}
