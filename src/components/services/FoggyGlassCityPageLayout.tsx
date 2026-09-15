import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, Droplets, Thermometer, Eye, CloudRain, AlertTriangle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, SITE_URL, COMPANY_NAME } from "@/lib/constants";
import type { FoggyGlassCityPageData } from "@/lib/foggy-glass-city-data";

const SEAL_FAILURE_EXPLANATION = [
  "A sealed glass unit — the industry calls it an IGU, insulated glass unit — is two or three panes of glass separated by a spacer bar and sealed at the perimeter. The space between is filled with argon or krypton gas and desiccant beads that absorb moisture.",
  "When that seal breaks down: argon gas escapes, outside air seeps in bringing moisture, and the desiccant saturates. Once saturated, condensation forms between the panes — the familiar 'foggy window' look. From that point, the fog will never clear on its own.",
  "The frame, sash, and hardware are usually still fine. Only the sealed glass unit needs replacing. That's why we can restore a foggy window for 60–80% less than a full window replacement.",
];

const SEAL_FAILURE_SIGNS = [
  { text: "Persistent fog or haze between the panes that never clears", icon: CloudRain },
  { text: "Mineral streaks or 'rain marks' etched onto the inside surface", icon: Droplets },
  { text: "Visible moisture droplets between the glass", icon: Eye },
  { text: "Condensation returns within hours of wiping the outside dry", icon: AlertTriangle },
  { text: "The window feels colder to the touch in winter than nearby windows", icon: Thermometer },
];

const COST_CONTENT = [
  "Foggy glass repair in the GTA typically runs $300 to $650 for a standard sealed glass unit. Larger units, high-rise access, or specialty shapes can push $650 to $1,500. High-performance glass with Low-E coating and argon fill adds roughly 15–20 percent.",
  "Every quote we give is all-in: measurement, glass, installation, cleanup, and warranty. No $99 bait pricing that balloons on the invoice.",
  "Send us a few photos and rough dimensions — we quote most jobs from photos alone, no visit required.",
];

const UNIVERSAL_FAQS = [
  {
    q: "Can foggy windows be fixed without replacing the whole window?",
    a: "Yes. In most cases we replace only the sealed glass unit while keeping your existing frame, sash, and hardware. It's faster and less invasive than a full window replacement.",
  },
  {
    q: "How long does foggy glass repair take?",
    a: "The on-site work is usually quick — far less disruption than a full window replacement. After measurements are confirmed, the replacement glass unit needs to be ordered. We'll give you a clear timeline based on your specific glass once we've assessed it.",
  },
];

function generateSchemas(city: FoggyGlassCityPageData) {
  const pageUrl = `/foggy-glass-repair-${city.slug}`;
  const allFaqs = [...UNIVERSAL_FAQS, city.citySpecificFaq];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: PHONE,
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.region,
      },
    },
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Foggy Glass Repair",
    provider: { "@id": `${SITE_URL}/#organization` },
    url: `${SITE_URL}${pageUrl}`,
    description: `Foggy glass repair and sealed unit replacement in ${city.city}. LuminaSky replaces failed IGUs without full window replacement.`,
    areaServed: {
      "@type": "City",
      name: city.city,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: "Foggy Glass Repair", item: `${SITE_URL}/foggy-windows` },
      { "@type": "ListItem", position: 4, name: city.city, item: `${SITE_URL}${pageUrl}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return [localBusiness, service, breadcrumb, faqSchema];
}

export function FoggyGlassCityPageLayout({ city }: { city: FoggyGlassCityPageData }) {
  const allFaqs = [...UNIVERSAL_FAQS, city.citySpecificFaq];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchemas(city)) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-blue-200 text-sm mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <Link href="/foggy-windows" className="hover:text-white transition-colors">Foggy Glass Repair</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-white font-medium">{city.city}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Foggy Glass Repair in {city.city}
          </h1>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-md shadow hover:shadow-lg transition-all"
            >
              Get a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Text Us a Photo
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-gray-600 text-lg leading-relaxed">{city.intro}</p>
        </div>
      </section>

      {/* Section 1: How Sealed Glass Unit Failure Works */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Sealed Glass Unit Failure Works
          </h2>
          {SEAL_FAILURE_EXPLANATION.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Section 2: Signs Your Window Seal Has Failed */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Signs Your {city.city} Window Seal Has Failed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SEAL_FAILURE_SIGNS.map((sign) => (
            <div
              key={sign.text}
              className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5"
            >
              <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center shrink-0">
                <sign.icon className="w-5 h-5 text-red-500" aria-hidden="true" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{sign.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Neighborhoods */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods We Serve in {city.city}
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl">
            We repair foggy sealed glass units across all neighborhoods in {city.city}. Same-day or next-day service available throughout:
          </p>
          <div className="flex flex-wrap gap-2">
            {city.neighborhoods.map((n) => (
              <span
                key={n}
                className="inline-flex items-center gap-1.5 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                {n}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Cost */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Foggy Glass Repair Cost in {city.city}
          </h2>
          {COST_CONTENT.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            FAQ — Foggy Glass Repair in {city.city}
          </h2>
          <div className="space-y-4">
            {allFaqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get a Free Quote for Foggy Glass Repair in {city.city}
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Send us a few photos and rough measurements — we quote most jobs from photos alone. No visit required, no obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-green-600 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Text Us a Photo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
