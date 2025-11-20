import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { HeroHeader } from "@/components/header";
import { Footer } from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const siteConfig = {
  name: "UBX",
  url: "https://ubx.com", // Replace with your actual domain
  description: "Free tools to fix lead handling and boost admissions for coaching institutes.",
};

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
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
  icons: {
    icon: "/favicon.ico",
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
        <GoogleAnalytics />
        <HeroHeader />
        {children}
        <Footer />
        <FloatingWhatsAppButton />
        <ScrollToTopButton />
      </body>
    </html>
  );
}
