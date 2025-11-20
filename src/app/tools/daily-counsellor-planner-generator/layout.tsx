import type { Metadata } from "next";

const title = "Daily Counsellor Planner Generator";
const description = "Create a printable daily plan for counsellors, including lead priorities, follow-ups, calls, and demos to improve productivity.";

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
    canonical: "/tools/daily-counsellor-planner-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
