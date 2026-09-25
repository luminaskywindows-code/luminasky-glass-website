import type { Metadata } from "next";
import Link from "next/link";
import { Snowflake } from "lucide-react";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { SKYLIGHTS } from "@/lib/services-data";
import { WINTER_READY_ENABLED } from "@/lib/constants";

export const metadata: Metadata = {
  title: SKYLIGHTS.metaTitle,
  description: SKYLIGHTS.metaDescription,
  alternates: { canonical: "/skylights" },
};

export default function SkylightsPage() {
  return (
    <>
      <ServicePageLayout service={SKYLIGHTS} />
      {WINTER_READY_ENABLED && (
        <section className="bg-accent/5 border-t border-accent/10 py-6 px-4 md:px-8">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
            <Snowflake className="w-5 h-5 text-accent shrink-0" aria-hidden="true" />
            <p className="text-gray-700">
              Getting ready for winter?{" "}
              <Link href="/winter-ready?utm_source=skylights&utm_medium=cross-link" className="text-accent font-semibold hover:underline">
                Book a $30 Winter Ready Inspection.
              </Link>
            </p>
          </div>
        </section>
      )}
    </>
  );
}
