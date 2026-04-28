import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { SCREEN_STORM_DOORS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: SCREEN_STORM_DOORS.metaTitle,
  description: SCREEN_STORM_DOORS.metaDescription,
  alternates: { canonical: "/screen-storm-doors" },
};

export default function ScreenStormDoorsPage() {
  return <ServicePageLayout service={SCREEN_STORM_DOORS} />;
}
