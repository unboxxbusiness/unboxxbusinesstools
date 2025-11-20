import type { Metadata } from "next";

const title = "Demo Reminder Message Builder";
const description = "Create 24-hour, 1-hour, and last-minute demo reminders to ensure higher attendance and reduce no-shows.";

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
    canonical: "/tools/demo-reminder-message-builder",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
