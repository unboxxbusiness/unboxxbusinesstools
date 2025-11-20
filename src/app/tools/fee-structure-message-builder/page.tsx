import BackButton from "@/components/fee-structure-message-builder/BackButton";
import FeeStructureMessageBuilderTool from "@/components/fee-structure-message-builder/FeeStructureMessageBuilderTool";
import HowToUse from "@/components/fee-structure-message-builder/HowToUse";

export default function FeeStructureMessageBuilderPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Fee Structure Message Builder</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Converts your course fee details into a clear, professional WhatsApp message for parents and students.
        </p>
      </div>

      <FeeStructureMessageBuilderTool />

      <HowToUse />
    </div>
  );
}
