import BackButton from "@/components/counsellor-sop-builder/BackButton";
import HowToUse from "@/components/counsellor-sop-builder/HowToUse";
import SopBuilderTool from "@/components/counsellor-sop-builder/SopBuilderTool";

export default function CounsellorSopBuilderPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Counsellor SOP Builder</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates Standard Operating Procedures (SOPs) covering lead handling, follow-ups, and demo preparation to improve team consistency.
        </p>
      </div>

      <SopBuilderTool />

      <HowToUse />
    </div>
  );
}
