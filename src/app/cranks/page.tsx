import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  XCircle,
  CheckCircle2,
  Phone,
  Mail,
  Snowflake,
  ChevronRight,
  ShieldCheck,
  Star,
  Wrench,
  MessageCircle,
  FileText,
} from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF, WINTER_READY_ENABLED } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Crank Repair GTA | 1-Year Warranty | LuminaSky Glass",
  description:
    "Fix broken window cranks across the GTA. Window specialists, not a handyman side gig. $30 visit credited back. 1-year full warranty. Call 437-344-8490.",
  alternates: { canonical: "/cranks" },
};

/* ── Data ── */

const TRUST_BADGES = [
  { icon: Star, label: "5-Star Google Reviews" },
  { icon: ShieldCheck, label: "1-Year Warranty" },
  { icon: CheckCircle2, label: "Licensed & Insured" },
  { icon: Wrench, label: "Window Specialists" },
  { icon: FileText, label: "Written Quote on the Spot" },
];

const CRANK_PROBLEMS = [
  {
    title: "Crank won't turn",
    desc: "Internal gears are stripped or seized. We replace the operator with authentic hardware and restore smooth operation.",
  },
  {
    title: "Crank spins but window won't move",
    desc: "The operator spline is worn or the arm is disconnected. We replace the mechanism so the crank drives the sash again.",
  },
  {
    title: "Handle broken off",
    desc: "Snapped or cracked handle. We match the spline pattern and install a compatible replacement handle.",
  },
  {
    title: "Window won't close or seal",
    desc: "Worn hinges or a bent operator arm prevent a tight seal. We repair or replace the hardware so the window closes flush.",
  },
  {
    title: "Casement operator failure",
    desc: "The gearbox that drives casement windows wears out over time. We carry AmesburyTruth and Roto operators for same-day replacement.",
  },
  {
    title: "Awning window hardware",
    desc: "Awning operators work differently from casements. We stock both types and know the difference, so the repair is done right.",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Call or send a photo on WhatsApp",
    desc: "Snap a picture of the broken crank and send it over. We will identify the part and let you know what to expect.",
  },
  {
    step: "2",
    title: "$30 visit with a written quote",
    desc: "Our technician visits, assesses the hardware on the spot, and gives you a written quote before starting any work.",
  },
  {
    step: "3",
    title: "$30 credited back when you proceed",
    desc: "The visit fee is applied directly to the cost of your repair. If you go ahead, the visit is free.",
  },
];

const BRANDS = [
  {
    name: "AmesburyTruth (formerly Truth Hardware)",
    note: "The most common brand in Canadian casement and awning windows",
  },
  {
    name: "Roto",
    note: "European tilt-turn windows and high-end casements",
  },
  {
    name: "Maxim",
    note: "Found in older vinyl windows",
  },
  {
    name: "Encore",
    note: "Common in builder-grade homes",
  },
  {
    name: "Entrygard",
    note: "Security hardware systems",
  },
];

const REPAIR_ITEMS = [
  {
    title: "Window Operators (Cranks)",
    desc: "The gear mechanism that opens/closes casement and awning windows",
  },
  {
    title: "Folding Handles",
    desc: "The handle you turn to operate the window",
  },
  {
    title: "Hinges",
    desc: "The metal arms that allow the window to swing open",
  },
  {
    title: "Multi-Point Locks",
    desc: "Security locks that engage at multiple points on the frame",
  },
  {
    title: "Keepers & Strike Plates",
    desc: "The receiving hardware that locks engage with",
  },
  {
    title: "Tilt Latches",
    desc: "Allow double-hung windows to tilt inward for cleaning",
  },
  {
    title: "Balances",
    desc: "Spring-loaded mechanisms in double-hung windows",
  },
  {
    title: "Screen Clips & Retainers",
    desc: "Hardware that holds screens in place",
  },
];

