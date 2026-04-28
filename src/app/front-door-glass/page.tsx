import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/ServicePageLayout";
import { FRONT_DOOR_GLASS } from "@/lib/services-data";

export const metadata: Metadata = {
  title: FRONT_DOOR_GLASS.metaTitle,
  description: FRONT_DOOR_GLASS.metaDescription,
  alternates: { canonical: "/front-door-glass" },
};

export default function FrontDoorGlassPage() {
  return <ServicePageLayout service={FRONT_DOOR_GLASS} />;
}
