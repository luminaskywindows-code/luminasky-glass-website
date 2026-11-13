import type { Metadata } from "next";
import { getCranksCityPageData } from "@/lib/cranks-city-data";
import { CranksCityPageLayout } from "@/components/services/CranksCityPageLayout";

const city = getCranksCityPageData("caledon")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-crank-repair-caledon" },
};

export default function WindowCrankRepairCaledonPage() {
  return <CranksCityPageLayout city={city} />;
}
