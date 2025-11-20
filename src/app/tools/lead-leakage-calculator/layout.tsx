import type { Metadata } from "next";

const title = "Lead Leakage Calculator";
const description = "See how much potential revenue you're losing from unanswered inquiries and missed follow-ups. Quantify your lead leakage now.";

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
    canonical: "/tools/lead-leakage-calculator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
