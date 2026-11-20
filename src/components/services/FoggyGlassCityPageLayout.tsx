import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, Droplets, Thermometer, Eye, CloudRain, AlertTriangle, Shield } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { LocalCityContent } from "@/components/city/LocalCityContent";
import { generateCityServiceSchema, generateBreadcrumbSchema, generateFAQSchema, generateHowToSchema } from "@/lib/schema";
import type { FoggyGlassCityPageData } from "@/lib/foggy-glass-city-data";
import { NEARBY_CITIES } from "@/lib/nearby-cities";
import { ServiceTestimonials } from "@/components/shared/ServiceTestimonials";
import { CityAreaSection } from "@/components/city/CityAreaSection";
import { cityFaqs, cityProblems, cityCta, oneFor, pickFor } from "@/lib/city-variety";

const SEAL_FAILURE_EXPLANATION: string[][] = [
  [
    "A sealed glass unit is two or three panes held apart by a spacer around the edge and sealed shut. The gap is filled with dry air or argon, and a desiccant inside the spacer soaks up any moisture left from manufacturing.",
    "Heat and cold make the panes expand and shrink every day, and over the years that movement wears out the edge seal. Moist air gets in, the desiccant fills up, and condensation forms between the panes. From then on the fog will not clear by itself.",
    "The frame, sash and hardware are usually still fine. Only the sealed unit needs replacing, which costs a fraction of a new window.",
  ],
  [
    "Most sealed units last 10 to 25 years. South-facing windows get the most sun and heat, so they often fail sooner, sometimes in under 12 years.",
    "Argon, the gas used in most units, conducts heat about a third less than air. When the seal fails, the argon leaks out and damp air replaces it, so the window loses insulating value as well as clarity.",
    "Drilling and venting a foggy unit can clear it for a while, but it does not restore the seal or the gas. Replacing the unit in the existing frame is the fix that lasts.",
  ],
  [
    "The edge of a sealed unit holds everything together: the spacer, the sealant and the desiccant. Older units often used aluminum spacers, which conduct cold and can leave water or ice along the bottom of the glass.",
    "Once moisture gets past the seal and the desiccant is full, you see haze, droplets or white streaks between the panes. Wiping either side of the glass will not touch it.",
    "Newer units use warm-edge spacers and Low-E coatings, so a replacement often performs better than the original, in the same frame.",
  ],
];

const SEAL_FAILURE_SIGNS = [
  { text: "Persistent fog or haze between the panes that never clears", icon: CloudRain },
  { text: "Mineral streaks or 'rain marks' etched onto the inside surface", icon: Droplets },
  { text: "Visible moisture droplets between the glass", icon: Eye },
  { text: "Condensation returns within hours of wiping the outside dry", icon: AlertTriangle },
  { text: "The window feels colder to the touch in winter than nearby windows", icon: Thermometer },
];

const COST_CONTENT: string[][] = [
  [
    "The price depends on the size of the unit, the glass type and how easy the window is to reach. From a clear photo we can usually give you a range.",
    "On the $30 visit we measure and give you the exact price in writing, covering the glass, installation, clean-up and warranty. The $30 is credited back when you go ahead.",
  ],
  [
    "Small units cost less than large picture windows, and Low-E, tinted or grilled glass adds a little. Upper-floor windows can add access time.",
    "You get one written price after we measure, with nothing added later. The visit fee comes off the bill if you proceed.",
  ],
  [
    "Replacing the glass costs far less than a new window, because the frame, trim and walls stay as they are.",
    "Send a photo for a rough range, then we measure on site and put the exact price in writing before ordering anything.",
  ],
];



