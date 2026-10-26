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
  Ruler,
  Layers,
  ArrowUpFromLine,
  Package,
  Sparkles,
  Snowflake,
  Home,
  Maximize2,
  PiggyBank,
  Award,
  Heart,
  Eye,
  HandCoins,
  Shield,
  Clock,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { ReportTOC } from "@/components/report/ReportTOC";
import { AccordionFAQ } from "@/components/report/AccordionFAQ";
import { ScrollProgress } from "@/components/report/ScrollProgress";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "GTA Glass Replacement Cost Report 2026", url: "/glass-replacement-cost-report-2026" },
];

const PRICING_TABLE = [
  { category: "Small", dimensions: '24"x36" to 30"x40"', area: "Up to 10 sq ft", range: "$300–$650", color: "bg-emerald-100 text-emerald-800", badge: null },
  { category: "Medium", dimensions: '36"x48" to 48"x60"', area: "10–20 sq ft", range: "$500–$950", color: "bg-blue-100 text-blue-800", badge: "Most Common" },
  { category: "Large", dimensions: '48"x72" to 60"x72"', area: "20–30 sq ft", range: "$850–$1,400", color: "bg-purple-100 text-purple-800", badge: null },
  { category: "Picture Window", dimensions: '72"x80"+', area: "30+ sq ft", range: "$1,200+", color: "bg-amber-100 text-amber-800", badge: null },
  { category: "Oversized / Specialty", dimensions: "Custom shapes, 50+ sq ft, 3rd floor+", area: "Custom", range: "Custom quote", color: "bg-gray-100 text-gray-700", badge: null },
];

const GLASS_TYPES = [
  { type: "Standard clear", note: "Baseline pricing" },
  { type: "Low-E coating", note: "Add 10–15% (energy efficiency)" },
  { type: "Argon fill", note: "Add 5–10% (insulation boost)" },
  { type: "Tempered (safety glass)", note: "Add 25–35%" },
  { type: "Frosted / Obscure", note: "Add 10–15%" },
  { type: "Triple pane", note: "Add 20–25%" },
];

