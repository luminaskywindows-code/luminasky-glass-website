import type { Metadata } from "next";
import { getCranksCityPageData } from "@/lib/cranks-city-data";
import { CranksCityPageLayout } from "@/components/services/CranksCityPageLayout";

const city = getCranksCityPageData("newmarket")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-crank-repair-newmarket" },
};

export default function WindowCrankRepairNewmarketPage() {
  return <CranksCityPageLayout city={city} />;
}
