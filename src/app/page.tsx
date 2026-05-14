import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { TrustSection } from "@/components/home/TrustSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { ServiceAreaMap } from "@/components/shared/ServiceAreaMap";
import { CTABanner } from "@/components/shared/CTABanner";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { Star } from "lucide-react";

export const metadata: Metadata = {
  title: "Glass & Door Repair in the Greater Toronto Area",
  description:
    "LuminaSky Glass repairs foggy glass, door glass, window cranks, integrated blinds & more across the GTA. Fast, affordable, licensed & insured. Call 437-344-8490.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <TrustSection />
      <TestimonialsSection />

      {/* Social strip */}
      <section className="py-10 px-4 bg-white border-t border-gray-100">
        <div className="max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="flex items-center gap-1.5 text-sm text-gray-500 shrink-0">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            <span className="font-semibold text-gray-700">4.9★ on Google</span>
            <span className="hidden sm:inline">·</span>
          </div>
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
    </>
  );
}
