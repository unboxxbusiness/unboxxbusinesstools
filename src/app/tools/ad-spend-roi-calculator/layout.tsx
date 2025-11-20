import type { Metadata } from "next";

const title = "Ad Spend ROI Calculator";
const description = "Calculate the return on your ad spend based on admissions generated and understand the profitability of your marketing campaigns.";

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
    canonical: "/tools/ad-spend-roi-calculator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
