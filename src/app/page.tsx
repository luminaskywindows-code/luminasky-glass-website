import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ServiceAreaMap } from "@/components/shared/ServiceAreaMap";
import { CTABanner } from "@/components/shared/CTABanner";
import { HomepageFAQ } from "@/components/home/HomepageFAQ";
import { HOMEPAGE_SCHEMA_FAQS } from "@/lib/homepage-faq-data";
import { WinterBanner } from "@/components/home/WinterBanner";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WarrantyPromise } from "@/components/home/WarrantyPromise";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Star } from "lucide-react";

const HomepagePopup = dynamic(
  () => import("@/components/home/HomepagePopup").then((m) => m.HomepagePopup),
  { ssr: false }
);

export const metadata: Metadata = {
  title: {
    absolute: "Window & Glass Repair Toronto - Fix, Don't Replace | LuminaSky",
  },
  description:
    "Toronto's glass and window repair specialist. We fix foggy glass, cracked panes, broken cranks and more. Fix don't replace. Free photo quote. 437-344-8490",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <WinterBanner />
      <HomepagePopup />
      <HeroSection />
      <TrustStrip />
      <ServicesGrid />
      <WarrantyPromise />
      <TrustSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Social strip */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <a
            href="https://share.google/S08QWQ5FO1niAmpXy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-500 shrink-0 rounded-md px-2 py-1 hover:bg-gray-100 transition-colors"
          >
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            <span className="font-semibold text-gray-700">5.0★ on Google</span>
            <span className="hidden sm:inline">·</span>
          </a>
          <span className="text-sm text-gray-400">Find us on:</span>
          <SocialLinks
            size={22}
            containerClassName="flex items-center gap-4"
            linkClassName="text-gray-400 hover:text-accent transition-colors duration-150"
          />
        </div>
      </section>

      <ServiceAreaMap />
      <CTABanner />
      <HomepageFAQ />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: HOMEPAGE_SCHEMA_FAQS.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </>
  );
}
