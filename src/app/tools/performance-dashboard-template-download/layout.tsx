import type { Metadata } from "next";

const title = "Performance Dashboard Template";
const description = "Download a free Google Sheet for tracking leads, admissions, and weekly/monthly performance to monitor your admissions funnel health.";

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
    canonical: "/tools/performance-dashboard-template-download",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