function generateSchemas(city: FoggyGlassCityPageData) {
  const pageUrl = `/foggy-glass-repair-${city.slug}`;
  const allFaqs = [...cityFaqs("foggy", city.slug), city.citySpecificFaq];

  return [
    generateCityServiceSchema({
      name: `Foggy Glass Repair in ${city.city}`,
      serviceType: "Foggy Glass Repair",
      url: pageUrl,
      description: `Foggy glass repair and sealed unit replacement in ${city.city}. LuminaSky replaces failed IGUs without full window replacement.`,
      city: city.city,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Foggy Glass Repair", url: "/foggy-windows" },
      { name: city.city, url: pageUrl },
    ]),
    generateFAQSchema(allFaqs),
    generateHowToSchema({
      name: `How Foggy Glass Repair Works in ${city.city}`,
      description: `Our step-by-step process for replacing foggy sealed glass units in ${city.city}.`,
      steps: [
        { name: "Send a Photo", text: "Text or WhatsApp a photo of your foggy window to 437-344-8490. We reply with a written quote range the same day." },
        { name: "Book a Site Visit", text: "Schedule a convenient time. Our $30 site visit fee is credited toward your repair." },
        { name: "Measurement and Quote", text: "A technician inspects the failed seal, takes exact measurements, and provides a written quote on the spot." },
        { name: "Glass Fabrication", text: "Your new sealed glass unit is custom-made to your exact measurements and specifications." },
        { name: "Installation", text: "We install the new sealed unit into your existing frame, verify the seal, and clean up. Covered 2 years on parts and labour, then up to 5 years on the glass." },
      ],
    }),
  ];
}

export function FoggyGlassCityPageLayout({ city }: { city: FoggyGlassCityPageData }) {
  const allFaqs = [...cityFaqs("foggy", city.slug), city.citySpecificFaq];
  const nearby = NEARBY_CITIES[city.slug] ?? [];

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
            <Link href="/foggy-windows" className="hover:text-white transition-colors">Foggy Glass Repair</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-white font-medium">{city.city}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Foggy Glass Repair in {city.city}
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
      <LocalCityContent citySlug={city.slug} type="foggy-windows" />

      <CityAreaSection citySlug={city.slug} city={city.city} service="foggy" />

      {/* City-Specific Content */}
      {city.uniqueContent && (
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Local Homeowners Should Know
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">{city.uniqueContent}</p>
          </div>
        </section>
      )}

      {/* Section 1: How Sealed Glass Unit Failure Works */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            How Sealed Glass Unit Failure Works
          </h2>
          {pickFor(SEAL_FAILURE_EXPLANATION.flat(), `foggy:why:${city.slug}`, 2).map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Section 2: Signs Your Window Seal Has Failed */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Signs Your Window Seal Has Failed
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cityProblems("foggy", city.slug).map((text, i) => ({ text, icon: SEAL_FAILURE_SIGNS[i % SEAL_FAILURE_SIGNS.length].icon })).map((sign) => (
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

      {/* Section 3: Neighborhoods */}
      <section className="bg-gray-50 py-12 md:py-16">
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
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Other Glass and Window Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { href: "/glass-replacement", title: "Glass Replacement", desc: "Cracked, broken or failed sealed units replaced to size." },
            { href: "/front-door-glass", title: "Front Door Glass", desc: "Decorative, frosted or clear glass inserts for entry doors." },
            { href: "/window-replacement", title: "Window Replacement", desc: "Full window replacement when repair is not the right option." },
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
      </section>

      {/* Section 4: Cost */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Foggy Glass Repair Cost
          </h2>
          {pickFor(COST_CONTENT.flat(), `foggy:cost:${city.slug}`, 1).map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4 last:mb-0">
              {p}
            </p>
          ))}
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            {oneFor(["For a full breakdown of what drives repair pricing, see our", "Typical prices for common window sizes are in our", "To compare prices by size and glass type, check our"], `fcost:${city.slug}`)}{" "}
            <Link href="/window-repair-cost" className="text-primary font-semibold hover:underline">window repair cost guide</Link>.
          </p>
        </div>
      </section>

      <ServiceTestimonials service="foggy-windows" seed={city.slug} />

      {/* Section 5: FAQ */}
      <section className="bg-gray-50 py-12 md:py-16">
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

      {/* Nearby areas */}
      {nearby.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">
            We Also Serve Nearby
          </h2>
          <div className="flex flex-wrap gap-2">
            {nearby.map((n) => (
              <Link
                key={n.slug}
                href={`/foggy-glass-repair-${n.slug}`}
                className="inline-flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                {n.city}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get a Quote for Foggy Glass Repair in {city.city}
          </h2>
          <p className="text-blue-100 text-lg mb-4 leading-relaxed">
            {cityCta("foggy", city.slug, city.city, city.neighborhoods)}
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
