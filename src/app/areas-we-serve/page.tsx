import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ChevronRight, Phone, MessageCircle } from "lucide-react";
import { PHONE, PHONE_HREF, WHATSAPP_HREF, COMPANY_NAME } from "@/lib/constants";
import { CITY_PAGES } from "@/lib/city-pages-data";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Areas We Serve | Window & Door Repair Across the GTA",
  description:
    "LuminaSky Glass serves Vaughan, Thornhill, Richmond Hill, Markham, North York, Scarborough, and the entire GTA. Fast, affordable window and glass repair — available 24/7.",
  alternates: { canonical: "/areas-we-serve" },
};

export default function AreasWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Areas We Serve", url: "/areas-we-serve" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-primary to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24">
          <nav className="flex items-center gap-1.5 text-blue-200 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-white font-medium">Areas We Serve</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Window & Door Repair Across the GTA
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-3xl leading-relaxed">
            {COMPANY_NAME} provides fast, affordable glass and window repair throughout the Greater
            Toronto Area. Click your city below to see the services we offer near you.
          </p>
        </div>
      </section>

      {/* City Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CITY_PAGES.map((city) => (
            <Link
              key={city.slug}
              href={`/window-repair-${city.slug}`}
              className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-gray-900 text-lg group-hover:text-primary transition-colors">
                    {city.city}
                  </h2>
                  <p className="text-gray-500 text-sm">{city.region}</p>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed line-clamp-2">
                    {city.heroSubtext}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Don&apos;t See Your City?
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            We serve the entire GTA and surrounding areas. Call or text us — if we can get to you,
            we will.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-blue-700 transition-colors text-lg"
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
