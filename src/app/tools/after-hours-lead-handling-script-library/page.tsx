import AfterHoursScriptTool from "@/components/after-hours-lead-handling-script-library/AfterHoursScriptTool";
import BackButton from "@/components/after-hours-lead-handling-script-library/BackButton";
import HowToUse from "@/components/after-hours-lead-handling-script-library/HowToUse";

export default function AfterHoursLeadHandlingPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">After-Hours Lead Handling Script Library</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Ensures no lead is ignored even after business hours with polite, ready-to-use auto-reply templates.
        </p>
      </div>

      <AfterHoursScriptTool />

      <HowToUse />
    </div>
  );
}
