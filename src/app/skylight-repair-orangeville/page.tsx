import type { Metadata } from "next";
import { getSkylightCityPageData } from "@/lib/skylight-city-data";
import { SkylightCityPageLayout } from "@/components/services/SkylightCityPageLayout";

const city = getSkylightCityPageData("orangeville")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/skylight-repair-orangeville" },
};

export default function SkylightRepairOrangevillePage() {
  return <SkylightCityPageLayout city={city} />;
}
