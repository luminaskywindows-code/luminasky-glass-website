import type { Metadata } from "next";
import { getSkylightCityPageData } from "@/lib/skylight-city-data";
import { SkylightCityPageLayout } from "@/components/services/SkylightCityPageLayout";

const city = getSkylightCityPageData("east-gwillimbury")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/skylight-repair-east-gwillimbury" },
};

export default function SkylightRepairEastGwillimburyPage() {
  return <SkylightCityPageLayout city={city} />;
}
