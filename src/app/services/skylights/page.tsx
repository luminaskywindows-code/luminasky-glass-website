import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { SKYLIGHTS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: SKYLIGHTS.metaTitle,
  description: SKYLIGHTS.metaDescription,
  alternates: { canonical: "/services/skylights" },
};

export default function SkylightsPage() {
  return <ServicePageLayout service={SKYLIGHTS} />;
}
