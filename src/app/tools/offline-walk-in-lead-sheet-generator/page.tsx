import BackButton from "@/components/offline-walk-in-lead-sheet-generator/BackButton";
import HowToUse from "@/components/offline-walk-in-lead-sheet-generator/HowToUse";
import OfflineLeadSheetGenerator from "@/components/offline-walk-in-lead-sheet-generator/OfflineLeadSheetGenerator";

export default function OfflineLeadSheetGeneratorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Offline Walk-In Lead Sheet Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates a printable lead capture sheet for walk-in visitors to help you organize offline leads systematically.
        </p>
      </div>

      <OfflineLeadSheetGenerator />

      <HowToUse />
    </div>
  );
}
