import type { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "All Services – Window & Door Glass Repair",
  description:
    "Browse all LuminaSky Glass services: foggy window repair, integrated blinds, front door glass, window cranks, screen doors, garage door glass, and locksmith — all across the GTA.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                Services
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Complete window and door glass solutions for the Greater Toronto
            Area. Fix, don&apos;t replace.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 md:px-8 bg-white" aria-label="Services listing">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="What We Do"
            title="Expert Glass & Door Services"
            subtitle="Every service performed by licensed, insured technicians — with a satisfaction guarantee."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.description}
                href={service.href}
                icon={service.icon}
                className="h-full"
              />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
