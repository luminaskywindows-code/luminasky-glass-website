import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { XCircle, CheckCircle2, Phone, Mail } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE, PHONE_HREF, EMAIL, EMAIL_HREF } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window Crank, Hinge & Operator Repair Toronto | GTA Casement Specialists",
  description:
    "Broken window crank or stuck casement? LuminaSky stocks AmesburyTruth, Roto & more. Most repairs in 30 minutes, same-day across the Greater Toronto Area. Call 437-344-8490.",
  alternates: { canonical: "/cranks" },
};

const FAILURE_SIGNS = [
  "Handle spins freely without moving the window",
  "Requires excessive force to open or close",
  "Grinding or clicking sound when turning",
  "Won't pull the window sash tight against the frame",
  "Visible gap or draft when window is \"closed\"",
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

const FAILURE_CAUSES = [
  "Forced opening while lock is engaged - strips internal gears",
  "House settling or frame warping - misaligns the mechanism",
  "Freeze-thaw climate - causes rust and corrosion",
  "Lack of lubrication - gears seize from dirt and oxidation",
  "Normal wear after 15–20 years of daily use",
];

const DIY_TIPS = [
  {
    step: "1",
    title: "Annual lubrication",
    desc: "Spray silicone lubricant (not WD-40) on all moving parts",
  },
  {
    step: "2",
    title: "Track cleaning",
    desc: "Vacuum dirt and debris from window tracks quarterly",
  },
  {
    step: "3",
    title: "Weatherstripping check",
    desc: "Replace worn weatherstripping to reduce stress on locks",
  },
  {
    step: "4",
    title: "Never force",
    desc: "If a window won't close, call for service rather than forcing it",
  },
];

const FAQS = [
  {
    q: "How do I know which brand of hardware I have?",
    a: "Look for a stamped logo on the crank handle or hinge. If you can't find it, text us a close-up photo and we'll identify it - usually within an hour.",
  },
  {
    q: "Can I buy the part and install it myself?",
    a: "You can, but window hardware is tricky to install correctly. A misaligned operator will fail again quickly. Our service includes proper alignment and adjustment, so you're not back to square one in six months.",
  },
  {
    q: "Do you service commercial buildings?",
    a: "Yes. We handle office buildings, schools, and light commercial properties across the GTA.",
  },
  {
    q: "Do you service high-rise condos?",
    a: "Yes, we service condos and high-rise buildings throughout the GTA.",
  },
  {
    q: "How long does a typical crank repair take?",
    a: "Most repairs take 30 minutes or less on the first visit. If we have your part in stock - which is 90% of the time for AmesburyTruth hardware - we can often complete same-day.",
  },
  {
    q: "What if you can't identify my hardware from a photo?",
    a: "In rare cases with very old or discontinued hardware, we'll bring our parts catalogue on the visit and measure on-site. We've sourced hardware for windows going back 30+ years.",
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
                Window Crank, Hinge &amp; Operator Repair -{" "}
                <span className="text-accent-light">
                  GTA Casement &amp; Awning Specialists
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                A casement window with a crank that spins endlessly, a stiff
                awning that takes both hands to close, or a window that
                won&apos;t lock - these aren&apos;t &ldquo;replace the whole
                window&rdquo; problems. LuminaSky carries authentic{" "}
                <strong className="text-white">AmesburyTruth</strong> and{" "}
                <strong className="text-white">Roto</strong> operators, hinges,
                and locks, and our mobile technicians fix most casement and
                awning windows in{" "}
                <strong className="text-white">30 minutes or less</strong>, on
                the first visit, for a fraction of the cost of replacement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl shadow-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Book a Repair
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/60 text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  {PHONE}
                </a>
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
        </div>
      </section>

      {/* ── 5 Signs ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="signs-heading">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                Know the Warning Signs
              </span>
              <h2 id="signs-heading" className="text-3xl font-bold text-gray-900 mb-8 leading-tight">
                5 Signs Your Window Crank Needs Replacement
              </h2>
              <ul className="space-y-4" aria-label="Signs of window crank failure">
                {FAILURE_SIGNS.map((sign) => (
                  <li key={sign} className="flex items-start gap-3">
                    <XCircle
                      className="w-5 h-5 text-red-500 shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700 leading-relaxed">{sign}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-xl">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong className="text-primary">Seeing one or more of these?</strong>{" "}
                  Most are a quick fix. Text us a photo of your crank handle and
                  we&apos;ll give you a same-day diagnosis.
                </p>
              </div>
            </div>

            {/* Mobile image - shown below signs on small screens */}
            <div className="lg:hidden relative rounded-2xl overflow-hidden bg-gray-100 aspect-[4/3]">
              <Image
                src="/images/services/window-crank-door.jpg"
                alt="Old worn casement window crank and replacement hardware"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>

            {/* Repair vs Replace callout */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                The Smart Choice
              </span>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Repair Beats Replacement
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Full window replacement often requires interior trim removal,
                drywall patching, and repainting - a major disruption to your
                home.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Hardware repair typically takes{" "}
                <strong className="text-gray-900">30 minutes with no mess</strong>{" "}
                and no damage to your walls or trim.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Your existing window is structurally sound - it just needs the
                right replacement part and professional installation. We&apos;ll
                always tell you honestly if the frame is too damaged and
                replacement makes sense, but in{" "}
                <strong className="text-gray-900">90% of cases</strong>, a
                simple hardware fix solves the problem.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  { label: "Typical repair time", value: "30 min" },
                  { label: "Parts in stock", value: "90%" },
                  { label: "Mess left behind", value: "None" },
                  { label: "Walls or trim disturbed", value: "Never" },
                ].map(({ label, value }) => (
                  <div key={label} className="text-center p-3 bg-white rounded-xl border border-gray-200">
                    <div className="text-xl font-bold text-primary">{value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{label}</div>
                  </div>
                ))}
              </div>
            </div>
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
              Real hardware from a recent GTA job - same mechanism, transformed in under 30 minutes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/services/crank-before.jpg"
                  alt="Worn and rusty window crank mechanism before professional repair - stripped gears and corroded hardware"
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
                  alt="Brand new authentic window crank operator installed by LuminaSky - smooth operation restored"
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
                  Brand-new authentic operator installed and aligned. The window now opens, closes, and locks smoothly - no force required. Same-day repair, no mess, no wall damage.
                </p>
              </div>
            </div>
          </div>

          <p className="text-center mt-8 text-gray-500 text-sm font-medium">
            Most repairs completed in{" "}
            <span className="text-primary font-bold">30 minutes</span> on the first visit
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
              Send us a close-up photo of your crank handle and mechanism -
              we&apos;ll identify it within an hour.
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

      {/* ── What We Repair ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="repairs-heading">
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
                className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-accent/30 hover:bg-white hover:shadow-sm transition-all"
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

      {/* ── Failure Causes + DIY Tips (side by side) ── */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-label="Causes and maintenance">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Causes */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Root Causes
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Common Causes of Hardware Failure
            </h2>
            <ul className="space-y-3" aria-label="Common causes of window hardware failure">
              {FAILURE_CAUSES.map((cause) => (
                <li key={cause} className="flex items-start gap-3 text-gray-700">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{cause}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DIY Tips */}
          <div>
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Extend Hardware Life
            </span>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              DIY Maintenance Tips
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Between professional repairs, you can extend your window hardware
              life with these simple steps:
            </p>
            <div className="space-y-4">
              {DIY_TIPS.map(({ step, title, desc }) => (
                <div key={step} className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm">
                    {step}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{title}</p>
                    <p className="text-gray-500 text-sm mt-0.5 leading-snug">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Service ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="service-heading">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
            Availability
          </span>
          <h2 id="service-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Our Service
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {[
              { value: "Same-Day", label: "For AmesburyTruth parts in stock (90% of calls)" },
              { value: "3–5 Days", label: "For custom or rare parts (ordered on your behalf)" },
              { value: "GTA-Wide", label: "Residential, condo & light commercial" },
            ].map(({ value, label }) => (
              <div key={value} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-2xl font-bold text-primary mb-2">{value}</div>
                <p className="text-sm text-gray-500 leading-snug">{label}</p>
              </div>
            ))}
          </div>
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
          <Accordion className="space-y-3">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-white border border-gray-100 rounded-xl px-4 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── CTA Box ── */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-label="Contact call to action">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent/10 border border-accent/25 rounded-2xl p-8 md:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3 leading-tight">
              Spinning Crank? Send Us a Photo of the Handle
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
              We&apos;ll identify the part within the hour and give you a
              straight answer on cost and availability - no sales pitch, no
              surprise fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl shadow-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 active:scale-95"
              >
                Contact Us
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-8 py-4 rounded-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary active:scale-95"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call {PHONE}
              </a>
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

      <CTABanner
        title="Ready to Fix Your Window Cranks?"
        subtitle="Same-day service available across the GTA. We carry the parts - you don't wait."
      />
    </>
  );
}
