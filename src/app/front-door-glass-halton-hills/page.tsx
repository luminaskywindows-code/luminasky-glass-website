import type { Metadata } from "next";
import { getFrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";
import { FrontDoorGlassCityPageLayout } from "@/components/services/FrontDoorGlassCityPageLayout";

const city = getFrontDoorGlassCityPageData("halton-hills")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/front-door-glass-halton-hills" },
};

export default function FrontDoorGlassHaltonHillsPage() {
  return <FrontDoorGlassCityPageLayout city={city} />;
}
