import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window and Glass Repair for Property Managers | LuminaSky Glass",
  description:
    "One vendor for window, door and glass repairs across all your managed properties. Free first crank repair. Fast response, clean documentation for the board. Serving the GTA.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Window and Glass Repair for Property Managers | LuminaSky Glass",
    description:
      "One vendor for window, door and glass repairs across all your managed properties. Free first crank repair. Serving the GTA.",
  },
  alternates: { canonical: "/property-managers" },
};

export default function PropertyManagersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
