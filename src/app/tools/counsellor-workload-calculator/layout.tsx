import type { Metadata } from "next";

const title = "Counsellor Workload Calculator";
const description = "Calculate the daily hours your team spends handling leads, identify overload areas, and build a case for automation.";

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
    canonical: "/tools/counsellor-workload-calculator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
