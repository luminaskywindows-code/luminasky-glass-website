import type { Metadata } from "next";
import { getPatioDoorCityPageData } from "@/lib/patio-door-city-data";
import { PatioDoorCityPageLayout } from "@/components/services/PatioDoorCityPageLayout";

const city = getPatioDoorCityPageData("milton")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/patio-door-repair-milton" },
};

export default function PatioDoorRepairMiltonPage() {
  return <PatioDoorCityPageLayout city={city} />;
}
