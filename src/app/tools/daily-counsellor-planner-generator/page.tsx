import BackButton from "@/components/daily-counsellor-planner-generator/BackButton";
import HowToUse from "@/components/daily-counsellor-planner-generator/HowToUse";
import DailyPlannerTool from "@/components/daily-counsellor-planner-generator/DailyPlannerTool";

export default function DailyCounsellorPlannerPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12 print:hidden">
        <h1 className="text-4xl font-bold tracking-tight">Daily Counsellor Planner Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates a printable daily plan for counsellors, including lead priorities, follow-ups, calls, and demos to improve productivity.
        </p>
      </div>

      <DailyPlannerTool />

      <HowToUse />
    </div>
  );
}
