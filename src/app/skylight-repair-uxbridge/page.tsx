import type { Metadata } from "next";
import { getSkylightCityPageData } from "@/lib/skylight-city-data";
import { SkylightCityPageLayout } from "@/components/services/SkylightCityPageLayout";

const city = getSkylightCityPageData("uxbridge")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/skylight-repair-uxbridge" },
};

export default function SkylightRepairUxbridgePage() {
  return <SkylightCityPageLayout city={city} />;
}
