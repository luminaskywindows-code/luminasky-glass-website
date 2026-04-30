import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { CTABanner } from "@/components/shared/CTABanner";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services – Glass & Door Solutions",
  description:
    "LuminaSky Glass offers foggy window repair, front door glass, integrated blinds, skylights, garage door glass, screen & storm doors, window cranks, and locksmith services across the GTA.",
  alternates: { canonical: "/gallery" },
};

export default function ServicesShowcasePage() {
  return (
    <>
      {/* Hero */}
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
                Our Services
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Do
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Complete glass and door solutions for homeowners across the Greater
            Toronto Area - from foggy window repair to skylight replacement.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-label="All services"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Complete Solutions"
            title="Every Glass & Door Service You Need"
            subtitle="We replace or repair - saving you the cost of a full window or door replacement."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.href}
                className="group flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-accent transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={service.imageSrc ?? "/images/services/placeholder.jpg"}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5">
                  <h2 className="text-base font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">
                    {service.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent group-hover:gap-2 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Not Sure Which Service You Need? We'll Help." subtitle="Call for a free assessment - we'll diagnose and quote on the spot." />
    </>
  );
}
