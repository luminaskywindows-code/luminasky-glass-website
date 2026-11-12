import type { Metadata } from "next";
import { Inter } from "next/font/google";
import dynamic from "next/dynamic";
import { GtagInit } from "@/components/analytics/GtagInit";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { generateOrganizationSchema } from "@/lib/schema";
import { ClarityInit } from "@/components/analytics/ClarityInit";

const WhatsAppButton = dynamic(
  () => import("@/components/layout/WhatsAppButton").then((m) => m.WhatsAppButton),
  { ssr: false }
);

const SourceTracker = dynamic(
  () => import("@/components/layout/SourceTracker").then((m) => m.SourceTracker),
  { ssr: false }
);

const PhoneClickTracker = dynamic(
  () => import("@/components/analytics/PhoneClickTracker").then((m) => m.PhoneClickTracker),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luminasky.com"),
  title: {
    default:
      "Window & Glass Repair Toronto | LuminaSky Glass Services",
    template: "%s | LuminaSky",
  },
  description:
    "Window and glass repair in Toronto. We fix foggy glass, door glass, cranks and screens without replacing the whole window. Written quote on the spot.",
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "LuminaSky Glass Services",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuminaSky Glass Services",
      },
    ],
  },
  icons: {
    icon: { url: "/icon.png", type: "image/png" },
    apple: "/images/logo.png",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "LuminaSky Glass Services",
              url: "https://www.luminasky.com",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ClarityInit />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <SourceTracker />
        <GtagInit />
        <PhoneClickTracker />
      </body>
    </html>
  );
}
