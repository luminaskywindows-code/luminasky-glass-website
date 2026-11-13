import type { Metadata } from "next";
import { getFrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";
import { FrontDoorGlassCityPageLayout } from "@/components/services/FrontDoorGlassCityPageLayout";

const city = getFrontDoorGlassCityPageData("king-city")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/front-door-glass-king-city" },
};

export default function FrontDoorGlassKingCityPage() {
  return <FrontDoorGlassCityPageLayout city={city} />;
}
