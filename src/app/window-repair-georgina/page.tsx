import type { Metadata } from "next";
import { getCityPageData } from "@/lib/city-pages-data";
import { CityPageLayout } from "@/components/cities/CityPageLayout";

const city = getCityPageData("georgina")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-repair-georgina" },
};

export default function WindowRepairGeorginaPage() {
  return <CityPageLayout city={city} />;
}
