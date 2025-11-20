import BackButton from "@/components/voice-note-follow-up-script-generator/BackButton";
import HowToUse from "@/components/voice-note-follow-up-script-generator/HowToUse";
import VoiceNoteFollowUpTool from "@/components/voice-note-follow-up-script-generator/VoiceNoteFollowUpTool";

export default function VoiceNoteFollowUpPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Voice Note Follow-Up Script Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Provides short, personal voice-note scripts (10–20 seconds) that are more personal than text messages and can boost response rates.
        </p>
      </div>

      <VoiceNoteFollowUpTool />

      <HowToUse />
    </div>
  );
}
