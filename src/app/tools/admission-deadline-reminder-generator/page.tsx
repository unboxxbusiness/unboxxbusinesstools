import BackButton from "@/components/admission-deadline-reminder-generator/BackButton";
import HowToUse from "@/components/admission-deadline-reminder-generator/HowToUse";
import AdmissionDeadlineReminderTool from "@/components/admission-deadline-reminder-generator/AdmissionDeadlineReminderTool";

export default function AdmissionDeadlineReminderGeneratorPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Admission Deadline Reminder Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates urgency-based reminders (last date, few seats left) to boost conversion using soft urgency.
        </p>
      </div>

      <AdmissionDeadlineReminderTool />

      <HowToUse />
    </div>
  );
}
