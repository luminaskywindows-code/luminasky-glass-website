import type { Metadata } from "next";
import { getPatioDoorCityPageData } from "@/lib/patio-door-city-data";
import { PatioDoorCityPageLayout } from "@/components/services/PatioDoorCityPageLayout";

const city = getPatioDoorCityPageData("halton-hills")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/patio-door-repair-halton-hills" },
};

export default function PatioDoorRepairHaltonHillsPage() {
  return <PatioDoorCityPageLayout city={city} />;
}
