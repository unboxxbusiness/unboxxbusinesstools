import BackButton from "@/components/offer-message-builder/BackButton";
import HowToUse from "@/components/offer-message-builder/HowToUse";
import OfferMessageBuilderTool from "@/components/offer-message-builder/OfferMessageBuilderTool";

export default function OfferMessageBuilderPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Offer Message Builder</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Create templates for festival, seasonal, or early-bird offers to improve promotional messaging and boost admissions.
        </p>
      </div>

      <OfferMessageBuilderTool />

      <HowToUse />
    </div>
  );
}
