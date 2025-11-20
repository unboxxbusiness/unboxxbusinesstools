import type { Metadata } from "next";

const title = "Lead Source Tracker";
const description = "Track where your inquiries come from (e.g., Ads, YouTube, Walk-ins) to find your most valuable marketing channels and optimize spend.";

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
    canonical: "/tools/lead-source-tracker",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
