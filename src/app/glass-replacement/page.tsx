import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { PHONE_HREF } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Glass Replacement", url: "/glass-replacement" },
];

const GLASS_TYPES = [
  {
    title: "Double- and triple-pane sealed units (IGUs)",
    desc: "Cracked, broken, or failed and fogged. You can upgrade to Low-E or argon-filled glass at the same time.",
    link: { href: "/blog/double-vs-triple-pane-low-e-argon", text: "Double vs triple-pane: what to know" },
  },
  {
    title: "Single-pane glass",
    desc: "In older windows, storm windows, basement windows and cabinets.",
  },
  {
    title: "Tempered safety glass",
    desc: "Where code requires it: doors, sidelites, and glass near floors and bathrooms.",
  },
  {
    title: "Patio door glass",
    desc: "In sliding and swing patio door panels.",
    link: { href: "/patio-door-repair", text: "Patio door repair" },
  },
  {
    title: "Front door and sidelite glass",
    desc: "Decorative, frosted or clear.",
    link: { href: "/front-door-glass", text: "Front door glass" },
  },
  {
    title: "Skylight glass",
    desc: "Replacement glass for all skylight types.",
    link: { href: "/skylights", text: "Skylight repair" },
  },
  {
    title: "Storefront and commercial glass",
    desc: "Tempered safety glass for storefronts, offices and lobbies.",
    link: { href: "/commercial-glass-repair", text: "Commercial glass repair" },
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Send a photo",
    desc: "Text or WhatsApp a photo of the damage and the window, and most glass jobs can be quoted from the photo for free. If we need to see it in person, a site visit is $30, credited to your repair if you go ahead.",
  },
  {
    step: "2",
    title: "Get a written price",
    desc: "You approve the price before anything is ordered.",
  },
  {
    step: "3",
    title: "We measure and order",
    desc: "Every pane and sealed unit is made to the exact size of your opening, which takes 5-15 business days depending on glass type and size.",
  },
  {
    step: "4",
    title: "We install",
    desc: "On the second visit we remove the broken glass, install the new pane or unit, seal it and clean up. Most windows take under an hour each.",
  },
  {
    step: "5",
    title: "You get a warranty on the invoice",
    desc: "New sealed units carry a 5-year warranty against seal failure. All repair work carries a 2-year warranty on parts and labour.",
  },
];

const TRUST_POINTS = [
  "Licensed & insured in Ontario",
  "Written price before work",
  "2-year workmanship warranty",
  "5-Year Warranty on sealed glass units",
];

const FAQS = [
  {
    q: "Can you replace just the glass in a window?",
    a: "Yes. In most windows we replace only the glass, either a single pane or the sealed double/triple-pane unit, and keep the existing frame, sash and hardware. It’s faster and costs far less than a new window. We recommend full replacement only when the frame itself is damaged.",
  },
  {
    q: "How long does it take to replace a broken window pane?",
    a: "Glass is made to measure, so it takes two visits. We measure on the first one. The new glass takes 5-15 business days depending on type and size, and installation takes under an hour per window. If the opening isn’t safe in the meantime, we secure it the same day.",
  },
  {
    q: "Is a cracked window an emergency?",
    a: "A small crack in one pane of a double-pane unit usually isn’t urgent, but it will spread and the unit will lose its insulating seal. Glass that’s broken through, loose or in a door is a safety and security risk, so call us and we’ll secure it right away.",
  },
  {
    q: "Can I upgrade to energy-efficient glass when you replace it?",
    a: "Yes. When we replace a sealed unit, you can choose a Low-E coating, argon gas fill or, where the frame allows, triple-pane glass. It’s an affordable way to make an existing window more efficient.",
  },
  {
    q: "Do you replace glass in windows you didn’t install?",
    a: "Yes. We work on all brands and ages of windows. We measure your opening and have the glass made to fit.",
  },
  {
    q: "Is the new glass under warranty?",
    a: "Yes. New sealed units carry a 5-year warranty against seal failure (fogging and condensation between the panes). All repair work carries a 2-year warranty on parts and labour. Glass breakage is not covered.",
  },
];

export const metadata: Metadata = {
  title: { absolute: "Glass Replacement Toronto | LuminaSky Glass Services" },
  description:
    "Cracked or broken window glass? We replace the sealed unit and keep your frame. 5-Year Warranty on glass. Free photo quote. Call 437-344-8490.",
  alternates: { canonical: "/glass-replacement" },
  openGraph: {
    title: "Glass Replacement Toronto | LuminaSky Glass Services",
    description:
      "Cracked or broken window glass? We replace the sealed unit and keep your frame. 5-Year Warranty on glass. Free photo quote. Call 437-344-8490.",
    url: "/glass-replacement",
  },
};

