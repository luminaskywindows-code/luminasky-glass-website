import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Phone,
  ChevronRight,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "GTA Glass Replacement Cost Report 2026", url: "/glass-replacement-cost-report-2026" },
];

const PRICING_TABLE = [
  { category: "Small", dimensions: '24"×36" to 30"×40"', area: "Up to 10 sq ft", range: "$300–$650" },
  { category: "Medium", dimensions: '36"×48" to 48"×60"', area: "10–20 sq ft", range: "$500–$950" },
  { category: "Large", dimensions: '48"×72" to 60"×72"', area: "20–30 sq ft", range: "$850–$1,400" },
  { category: "Picture Window", dimensions: '72"×80"+', area: "30+ sq ft", range: "$1,200+" },
  { category: "Oversized / Specialty", dimensions: "Custom shapes, 50+ sq ft, 3rd floor+", area: "Custom", range: "Custom quote" },
];

const GLASS_TYPES = [
  { type: "Standard clear", note: "Baseline pricing" },
  { type: "Low-E coating", note: "Add 10–15% (energy efficiency)" },
  { type: "Argon fill", note: "Add 5–10% (insulation boost)" },
  { type: "Tempered (safety glass)", note: "Add 25–35%" },
  { type: "Frosted / Obscure", note: "Add 10–15%" },
  { type: "Triple pane", note: "Add 20–25%" },
];

const HIDDEN_COSTS = [
  {
    title: '"Energy Surcharges" (10–15%)',
    desc: 'Some suppliers add this on top of their square-foot price. Always ask: "Is this your all-in price?"',
  },
  {
    title: "Fuel Surcharges",
    desc: "Especially common with cross-GTA deliveries. Can add $25–$75 per visit.",
  },
  {
    title: "Minimum Order Fees",
    desc: "Many companies require minimum $250–$500 per order. Small single-window jobs may incur additional charges.",
  },
  {
    title: "Second/Third Floor Premiums",
    desc: "Should be disclosed upfront. If not mentioned, ask explicitly.",
  },
  {
    title: "Oversized Surcharges",
    desc: 'Units above 50 sq ft or over 72" in any dimension often cost 25–40% more.',
  },
  {
    title: "Rush Fees",
    desc: "Standard lead time is 5–15 business days. Need it faster? Rush typically adds 15–25%.",
  },
  {
    title: "Service Call Fees After Warranty",
    desc: "Companies with short warranties (3–5 years) will charge a full service call ($100–$150) once warranty expires.",
  },
];

const RED_FLAGS = [
  "Won't give you a written quote",
  "Can't name their glass supplier (should know who makes their IGUs)",
  "Offer \"lifetime warranty\" without clear written terms",
  "Pressure you to decide same-day",
  "Only accept cash (CRA/HST compliance concern)",
  "Don't carry $2M liability insurance",
  "Don't have WSIB coverage (required for most GTA work)",
  "Won't show you reviews or references",
  "Have no physical business address",
];

const COST_TIPS = [
  "Request quotes for multiple units at once. Volume discounts can save 10–15%.",
  "Ask about seasonal timing. Spring and summer often have shorter lead times.",
  "Keep your frame if possible. Glass-only replacement costs a fraction of full window replacement.",
  "Compare TOTAL quotes, not just per-square-foot prices. Hidden surcharges inflate finals.",
  "Check for current warranty on existing glass. Some original installations have 10–20 year manufacturer warranties still active.",
  "Bundle with other services. If you need caulking, hardware or screen repair, bundling can save on service call fees.",
];

const LUMINASKY_ADVANTAGES = [
  { text: "Lifetime Warranty on sealed glass units (industry standard: 3–5 years)", href: "/lifetime-warranty" },
  { text: "Serving 34 GTA cities with same-week measurement", href: "/areas-we-serve" },
  { text: "24/7 emergency board-up", href: "/emergency-glass-repair" },
  { text: "$2M liability insurance with certificate available", href: null },
  { text: "Family-owned business: personal service, not corporate", href: "/about" },
  { text: "Transparent pricing: all surcharges disclosed upfront", href: null },
  { text: "Direct manufacturer relationships: we buy direct, pass savings to you", href: null },
];

const FAQS = [
  {
    q: "What's the difference between glass replacement and window replacement?",
    a: "Glass replacement (what this report covers) replaces only the sealed glass unit while keeping your existing frame. It costs a fraction of full window replacement and takes 1–2 weeks instead of 4–8 weeks.",
  },
  {
    q: "How long should a sealed glass unit last?",
    a: "Modern sealed glass units typically last 15–25 years before seal failure. Factors affecting lifespan include manufacturing quality, exposure to extreme temperatures, and installation technique.",
  },
  {
    q: "Can I tell if I need glass replacement vs full window replacement?",
    a: "If the fog or condensation is between the glass panes (visible from both inside and outside), you need glass replacement. If the frame is rotting, warped or damaged, you may need full window replacement.",
  },
  {
    q: "Is the price range in this report all-inclusive?",
    a: "The prices shown include supply, installation and measurement. They do not include HST. Specialty features like Low-E coating, tempered glass or decorative patterns add to the base price.",
  },
  {
    q: "Why does LuminaSky offer a Lifetime Warranty when industry standard is 3–5 years?",
    a: "Our Lifetime Warranty is part of our commitment to long-term customer relationships. Years 0–2 include full coverage (free glass and installation). From year 3 onward, replacement glass is free; customer pays only for installation and a standard service call.",
  },
];

