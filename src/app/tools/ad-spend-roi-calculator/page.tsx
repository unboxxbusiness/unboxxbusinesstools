import AdSpendRoiCalculatorTool from "@/components/ad-spend-roi-calculator/AdSpendRoiCalculatorTool";
import BackButton from "@/components/ad-spend-roi-calculator/BackButton";
import HowToUse from "@/components/ad-spend-roi-calculator/HowToUse";

export default function AdSpendRoiCalculatorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Ad Spend ROI Calculator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Shows return on ad spend based on admissions generated and helps you understand profitability.
        </p>
      </div>

      <AdSpendRoiCalculatorTool />

      <HowToUse />
    </div>
  );
}
