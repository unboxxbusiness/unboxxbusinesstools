import BackButton from "@/components/whatsapp-templates-library/BackButton";
import HowToUse from "@/components/whatsapp-templates-library/HowToUse";
import WhatsappTemplatesLibraryTool from "@/components/whatsapp-templates-library/WhatsappTemplatesLibraryTool";

export default function WhatsappTemplatesLibraryPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">WhatsApp Templates Library (100+)</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          A comprehensive library of copy-paste templates for follow-ups, fees, demos, reminders, and more to streamline your communication.
        </p>
      </div>

      <WhatsappTemplatesLibraryTool />

      <HowToUse />
    </div>
  );
}
