import BackButton from "@/components/landing-page-headline-generator/BackButton";
import HeadlineGeneratorTool from "@/components/landing-page-headline-generator/HeadlineGeneratorTool";
import HowToUse from "@/components/landing-page-headline-generator/HowToUse";

export default function LandingPageHeadlineGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Landing Page Headline Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates effective one-line headlines for coaching landing pages based on your course and key highlights.
        </p>
      </div>

      <HeadlineGeneratorTool />

      <HowToUse />
    </div>
  );
}
