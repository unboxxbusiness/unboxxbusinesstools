import type { Metadata } from "next";

const title = "Conversion Rate Analyzer";
const description = "Calculate your key conversion rates (Lead-to-Demo, Demo-to-Admission) and identify bottlenecks in your student admission funnel.";

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
    canonical: "/tools/conversion-rate-analyzer",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
