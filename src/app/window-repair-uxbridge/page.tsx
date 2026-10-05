import type { Metadata } from "next";
import { getCityPageData } from "@/lib/city-pages-data";
import { CityPageLayout } from "@/components/cities/CityPageLayout";

const city = getCityPageData("uxbridge")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-repair-uxbridge" },
};

export default function WindowRepairUxbridgePage() {
  return <CityPageLayout city={city} />;
}
