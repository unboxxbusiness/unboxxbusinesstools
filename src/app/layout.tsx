import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  name: "Unboxx Business",
  url: "https://unboxxbusiness.com",
  description: "Free tools and AI automation to help coaching institutes fix lead handling, improve follow-ups, and boost admissions.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Unboxx Business | Free Tools & AI for Coaching Institutes",
    template: `%s | Unboxx Business`,
  },
  description: siteConfig.description,
  keywords: ["coaching institute tools", "lead handling", "admission automation", "education marketing", "lead leakage calculator", "follow-up templates"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/og-image.png", // Update with your actual OG image path
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    // Add your Twitter handle if you have one
    // creator: "@yourhandle", 
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-pt-[3.5rem]">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.className)}>
        <Suspense>
          <GoogleAnalytics />
        </Suspense>
        <HeroHeader />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
