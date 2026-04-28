import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { generateOrganizationSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://luminasky.com"),
  title: {
    default:
      "LuminaSky Glass | Window & Door Glass Repair – Greater Toronto Area",
    template: "%s | LuminaSky Glass",
  },
  description:
    "Professional window and door glass repair services in the GTA. Foggy windows, door glass, integrated blinds, window cranks & more. Fast, licensed & insured. Call 437-344-8490.",
  keywords: [
    "window glass repair toronto",
    "foggy window repair GTA",
    "door glass replacement",
    "window crank repair",
    "integrated blinds toronto",
    "locksmith GTA",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://luminasky.com",
    siteName: "LuminaSky Glass",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LuminaSky Glass – Window & Door Glass Repair in the GTA",
      },
    ],
  },
  icons: {
    icon: { url: "/icon.png", type: "image/png" },
    apple: "/images/logo.png",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://luminasky.com" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
