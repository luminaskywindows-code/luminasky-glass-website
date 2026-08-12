import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { WINDOW_SCREENS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: WINDOW_SCREENS.metaTitle,
  description: WINDOW_SCREENS.metaDescription,
  alternates: { canonical: "/services/window-screens" },
};

export default function WindowScreensServicePage() {
  return <ServicePageLayout service={WINDOW_SCREENS} />;
}
