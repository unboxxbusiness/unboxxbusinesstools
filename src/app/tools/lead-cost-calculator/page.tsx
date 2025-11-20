import BackButton from "@/components/lead-cost-calculator/BackButton";
import LeadCostCalculatorTool from "@/components/lead-cost-calculator/LeadCostCalculatorTool";
import HowToUse from "@/components/lead-cost-calculator/HowToUse";

export default function LeadCostCalculatorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Lead Cost Calculator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Calculate your CPL, CPD, and CPA to understand the real performance of your ad campaigns and optimize your spend.
        </p>
      </div>

      <LeadCostCalculatorTool />

      <HowToUse />
    </div>
  );
}
