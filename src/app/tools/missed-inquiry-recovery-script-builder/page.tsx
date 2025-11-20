import BackButton from "@/components/missed-inquiry-recovery-script-builder/BackButton";
import HowToUse from "@/components/missed-inquiry-recovery-script-builder/HowToUse";
import MissedInquiryRecoveryTool from "@/components/missed-inquiry-recovery-script-builder/MissedInquiryRecoveryTool";

export default function MissedInquiryRecoveryPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Missed Inquiry Recovery Script Builder</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates polite templates to recover inquiries that were not replied to in time, helping you restart the conversation.
        </p>
      </div>

      <MissedInquiryRecoveryTool />

      <HowToUse />
    </div>
  );
}
