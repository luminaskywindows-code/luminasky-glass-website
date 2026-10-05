import type { Metadata } from "next";
import { getCityPageData } from "@/lib/city-pages-data";
import { CityPageLayout } from "@/components/cities/CityPageLayout";

const city = getCityPageData("oshawa")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-repair-oshawa" },
};

export default function WindowRepairOshawaPage() {
  return <CityPageLayout city={city} />;
}
