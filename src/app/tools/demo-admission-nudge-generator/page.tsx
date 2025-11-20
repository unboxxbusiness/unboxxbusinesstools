import BackButton from "@/components/demo-admission-nudge-generator/BackButton";
import DemoAdmissionNudgeTool from "@/components/demo-admission-nudge-generator/DemoAdmissionNudgeTool";
import HowToUse from "@/components/demo-admission-nudge-generator/HowToUse";

export default function DemoAdmissionNudgeGeneratorPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Demo → Admission Nudge Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates follow-up messages after a demo class to help convert warm leads into paying students.
        </p>
      </div>

      <DemoAdmissionNudgeTool />

      <HowToUse />
    </div>
  );
}
