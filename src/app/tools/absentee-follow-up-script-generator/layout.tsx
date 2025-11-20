import type { Metadata } from "next";

const title = "Absentee Follow-Up Script Generator";
const description = "Generate effective message templates for students who registered but didn’t attend a demo, helping you re-engage them effectively.";

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
    canonical: "/tools/absentee-follow-up-script-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