const FACTORS = [
  {
    icon: Ruler,
    title: "Window Size",
    subtitle: "Biggest factor",
    desc: "Larger glass means more material and careful handling. A small bedroom window needs one technician; a picture window requires two.",
  },
  {
    icon: Layers,
    title: "Glass Type",
    subtitle: "Coating and panes",
    desc: "Low-E, argon fill, tempered, frosted, or triple pane each add to the base price. Standard clear is the baseline.",
  },
  {
    icon: ArrowUpFromLine,
    title: "Accessibility",
    subtitle: "Floor and reach",
    desc: "Ground and second floor are standard. Third floor or higher, or requiring a lift, adds 25–40%.",
  },
  {
    icon: Package,
    title: "Quantity",
    subtitle: "Volume discount",
    desc: "3–4 units: 3–5% off. 5–9 units: 5–8% off. 10+ units: 8–12% off. Property managers can negotiate standing rates.",
  },
  {
    icon: Sparkles,
    title: "Specialty Features",
    subtitle: "Custom work",
    desc: "Grills between panes add $40–$75. Custom shapes (arched, circular) and decorative glass require custom quotes.",
  },
  {
    icon: Snowflake,
    title: "Season",
    subtitle: "Winter demand",
    desc: "October to March sees higher demand for foggy window repair. Expect 1–2 week longer lead times during peak winter weeks.",
  },
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
  { icon: Award, text: "Lifetime Warranty on sealed glass units (industry standard: 3–5 years)", href: "/lifetime-warranty", highlight: true },
  { icon: Clock, text: "Serving 34 GTA cities with same-week measurement", href: "/areas-we-serve", highlight: false },
  { icon: Shield, text: "24/7 emergency board-up", href: "/emergency-glass-repair", highlight: false },
  { icon: ShieldCheck, text: "$2M liability insurance with certificate available", href: null, highlight: false },
  { icon: Heart, text: "Family-owned business: personal service, not corporate", href: "/about", highlight: false },
  { icon: Eye, text: "Transparent pricing: all surcharges disclosed upfront", href: null, highlight: false },
  { icon: HandCoins, text: "Manufacturer relationships: we buy direct, pass savings to you", href: null, highlight: false },
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

const TOC_SECTIONS = [
  { id: "introduction", label: "Introduction" },
  { id: "pricing-heading", label: "Cost Table" },
  { id: "factors-heading", label: "6 Price Factors" },
  { id: "includes-heading", label: "What's Included" },
  { id: "hidden-costs-heading", label: "Hidden Costs" },
  { id: "red-flags-heading", label: "Red Flags" },
  { id: "tips-heading", label: "Cost-Saving Tips" },
  { id: "advantage-heading", label: "LuminaSky Advantage" },
  { id: "methodology-heading", label: "Methodology" },
  { id: "faq-heading", label: "FAQ" },
];

function generateReportSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Report",
    headline: "GTA Glass Replacement Cost Report 2026",
    description:
      "What does glass replacement cost in Toronto in 2026? GTA pricing data, cost factors, hidden fees to avoid and tips to save. Updated October 2026.",
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
    "What does glass replacement cost in Toronto in 2026? GTA pricing data, cost factors, hidden fees to avoid and tips to save. Updated October 2026.",
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

      <ScrollProgress />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-16 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
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
          <p className="text-blue-200 text-sm mb-10">
            Published October 2026 &middot; Next update: January 2027
          </p>

          {/* KPI Stats Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <Home className="w-6 h-6 text-accent-light mx-auto mb-2" aria-hidden="true" />
              <p className="text-3xl font-bold text-white">$300</p>
              <p className="text-blue-200 text-sm mt-1">Starting price for small windows</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <Maximize2 className="w-6 h-6 text-accent-light mx-auto mb-2" aria-hidden="true" />
              <p className="text-3xl font-bold text-white">$1,500+</p>
              <p className="text-blue-200 text-sm mt-1">Picture window range</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-5 text-center">
              <PiggyBank className="w-6 h-6 text-accent-light mx-auto mb-2" aria-hidden="true" />
              <p className="text-3xl font-bold text-white">A Fraction</p>
              <p className="text-blue-200 text-sm mt-1">Of full window replacement cost</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with TOC */}
      <div className="relative max-w-7xl mx-auto">
        {/* Sticky TOC (desktop only) */}
        <ReportTOC sections={TOC_SECTIONS} />

        {/* Content Column */}
        <div className="lg:ml-64">
          {/* Introduction */}
          <section id="introduction" className="py-12 px-4 md:px-8 bg-white scroll-mt-20">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed">
                In 2026, glass replacement costs across the Greater Toronto Area range from $300 for a small bedroom window to $1,500+ for a picture window. This report breaks down what GTA homeowners and property managers can expect to pay for sealed glass unit replacement, based on publicly available quotes from GTA glass companies and LuminaSky&apos;s internal records from 2026.
              </p>
              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800 font-medium">
                  This report covers glass-only replacement (replacing just the sealed glass unit while keeping your existing window frame). Full <Link href="/window-replacement" className="text-primary font-semibold hover:underline">window replacement</Link> is a different service and is not covered here.
                </p>
              </div>
            </div>
          </section>

          {/* Pricing Table */}
          <section id="pricing-heading" className="py-12 px-4 md:px-8 bg-gray-50 scroll-mt-20" aria-labelledby="pricing-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="pricing-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                GTA Glass Replacement Cost Table
              </h2>
              <div className="space-y-3">
                {PRICING_TABLE.map((row) => (
                  <div
                    key={row.category}
                    className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 hover:shadow-md transition-shadow flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
                  >
                    <div className="flex items-center gap-3 sm:w-44 shrink-0">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${row.color}`}>
                        {row.category}
                      </span>
                      {row.badge && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary text-white uppercase tracking-wide">
                          {row.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex-1 text-sm text-gray-600">
                      <span className="hidden sm:inline">{row.dimensions}</span>
                      <span className="hidden md:inline text-gray-400 mx-2">|</span>
                      <span className="hidden md:inline">{row.area}</span>
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-primary sm:text-right sm:w-40 shrink-0">
                      {row.range}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">
                Prices include supply + installation + measurement visit. Prices before HST. Pricing varies by glass type, accessibility and location.
              </p>
            </div>
          </section>

          {/* CTA after price table */}
          <div className="py-8 px-4 md:px-8 bg-white">
            <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-sky-50 border border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row items-center gap-4">
              <div className="flex-1 text-center sm:text-left">
                <p className="font-bold text-gray-900">See exact pricing for your window</p>
                <p className="text-sm text-gray-600 mt-1">Free quotes based on photos, or $30 site visit (credited toward your repair).</p>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-3 rounded-md shadow-sm hover:shadow transition-all active:scale-95 whitespace-nowrap"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* 6 Factors */}
          <section id="factors-heading" className="py-12 px-4 md:px-8 bg-white scroll-mt-20" aria-labelledby="factors-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="factors-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                6 Factors That Affect Your Price
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {FACTORS.map((factor) => {
                  const Icon = factor.icon;
                  return (
                    <div
                      key={factor.title}
                      className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                          <Icon className="w-5 h-5 text-primary" aria-hidden="true" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">{factor.title}</h3>
                          <p className="text-xs text-gray-500">{factor.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{factor.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Glass Types sub-grid */}
              <div className="mt-8">
                <h3 className="font-bold text-gray-900 mb-3">Glass Type Price Add-ons</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {GLASS_TYPES.map((g) => (
                    <div key={g.type} className="flex items-start gap-2 bg-gray-50 rounded-lg p-3 border border-gray-100">
                      <ChevronRight className="w-4 h-4 text-primary shrink-0 mt-0.5" aria-hidden="true" />
                      <div>
                        <span className="font-semibold text-gray-900 text-sm">{g.type}</span>
                        <span className="text-gray-500 text-sm"> : {g.note}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CTA after factors */}
          <div className="py-8 px-4 md:px-8 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700 mb-2">Still have questions about pricing?</p>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-primary/80 transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Dan at {PHONE}
              </a>
            </div>
          </div>

          {/* What Does Glass Replacement Include? */}
          <section id="includes-heading" className="py-12 px-4 md:px-8 bg-gray-50 scroll-mt-20" aria-labelledby="includes-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="includes-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
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
          <section id="hidden-costs-heading" className="py-12 px-4 md:px-8 bg-white scroll-mt-20" aria-labelledby="hidden-costs-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="hidden-costs-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hidden Costs to Watch For
              </h2>
              <p className="text-gray-600 mb-6">
                Several GTA companies add charges that are not in their initial quote. Watch for:
              </p>
              <div className="space-y-3">
                {HIDDEN_COSTS.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white border-l-4 border-amber-500 rounded-r-lg shadow-sm">
                    <AlertTriangle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Red Flags */}
          <section id="red-flags-heading" className="py-12 px-4 md:px-8 bg-gray-50 scroll-mt-20" aria-labelledby="red-flags-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="red-flags-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Red Flags: Avoid Companies That...
              </h2>
              <div className="space-y-2">
                {RED_FLAGS.map((flag) => (
                  <div key={flag} className="flex items-start gap-3 p-3 bg-red-50/50 rounded-lg">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-800 text-sm font-medium">{flag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Cost-Saving Tips */}
          <section id="tips-heading" className="py-12 px-4 md:px-8 bg-white scroll-mt-20" aria-labelledby="tips-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="tips-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
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
          <section id="advantage-heading" className="py-12 px-4 md:px-8 bg-primary scroll-mt-20" aria-labelledby="advantage-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="advantage-label" className="text-2xl md:text-3xl font-bold text-white mb-4">
                The LuminaSky Advantage
              </h2>
              <p className="text-blue-200 mb-8">
                While this report covers GTA market pricing in general, here is what sets LuminaSky apart:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {LUMINASKY_ADVANTAGES.map((adv) => {
                  const Icon = adv.icon;
                  const content = (
                    <div
                      className={`flex items-start gap-3 p-4 rounded-xl border transition-all ${
                        adv.highlight
                          ? "bg-accent/20 border-accent/40 sm:col-span-2"
                          : "bg-white/10 border-white/20"
                      }`}
                    >
                      <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${adv.highlight ? "text-accent-light" : "text-blue-300"}`} aria-hidden="true" />
                      <span className={`text-sm ${adv.highlight ? "text-white font-semibold" : "text-blue-100"}`}>
                        {adv.text}
                      </span>
                    </div>
                  );
                  return adv.href ? (
                    <Link key={adv.text} href={adv.href} className={`hover:scale-[1.02] transition-transform ${adv.highlight ? "sm:col-span-2" : ""}`}>
                      {content}
                    </Link>
                  ) : (
                    <div key={adv.text}>{content}</div>
                  );
                })}
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
          <section id="methodology-heading" className="py-12 px-4 md:px-8 bg-gray-50 scroll-mt-20" aria-labelledby="methodology-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="methodology-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Methodology
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">This report is based on:</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                  Publicly available quotes from GTA glass companies, collected October 2026
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                  LuminaSky internal records from residential and commercial glass replacement jobs completed in 2026
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                  Industry pricing from local manufacturers and public pricing databases
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
          <section id="faq-heading" className="py-12 px-4 md:px-8 bg-white scroll-mt-20" aria-labelledby="faq-label">
            <div className="max-w-4xl mx-auto">
              <h2 id="faq-label" className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Frequently Asked Questions
              </h2>
              <AccordionFAQ faqs={FAQS} />
            </div>
          </section>

          <CTABanner />
        </div>
      </div>
    </>
  );
}
