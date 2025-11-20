import BenefitsSection from "@/components/BenefitsSection";
import Features from "@/components/Features";
import FinalCtaSection from "@/components/FinalCtaSection";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ToolsByCategory from "@/components/ToolsByCategory";
import ToolsShowcase from "@/components/ToolsShowcase";
import Script from 'next/script';

const siteConfig = {
  name: "UBX",
  url: "https://ubx.com", // Replace with your actual domain
  description: "Free tools and AI automation to help coaching institutes fix lead handling, improve follow-ups, and boost admissions.",
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.name,
  "url": siteConfig.url,
  "description": siteConfig.description,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${siteConfig.url}/tools?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data-home"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex flex-col items-center">
        <HeroSection />
        <Features />
        <ToolsShowcase />
        <HowItWorks />
        <ToolsByCategory />
        <BenefitsSection />
        <FinalCtaSection />
      </main>
    </>
  );
}
