import type { Metadata } from "next";

const title = "30-Day Nurture Calendar Generator";
const description = "Create a month-long engagement plan for undecided leads, with weekly reminders, value messages, and gentle nudges to keep them warm.";

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
    canonical: "/tools/30-day-nurture-calendar-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
