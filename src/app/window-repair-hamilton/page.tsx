import type { Metadata } from "next";
import { getCityPageData } from "@/lib/city-pages-data";
import { CityPageLayout } from "@/components/cities/CityPageLayout";

const city = getCityPageData("hamilton")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-repair-hamilton" },
};

export default function WindowRepairHamiltonPage() {
  return <CityPageLayout city={city} />;
}