const FAQS = [
  {
    q: "What if you can't fix my crank during the first visit?",
    a: "In most cases, we complete the repair on the spot. If a part needs to be ordered (common with 20+ year old windows from brands no longer in business), we tell you during the assessment and schedule a return visit. The $30 service visit covers the diagnosis either way.",
  },
  {
    q: "How does the $30 service visit work?",
    a: "The $30 covers the technician's travel, inspection, and professional assessment. If you proceed with the repair, the full $30 is credited back toward your invoice. If you decide not to proceed, the $30 covers the assessment and there are no other charges.",
  },
  {
    q: "Will you try to replace my whole window instead of just fixing the crank?",
    a: "No. Most cranks can be repaired or replaced for a fraction of what a new window costs. Full replacement is only recommended when the window frame itself is compromised. We are specialists in hardware repair, not replacement sales.",
  },
  {
    q: "How do I know the price won't change once the technician is on-site?",
    a: "You receive a written quote on the spot after the assessment, before any work begins. The price listed is the final price for that scope of work. If additional issues are found that you want addressed, you decide whether to add them and approve the updated quote first.",
  },
  {
    q: "Can you fix cranks on 20+ year old windows?",
    a: "Yes. A significant portion of our work involves older windows, including hardware from brands no longer manufacturing (Caradco, Kolbe, Pella from the 90s, and others). We maintain supplier relationships for both current and discontinued hardware lines.",
  },
  {
    q: "What exactly is covered under the 1-year warranty?",
    a: "The 1-year warranty covers the parts we install and the labour on the specific repair performed. It does not cover new damage from vandalism, impact, forced operation, or wear on hardware we did not service. If the same hardware we repaired fails within 12 months, we return at no charge to resolve it.",
  },
  {
    q: "Do you serve condos and high-rise buildings?",
    a: "Yes. We service residential condominiums and apartment buildings throughout the GTA. Our technicians carry the required safety equipment and liability insurance for high-rise work. For property managers coordinating multi-unit repairs, we offer scheduled visits and consolidated invoicing.",
  },
  {
    q: "Will the technician clean up after the repair?",
    a: "Yes. Every job ends with the work area cleaner than we found it. Old parts, packaging, and any debris from the repair are removed before the technician leaves. If any detail is missed, let us know and we return to address it.",
  },
  {
    q: "Will you recommend extra repairs I didn't ask about?",
    a: "The technician notes any additional issues observed during the assessment and mentions them with pricing, so you have the information. There is no pressure and no upselling. You decide which repairs to approve, if any.",
  },
  {
    q: "What areas do you service?",
    a: "We service the Greater Toronto Area and surrounding regions. For properties outside our standard service radius, contact the office to confirm scheduling and any additional travel considerations.",
  },
];

const crumbs = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Window Crank Repair", url: "/cranks" },
];

