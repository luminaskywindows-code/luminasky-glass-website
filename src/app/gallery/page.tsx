import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { CTABanner } from "@/components/shared/CTABanner";
import { SectionHeading } from "@/components/shared/SectionHeading";

const BeforeAfterSlider = dynamic(
  () =>
    import("@/components/gallery/BeforeAfterSlider").then(
      (m) => m.BeforeAfterSlider
    ),
  { ssr: false }
);

export const metadata: Metadata = {
  title: "Before & After Gallery",
  description:
    "See real before and after photos of window and glass repairs by LuminaSky Glass Services. Foggy glass, front door glass, skylights, cranks, and more across the GTA.",
  alternates: { canonical: "/gallery" },
};

const PROJECTS = [
  {
    before: {
      src: "/images/services/toronto-foggy-glass-replacement-before.webp",
      alt: "Foggy double-pane window with condensation trapped between the glass, before repair",
    },
    after: {
      src: "/images/services/toronto-foggy-glass-replacement-after.webp",
      alt: "Crystal-clear window after sealed glass unit replacement by LuminaSky",
    },
    title: "Foggy sealed unit replaced",
    service: "Foggy Glass Repair",
    serviceHref: "/foggy-windows",
    location: "Toronto",
  },
  {
    before: {
      src: "/images/services/toronto-door-insert-replacement-before.webp",
      alt: "Damaged front door glass insert before replacement",
    },
    after: {
      src: "/images/services/toronto-door-insert-replacement-after.webp",
      alt: "New decorative front door glass insert installed by LuminaSky",
    },
    title: "Front door glass insert replaced",
    service: "Front Door Glass",
    serviceHref: "/front-door-glass",
    location: "Toronto",
  },
  {
    before: {
      src: "/images/services/front-door-glass-before.jpg",
      alt: "Cracked front door glass panel before repair",
    },
    after: {
      src: "/images/services/front-door-glass-after.jpg",
      alt: "New clear front door glass panel after replacement",
    },
    title: "Front door glass panel replaced",
    service: "Front Door Glass",
    serviceHref: "/front-door-glass",
  },
  {
    before: {
      src: "/images/services/front-door-scarborough-before.jpg",
      alt: "Old front door glass with failed seal in Scarborough, before replacement",
    },
    after: {
      src: "/images/services/front-door-scarborough-after.jpg",
      alt: "New front door glass installed in Scarborough by LuminaSky",
    },
    title: "Entry door glass replacement",
    service: "Front Door Glass",
    serviceHref: "/front-door-glass",
    location: "Scarborough",
  },
  {
    before: {
      src: "/images/services/frosted-glass-orangeville-before.jpg",
      alt: "Old frosted glass door panel in Orangeville, before replacement",
    },
    after: {
      src: "/images/services/frosted-glass-orangeville-after.jpg",
      alt: "New frosted privacy glass door panel installed in Orangeville",
    },
    title: "Frosted privacy glass replaced",
    service: "Front Door Glass",
    serviceHref: "/front-door-glass",
    location: "Orangeville",
  },
  {
    before: {
      src: "/images/services/skylight-richmond-hill-before.jpg",
      alt: "Foggy skylight glass with condensation in Richmond Hill, before replacement",
    },
    after: {
      src: "/images/services/skylight-richmond-hill-after.jpg",
      alt: "Clear skylight glass after replacement by LuminaSky in Richmond Hill",
    },
    title: "Skylight glass replacement",
    service: "Skylight Repair",
    serviceHref: "/skylights",
    location: "Richmond Hill",
  },
  {
    before: {
      src: "/images/services/crank-before.jpg",
      alt: "Broken window crank operator before repair",
    },
    after: {
      src: "/images/services/crank-after.jpg",
      alt: "New window crank operator installed and working smoothly",
    },
    title: "Window crank operator replaced",
    service: "Window Crank Repair",
    serviceHref: "/cranks",
  },
  {
    before: {
      src: "/images/services/door-before-broken.jpg",
      alt: "Damaged patio door glass before replacement",
    },
    after: {
      src: "/images/services/door-after-repaired.jpg",
      alt: "New patio door glass installed by LuminaSky",
    },
    title: "Patio door glass replaced",
    service: "Patio Door Repair",
    serviceHref: "/patio-door-repair",
  },
];

export default function GalleryPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
        ]}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary via-blue-800 to-primary-700 py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-sm text-blue-200">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                Gallery
              </li>
            </ol>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Before &amp; After Gallery
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
            Real photos from real jobs across the GTA. Drag the slider to see the difference.
          </p>
        </div>
      </section>

      {/* Before/After Grid */}
      <section className="py-16 px-4 md:px-8 bg-gray-50" aria-label="Before and after project photos">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            eyebrow="Our Work"
            title="See the Results"
            subtitle="Every project shown here is a real job completed by LuminaSky. Drag the slider left and right to compare."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <div key={i}>
                <BeforeAfterSlider
                  before={project.before}
                  after={project.after}
                  title={project.title}
                  service={project.service}
                  location={project.location}
                />
                <Link
                  href={project.serviceHref}
                  className="inline-block mt-2 text-xs font-medium text-accent hover:underline"
                >
                  {project.service} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="py-12 px-4 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-sm leading-relaxed">
            All photos are taken on-site by our technicians. We never use stock
            images or digitally alter our work photos. What you see is exactly
            what we delivered.
          </p>
        </div>
      </section>

      <CTABanner
        title="Ready to See Results Like These?"
        subtitle="Call for a $30 site visit, credited toward your repair."
      />
    </>
  );
}
