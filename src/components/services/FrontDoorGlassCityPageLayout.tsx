import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, Shield, AlertTriangle, Droplets, Wind, ShieldAlert, Paintbrush } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { LocalCityContent } from "@/components/city/LocalCityContent";
import { generateCityServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { NEARBY_CITIES } from "@/lib/nearby-cities";
import type { FrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";
import { ServiceTestimonials } from "@/components/shared/ServiceTestimonials";
import { CityAreaSection } from "@/components/city/CityAreaSection";
import { cityFaqs, cityProcess, cityProblems, cityCta, oneFor } from "@/lib/city-variety";

const VALID_SLUGS = new Set([
  "toronto", "mississauga", "vaughan", "thornhill", "richmond-hill",
  "markham", "brampton", "oakville", "burlington", "hamilton",
  "newmarket", "aurora", "pickering", "oshawa", "scarborough",
]);

const SIGNS_YOU_NEED_REPLACEMENT = [
  { text: "Cracked or broken glass in the door insert", icon: AlertTriangle },
  { text: "Fog, haze, or moisture between the panes", icon: Droplets },
  { text: "Drafts or cold spots around the glass panel", icon: Wind },
  { text: "Glass damaged by a break-in or impact", icon: ShieldAlert },
  { text: "An outdated design you want to refresh", icon: Paintbrush },
];



function generateSchemas(city: FrontDoorGlassCityPageData) {
  const pageUrl = `/front-door-glass-${city.slug}`;
  const allFaqs = [...cityFaqs("front-door", city.slug), city.citySpecificFaq];

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
  const allFaqs = [...cityFaqs("front-door", city.slug), city.citySpecificFaq];
  const nearby = (NEARBY_CITIES[city.slug] ?? []).filter(n => VALID_SLUGS.has(n.slug));

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
            <span>Glass backed by <strong>2 years parts and labour</strong>, up to 5 years on the glass</span>
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

      <CityAreaSection citySlug={city.slug} city={city.city} service="front-door" />

      {/* City-Specific Content */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What to Expect
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{city.uniqueContent}</p>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Signs Your Door Glass Needs Replacing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cityProblems("front-door", city.slug).map((text, i) => ({ text, icon: SIGNS_YOU_NEED_REPLACEMENT[i % SIGNS_YOU_NEED_REPLACEMENT.length].icon })).map((sign) => (
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
            {cityProcess("front-door", city.slug).map((item, i) => (
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
            Areas We Serve in {city.city}
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl">
            {oneFor(["We cover every neighbourhood below and the streets around them.", "These are the neighbourhoods we visit most, plus everything in between.", "Our crews work across all of these areas and the surrounding streets.", "If your street is near one of these, we cover it."], `serve:${city.slug}`)}
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
            Other Glass Services Nearby
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

      <ServiceTestimonials service="front-door-glass" seed={city.slug} />

      {/* FAQ */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {allFaqs.map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden group"
              >
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-gray-900 hover:text-primary transition-colors list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <ChevronRight className="w-5 h-5 text-gray-500 group-open:rotate-90 transition-transform shrink-0 ml-4" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-4 text-gray-600 leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* We Also Serve Nearby */}
      {nearby.length > 0 && (
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              We Also Serve Nearby
            </h2>
            <div className="flex flex-wrap gap-2">
              {nearby.map((n) => (
                <Link
                  key={n.slug}
                  href={`/front-door-glass-${n.slug}`}
                  className="inline-flex items-center gap-1.5 bg-white text-gray-700 text-sm font-medium px-4 py-2 rounded-full border border-gray-200 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                  {n.city}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get a Quote for Front Door Glass in {city.city}
          </h2>
          <p className="text-blue-100 text-lg mb-4 leading-relaxed">
            {cityCta("front-door", city.slug, city.city, city.neighborhoods)}
          </p>
          <p className="text-blue-300 text-xs mb-8">Glass: 2 years parts and labour, then up to 5 years on the glass.</p>
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
