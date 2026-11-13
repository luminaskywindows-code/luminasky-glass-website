import type { Metadata } from "next";
import { getCommercialGlassCityPageData } from "@/lib/commercial-glass-city-data";
import { CommercialGlassCityPageLayout } from "@/components/services/CommercialGlassCityPageLayout";

const city = getCommercialGlassCityPageData("georgina")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/commercial-glass-repair-georgina" },
};

export default function CommercialGlassRepairGeorginaPage() {
  return <CommercialGlassCityPageLayout city={city} />;
}
