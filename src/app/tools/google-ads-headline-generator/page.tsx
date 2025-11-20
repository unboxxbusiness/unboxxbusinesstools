import BackButton from "@/components/google-ads-headline-generator/BackButton";
import GoogleAdsHeadlineTool from "@/components/google-ads-headline-generator/GoogleAdsHeadlineTool";
import HowToUse from "@/components/google-ads-headline-generator/HowToUse";

export default function GoogleAdsHeadlineGeneratorPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Google Ads Headline Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates packs of 15-30 SEO-friendly headline variations for search ads based on your keywords and course type.
        </p>
      </div>

      <GoogleAdsHeadlineTool />

      <HowToUse />
    </div>
  );
}
