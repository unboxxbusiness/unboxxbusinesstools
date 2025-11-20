import BackButton from "@/components/demo-reminder-message-builder/BackButton";
import DemoReminderTool from "@/components/demo-reminder-message-builder/DemoReminderTool";
import HowToUse from "@/components/demo-reminder-message-builder/HowToUse";

export default function DemoReminderBuilderPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Demo Reminder Message Builder</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates 24-hour, 1-hour, and last-minute demo reminders to ensure higher attendance and reduce no-shows.
        </p>
      </div>

      <DemoReminderTool />

      <HowToUse />
    </div>
  );
}
