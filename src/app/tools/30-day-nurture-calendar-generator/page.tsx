import BackButton from "@/components/30-day-nurture-calendar-generator/BackButton";
import HowToUse from "@/components/30-day-nurture-calendar-generator/HowToUse";
import NurtureCalendarTool from "@/components/30-day-nurture-calendar-generator/NurtureCalendarTool";

export default function NurtureCalendarGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">30-Day Nurture Calendar Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates a month-long engagement plan for undecided leads, with weekly reminders, value messages, and gentle nudges.
        </p>
      </div>

      <NurtureCalendarTool />

      <HowToUse />
    </div>
  );
}
