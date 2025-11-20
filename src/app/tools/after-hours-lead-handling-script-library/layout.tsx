import type { Metadata } from "next";

const title = "After-Hours Lead Handling Script Library";
const description = "Ensure no lead is ignored even after business hours with polite, ready-to-use auto-reply templates for WhatsApp and SMS.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Unboxx Business Tools`,
    description,
  },
  twitter: {
    title: `${title} | Unboxx Business Tools`,
    description,
  },
  alternates: {
    canonical: "/tools/after-hours-lead-handling-script-library",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
