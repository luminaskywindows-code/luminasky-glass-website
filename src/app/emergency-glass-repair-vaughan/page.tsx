import type { Metadata } from "next";
import { getEmergencyGlassCityPageData } from "@/lib/emergency-glass-city-data";
import { EmergencyGlassCityPageLayout } from "@/components/services/EmergencyGlassCityPageLayout";

const city = getEmergencyGlassCityPageData("vaughan")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/emergency-glass-repair-vaughan" },
};

export default function EmergencyGlassRepairVaughanPage() {
  return <EmergencyGlassCityPageLayout city={city} />;
}
