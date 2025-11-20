import BackButton from "@/components/contact-form-whatsapp-message-template-tool/BackButton";
import HowToUse from "@/components/contact-form-whatsapp-message-template-tool/HowToUse";
import WhatsappMessageTool from "@/components/contact-form-whatsapp-message-template-tool/WhatsappMessageTool";

export default function ContactFormToWhatsappPage() {
  return (
    <div className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Contact Form → WhatsApp Message Template Tool</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Converts form submissions into clean WhatsApp callback messages, helping counsellors respond quickly and with clarity.
        </p>
      </div>

      <WhatsappMessageTool />

      <HowToUse />
    </div>
  );
}
