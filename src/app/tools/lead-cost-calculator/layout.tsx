import type { Metadata } from "next";

const title = "Lead Cost Calculator";
const description = "Calculate your CPL, CPD, and CPA to understand the real performance of your ad campaigns and optimize your marketing spend.";

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
    canonical: "/tools/lead-cost-calculator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
