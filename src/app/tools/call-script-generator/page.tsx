import BackButton from "@/components/call-script-generator/BackButton";
import CallScriptGeneratorTool from "@/components/call-script-generator/CallScriptGeneratorTool";
import HowToUse from "@/components/call-script-generator/HowToUse";

export default function CallScriptGeneratorPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Call Script Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Provides ready-to-use call scripts for counsellors covering intros, questions, objections, and closing.
        </p>
      </div>

      <CallScriptGeneratorTool />

      <HowToUse />
    </div>
  );
}