const INCLUDED = [
  "Free measurement visit (some companies charge $25–$50; most refund if work proceeds)",
  "Removal of old sealed glass unit (disposal typically included)",
  "New sealed glass unit (double or triple pane, as specified)",
  "Low-E coating and argon fill (if ordered)",
  "Professional installation by trained technicians",
  "Written warranty on seal failure",
  "Cleanup after installation",
];

const NOT_INCLUDED = [
  "Repair of damaged window frames (separate quote)",
  "Repainting around the window (customer responsibility)",
  "Interior trim damage from installation (should be noted beforehand)",
];

function generateReportSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: "GTA Glass Replacement Cost Report 2026",
    description:
      "Complete guide to sealed glass unit replacement costs across the Greater Toronto Area in 2026. Market pricing survey, cost factors, hidden fees to avoid, and what to expect.",
    url: `${SITE_URL}/glass-replacement-cost-report-2026`,
    datePublished: "2026-10-26",
    author: {
      "@type": "Organization",
      name: "LuminaSky Glass Services",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "LuminaSky Glass Services",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/glass-replacement-cost-report-2026`,
    },
    about: {
      "@type": "Service",
      name: "Glass Replacement",
      serviceType: "Glass Replacement",
      areaServed: { "@type": "Place", name: "Greater Toronto Area, Ontario, Canada" },
    },
  };
}

export const metadata: Metadata = {
  title: "GTA Glass Replacement Cost Report 2026",
  description:
    "Complete guide to sealed glass unit replacement costs across the Greater Toronto Area in 2026. Market pricing survey, cost factors, hidden fees to avoid, and what to expect.",
  alternates: { canonical: "/glass-replacement-cost-report-2026" },
};

export default function GlassReplacementCostReportPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateReportSchema(),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
              {BREADCRUMBS.map((crumb, index) => (
                <li key={crumb.url} className="flex items-center gap-2">
                  {index < BREADCRUMBS.length - 1 ? (
                    <>
                      <Link href={crumb.url} className="hover:text-white transition-colors">{crumb.name}</Link>
                      <span aria-hidden="true">/</span>
                    </>
                  ) : (
                    <span className="text-white font-medium" aria-current="page">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            GTA Glass Replacement Cost Report 2026
          </h1>
          <p className="text-blue-200 text-sm">
            Published October 2026 &middot; Next update: January 2027
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto prose prose-gray max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed">
            In 2026, glass replacement costs across the Greater Toronto Area range from $300 for a small bedroom window to $1,500+ for a picture window. This report breaks down what GTA homeowners and property managers can expect to pay for sealed glass unit replacement, based on a survey of 10 Toronto-area glass companies and LuminaSky&apos;s internal data from 150+ residential and commercial glass replacement jobs in 2026.
          </p>
          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-800 font-medium">
              This report covers glass-only replacement (replacing just the sealed glass unit while keeping your existing window frame). Full <Link href="/window-replacement" className="text-primary font-semibold hover:underline">window replacement</Link> is a different service and is not covered here.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-12 px-4 md:px-8 bg-gray-50" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="pricing-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            GTA Glass Replacement Cost Table
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-primary text-white text-sm">
                  <th className="px-4 py-3 font-semibold">Size Category</th>
                  <th className="px-4 py-3 font-semibold hidden sm:table-cell">Typical Dimensions</th>
                  <th className="px-4 py-3 font-semibold hidden md:table-cell">Area</th>
                  <th className="px-4 py-3 font-semibold text-right">GTA Price Range</th>
                </tr>
              </thead>
              <tbody>
                {PRICING_TABLE.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-semibold text-gray-900 text-sm">{row.category}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm hidden sm:table-cell">{row.dimensions}</td>
                    <td className="px-4 py-3 text-gray-600 text-sm hidden md:table-cell">{row.area}</td>
                    <td className="px-4 py-3 font-bold text-primary text-sm text-right">{row.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-500 mt-3">
            Prices include supply + installation + measurement visit. Prices before HST. Pricing varies by glass type, accessibility and location.
          </p>
        </div>
      </section>

      {/* 6 Factors That Affect Your Price */}
      <section className="py-12 px-4 md:px-8 bg-white" aria-labelledby="factors-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="factors-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            6 Factors That Affect Your Price
          </h2>

          {/* 1. Window Size */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">1. Window Size (biggest factor)</h3>
            <p className="text-gray-600 leading-relaxed">
              Larger glass means more material and more careful handling. Prices scale roughly with square footage. A small bedroom window can be carried and installed by one technician; a picture window requires two.
            </p>
          </div>

          {/* 2. Glass Type */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Glass Type</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {GLASS_TYPES.map((g) => (
                <div key={g.type} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 border border-gray-100">
                  <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-semibold text-gray-900 text-sm">{g.type}</span>
                    <span className="text-gray-500 text-sm"> &mdash; {g.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Accessibility */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">3. Accessibility</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Ground floor: Standard pricing</li>
              <li>Second floor: Usually standard</li>
              <li>Third floor+ or requires lift: Add 25&ndash;40%</li>
            </ul>
          </div>

          {/* 4. Quantity */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">4. Quantity (Volume Discount)</h3>
            <p className="text-gray-600 leading-relaxed mb-2">
              Most GTA companies offer discounts for multiple units:
            </p>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>3&ndash;4 units: 3&ndash;5% off</li>
              <li>5&ndash;9 units: 5&ndash;8% off</li>
              <li>10+ units: 8&ndash;12% off</li>
            </ul>
            <p className="text-gray-500 text-sm mt-2">
              <Link href="/property-managers" className="text-primary font-semibold hover:underline">Property managers</Link> with ongoing needs can often negotiate standing rates.
            </p>
          </div>

          {/* 5. Specialty Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">5. Specialty Features</h3>
            <ul className="space-y-1 text-gray-600 text-sm">
              <li>Grills/crosses between panes: Add $40&ndash;$75 per unit</li>
              <li>Custom shapes (arched, circular): Custom quote</li>
              <li>Decorative glass: Add 50&ndash;200%</li>
            </ul>
          </div>

          {/* 6. Season */}
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">6. Season</h3>
            <p className="text-gray-600 leading-relaxed">
              Winter (October to March) sees higher demand for <Link href="/foggy-windows" className="text-primary font-semibold hover:underline">foggy window repair</Link> as condensation becomes more visible. Expect 1&ndash;2 week longer lead times during peak winter weeks.
            </p>
          </div>
        </div>
      </section>

      {/* What Does Glass Replacement Include? */}
      <section className="py-12 px-4 md:px-8 bg-gray-50" aria-labelledby="includes-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="includes-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Does Glass Replacement Include?
          </h2>
          <p className="text-gray-600 mb-6">A proper GTA <Link href="/glass-replacement" className="text-primary font-semibold hover:underline">glass replacement</Link> service includes:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 mb-8">
            {INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
          <h3 className="font-bold text-gray-900 mb-3">What&apos;s typically NOT included:</h3>
          <div className="space-y-2">
            {NOT_INCLUDED.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Costs */}
      <section className="py-12 px-4 md:px-8 bg-white" aria-labelledby="hidden-costs-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="hidden-costs-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Hidden Costs to Watch For
          </h2>
          <p className="text-gray-600 mb-6">
            Several GTA companies add charges that are not in their initial quote. Watch for:
          </p>
          <div className="space-y-4">
            {HIDDEN_COSTS.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{i + 1}. {item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Red Flags */}
      <section className="py-12 px-4 md:px-8 bg-gray-50" aria-labelledby="red-flags-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="red-flags-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Red Flags: Avoid Companies That...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {RED_FLAGS.map((flag) => (
              <div key={flag} className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <XCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-800 text-sm">{flag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost-Saving Tips */}
      <section className="py-12 px-4 md:px-8 bg-white" aria-labelledby="tips-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="tips-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Cost-Saving Tips
          </h2>
          <div className="space-y-4">
            {COST_TIPS.map((tip, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <Lightbulb className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold">{i + 1}.</span> {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The LuminaSky Advantage */}
      <section className="py-12 px-4 md:px-8 bg-primary" aria-labelledby="advantage-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="advantage-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
            The LuminaSky Advantage
          </h2>
          <p className="text-blue-200 mb-6">
            While this report covers GTA market pricing in general, here is what sets LuminaSky apart:
          </p>
          <div className="space-y-3 mb-8">
            {LUMINASKY_ADVANTAGES.map((adv) => (
              <div key={adv.text} className="flex items-start gap-2">
                <ShieldCheck className="w-5 h-5 text-accent-light shrink-0 mt-0.5" aria-hidden="true" />
                {adv.href ? (
                  <Link href={adv.href} className="text-white text-sm hover:text-accent-light transition-colors">
                    {adv.text}
                  </Link>
                ) : (
                  <span className="text-blue-100 text-sm">{adv.text}</span>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all active:scale-95"
            >
              Get Your Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 px-4 md:px-8 bg-gray-50" aria-labelledby="methodology-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="methodology-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Methodology
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-3">This report is based on:</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
              Quote survey of 10 GTA glass companies conducted October 2026
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
              LuminaSky internal data from 150+ residential and commercial glass replacement jobs completed in 2026
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
              Industry pricing from Cardinal Glass Industries, local manufacturers and public pricing databases
            </li>
            <li className="flex items-start gap-2">
              <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
              Review of hidden fees, surcharges and standard contract terms
            </li>
          </ul>
          <p className="text-gray-500 text-xs mt-4">
            Report compiled: October 2026. Next update: January 2027.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 md:px-8 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-gray-100 pb-6 last:border-0">
                <h3 className="font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
