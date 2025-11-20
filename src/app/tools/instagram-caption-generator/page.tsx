import BackButton from "@/components/instagram-caption-generator/BackButton";
import HowToUse from "@/components/instagram-caption-generator/HowToUse";
import InstagramCaptionTool from "@/components/instagram-caption-generator/InstagramCaptionTool";

export default function InstagramCaptionGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Instagram Caption Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates engaging caption templates with relevant hashtags for educational marketing on Instagram.
        </p>
      </div>

      <InstagramCaptionTool />

      <HowToUse />
    </div>
  );
}
