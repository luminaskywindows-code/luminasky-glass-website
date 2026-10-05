import type { Metadata } from "next";
import { getFoggyGlassCityPageData } from "@/lib/foggy-glass-city-data";
import { FoggyGlassCityPageLayout } from "@/components/services/FoggyGlassCityPageLayout";

const city = getFoggyGlassCityPageData("oshawa")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/foggy-glass-repair-oshawa" },
};

export default function FoggyGlassRepairOshawaPage() {
  return <FoggyGlassCityPageLayout city={city} />;
}
