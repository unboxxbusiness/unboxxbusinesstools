import BackButton from "@/components/performance-dashboard-template-download/BackButton";
import HowToUse from "@/components/performance-dashboard-template-download/HowToUse";
import PerformanceDashboardTool from "@/components/performance-dashboard-template-download/PerformanceDashboardTool";

export default function PerformanceDashboardTemplatePage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Performance Dashboard Template</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A downloadable Google Sheet for tracking leads, admissions, and weekly/monthly performance.
        </p>
      </div>

      <PerformanceDashboardTool />

      <HowToUse />
    </div>
  );
}
