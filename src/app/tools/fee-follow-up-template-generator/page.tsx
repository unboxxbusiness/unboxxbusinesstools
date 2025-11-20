import BackButton from "@/components/fee-follow-up-template-generator/BackButton";
import FeeFollowUpTool from "@/components/fee-follow-up-template-generator/FeeFollowUpTool";
import HowToUse from "@/components/fee-follow-up-template-generator/HowToUse";

export default function FeeFollowUpTemplateGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Fee Follow-Up Template Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates structured follow-up messages after fee explanation to help push leads closer to admission.
        </p>
      </div>

      <FeeFollowUpTool />

      <HowToUse />
    </div>
  );
}
