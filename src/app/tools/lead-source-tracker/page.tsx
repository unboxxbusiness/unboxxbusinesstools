import BackButton from "@/components/lead-source-tracker/BackButton";
import HowToUse from "@/components/lead-source-tracker/HowToUse";
import LeadSourceTrackerTool from "@/components/lead-source-tracker/LeadSourceTrackerTool";

export default function LeadSourceTrackerPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Lead Source Tracker</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Helps institutes track where their inquiries come from (Ads, YouTube, Instagram, Walk-ins, etc.) to optimize marketing spend.
        </p>
      </div>

      <LeadSourceTrackerTool />

      <HowToUse />
    </div>
  );
}
