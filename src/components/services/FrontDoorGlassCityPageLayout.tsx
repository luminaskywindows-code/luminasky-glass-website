import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, Shield, AlertTriangle, Droplets, Wind, ShieldAlert, Paintbrush } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { LocalCityContent } from "@/components/city/LocalCityContent";
import { generateCityServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import type { FrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";

const SIGNS_YOU_NEED_REPLACEMENT = [
  { text: "Cracked or broken glass in the door insert", icon: AlertTriangle },
  { text: "Fog, haze, or moisture between the panes", icon: Droplets },
  { text: "Drafts or cold spots around the glass panel", icon: Wind },
  { text: "Glass damaged by a break-in or impact", icon: ShieldAlert },
  { text: "An outdated design you want to refresh", icon: Paintbrush },
];

const PROCESS_STEPS = [
  {
    step: "Photo Quote",
    desc: "Send us a photo of your front door glass. We quote most jobs from photos alone, usually the same day.",
  },
  {
    step: "On-Site Measurement",
    desc: "We measure the glass opening at your door. No need to remove the door from the frame.",
  },
  {
    step: "Glass Ordered to Size",
    desc: "Your replacement glass is custom-ordered to fit your exact opening. Decorative, frosted, clear, or privacy options available.",
  },
  {
    step: "Installation",
    desc: "We remove the old insert and fit the new glass panel. The door stays on its hinges. Sealed for a weather-tight fit.",
  },
];

const UNIVERSAL_FAQS = [
  {
    q: "Is replacing the glass cheaper than replacing the whole door?",
    a: "Yes, in most cases. You keep your door, frame, and hardware. Only the glass panel is replaced.",
  },
  {
    q: "Can you match my existing decorative glass pattern?",
    a: "Yes. Send a photo of your current glass and we will match the design and dimensions.",
  },
  {
    q: "How long does front door glass replacement take?",
    a: "Installation is typically done in a single visit. Custom or decorative glass needs to be ordered to size, and the lead time depends on the design. We give you a clear timeline with your quote.",
  },
];

function generateSchemas(city: FrontDoorGlassCityPageData) {
  const pageUrl = `/front-door-glass-${city.slug}`;
  const allFaqs = [...UNIVERSAL_FAQS, city.citySpecificFaq];

  return [
    generateCityServiceSchema({
      name: `Front Door Glass Replacement in ${city.city}`,
      serviceType: "Front Door Glass Replacement",
      url: pageUrl,
      description: `Front door glass replacement in ${city.city}. LuminaSky replaces cracked, foggy, and outdated door glass inserts without replacing the door.`,
      city: city.city,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Front Door Glass", url: "/front-door-glass" },
      { name: city.city, url: pageUrl },
    ]),
    generateFAQSchema(allFaqs),
  ];
}

export function FrontDoorGlassCityPageLayout({ city }: { city: FrontDoorGlassCityPageData }) {
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
            <Link href="/front-door-glass" className="hover:text-white transition-colors">Front Door Glass</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-white font-medium">{city.city}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Front Door Glass Replacement in {city.city}
          </h1>

          <Link href="/warranty" className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors text-sm mt-2">
            <Shield className="w-4 h-4" aria-hidden="true" />
            <span>Backed by our <strong>5-Year Warranty</strong> on sealed glass units</span>
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
              Text Us a Photo
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
      <LocalCityContent citySlug={city.slug} type="front-door-glass" />

      {/* City-Specific Content */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Front Door Glass in {city.city}: What to Expect
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{city.uniqueContent}</p>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Signs Your {city.city} Door Glass Needs Replacing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SIGNS_YOU_NEED_REPLACEMENT.map((sign) => (
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

      {/* Our Process */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How We Replace Front Door Glass
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
            Front door glass replacement across all neighborhoods in {city.city}:
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
            Other Glass Services in {city.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: `/window-repair-${city.slug}`, title: "Window Repair", desc: "Broken panes, failed hardware, foggy sealed units, and crank mechanisms." },
              { href: `/foggy-glass-repair-${city.slug}`, title: "Foggy Glass Repair", desc: "Sealed unit replacement for windows with condensation between the panes." },
              { href: "/patio-door-repair", title: "Patio Door Repair", desc: "Rollers, tracks, handles, and glass replacement for sliding patio doors." },
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
            FAQ: Front Door Glass in {city.city}
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
            Get a Quote for Front Door Glass in {city.city}
          </h2>
          <p className="text-blue-100 text-lg mb-4 leading-relaxed">
            Send us a photo of your door glass and rough measurements. We quote most jobs from photos alone. No visit required, no obligation.
          </p>
          <p className="text-blue-300 text-xs mb-8">5-year warranty on sealed glass units. 2-year warranty on parts and labour.</p>
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
              Text Us a Photo
            </WhatsAppLink>
          </div>
        </div>
      </section>
    </>
  );
}
