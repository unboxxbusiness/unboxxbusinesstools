import type { Metadata } from "next";

const title = "Batch Announcement Message Maker";
const description = "Create clear and effective WhatsApp/SMS messages for announcing new batches, including date, time, fee, and a call-to-action.";

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
    canonical: "/tools/batch-announcement-message-maker",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
