import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, Phone } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTABanner } from "@/components/shared/CTABanner";
import { ServiceData } from "@/lib/services-data";
import { SERVICES, PHONE_HREF } from "@/lib/constants";
import {
  generateBreadcrumbSchema,
  generateServiceSchema,
  generateFAQSchema,
} from "@/lib/schema";

interface ServicePageLayoutProps {
  service: ServiceData;
  breadcrumb?: { name: string; url: string }[];
}

export function ServicePageLayout({
  service,
  breadcrumb,
}: ServicePageLayoutProps) {
  const defaultBreadcrumb = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  const crumbs = breadcrumb ?? defaultBreadcrumb;
  const relatedServiceData = SERVICES.filter((s) =>
    service.relatedServices.includes(s.slug)
  ).slice(0, 3);

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            generateBreadcrumbSchema(crumbs),
            generateServiceSchema(
              service.title,
              `/services/${service.slug}`,
              service.description[0]
            ),
            generateFAQSchema(service.faqs),
          ]),
        }}
      />

      {/* Hero */}
      <section
        className="relative bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8 overflow-hidden"
        aria-label={`${service.title} hero section`}
      >
        {/* Background image — faint on desktop, hidden on mobile (image shown below instead) */}
        {service.heroImage && (
          <div className="absolute inset-0 hidden lg:block" aria-hidden="true">
            <Image
              src={service.heroImage.src}
              alt=""
              fill
              className="object-cover opacity-25"
              sizes="100vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-primary/20" />
          </div>
        )}

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className={`grid gap-10 items-center ${service.heroImage ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 max-w-4xl"}`}>
            <div>
              <nav aria-label="Breadcrumb" className="mb-6">
                <ol className="flex items-center gap-2 text-sm text-blue-200 flex-wrap">
                  {crumbs.map((crumb, index) => (
                    <li key={crumb.url} className="flex items-center gap-2">
                      {index < crumbs.length - 1 ? (
                        <>
                          <Link
                            href={crumb.url}
                            className="hover:text-white transition-colors"
                          >
                            {crumb.name}
                          </Link>
                          <span aria-hidden="true">/</span>
                        </>
                      ) : (
                        <span
                          className="text-white font-medium"
                          aria-current="page"
                        >
                          {crumb.name}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed mb-8 max-w-2xl">
                {service.heroSubtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  Get Quote
                </Link>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/70 text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-95"
                >
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Hero image — visible panel on all screen sizes */}
            {service.heroImage && (
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <Image
                  src={service.heroImage.src}
                  alt={service.heroImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="overview-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                About This Service
              </span>
              <h2
                id="overview-heading"
                className="text-3xl font-bold text-gray-900 mb-6 leading-tight"
              >
                {service.title}
              </h2>
              <div className="space-y-4">
                {service.description.map((para, i) => (
                  <p key={i} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-bold text-gray-900 text-lg mb-6">
                Key Benefits
              </h3>
              <ul className="space-y-3" aria-label="Service benefits">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 text-accent shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      {service.photos && service.photos.length > 0 && (
        <section
          className="py-16 px-4 md:px-8 bg-gray-50"
          aria-labelledby="photos-heading"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                Our Work
              </span>
              <h2
                id="photos-heading"
                className="text-3xl font-bold text-gray-900"
              >
                Real Project Photos
              </h2>
            </div>
            <div
              className={`grid gap-6 ${
                service.photos.length === 1
                  ? "grid-cols-1 max-w-2xl mx-auto"
                  : service.photos.length === 2
                  ? "grid-cols-1 md:grid-cols-2"
                  : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              }`}
            >
              {service.photos.map((photo, i) => (
                <figure key={i} className="flex flex-col gap-2">
                  <div className="relative rounded-xl overflow-hidden bg-gray-200 aspect-[4/3]">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  {photo.caption && (
                    <figcaption className="text-sm text-gray-500 text-center">
                      {photo.caption}
                    </figcaption>
                  )}
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      <section
        className="py-16 px-4 md:px-8 bg-white"
        aria-labelledby="process-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              How It Works
            </span>
            <h2
              id="process-heading"
              className="text-3xl font-bold text-gray-900"
            >
              Our Process
            </h2>
          </div>
          <div
            className="grid gap-6"
            style={{
              gridTemplateColumns: `repeat(${Math.min(service.process.length, 5)}, minmax(0, 1fr))`,
            }}
          >
            {service.process.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < service.process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-7 left-[calc(50%+2rem)] right-[-50%] h-px bg-gray-200"
                    aria-hidden="true"
                  />
                )}
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                  <span className="text-white font-bold text-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {step.step}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width showcase image (before/after etc.) */}
      {service.showcaseImage && (
        <section className="bg-white px-4 md:px-8 pb-16" aria-label="Project showcase">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={service.showcaseImage.src}
                alt={service.showcaseImage.alt}
                width={1200}
                height={500}
                className="w-full h-auto object-cover"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </div>
          </div>
        </section>
      )}

      {/* Before / After Section */}
      {service.beforeAfterImages && (
        <section className="py-16 px-4 md:px-8 bg-white" aria-labelledby="before-after-heading">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
                Real Results
              </span>
              <h2
                id="before-after-heading"
                className="text-3xl font-bold text-gray-900 mb-3"
              >
                {service.beforeAfterImages.title}
              </h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                {service.beforeAfterImages.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Before */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={service.beforeAfterImages.before.src}
                    alt={service.beforeAfterImages.before.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {service.beforeAfterImages.before.badge}
                  </span>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {service.beforeAfterImages.before.heading}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.beforeAfterImages.before.caption}
                  </p>
                </div>
              </div>

              {/* After */}
              <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                <div className="relative aspect-[4/3] bg-gray-200">
                  <Image
                    src={service.beforeAfterImages.after.src}
                    alt={service.beforeAfterImages.after.alt}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow">
                    {service.beforeAfterImages.after.badge}
                  </span>
                </div>
                <div className="p-5 bg-white">
                  <h3 className="font-semibold text-gray-900 mb-1">
                    {service.beforeAfterImages.after.heading}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {service.beforeAfterImages.after.caption}
                  </p>
                </div>
              </div>
            </div>

            {/* Emergency CTA box */}
            {service.beforeAfterImages.emergencyCTA && (
              <div className="bg-red-50 border border-red-200 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {service.beforeAfterImages.emergencyCTA.heading}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.beforeAfterImages.emergencyCTA.body}
                  </p>
                </div>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap shadow"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call Now — 24/7
                </a>
              </div>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section
        className="py-16 px-4 md:px-8 bg-gray-50"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent mb-3">
              Common Questions
            </span>
            <h2 id="faq-heading" className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion className="space-y-3">
            {service.faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-white border border-gray-100 rounded-xl px-4 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Services */}
      {relatedServiceData.length > 0 && (
        <section
          className="py-16 px-4 md:px-8 bg-white"
          aria-labelledby="related-heading"
        >
          <div className="max-w-7xl mx-auto">
            <h2
              id="related-heading"
              className="text-2xl font-bold text-gray-900 mb-8 text-center"
            >
              Other Services You May Need
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServiceData.map((s) => (
                <ServiceCard
                  key={s.slug}
                  title={s.title}
                  description={s.description}
                  href={s.href}
                  icon={s.icon}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Ready to Fix Your ${service.shortTitle ?? service.title}?`}
        subtitle="Call now — same-day service available across the GTA."
      />
    </>
  );
}
