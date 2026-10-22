import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Phone, ChevronRight } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

const BREADCRUMBS = [
  { name: "Home", url: "/" },
  { name: "Services", url: "/services" },
  { name: "Emergency Glass Repair", url: "/emergency-glass-repair" },
];

const TRUST_POINTS = [
  "Available 24/7",
  "Fast response 24/7",
  "No after-hours surcharge",
  "Homes & businesses",
  "Licensed & insured",
];

const WHAT_TO_DO = [
  "Keep everyone away from the broken glass, especially children and pets. A cracked pane still in the frame can let go without warning.",
  "If it was a break-in, call the police and get a report number. Your insurer will ask for it.",
  "Photograph everything before cleaning up: wide shots and close-ups of the glass, the frame and any damage inside.",
  "Don’t push out or tape cracked glass. Leave it to us.",
];

const HOME_EMERGENCIES = [
  { text: "Broken or shattered window glass after storms, accidents or break-ins" },
  { text: "Smashed patio door glass", link: { href: "/patio-door-repair", text: "Patio door repair" } },
  { text: "Broken front door or sidelite glass", link: { href: "/front-door-glass", text: "Front door glass" } },
  { text: "Cracked skylights letting in water", link: { href: "/skylights", text: "Skylight repair" } },
];

const PROCESS_STEPS = [
  { step: "1", title: "Call or WhatsApp, 24/7", desc: "Reach us any time, any day." },
  { step: "2", title: "We secure the site", desc: "As quickly as possible, day or night: board-up, glass cleanup, and photos of the damage." },
  { step: "3", title: "Written price for permanent glass", desc: "You approve it before we order." },
  { step: "4", title: "New glass is made to measure", desc: "5-15 business days, then installed." },
  { step: "5", title: "Warranty and documentation", desc: "Itemized invoice, photos and measurements for your insurance claim." },
];

const FAQS = [
  {
    q: "Do you really answer at night and on weekends?",
    a: "Yes. We’re available 24/7, including nights, weekends and holidays. Call 437-344-8490 and you’ll reach us directly.",
  },
  {
    q: "Do you charge more for nights, weekends or holidays?",
    a: "No. Standard pricing applies to all after-hours and emergency work. There’s no surcharge for evenings, weekends or holidays.",
  },
  {
    q: "How fast can you get here?",
    a: "We’re available 24/7 and dispatch crews as soon as we hang up. Typical response time varies by location and conditions, and we’ll give you a realistic ETA when you call. For non-emergency repairs, same-day service is often available.",
  },
  {
    q: "Can you replace the glass the same night?",
    a: "No. Window and door glass is made to measure, so the first step is securing the opening with a proper board-up. The new glass takes 5-15 business days depending on type and size, and the board-up keeps the property secure and weather-tight until then.",
  },
  {
    q: "Will my insurance cover emergency glass repair?",
    a: "That depends on your policy. You handle the claim with your insurer, and we give you what you need for it: an itemized invoice, photos and measurements.",
  },
  {
    q: "Do you handle commercial and condo emergencies?",
    a: "Yes, including storefronts, office glass, lobby doors and condo common areas. Property managers can call us directly.",
  },
];

export const metadata: Metadata = {
  title: {
    absolute: "24/7 Emergency Glass Repair & Board-Up Toronto | LuminaSky",
  },
  description:
    "Broken window or storefront glass? We respond fast, 24/7, across the GTA and board up the opening, with no after-hours surcharge. Call 437-344-8490.",
  alternates: { canonical: "/emergency-glass-repair" },
  openGraph: {
    title: "24/7 Emergency Glass Repair & Board-Up Toronto | LuminaSky",
    description:
      "Broken window or storefront glass? We respond fast, 24/7, across the GTA and board up the opening, with no after-hours surcharge. Call 437-344-8490.",
    url: "/emergency-glass-repair",
  },
};

