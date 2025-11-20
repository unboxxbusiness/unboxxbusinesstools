import type { Metadata } from "next";

const title = "Contact Form → WhatsApp Message Template Tool";
const description = "Converts form submissions into clean WhatsApp callback messages, helping counsellors respond quickly and with full context.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | UBX Tools`,
    description,
  },
  twitter: {
    title: `${title} | UBX Tools`,
    description,
  },
  alternates: {
    canonical: "/tools/contact-form-whatsapp-message-template-tool",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
