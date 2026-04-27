import type { Metadata } from "next";
import Link from "next/link";
import { Phone } from "lucide-react";
import { ProjectsGallery } from "@/components/projects/ProjectsGallery";
import { PHONE, PHONE_HREF, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Projects | Before & After Gallery | LuminaSky Glass",
  description:
    "See real before and after photos of our glass repair and replacement projects across the GTA. Emergency repairs, window restoration, and door glass replacement.",
  openGraph: {
    title: "LuminaSky Glass Projects — Real Before & After Results",
    description:
      "Browse our portfolio of completed glass repair and replacement projects across the Greater Toronto Area.",
    url: `${SITE_URL}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      {/* Hero */}
      <section
        className="bg-gradient-to-br from-primary via-blue-800 to-primary-700 text-white py-20 px-4 md:px-8"
        aria-label="Projects hero"
      >
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-sm font-semibold uppercase tracking-widest text-accent-light mb-4">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Real Results from Real Customers
          </h1>
          <p className="text-xl text-blue-100 mb-3">
            Across the Greater Toronto Area
          </p>
          <p className="text-blue-200 max-w-2xl mx-auto leading-relaxed">
            Every photo below shows actual work completed by our team. From emergency
            repairs to planned upgrades — see the quality and craftsmanship we deliver.
          </p>
        </div>
      </section>

      {/* Gallery with filters */}
      <ProjectsGallery />

      {/* CTA */}
      <section className="bg-blue-50 py-16 px-4 md:px-8" aria-labelledby="projects-cta-heading">
        <div className="max-w-2xl mx-auto text-center">
          <h2
            id="projects-cta-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Whether it&apos;s an emergency repair or a planned upgrade, we&apos;re here
            to help. Contact us today — same-day service available
            across the GTA.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-4 rounded-lg shadow hover:shadow-md transition-all active:scale-95"
            >
              Contact Us
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary font-semibold px-8 py-4 rounded-lg hover:bg-blue-50 transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
