import BackButton from "@/components/still-interested-message-builder/BackButton";
import HowToUse from "@/components/still-interested-message-builder/HowToUse";
import StillInterestedTool from "@/components/still-interested-message-builder/StillInterestedTool";

export default function StillInterestedPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">"Still Interested?" Message Builder</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates short, polite nudges to check student interest and revive semi-active leads.
        </p>
      </div>

      <StillInterestedTool />

      <HowToUse />
    </div>
  );
}