export default function GlassReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            generateServiceSchema(
              "Window Glass Replacement",
              "/glass-replacement",
              "LuminaSky Glass Services replaces broken and cracked window glass across Toronto and the GTA, keeping your existing frame.",
              { minPrice: 300, maxPrice: 1400, priceDescription: "Glass replacement per sealed unit, varies by size and location." }
            ),
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

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Broken or Cracked Window Glass Replacement in Toronto
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                <strong>Glass replacement at LuminaSky costs a fraction of full window replacement because we keep your existing frame.</strong> We handle sealed units, decorative door glass, tempered and Low-E options, and specialty sizes. Standard turnaround is 5 to 15 days from measurement, we offer a 5-year warranty against seal failure on sealed glass units, plus a 2-year warranty on parts and labour for all repair work, and we service residential and commercial properties across the GTA. See our <Link href="/glass-replacement-cost-report-2026" className="text-accent-light font-semibold hover:text-white underline underline-offset-2">2026 GTA Cost Report</Link> for market pricing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Send a Photo for a Free Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call 437-344-8490
                </a>
              </div>
              <Link href="/warranty" className="inline-flex items-center gap-2 text-accent-light text-sm mt-4 hover:text-white transition-colors">
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" /></svg>
                5-Year Warranty on sealed glass
              </Link>
            </div>

            <div className="relative aspect-[4/3] max-h-[420px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/services/cracked-window-before.png"
                alt="Cracked window glass needing replacement in Toronto"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {TRUST_POINTS.map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Replace the Glass, Keep the Window */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="keep-window-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="keep-window-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Replace the Glass, Keep the Window
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When a window cracks, many companies quote the whole window. That&apos;s rarely necessary. The frame is the expensive part, and a frame that opens, closes and seals properly still has years left in it. We measure the opening, have the replacement glass made to size, and install it in your existing frame. The result looks and performs like the original, at a fraction of the cost of a full window replacement.
          </p>
          <p className="text-gray-600 leading-relaxed">
            <Link href="/blog/window-repair-vs-replacement-toronto" className="text-primary font-semibold hover:underline">
              Not sure which you need? Read Window Repair vs Replacement: Which One Do You Actually Need?
            </Link>
          </p>
        </div>
      </section>

      {/* What Glass We Replace */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="glass-types-heading">
        <div className="max-w-7xl mx-auto">
          <h2 id="glass-types-heading" className="text-3xl font-bold text-gray-900 mb-8">
            What Glass We Replace
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {GLASS_TYPES.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href} className="text-primary font-semibold hover:underline">
                        {item.link.text} &rarr;
                      </Link>
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Window Glass Replacement Works */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="process-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-gray-900 mb-8">
            How Window Glass Replacement Works
          </h2>
          <div className="space-y-6">
            {PROCESS_STEPS.map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0 text-white font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-red-50 border border-red-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">Cracked and can&apos;t wait?</h3>
            <p className="text-gray-600 leading-relaxed">
              If the glass is broken through, leaves an opening or is a security risk, we&apos;ll secure it the same day while the new glass is made.{" "}
              <Link href="/emergency-glass-repair" className="text-primary font-semibold hover:underline">
                Emergency glass repair &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* What Does Glass Replacement Cost? */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="cost-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="cost-heading" className="text-3xl font-bold text-gray-900 mb-6">
            What Does Glass Replacement Cost?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every window is different, so we quote per job. The price depends on the size of the pane, the glass type (single, double or triple-pane, Low-E, tempered) and how easy the window is to reach. What doesn&apos;t change: replacing the glass is a fraction of the cost of a full window replacement, because your frame, trim and interior finish stay in place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-md shadow transition-all"
            >
              Send a photo for a free quote
            </Link>
            <Link
              href="/window-repair-cost"
              className="inline-flex items-center justify-center border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-md transition-all"
            >
              What affects window repair cost? &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* When Glass Replacement Isn't the Right Fix */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="honesty-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="honesty-heading" className="text-3xl font-bold text-gray-900 mb-6">
            When Glass Replacement Isn&apos;t the Right Fix
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We&apos;ll tell you honestly. If the frame is rotted, warped or no longer seals, new glass in a failing frame is money wasted, and we&apos;ll say so. In that case we offer full window replacement with a written quote and no pressure.
          </p>
        </div>
      </section>

      {/* GTA coverage */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="areas-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="areas-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Cracked Window Glass Replacement Across the GTA
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We replace window glass across Toronto, North York, Scarborough, Etobicoke, Vaughan, Thornhill, Richmond Hill, Markham, Mississauga, Brampton, Oakville and the rest of the GTA.{" "}
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Window Glass Replacement FAQs
            </h2>
          </div>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden group"
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

      {/* Service Areas */}
      <section className="py-12 px-4 md:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Glass Replacement Across the GTA</h2>
          <p className="text-gray-600 leading-relaxed">
            We replace sealed glass units, single-pane glass and tempered safety glass in{" "}
            <Link href="/window-repair-vaughan" className="text-primary font-semibold hover:underline">Vaughan</Link>,{" "}
            <Link href="/window-repair-thornhill" className="text-primary font-semibold hover:underline">Thornhill</Link>,{" "}
            <Link href="/window-repair-richmond-hill" className="text-primary font-semibold hover:underline">Richmond Hill</Link>,{" "}
            <Link href="/window-repair-toronto" className="text-primary font-semibold hover:underline">Toronto</Link> and across the Greater Toronto Area.{" "}
            <Link href="/areas-we-serve" className="text-primary font-semibold hover:underline">
              See all areas we serve &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <CTABanner
        title="Replace the Glass, Not the Whole Window"
        subtitle="Send a photo for a free quote, or book a $30 site visit, credited to your repair."
      />
    </>
  );
}
