import type { Metadata } from "next";
import { getFoggyGlassCityPageData } from "@/lib/foggy-glass-city-data";
import { FoggyGlassCityPageLayout } from "@/components/services/FoggyGlassCityPageLayout";

const city = getFoggyGlassCityPageData("stouffville")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/foggy-glass-repair-stouffville" },
};

export default function FoggyGlassRepairStouffvillePage() {
  return <FoggyGlassCityPageLayout city={city} />;
}
