import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { WINDOW_REPLACEMENT } from "@/lib/services-data";

export const metadata: Metadata = {
  title: WINDOW_REPLACEMENT.metaTitle,
  description: WINDOW_REPLACEMENT.metaDescription,
  alternates: { canonical: "/services/window-replacement" },
};

export default function WindowReplacementServicePage() {
  return <ServicePageLayout service={WINDOW_REPLACEMENT} />;
}
