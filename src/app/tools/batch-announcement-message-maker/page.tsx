import BackButton from "@/components/batch-announcement-message-maker/BackButton";
import HowToUse from "@/components/batch-announcement-message-maker/HowToUse";
import BatchAnnouncementTool from "@/components/batch-announcement-message-maker/BatchAnnouncementTool";

export default function BatchAnnouncementMessageMakerPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Batch Announcement Message Maker</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Creates clear and effective WhatsApp/SMS messages for announcing new batches, including date, time, fee, and a call-to-action.
        </p>
      </div>

      <BatchAnnouncementTool />

      <HowToUse />
    </div>
  );
}
