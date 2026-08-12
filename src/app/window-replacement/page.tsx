import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { WINDOW_REPLACEMENT } from "@/lib/services-data";

export const metadata: Metadata = {
  title: WINDOW_REPLACEMENT.metaTitle,
  description: WINDOW_REPLACEMENT.metaDescription,
  alternates: { canonical: "/window-replacement" },
};

export default function WindowReplacementPage() {
  return <ServicePageLayout service={WINDOW_REPLACEMENT} />;
}
