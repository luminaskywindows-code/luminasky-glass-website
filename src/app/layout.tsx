import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { SourceTracker } from "@/components/layout/SourceTracker";
import { Toaster } from "@/components/ui/sonner";
import { generateOrganizationSchema } from "@/lib/schema";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luminasky.com"),
  title: {
    default:
      "Glass & Door Repair in the GTA | LuminaSky Glass Services",
    template: "%s | LuminaSky Glass Services",
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
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
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
