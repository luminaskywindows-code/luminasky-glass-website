import type { Metadata } from "next";
import { getFrontDoorGlassCityPageData } from "@/lib/front-door-glass-city-data";
import { FrontDoorGlassCityPageLayout } from "@/components/services/FrontDoorGlassCityPageLayout";

const city = getFrontDoorGlassCityPageData("innisfil")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/front-door-glass-innisfil" },
};

export default function FrontDoorGlassInnisfilPage() {
  return <FrontDoorGlassCityPageLayout city={city} />;
}
