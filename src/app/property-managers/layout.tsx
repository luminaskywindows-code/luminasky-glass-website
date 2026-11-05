import type { Metadata } from "next";
import { BreadcrumbSchema } from "@/components/seo/BreadcrumbSchema";
import { generateServiceSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Window and Glass Repair for Property Managers",
  description:
    "One vendor for window, door and glass repairs across your managed properties. Fast response, clean documentation for the board. Serving the GTA.",
  openGraph: {
    title: "Window and Glass Repair for Property Managers",
    description:
      "One vendor for window, door and glass repairs across all your managed properties. Written quotes, clean documentation. Serving the GTA.",
  },
  alternates: { canonical: "/property-managers" },
};

export default function PropertyManagersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Home", url: "/" }, { name: "Property Managers", url: "/property-managers" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema(
              "Window and Glass Repair for Property Managers",
              "/property-managers",
              "One vendor for window, door and glass repairs across managed properties in the GTA. Fast response, clean documentation, licensed and insured technicians."
            )
          ),
        }}
      />
      {children}
    </>
  );
}
