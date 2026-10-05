import type { Metadata } from "next";
import { getCityPageData } from "@/lib/city-pages-data";
import { CityPageLayout } from "@/components/cities/CityPageLayout";

const city = getCityPageData("east-gwillimbury")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-repair-east-gwillimbury" },
};

export default function WindowRepairEastGwillimburyPage() {
  return <CityPageLayout city={city} />;
}
