import type { Metadata } from "next";
import { getCranksCityPageData } from "@/lib/cranks-city-data";
import { CranksCityPageLayout } from "@/components/services/CranksCityPageLayout";

const city = getCranksCityPageData("pickering")!;

export const metadata: Metadata = {
  title: city.metaTitle,
  description: city.metaDescription,
  alternates: { canonical: "/window-crank-repair-pickering" },
};

export default function WindowCrankRepairPickeringPage() {
  return <CranksCityPageLayout city={city} />;
}
