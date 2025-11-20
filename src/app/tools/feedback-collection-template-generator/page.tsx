import BackButton from "@/components/feedback-collection-template-generator/BackButton";
import FeedbackTemplateTool from "@/components/feedback-collection-template-generator/FeedbackTemplateTool";
import HowToUse from "@/components/feedback-collection-template-generator/HowToUse";

export default function FeedbackCollectionTemplateGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Feedback Collection Template Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates feedback message templates to send after a demo, helping you understand student interest and gather insights for follow-ups.
        </p>
      </div>

      <FeedbackTemplateTool />

      <HowToUse />
    </div>
  );
}
