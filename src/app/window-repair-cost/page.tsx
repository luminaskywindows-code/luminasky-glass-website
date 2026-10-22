import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE_HREF, SITE_URL } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Window Repair Cost", url: "/window-repair-cost" },
];

const COST_FACTORS = [
  { title: "Size of the glass", desc: "Larger panes and sealed units cost more to make, and big units need two people to install." },
  { title: "Glass type", desc: "Single-pane, double or triple-pane, Low-E coatings, argon fill, tempered or laminated safety glass. Some glass types are required by building code for doors and glass near floors." },
  { title: "Hardware", desc: "Common crank operators, hinges and locks are carried on our trucks. Discontinued or specialty parts may need to be sourced or adapted." },
  { title: "Accessibility", desc: "A ground-floor window is quicker than a second-storey window, a condo balcony, or a window that has to be worked on from inside." },
  { title: "Number of windows", desc: "Fixing several windows in one visit lowers the cost per window." },
  { title: "Urgency", desc: "If the opening needs to be secured first, the emergency board-up is part of the job. We don’t charge extra for evenings, weekends or holidays." },
];

const REPAIR_ADVANTAGES = [
  { title: "It saves the frame", desc: "The frame is the most expensive part of a window. When only the glass or hardware has failed, a sound frame doesn’t need to go." },
  { title: "No drywall, trim or exterior work", desc: "A full replacement means removing the old window, then re-insulating, re-trimming and often patching drywall, paint and exterior cladding. A repair leaves all of that untouched." },
  { title: "It’s faster", desc: "Most hardware repairs are done on the first visit. A glass repair takes under an hour per window once the glass is made, with no half-day tear-out." },
  { title: "You replace only what failed", desc: "Fogged glass gets a new sealed unit; a stripped crank gets a new operator. You don’t pay for parts that still work." },
];

const FAQS = [
  {
    q: "Is it cheaper to repair or replace a window?",
    a: "When the frame is in good condition, repair is almost always cheaper, typically a fraction of the cost of a full window replacement, because the frame, trim and interior finish stay in place. Replacement makes sense when the frame is rotted, warped or no longer seals.",
  },
  {
    q: "Why don’t you publish prices?",
    a: "Because every window is different. Glass size, type, hardware and access change the price, so a list would be wrong for most homes. We quote each job individually, free from a photo, and give you a written price before any work.",
  },
  {
    q: "How much does it cost to get a quote?",
    a: "Photo quotes are free. If we need to see the window in person, the site visit is $30 and is credited back to you if you go ahead with the repair.",
  },
  {
    q: "Will the price change after you start?",
    a: "No. You get a written estimate before any work begins, and nothing is done without your approval.",
  },
  {
    q: "Do you charge more for evenings, weekends or emergencies?",
    a: "No. Standard pricing applies to all after-hours and emergency work, with no surcharge for evenings, weekends or holidays.",
  },
  {
    q: "How can I keep the cost down?",
    a: "Fix problems early, before a crack spreads or a worn crank strips the frame. Group several windows into one visit, and send clear photos so we can quote accurately without a site visit.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "Window Repair Cost Toronto: What Affects Price | LuminaSky",
  },
  description:
    "What does window repair cost in Toronto? What drives the price, why repair costs far less than replacement, and how to get a free, written quote.",
  alternates: { canonical: "/window-repair-cost" },
  openGraph: {
    title: "Window Repair Cost Toronto: What Affects Price | LuminaSky",
    description:
      "What does window repair cost in Toronto? What drives the price, why repair costs far less than replacement, and how to get a free, written quote.",
    url: "/window-repair-cost",
  },
};

