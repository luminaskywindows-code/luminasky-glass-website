import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { FOGGY_WINDOWS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: FOGGY_WINDOWS.metaTitle,
  description: FOGGY_WINDOWS.metaDescription,
  alternates: { canonical: "/foggy-windows" },
};

export default function FoggyWindowsPage() {
  return <ServicePageLayout service={FOGGY_WINDOWS} />;
}
