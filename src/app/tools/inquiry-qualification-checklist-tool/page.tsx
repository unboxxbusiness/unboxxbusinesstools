import BackButton from "@/components/inquiry-qualification-checklist-tool/BackButton";
import HowToUse from "@/components/inquiry-qualification-checklist-tool/HowToUse";
import InquiryChecklistTool from "@/components/inquiry-qualification-checklist-tool/InquiryChecklistTool";

export default function InquiryQualificationChecklistPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Inquiry Qualification Checklist Tool</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates a checklist that counsellors can use to identify lead intent and classify leads as Hot, Warm, or Cold.
        </p>
      </div>

      <InquiryChecklistTool />

      <HowToUse />
    </div>
  );
}
