import type { Metadata } from "next";
import { getFrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";
import { FrontDoorGlassCityPageLayout } from "@/components/services/FrontDoorGlassCityPageLayout";

const city = getFrontDoorGlassCityPageData("georgina")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/front-door-glass-georgina" },
};

export default function FrontDoorGlassGeorginaPage() {
  return <FrontDoorGlassCityPageLayout city={city} />;
}
