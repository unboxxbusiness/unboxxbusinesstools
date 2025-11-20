import BackButton from "@/components/absentee-follow-up-script-generator/BackButton";
import HowToUse from "@/components/absentee-follow-up-script-generator/HowToUse";
import AbsenteeFollowUpTool from "@/components/absentee-follow-up-script-generator/AbsenteeFollowUpTool";

export default function AbsenteeFollowUpPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Absentee Follow-Up Script Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Generates templates for students who registered but didn’t attend a demo, helping you re-engage them effectively.
        </p>
      </div>

      <AbsenteeFollowUpTool />

      <HowToUse />
    </div>
  );
}
