import BackButton from "@/components/cta-library-tool/BackButton";
import CtaLibraryTool from "@/components/cta-library-tool/CtaLibraryTool";
import HowToUse from "@/components/cta-library-tool/HowToUse";

export default function CtaLibraryPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">CTA Library Tool</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A library of 100+ ready-to-use calls-to-action for ads, landing pages, and WhatsApp messages to improve conversion rates.
        </p>
      </div>

      <CtaLibraryTool />

      <HowToUse />
    </div>
  );
}
