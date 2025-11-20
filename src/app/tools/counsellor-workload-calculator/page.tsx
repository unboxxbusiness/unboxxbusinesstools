import BackButton from "@/components/counsellor-workload-calculator/BackButton";
import CounsellorWorkloadTool from "@/components/counsellor-workload-calculator/CounsellorWorkloadTool";
import HowToUse from "@/components/counsellor-workload-calculator/HowToUse";

export default function CounsellorWorkloadCalculatorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Counsellor Workload Calculator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Calculates daily hours your team spends handling leads, identifies overload areas, and helps justify automation.
        </p>
      </div>

      <CounsellorWorkloadTool />

      <HowToUse />
    </div>
  );
}
