import type { Metadata } from "next";

const title = "Admission Deadline Reminder Generator";
const description = "Create urgency-based reminders (last date, few seats left) to boost conversion using soft urgency and clear calls-to-action.";

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
    canonical: "/tools/admission-deadline-reminder-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
