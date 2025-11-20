import BackButton from "@/components/conversion-rate-analyzer/BackButton";
import ConversionRateAnalyzerTool from "@/components/conversion-rate-analyzer/ConversionRateAnalyzerTool";
import HowToUse from "@/components/conversion-rate-analyzer/HowToUse";

export default function ConversionRateAnalyzerPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Conversion Rate Analyzer</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Calculate your key conversion rates and identify bottlenecks in your student admission funnel.
        </p>
      </div>

      <ConversionRateAnalyzerTool />

      <HowToUse />
    </div>
  );
}
