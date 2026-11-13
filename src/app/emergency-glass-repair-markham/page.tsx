import type { Metadata } from "next";
import { getEmergencyGlassCityPageData } from "@/lib/emergency-glass-city-data";
import { EmergencyGlassCityPageLayout } from "@/components/services/EmergencyGlassCityPageLayout";

const city = getEmergencyGlassCityPageData("markham")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/emergency-glass-repair-markham" },
};

export default function EmergencyGlassRepairMarkhamPage() {
  return <EmergencyGlassCityPageLayout city={city} />;
}
