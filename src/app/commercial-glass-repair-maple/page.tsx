import type { Metadata } from "next";
import { getCommercialGlassCityPageData } from "@/lib/commercial-glass-city-data";
import { CommercialGlassCityPageLayout } from "@/components/services/CommercialGlassCityPageLayout";

const city = getCommercialGlassCityPageData("maple")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/commercial-glass-repair-maple" },
};

export default function CommercialGlassRepairMaplePage() {
  return <CommercialGlassCityPageLayout city={city} />;
}
