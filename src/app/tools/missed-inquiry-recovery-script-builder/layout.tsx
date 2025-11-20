import type { Metadata } from "next";

const title = "Missed Inquiry Recovery Script Builder";
const description = "Generate polite apology templates to recover inquiries that were not replied to in time, helping you restart the conversation.";

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
    canonical: "/tools/missed-inquiry-recovery-script-builder",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
