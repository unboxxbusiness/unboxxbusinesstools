import BackButton from "@/components/objection-handling-script-library/BackButton";
import HowToUse from "@/components/objection-handling-script-library/HowToUse";
import ObjectionHandlingTool from "@/components/objection-handling-script-library/ObjectionHandlingTool";

export default function ObjectionHandlingScriptLibraryPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Objection Handling Script Library</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Provides counsellors with effective templates to respond confidently to common objections like "it's too costly" or "I need to think about it."
        </p>
      </div>

      <ObjectionHandlingTool />

      <HowToUse />
    </div>
  );
}
