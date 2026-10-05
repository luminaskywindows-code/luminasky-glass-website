import type { Metadata } from "next";
import { getFoggyGlassCityPageData } from "@/lib/foggy-glass-city-data";
import { FoggyGlassCityPageLayout } from "@/components/services/FoggyGlassCityPageLayout";

const city = getFoggyGlassCityPageData("east-gwillimbury")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/foggy-glass-repair-east-gwillimbury" },
};

export default function FoggyGlassRepairEastGwillimburyPage() {
  return <FoggyGlassCityPageLayout city={city} />;
}
