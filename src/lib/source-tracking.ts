const STORAGE_KEY = "ls_source";
const EXPIRY_DAYS = 90;

export interface SourceData {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  referrer: string;
  landing_page: string;
  first_visit_at: string;
  source: string;
}

interface StoredSource {
  first: SourceData;
  last: SourceData;
  expires: number;
}

function deriveSource(data: Omit<SourceData, "source">): string {
  if (data.gclid) return "Google Ads";
  if (data.fbclid) return "Meta Paid";

  if (data.utm_source) {
    const parts = [data.utm_source];
    if (data.utm_medium) parts.push(data.utm_medium);
    if (data.utm_campaign) parts.push(data.utm_campaign);
    return parts.join(" / ");
  }

  const ref = data.referrer.toLowerCase();
  if (ref) {
    if (ref.includes("google.com/maps") || ref.includes("business.google"))
      return "Google Business Profile";
    if (ref.includes("google")) return "Google Organic";
    if (ref.includes("instagram")) return "Meta Organic";
    if (ref.includes("facebook")) return "Meta Organic";
    if (ref.includes("bing")) return "Bing Organic";
  }

  return "Direct";
}

function captureCurrentVisit(): SourceData {
  const params = new URLSearchParams(window.location.search);
  const raw = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_content: params.get("utm_content") || "",
    utm_term: params.get("utm_term") || "",
    gclid: params.get("gclid") || "",
    fbclid: params.get("fbclid") || "",
    referrer: document.referrer || "",
    landing_page: window.location.pathname,
    first_visit_at: new Date().toISOString(),
  };
  return { ...raw, source: deriveSource(raw) };
}

export function initSourceTracking(): void {
  if (typeof window === "undefined") return;

  const current = captureCurrentVisit();
  const expires = Date.now() + EXPIRY_DAYS * 24 * 60 * 60 * 1000;

  try {
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      const stored: StoredSource = JSON.parse(existing);
      if (stored.expires > Date.now()) {
        stored.last = current;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        return;
      }
    }
    const fresh: StoredSource = { first: current, last: current, expires };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  } catch {
    // localStorage unavailable — tracking degrades gracefully
  }
}

export function getSourceData(): SourceData {
  const fallback: SourceData = {
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_content: "",
    utm_term: "",
    gclid: "",
    fbclid: "",
    referrer: "",
    landing_page: "",
    first_visit_at: "",
    source: "unknown",
  };

  if (typeof window === "undefined") return fallback;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const stored: StoredSource = JSON.parse(raw);
    if (stored.expires < Date.now()) return fallback;
    return stored.first;
  } catch {
    return fallback;
  }
}
