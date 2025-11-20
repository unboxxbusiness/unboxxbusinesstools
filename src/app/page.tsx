import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import ToolsByCategory from "@/components/ToolsByCategory";
import ToolsShowcase from "@/components/ToolsShowcase";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ToolsShowcase />
      <ToolsByCategory />
      <HowItWorks />
    </>
  );
}
