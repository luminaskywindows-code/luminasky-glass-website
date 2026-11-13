import type { Metadata } from "next";
import { getCranksCityPageData } from "@/lib/cranks-city-data";
import { CranksCityPageLayout } from "@/components/services/CranksCityPageLayout";

const city = getCranksCityPageData("scarborough")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-crank-repair-scarborough" },
};

export default function WindowCrankRepairScarboroughPage() {
  return <CranksCityPageLayout city={city} />;
}
