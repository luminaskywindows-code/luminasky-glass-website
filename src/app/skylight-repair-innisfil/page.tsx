import type { Metadata } from "next";
import { getSkylightCityPageData } from "@/lib/skylight-city-data";
import { SkylightCityPageLayout } from "@/components/services/SkylightCityPageLayout";

const city = getSkylightCityPageData("innisfil")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/skylight-repair-innisfil" },
};

export default function SkylightRepairInnisfilPage() {
  return <SkylightCityPageLayout city={city} />;
}
