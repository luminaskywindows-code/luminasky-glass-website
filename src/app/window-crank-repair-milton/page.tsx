import type { Metadata } from "next";
import { getCranksCityPageData } from "@/lib/cranks-city-data";
import { CranksCityPageLayout } from "@/components/services/CranksCityPageLayout";

const city = getCranksCityPageData("milton")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-crank-repair-milton" },
};

export default function WindowCrankRepairMiltonPage() {
  return <CranksCityPageLayout city={city} />;
}
