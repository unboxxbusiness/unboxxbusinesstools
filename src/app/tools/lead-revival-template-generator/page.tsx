import BackButton from "@/components/lead-revival-template-generator/BackButton";
import HowToUse from "@/components/lead-revival-template-generator/HowToUse";
import LeadRevivalTool from "@/components/lead-revival-template-generator/LeadRevivalTool";

export default function LeadRevivalTemplateGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Lead Revival Template Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates messages for cold leads who stopped responding, helping you re-engage old inquiries with non-pushy prompts.
        </p>
      </div>

      <LeadRevivalTool />

      <HowToUse />
    </div>
  );
}
