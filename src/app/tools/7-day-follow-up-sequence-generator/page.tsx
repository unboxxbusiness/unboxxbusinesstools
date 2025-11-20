import BackButton from "@/components/7-day-follow-up-sequence-generator/BackButton";
import FollowUpSequenceTool from "@/components/7-day-follow-up-sequence-generator/FollowUpSequenceTool";
import HowToUse from "@/components/7-day-follow-up-sequence-generator/HowToUse";

export default function FollowUpSequenceGeneratorPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">7-Day Follow-Up Sequence Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates a complete 7-day WhatsApp follow-up plan to ensure structured nurturing for new inquiries.
        </p>
      </div>

      <FollowUpSequenceTool />

      <HowToUse />
    </div>
  );
}
