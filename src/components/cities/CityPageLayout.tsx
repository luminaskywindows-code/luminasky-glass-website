import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, MessageCircle, Star, ChevronRight, Wrench } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, SITE_URL, COMPANY_NAME } from "@/lib/constants";
import type { CityPageData } from "@/lib/city-pages-data";

function generateCitySchema(city: CityPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: PHONE,
    areaServed: {
      "@type": "City",
      name: city.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: city.region,
      },
    },
    makesOffer: city.services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.name,
        url: `${SITE_URL}${s.href}`,
      },
    })),
  };
}

function generateCityBreadcrumbSchema(city: CityPageData) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Areas We Serve", item: `${SITE_URL}/areas-we-serve` },
      { "@type": "ListItem", position: 3, name: city.city, item: `${SITE_URL}/window-repair-${city.slug}` },
    ],
  };
}

function generateCityFAQSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function CityPageLayout({ city }: { city: CityPageData }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCitySchema(city)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityBreadcrumbSchema(city)) }}
      />
      {city.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateCityFAQSchema(city.faqs)) }}
        />
      )}

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-blue-200 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link href="/areas-we-serve" className="hover:text-white transition-colors">Areas We Serve</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-white font-medium">{city.city}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 text-balance">{city.heroHeadline}</h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed mb-8">
            {city.heroSubtext}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition-colors"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-green-600 transition-colors"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Text Us a Photo
            </a>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="max-w-3xl">
          {city.intro.map((p, i) => (
            <p key={i} className="text-gray-600 text-lg leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            What We Fix in {city.city}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-primary/20 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Wrench className="w-5 h-5 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-primary transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Recent Work in {city.city}
        </h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {city.featuredProject.mediaType === "video" &&
            city.featuredProject.beforeVideo &&
            city.featuredProject.afterVideo ? (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <video
                  src={city.featuredProject.beforeVideo.src}
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label={city.featuredProject.beforeVideo.alt}
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <video
                  src={city.featuredProject.afterVideo.src}
                  muted
                  loop
                  playsInline
                  controls
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label={city.featuredProject.afterVideo.alt}
                />
                <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10">
                  After
                </span>
              </div>
            </div>
          ) : city.featuredProject.beforeImage && city.featuredProject.afterImage ? (
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <Image
                  src={city.featuredProject.beforeImage.src}
                  alt={city.featuredProject.beforeImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10">
                  Before
                </span>
              </div>
              <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
                <Image
                  src={city.featuredProject.afterImage.src}
                  alt={city.featuredProject.afterImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wide px-2.5 py-1 rounded-full shadow z-10">
                  After
                </span>
              </div>
            </div>
          ) : city.featuredProject.image ? (
            <div className="relative aspect-[4/3] bg-gray-200 overflow-hidden">
              <Image
                src={city.featuredProject.image.src}
                alt={city.featuredProject.image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          ) : null}
          <div className="p-6">
            <h3 className="font-bold text-gray-900 text-lg mb-2">{city.featuredProject.title}</h3>
            <p className="text-gray-500 leading-relaxed">{city.featuredProject.description}</p>
          </div>
        </div>
      </section>

      {/* Review */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="text-gray-700 text-lg md:text-xl leading-relaxed italic mb-4">
            &ldquo;{city.review.text}&rdquo;
          </blockquote>
          <p className="font-semibold text-gray-900">{city.review.name}</p>
          <p className="text-gray-500 text-sm">{city.review.service} · Google Review</p>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Areas We Cover in {city.city}
        </h2>
        <p className="text-gray-500 mb-6 max-w-2xl">
          We serve all neighborhoods across {city.city} and surrounding areas. Same-day or next-day
          service available throughout:
        </p>
        <div className="flex flex-wrap gap-2">
          {city.neighborhoods.map((n) => (
            <span
              key={n}
              className="inline-flex items-center gap-1.5 bg-gray-100 text-gray-700 text-sm font-medium px-4 py-2 rounded-full"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              {n}
            </span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      {city.faqs.length > 0 && (
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 md:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions — {city.city}
            </h2>
            <div className="space-y-4">
              {city.faqs.map((faq, i) => (
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
      )}

      {/* CTA */}
      <section className="bg-primary text-white py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Get a Free Quote in {city.city}
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">{city.closingCTA}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-50 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-green-600 transition-colors text-lg"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Text Us a Photo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
