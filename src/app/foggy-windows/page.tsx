import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Snowflake } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { FOGGY_WINDOWS } from "@/lib/services-data";
import { FOGGY_GLASS_CITY_PAGES } from "@/lib/foggy-glass-city-data";
import { WINTER_READY_ENABLED } from "@/lib/constants";

export const metadata: Metadata = {
  title: FOGGY_WINDOWS.metaTitle,
  description: FOGGY_WINDOWS.metaDescription,
  alternates: { canonical: "/foggy-windows" },
};

export default function FoggyWindowsPage() {
  return (
    <>
      <ServicePageLayout service={FOGGY_WINDOWS} />
      {WINTER_READY_ENABLED && (
        <section className="bg-accent/5 border-t border-accent/10 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <Snowflake className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
            <p className="text-gray-700">
              Getting ready for winter?{" "}
              <Link href="/winter-ready?utm_source=foggy-windows&utm_medium=cross-link" className="text-accent font-semibold hover:underline">
                Book a $30 Winter Ready Inspection.
              </Link>
            </p>
          </div>
        </section>
      )}
      <section className="bg-gray-50 border-t border-gray-200 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Foggy Glass Repair by City
          </h2>
          <p className="text-gray-500 mb-8 max-w-2xl">
            We serve homeowners across the Greater Toronto Area. Find foggy glass repair information specific to your city:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {FOGGY_GLASS_CITY_PAGES.map((c) => (
              <Link
                key={c.slug}
                href={`/foggy-glass-repair-${c.slug}`}
                className="inline-flex items-center gap-2 bg-white text-gray-700 text-sm font-medium px-4 py-3 rounded-lg border border-gray-200 hover:border-primary/30 hover:text-primary hover:shadow-sm transition-all"
              >
                <MapPin className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                {c.city}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