export default function EmergencyGlassRepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(BREADCRUMBS),
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Emergency Glass Repair",
              serviceType: "Emergency Glass Repair",
              provider: { "@id": "https://www.luminasky.com/#business" },
              url: "https://www.luminasky.com/emergency-glass-repair",
              description: "24/7 emergency glass repair and board-up service across Toronto and the GTA.",
              hoursAvailable: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "00:00",
                closes: "23:59",
              },
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
              24/7 Emergency Glass Repair and Board-Up in Toronto &amp; the GTA
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Broken glass can&apos;t wait until morning. We answer 24/7, any day, any time. We respond fast, 24/7, with crews dispatched day or night to secure the opening and clean up the glass, and there&apos;s no extra charge for nights, weekends or holidays.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95 text-lg"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
                Call Now: 437-344-8490
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-md transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
              >
                WhatsApp Us a Photo
              </a>
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

      {/* What to Do Right Now */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="what-to-do-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="what-to-do-heading" className="text-3xl font-bold text-gray-900 mb-8">
            What to Do Right Now (Before We Arrive)
          </h2>
          <ol className="space-y-4">
            {WHAT_TO_DO.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 text-red-600 font-bold text-sm">
                  {i + 1}
                </div>
                <p className="text-gray-600 leading-relaxed">{item}</p>
              </li>
            ))}
            <li className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center shrink-0 text-red-600 font-bold text-sm">
                5
              </div>
              <p className="text-gray-600 leading-relaxed">
                Call us. We&apos;ll secure the opening and give you the documentation you&apos;ll need for your insurance claim.{" "}
                <Link href="/insurance-claims" className="text-primary font-semibold hover:underline">
                  Insurance claim documentation &rarr;
                </Link>
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* Emergency Board-Up Service */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="board-up-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="board-up-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Board-Up Service
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            When the glass can&apos;t be replaced the same night, we board it up properly. Each board is cut to fit, fastened to the frame and sealed against weather and entry. We keep plywood stocked, so a board-up never has to wait for a supplier to open. While we&apos;re on site, we also measure for the permanent glass.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Emergency and after-hours work is priced at our standard rates, with no surcharge for evenings, weekends or holidays. You get the price before we start, even at 2 a.m.
          </p>
          <Link href="/window-repair-cost" className="text-primary font-semibold hover:underline">
            What affects the cost? &rarr;
          </Link>
        </div>
      </section>

      {/* Emergency Glass Repair for Homes */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="homes-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="homes-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Glass Repair for Homes
          </h2>
          <ul className="space-y-3">
            {HOME_EMERGENCIES.map((item) => (
              <li key={item.text} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-gray-600">
                  {item.text}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href} className="text-primary font-semibold hover:underline">
                        {item.link.text} &rarr;
                      </Link>
                    </>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Emergency Storefront and Commercial */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="commercial-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="commercial-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Storefront and Commercial Glass Repair
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            A broken storefront is a security, weather and liability problem. We respond day or night to board up the opening, then measure and order new tempered safety glass, which takes 5-15 business days depending on type and size. We also serve office lobbies, glass entry doors and condo common areas.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/commercial-glass-repair" className="text-primary font-semibold hover:underline">
              Commercial glass repair &rarr;
            </Link>
            <Link href="/blog/storefront-glass-emergency-board-up" className="text-primary font-semibold hover:underline">
              Storefront emergency guide &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* From Emergency to Permanent Repair */}
      <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="process-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="process-heading" className="text-3xl font-bold text-gray-900 mb-8">
            From Emergency to Permanent Repair
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
        </div>
      </section>

      {/* GTA coverage */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-labelledby="areas-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="areas-heading" className="text-3xl font-bold text-gray-900 mb-6">
            Emergency Glass Repair Across the GTA
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We cover Toronto, North York, Scarborough, Etobicoke, Vaughan, Woodbridge, Thornhill, Richmond Hill, Markham, Mississauga, Brampton, Oakville and the surrounding GTA.{" "}
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
              Emergency Glass Repair FAQs
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

      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 bg-red-600" aria-labelledby="final-cta-heading">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="final-cta-heading" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Broken Glass? Call Now. We&apos;re Up.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-red-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-md shadow-lg transition-all active:scale-95 text-lg"
            >
              <Phone className="w-6 h-6" aria-hidden="true" />
              Call 437-344-8490
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-red-600 font-semibold px-8 py-4 rounded-md transition-all active:scale-95"
            >
              WhatsApp a Photo
            </a>
          </div>
        </div>
      </section>

      {/* Sticky mobile call button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-red-600 shadow-[0_-4px_12px_rgba(0,0,0,0.15)]">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 text-white font-bold py-4 text-lg active:bg-red-700"
        >
          <Phone className="w-5 h-5" aria-hidden="true" />
          Call Now: 437-344-8490
        </a>
      </div>
    </>
  );
}
