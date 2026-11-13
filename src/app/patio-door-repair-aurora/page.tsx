import type { Metadata } from "next";
import { getPatioDoorCityPageData } from "@/lib/patio-door-city-data";
import { PatioDoorCityPageLayout } from "@/components/services/PatioDoorCityPageLayout";

const city = getPatioDoorCityPageData("aurora")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/patio-door-repair-aurora" },
};

export default function PatioDoorRepairAuroraPage() {
  return <PatioDoorCityPageLayout city={city} />;
}
