import type { Metadata } from "next";

const title = "WhatsApp Templates Library (100+)";
const description = "A comprehensive library of copy-paste templates for follow-ups, fees, demos, and more to streamline your WhatsApp communication.";

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
    canonical: "/tools/whatsapp-templates-library",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
