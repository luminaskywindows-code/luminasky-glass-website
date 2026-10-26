import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SourceTracker } from "@/components/layout/SourceTracker";
import { Toaster } from "@/components/ui/sonner";
import { generateOrganizationSchema } from "@/lib/schema";
import { ClarityInit } from "@/components/analytics/ClarityInit";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luminasky.com"),
  title: {
    default:
      "Window & Glass Repair Toronto - Fix, Don't Replace | LuminaSky",
    template: "%s | LuminaSky",
  },
  description:
    "Professional glass and door repair services in the GTA. Foggy glass, door glass, window cranks, skylights & more. Fast, licensed & insured. Call 437-344-8490.",
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
        {/* Google Analytics 4 */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        <ClarityInit />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <SourceTracker />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
