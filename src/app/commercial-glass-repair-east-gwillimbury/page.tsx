import type { Metadata } from "next";
import { getCommercialGlassCityPageData } from "@/lib/commercial-glass-city-data";
import { CommercialGlassCityPageLayout } from "@/components/services/CommercialGlassCityPageLayout";

const city = getCommercialGlassCityPageData("east-gwillimbury")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/commercial-glass-repair-east-gwillimbury" },
};

export default function CommercialGlassRepairEastGwillimburyPage() {
  return <CommercialGlassCityPageLayout city={city} />;
}