export default function WindowRepairCostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How Much Does Window Repair Cost in Toronto?",
              description: "What drives window repair cost in Toronto, why repair costs far less than replacement, and how to get a free, written quote.",
              url: `${SITE_URL}/window-repair-cost`,
              image: `${SITE_URL}/og-image.jpg`,
              datePublished: "2026-10-22",
              dateModified: "2026-10-22",
              author: {
                "@type": "Person",
                name: "Dan",
              },
              publisher: { "@id": `${SITE_URL}/#business` },
              mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/window-repair-cost` },
            },
            generateFAQSchema(FAQS),
          ]),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto">
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

          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              How Much Does Window Repair Cost in Toronto?
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Window repair in Toronto typically costs much less than you&apos;d expect, and a fraction of the cost of a full window replacement. The price depends on what&apos;s broken (glass, sealed unit or hardware), the size and type of glass, and access. We quote per job, free from a photo, with a written price before any work.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Quote Per Job */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="per-job-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="per-job-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Why We Quote Per Job
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Two windows that look the same can need very different repairs. A foggy pane might be a standard double-pane unit or a large Low-E triple-pane one. A stiff crank might need lubrication or a new operator. A published price list would be wrong for most homes, so we quote each job individually from a photo or a short visit, and the price you approve is the price you pay.
          </p>
        </div>
      </section>

      {/* What Affects Window Repair Cost */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="factors-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="factors-heading" className="text-3xl font-bold text-gray-900 mb-8">
            What Affects Window Repair Cost
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {COST_FACTORS.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Repair Costs Less Than Replacement */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="repair-vs-replace-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="repair-vs-replace-heading" className="text-3xl font-bold text-gray-900 mb-8">
            Why Repair Costs Less Than Replacement
          </h2>
          <div className="space-y-4">
            {REPAIR_ADVANTAGES.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-bold text-gray-900">{item.title}.</span>{" "}
                  <span className="text-gray-600">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-600 leading-relaxed mt-6">
            When a frame is rotted, warped or no longer seals, replacement is the right call, and we&apos;ll tell you so.{" "}
            <Link href="/window-replacement" className="text-primary font-semibold hover:underline">Window replacement</Link>
            {" | "}
            <Link href="/blog/window-repair-vs-replacement-toronto" className="text-primary font-semibold hover:underline">
              Window repair vs replacement guide
            </Link>
          </p>
        </div>
      </section>

      {/* How We Quote */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="quote-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="quote-heading" className="text-3xl font-bold text-gray-900 mb-6">
            How We Quote
          </h2>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Free photo quote.</strong> Text or WhatsApp a photo of the window and the problem. Most jobs can be quoted from photos at no charge.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">$30 site visit, if needed.</strong> If we need to see the window in person, the visit is $30, credited back to you if the work goes ahead.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Written estimate before any work.</strong> You get a written price and nothing starts without your approval. The price doesn&apos;t change at the door.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg transition-all"
            >
              Send a Photo for a Free Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-md transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call 437-344-8490
            </a>
          </div>
        </div>
      </section>

      {/* Foggy Window Repair Cost */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="foggy-cost-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="foggy-cost-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Foggy Window Repair Cost
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Fog between the panes means the sealed unit has failed. Cleaning or &ldquo;defogging&rdquo; can&apos;t reach inside the unit, so the lasting fix is a new sealed unit in your existing frame. It costs a fraction of a new window, because the frame, trim and interior finish stay in place, and new units carry a 3-year warranty against fogging.{" "}
            <Link href="/foggy-windows" className="text-primary font-semibold hover:underline">Foggy glass repair</Link>
            {" | "}
            <Link href="/blog/why-windows-fog-between-panes" className="text-primary font-semibold hover:underline">Why windows fog between panes</Link>
          </p>
        </div>
      </section>

      {/* Window Crank Repair Cost */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="crank-cost-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="crank-cost-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Window Crank Repair Cost
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A stripped or broken casement crank is one of the most affordable window repairs. It&apos;s usually fixed on the first visit with parts from our truck, and it comes with a 1-year warranty on parts and labour.{" "}
            <Link href="/cranks" className="text-primary font-semibold hover:underline">Window crank repair &rarr;</Link>
          </p>
        </div>
      </section>

      {/* Broken Window Glass Cost */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="broken-cost-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="broken-cost-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Broken Window Glass Cost
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The cost of replacing a cracked or broken pane depends mainly on its size and glass type. Single-pane, sealed double or triple-pane, and tempered glass are each made to measure.{" "}
            <Link href="/glass-replacement" className="text-primary font-semibold hover:underline">Glass replacement &rarr;</Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Window Repair Cost FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden group"
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

      <CTABanner
        title="Get a Free Quote for Your Window Repair"
        subtitle="Send a photo for a free quote, or book a $30 site visit, credited to your repair."
      />
    </>
  );
}
