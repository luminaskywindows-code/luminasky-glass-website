import type { Metadata } from "next";
import { getEmergencyGlassCityPageData } from "@/lib/emergency-glass-city-data";
import { EmergencyGlassCityPageLayout } from "@/components/services/EmergencyGlassCityPageLayout";

const city = getEmergencyGlassCityPageData("oakville")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/emergency-glass-repair-oakville" },
};

export default function EmergencyGlassRepairOakvillePage() {
  return <EmergencyGlassCityPageLayout city={city} />;
}