export default function WindowCranksPage() {
  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(crumbs),
            generateServiceSchema(
              "Window Crank & Operator Repair",
              "/cranks",
              "Mobile repair service for casement and awning window cranks, operators, hinges, and locks across the GTA."
            ),
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* ── Hero ── */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label="Window crank repair hero"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
                  {crumbs.map((crumb, i) => (
                    <li key={crumb.url} className="flex items-center gap-2">
                      {i < crumbs.length - 1 ? (
                        <>
                          <Link href={crumb.url} className="hover:text-white transition-colors">
                            {crumb.name}
                          </Link>
                          <span aria-hidden="true">/</span>
                        </>
                      ) : (
                        <span className="text-white font-medium" aria-current="page">
                          {crumb.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Window Crank Repair in the GTA, Done Right
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                Window specialists, not a handyman side gig. We carry authentic
                parts, fix most cranks in 30 minutes on the first visit, and
                back every repair with a{" "}
                <strong className="text-white">1-year repair warranty</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call {PHONE}
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                >
                  Get a Written Quote
                </Link>
              </div>
            </div>

            {/* Hero image */}
            <div className="hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src="/images/services/window-crank-door.jpg"
                  alt="Old worn casement window crank operator and new replacement parts laid out side by side"
                  fill
                  className="object-cover"
                  sizes="50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-4">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/15"
              >
                <Icon className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose a Window Specialist ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="compare-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Know the Difference
            </span>
            <h2 id="compare-heading" className="text-3xl font-bold text-gray-900">
              Why Choose a Window Specialist
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Generic handyman */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-500 mb-6">The Handyman Option</h3>
              <ul className="space-y-4">
                {[
                  "No written warranty or unclear terms",
                  "Jack-of-all-trades, not a window specialist",
                  "Generic trust claims, no verified reviews",
                  "May not carry your exact hardware brand",
                  "Limited experience with casement operators",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle className="w-5 h-5 text-gray-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-500">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LuminaSky */}
            <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary/20 relative">
              <div className="absolute -top-3 left-6">
                <span className="bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Recommended
                </span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-6">LuminaSky Glass Services</h3>
              <ul className="space-y-4">
                {[
                  "1-year full warranty on every repair",
                  "Window and glass specialists only",
                  "5-star Google reviews from real GTA homeowners",
                  "AmesburyTruth, Roto, and major brands in stock",
                  "Most repairs done in 30 minutes, first visit",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Common Crank Problems ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="problems-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              We Fix These
            </span>
            <h2 id="problems-heading" className="text-3xl font-bold text-gray-900">
              Common Crank Problems We Fix
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
              Every problem below is one we see regularly. Most are a quick fix
              with the right replacement part.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CRANK_PROBLEMS.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-5 h-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="process-heading">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Simple Process
            </span>
            <h2 id="process-heading" className="text-3xl font-bold text-gray-900">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map(({ step, title, desc }) => (
              <div key={step} className="text-center">
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-accent/10 border border-accent/20 rounded-xl p-6 text-center">
            <p className="text-gray-700 font-medium">
              The $30 visit fee is credited toward your repair. If you go ahead, the visit is free.
            </p>
          </div>
        </div>
      </section>

      {/* ── Before / After ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="before-after-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Real Results
            </span>
            <h2 id="before-after-heading" className="text-3xl font-bold text-gray-900">
              Before &amp; After: Window Crank Repair
            </h2>
            <p className="text-gray-500 mt-3 leading-relaxed">
              Real hardware from a recent GTA job. Same mechanism, transformed in under 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/services/crank-before.jpg"
                  alt="Worn and rusty window crank mechanism before professional repair"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    Before
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Failed Crank Mechanism</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Stripped internal gears, rust, and corrosion prevent the window from opening or locking properly. This is the typical condition we find on casement and awning windows 15+ years old.
                </p>
              </div>
            </div>

            {/* After */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/services/crank-after.jpg"
                  alt="Brand new authentic window crank operator installed by LuminaSky"
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest">
                    After
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-900 mb-2">Authentic Replacement Hardware</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Brand-new authentic operator installed and aligned. The window now opens, closes, and locks smoothly. No force required. Same-day repair, no mess, no wall damage.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-500 text-sm font-medium">
            Most window hardware repairs are completed on the same day, on the first visit
          </p>
        </div>
      </section>

      {/* ── Hardware Brands ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="brands-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Parts We Carry
            </span>
            <h2 id="brands-heading" className="text-3xl font-bold text-gray-900 mb-4">
              Hardware Brands We Stock &amp; Service
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
              We carry replacement parts for all major window hardware
              manufacturers used in Canadian homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {BRANDS.map(({ name, note }) => (
              <div
                key={name}
                className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-3 hover:border-accent/40 hover:shadow-sm transition-all"
              >
                <CheckCircle2
                  className="w-5 h-5 text-accent shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{name}</p>
                  <p className="text-gray-500 text-sm mt-0.5 leading-snug">{note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              <strong className="text-primary">Not sure which brand you have?</strong>{" "}
              Send us a close-up photo of your crank handle and mechanism.
              We will identify it for you.
            </p>
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center gap-2 mt-4 text-accent font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              Email a Photo: {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {/* ── Specific Hardware Pages ── */}
      <section className="py-8 px-4 md:px-8 bg-white border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-700 font-medium mb-3">Looking for a specific hardware type?</p>
          <Link
            href="/cranks/truth-hardware-crank-repair"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          >
            Truth Hardware (AmesburyTruth) Crank Repair
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ── What We Repair ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="repairs-heading">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Full Scope of Work
            </span>
            <h2 id="repairs-heading" className="text-3xl font-bold text-gray-900">
              What We Repair &amp; Replace
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {REPAIR_ITEMS.map(({ title, desc }) => (
              <div
                key={title}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-4 h-4 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1">{title}</h3>
                <p className="text-gray-500 text-sm leading-snug">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warranty ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="warranty-heading">
        <div className="max-w-3xl mx-auto text-center">
          <ShieldCheck className="w-12 h-12 text-accent mx-auto mb-4" aria-hidden="true" />
          <h2 id="warranty-heading" className="text-3xl font-bold text-gray-900 mb-4">
            1-Year Full Warranty on Crank Repairs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Every window crank repair is backed by a{" "}
            <strong className="text-primary">1-year full warranty covering parts and labour</strong>.
            If anything goes wrong with the repair within a year, we come back and fix it at no cost.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Excludes vandalism, impact damage, and physical breakage.
            Licensed and insured in Ontario.
          </p>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group shadow-sm"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronRight
                    className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform shrink-0 ml-4"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-label="Contact call to action">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/10 border border-accent/25 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
              Broken Crank? Let Us Fix It
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              Send us a photo of the handle and we will identify the part and
              give you a straight answer on cost and availability. No sales pitch,
              no surprise fees. Window hardware repair is part of our full{" "}
              <Link
                href="/window-repair-toronto"
                className="text-primary font-semibold hover:underline"
              >
                window repair
              </Link>{" "}
              service across the GTA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-md shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {PHONE}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
              >
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                Get a Written Quote
              </Link>
            </div>
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center gap-2 text-accent hover:underline font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded text-sm"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              {EMAIL}
            </a>
          </div>
        </div>
      </section>

      {WINTER_READY_ENABLED && (
        <section className="bg-accent/5 border-t border-accent/10 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <Snowflake className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
            <p className="text-gray-700">
              Getting ready for winter?{" "}
              <Link href="/winter-ready" className="text-accent font-semibold hover:underline">
                Book a $30 Winter Ready Inspection.
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Service Areas */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Window Crank Repair Across the GTA</h2>
          <p className="text-gray-600 leading-relaxed">
            We repair window cranks, hinges and operators in{" "}
            <Link href="/window-repair-toronto" className="text-primary font-semibold hover:underline">Toronto</Link>,{" "}
            <Link href="/window-repair-vaughan" className="text-primary font-semibold hover:underline">Vaughan</Link>,{" "}
            <Link href="/window-repair-mississauga" className="text-primary font-semibold hover:underline">Mississauga</Link>,{" "}
            <Link href="/window-repair-thornhill" className="text-primary font-semibold hover:underline">Thornhill</Link> and across the Greater Toronto Area. Most window hardware repairs are completed on the same day, on the first visit.{" "}
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to Fix Your Window Cranks?"
        subtitle="Same-day service available across the GTA. We carry the parts, you don't wait."
      />
    </>
  );
}
