import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, ShieldCheck, Wrench, Settings, AlertTriangle, Lock } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { LocalCityContent } from "@/components/city/LocalCityContent";
import { generateCityServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import type { CranksCityPageData } from "@/lib/cranks-city-data";

const COMMON_PROBLEMS = [
  { text: "Crank handle spins but window does not move", icon: Settings },
  { text: "Handle snapped off or broken", icon: AlertTriangle },
  { text: "Window stuck open or will not close fully", icon: Lock },
  { text: "Gears grinding or making noise", icon: Wrench },
];

const PROCESS_STEPS = [
  {
    step: "Send a Photo",
    desc: "Snap a photo of the broken crank and send it by text or WhatsApp. We identify the part and let you know what to expect.",
  },
  {
    step: "$30 Visit with Written Quote",
    desc: "Our technician visits, inspects the hardware on the spot, and gives you a written quote before starting any work.",
  },
  {
    step: "$30 Credited Back",
    desc: "The visit fee is applied directly to the cost of your repair. If you go ahead, the visit is on us.",
  },
  {
    step: "Repair on the Spot",
    desc: "Most crank repairs are completed during the same visit. We carry common operators and handles on our truck.",
  },
];

const UNIVERSAL_FAQS = [
  {
    q: "How much does a window crank repair cost?",
    a: "It depends on the operator type and how many windows need repair. We give you a written quote on-site before starting any work. The $30 visit fee is credited back if you proceed.",
  },
  {
    q: "Can you fix a crank if the handle broke off?",
    a: "Usually, yes. If the operator gears are still sound, a new handle is all you need. If the gears are stripped, we replace the full mechanism.",
  },
  {
    q: "Do you repair both casement and awning window cranks?",
    a: "Yes. We carry operators for both casement and awning windows. They use different mechanisms, and we stock both types.",
  },
];

function generateSchemas(city: CranksCityPageData) {
  const pageUrl = `/window-crank-repair-${city.slug}`;
  const allFaqs = [...UNIVERSAL_FAQS, city.citySpecificFaq];

  return [
    generateCityServiceSchema({
      name: `Window Crank Repair in ${city.city}`,
      serviceType: "Window Crank Repair",
      url: pageUrl,
      description: `Window crank repair in ${city.city}. LuminaSky replaces broken casement and awning window operators on-site.`,
      city: city.city,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Window Cranks", url: "/cranks" },
      { name: city.city, url: pageUrl },
    ]),
    generateFAQSchema(allFaqs),
  ];
}

export function CranksCityPageLayout({ city }: { city: CranksCityPageData }) {
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
          <nav className="flex items-center gap-1.5 text-blue-200 text-sm mb-6 flex-wrap" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <Link href="/cranks" className="hover:text-white transition-colors">Window Cranks</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-white font-medium">{city.city}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Window Crank Repair in {city.city}
          </h1>

          <Link href="/warranty" className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors text-sm mt-2">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>Backed by our <strong>1-Year Warranty</strong> on crank repairs</span>
          </Link>

          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-3 rounded-md shadow hover:shadow-lg transition-all"
            >
              Get a Quote
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-md shadow hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <WhatsAppLink
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-md shadow hover:bg-green-600 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Send a Photo
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-gray-600 text-lg leading-relaxed">{city.intro}</p>
        </div>
      </section>

      {/* Local City Content */}
      <LocalCityContent citySlug={city.slug} type="cranks" />

      {/* City-Specific Content */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Window Cranks in {city.city}: What We See
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{city.uniqueContent}</p>
        </div>
      </section>

      {/* Common Problems */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Common Crank Problems in {city.city}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMMON_PROBLEMS.map((problem) => (
            <div
              key={problem.text}
              className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5"
            >
              <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center shrink-0">
                <problem.icon className="w-5 h-5 text-orange-500" aria-hidden="true" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{problem.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How Crank Repair Works
          </h2>
          <div className="space-y-6">
            {PROCESS_STEPS.map((item, i) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.step}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Neighborhoods We Serve in {city.city}
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl">
            Window crank repair across all neighborhoods in {city.city}:
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

      {/* Related Services */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Other Window Services in {city.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: `/window-repair-${city.slug}`, title: "Window Repair", desc: "Broken panes, failed hardware, foggy sealed units, and full window assessments." },
              { href: `/foggy-glass-repair-${city.slug}`, title: "Foggy Glass Repair", desc: "Sealed unit replacement for windows with condensation between the panes." },
              { href: `/front-door-glass-${city.slug}`, title: "Front Door Glass", desc: "Decorative, frosted, and clear glass inserts for entry doors." },
            ].map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-primary/30 transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1 text-sm">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            FAQ: Window Crank Repair in {city.city}
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
            Get Your {city.city} Window Cranks Fixed
          </h2>
          <p className="text-blue-100 text-lg mb-4 leading-relaxed">
            Send us a photo of the broken crank. We identify the part and give you a clear price. $30 visit fee credited back when you proceed.
          </p>
          <p className="text-blue-300 text-xs mb-8">1-year warranty on all crank repairs.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <WhatsAppLink
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-md shadow-lg hover:bg-green-600 transition-colors text-lg cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Send a Photo
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
