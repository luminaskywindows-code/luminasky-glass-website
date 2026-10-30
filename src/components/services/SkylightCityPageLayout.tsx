import Link from "next/link";
import { MapPin, Phone, MessageCircle, ChevronRight, ShieldCheck, Droplets, Wrench, CloudRain, Sun } from "lucide-react";
import { PHONE, PHONE_HREF } from "@/lib/constants";
import { WhatsAppLink } from "@/components/layout/WhatsAppLink";
import { LocalCityContent } from "@/components/city/LocalCityContent";
import { generateCityServiceSchema, generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import type { SkylightCityPageData } from "@/lib/skylight-city-data";

const COMMON_PROBLEMS = [
  { text: "Active leaks during rain or snowmelt", icon: CloudRain },
  { text: "Condensation or fog trapped between the glass panes", icon: Droplets },
  { text: "Cracked, chipped or shattered skylight glass", icon: Sun },
  { text: "Failed flashing, worn sealant, or hardware that won't open or close", icon: Wrench },
];

const PROCESS_STEPS = [
  {
    step: "Send Photos",
    desc: "A few photos from inside and one from outside (if safe to take) tell us most of what we need. We quote from photos at no charge.",
  },
  {
    step: "Written Quote",
    desc: "You get a written price covering glass, labour, materials and warranty. If an in-person look is needed, the visit is $30, credited back if the work goes ahead.",
  },
  {
    step: "Measure and Order",
    desc: "We measure the skylight and order a new sealed glass unit made to size. Standard sizes are often in stock; custom glass takes 5-15 business days.",
  },
  {
    step: "Install and Leak-Test",
    desc: "We install the glass or complete the repair, leak-test the skylight from the roof, and clean up. Every job carries a warranty on your invoice.",
  },
];

const UNIVERSAL_FAQS = [
  {
    q: "Can you fix a skylight without replacing the whole unit?",
    a: "In most cases, yes. If the frame is sound, we replace only the sealed glass unit or fix the flashing and seals. Full skylight replacement is only needed when the frame is rotted or structurally damaged.",
  },
  {
    q: "What does skylight repair cost?",
    a: "It depends on the problem, the size and type of skylight, and how accessible the roof is. Sealant and flashing repairs cost less than glass replacement, and glass replacement costs far less than replacing the entire skylight. We quote per job from photos.",
  },
  {
    q: "What warranty do you offer on skylight repair?",
    a: "New sealed glass units carry a 5-year warranty against seal failure. All repair work (flashing, sealant, hardware, labour) comes with a 2-year warranty on parts and labour.",
  },
];

function generateSchemas(city: SkylightCityPageData) {
  const pageUrl = `/skylight-repair-${city.slug}`;
  const allFaqs = [...UNIVERSAL_FAQS, city.citySpecificFaq];

  return [
    generateCityServiceSchema({
      name: `Skylight Repair in ${city.city}`,
      serviceType: "Skylight Repair",
      url: pageUrl,
      description: `Skylight repair in ${city.city}. Leak repair, glass replacement, flashing, seals and emergency service by LuminaSky.`,
      city: city.city,
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: "Skylights", url: "/skylights" },
      { name: city.city, url: pageUrl },
    ]),
    generateFAQSchema(allFaqs),
  ];
}

export function SkylightCityPageLayout({ city }: { city: SkylightCityPageData }) {
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
            <Link href="/skylights" className="hover:text-white transition-colors">Skylights</Link>
            <ChevronRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <span className="text-white font-medium">{city.city}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
            Skylight Repair in {city.city}
          </h1>

          <Link href="/warranty" className="inline-flex items-center gap-2 text-accent-light hover:text-white transition-colors text-sm mt-2">
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            <span>5-Year Warranty on sealed glass, 2-Year on parts &amp; labour</span>
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
      <LocalCityContent citySlug={city.slug} type="skylights" />

      {/* City-Specific Content */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Skylights in {city.city}: What We See
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">{city.uniqueContent}</p>
        </div>
      </section>

      {/* Common Problems */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Common Skylight Problems in {city.city}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {COMMON_PROBLEMS.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" aria-hidden="true" />
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            How Skylight Repair Works
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
            Areas We Serve in {city.city}
          </h2>
          <p className="text-gray-500 mb-6 max-w-2xl">
            Skylight repair across all areas in {city.city}:
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
            Other Services in {city.city}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { href: `/window-repair-${city.slug}`, title: "Window Repair", desc: "Broken panes, failed seals, hardware and balance repairs." },
              { href: `/foggy-glass-repair-${city.slug}`, title: "Foggy Glass Repair", desc: "Sealed unit replacement for windows with condensation between the panes." },
              { href: `/front-door-glass-${city.slug}`, title: "Front Door Glass", desc: "Glass inserts for residential entry doors." },
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
            FAQ: Skylight Repair in {city.city}
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
            Need Skylight Repair in {city.city}?
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            Send us a few photos and we&#39;ll quote the job, usually the same day. For active leaks, call us 24/7.
          </p>
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
