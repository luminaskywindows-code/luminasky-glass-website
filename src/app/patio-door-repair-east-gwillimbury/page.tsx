import type { Metadata } from "next";
import { getPatioDoorCityPageData } from "@/lib/patio-door-city-data";
import { PatioDoorCityPageLayout } from "@/components/services/PatioDoorCityPageLayout";

const city = getPatioDoorCityPageData("east-gwillimbury")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/patio-door-repair-east-gwillimbury" },
};

export default function PatioDoorRepairEastGwillimburyPage() {
  return <PatioDoorCityPageLayout city={city} />;
}
