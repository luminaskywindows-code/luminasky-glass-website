import type { Metadata } from "next";
import { getFrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";
import { FrontDoorGlassCityPageLayout } from "@/components/services/FrontDoorGlassCityPageLayout";

const city = getFrontDoorGlassCityPageData("etobicoke")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/front-door-glass-etobicoke" },
};

export default function FrontDoorGlassEtobicokePage() {
  return <FrontDoorGlassCityPageLayout city={city} />;
}
