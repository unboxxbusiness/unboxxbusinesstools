import AdBudgetPlannerTool from "@/components/ad-budget-planner/AdBudgetPlannerTool";
import BackButton from "@/components/ad-budget-planner/BackButton";
import HowToUse from "@/components/ad-budget-planner/HowToUse";

export default function AdBudgetPlannerPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Ad Budget Planner</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Estimate your expected leads and admissions based on your monthly ad spend and key marketing metrics.
        </p>
      </div>

      <AdBudgetPlannerTool />

      <HowToUse />
    </div>
  );
}
