import BackButton from "@/components/fee-installment-breakdown-generator/BackButton";
import FeeInstallmentTool from "@/components/fee-installment-breakdown-generator/FeeInstallmentTool";
import HowToUse from "@/components/fee-installment-breakdown-generator/HowToUse";

export default function FeeInstallmentGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Fee Installment Breakdown Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates clear payment schedules with fixed timelines and due dates, helping parents understand their financial commitment.
        </p>
      </div>

      <FeeInstallmentTool />

      <HowToUse />
    </div>
  );
}
