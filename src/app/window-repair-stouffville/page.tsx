import type { Metadata } from "next";
import { getCityPageData } from "@/lib/city-pages-data";
import { CityPageLayout } from "@/components/cities/CityPageLayout";

const city = getCityPageData("stouffville")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-repair-stouffville" },
};

export default function WindowRepairStouffvillePage() {
  return <CityPageLayout city={city} />;
}
