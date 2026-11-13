import type { Metadata } from "next";
import { getSkylightCityPageData } from "@/lib/skylight-city-data";
import { SkylightCityPageLayout } from "@/components/services/SkylightCityPageLayout";

const city = getSkylightCityPageData("caledon")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/skylight-repair-caledon" },
};

export default function SkylightRepairCaledonPage() {
  return <SkylightCityPageLayout city={city} />;
}
