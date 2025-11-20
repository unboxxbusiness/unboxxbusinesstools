import BackButton from "@/components/missed-call-follow-up-message-generator/BackButton";
import HowToUse from "@/components/missed-call-follow-up-message-generator/HowToUse";
import MissedCallFollowUpTool from "@/components/missed-call-follow-up-message-generator/MissedCallFollowUpTool";

export default function MissedCallFollowUpPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Missed-Call Follow-Up Message Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates professional templates for returning missed calls with proper context, ensuring you never drop a high-intent lead.
        </p>
      </div>

      <MissedCallFollowUpTool />

      <HowToUse />
    </div>
  );
}
