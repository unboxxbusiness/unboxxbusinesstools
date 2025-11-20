import type { Metadata } from "next";

const title = "Ad Budget Planner";
const description = "Estimate your expected leads and admissions based on your monthly ad spend and key marketing metrics to forecast growth.";

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
    canonical: "/tools/ad-budget-planner",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
