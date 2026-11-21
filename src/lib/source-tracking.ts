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
  /** the latest visit that came from a paid ad, if any (an ad visit after a direct one used to be lost) */
  paid?: SourceData;
  expires: number;
}

const isPaid = (d: SourceData) => !!(d.gclid || d.fbclid || /^(cpc|ppc|paid)/i.test(d.utm_medium));

function deriveSource(data: Omit<SourceData, "source">): string {
  if (data.gclid) return data.utm_campaign ? `Google Ads / ${data.utm_campaign}` : "Google Ads";
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
        if (isPaid(current)) stored.paid = current;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
        return;
      }
    }
    const fresh: StoredSource = { first: current, last: current, paid: isPaid(current) ? current : undefined, expires };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fresh));
  } catch {
    // localStorage unavailable, tracking degrades gracefully
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
    // Paid ad click in the last 90 days wins (that's what the ad budget needs to know).
    // Otherwise the first visit, unless it told us nothing (Direct) and a later visit did.
    let pick = stored.paid || stored.first;
    if (!stored.paid && stored.first.source === "Direct" && stored.last && stored.last.source !== "Direct") pick = stored.last;
    return { ...pick, first_visit_at: stored.first.first_visit_at, landing_page: pick.landing_page || stored.first.landing_page };
  } catch {
    return fallback;
  }
}

/**
 * Short code added to WhatsApp messages so the office can tell where the visitor came from.
 * A = Google ad (plus campaign), S = Google search, M = Google Maps / Business Profile,
 * F = Facebook or Instagram, W = everything else (direct, other sites).
 */
export function getSourceCode(): string {
  const sd = getSourceData();
  const s = (sd.source || "").toLowerCase();
  let code = "W";
  if (sd.gclid || s.startsWith("google ads")) code = "A";
  else if (s.includes("business profile")) code = "M";
  else if (s.includes("google organic")) code = "S";
  else if (s.includes("meta") || sd.fbclid) code = "F";
  const camp = (sd.utm_campaign || "").replace(/[^a-z0-9-]/gi, "").slice(0, 12);
  return code === "A" && camp ? `A-${camp}` : code;
}

/**
 * The opening word of the WhatsApp message tells us where the visitor came from.
 * A natural greeting instead of a code, because people deleted the code before sending.
 *   "Hi there,"  Google ad          "Hello,"  Google search        "Hey,"  Google Maps / Business Profile
 *   "Hi!"        Facebook/Instagram "Hi,"     direct or another site
 */
export function getSourceGreeting(): string {
  const code = getSourceCode();
  if (code.startsWith("A")) return "Hi there,";
  if (code === "S") return "Hello,";
  if (code === "M") return "Hey,";
  if (code === "F") return "Hi!";
  return "Hi,";
}

/** Sets the opening greeting of a wa.me link's text by source (and drops any old [code] tag). */
export function tagWhatsAppHref(href: string): string {
  try {
    const u = new URL(href);
    if (!/wa\.me$|whatsapp\.com$/.test(u.hostname)) return href;
    const raw = u.searchParams.get("text") || "Hi, I'd like a quote";
    const rest = raw
      .replace(/\s*\[[A-Z](-[a-z0-9-]+)?\]\s*$/i, "")
      .replace(/^\s*(hi there|hello|hey|hi)\s*[,!.]?\s*/i, "")
      .trim();
    u.searchParams.set("text", `${getSourceGreeting()} ${rest}`.trim());
    return u.toString();
  } catch {
    return href;
  }
}

/**
 * Which phone number this visitor should see. Set in Vercel:
 *   NEXT_PUBLIC_PHONE_ADS  shown to visitors who came from a Google ad
 *   NEXT_PUBLIC_PHONE_WEB  shown to visitors from Google search and other sites
 * Google Maps, Facebook and direct visitors keep the main number. Empty = main number.
 */
export function trackingPhone(): string | null {
  const sd = getSourceData();
  const s = (sd.source || "").toLowerCase();
  const ads = process.env.NEXT_PUBLIC_PHONE_ADS || "";
  const web = process.env.NEXT_PUBLIC_PHONE_WEB || "";
  if (sd.gclid || s.startsWith("google ads")) return ads || null;
  if (s.includes("google organic") || s.includes("bing organic")) return web || null;
  return null;
}
