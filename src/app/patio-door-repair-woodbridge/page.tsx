import type { Metadata } from "next";
import { getPatioDoorCityPageData } from "@/lib/patio-door-city-data";
import { PatioDoorCityPageLayout } from "@/components/services/PatioDoorCityPageLayout";

const city = getPatioDoorCityPageData("woodbridge")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/patio-door-repair-woodbridge" },
};

export default function PatioDoorRepairWoodbridgePage() {
  return <PatioDoorCityPageLayout city={city} />;
}
