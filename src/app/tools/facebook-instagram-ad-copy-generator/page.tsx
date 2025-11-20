import AdCopyGeneratorTool from "@/components/facebook-instagram-ad-copy-generator/AdCopyGeneratorTool";
import BackButton from "@/components/facebook-instagram-ad-copy-generator/BackButton";
import HowToUse from "@/components/facebook-instagram-ad-copy-generator/HowToUse";

export default function AdCopyGeneratorPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Facebook/Instagram Ad Copy Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Provides short, medium, and long ad copy templates based on your course and offer, saving you time on ad creation.
        </p>
      </div>

      <AdCopyGeneratorTool />

      <HowToUse />
    </div>
  );
}
