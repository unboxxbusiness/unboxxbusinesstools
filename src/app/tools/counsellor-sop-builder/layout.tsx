import type { Metadata } from "next";

const title = "Counsellor SOP Builder";
const description = "Generate Standard Operating Procedures (SOPs) for your team covering lead handling, follow-ups, and demo preparation to improve consistency.";

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
    canonical: "/tools/counsellor-sop-builder",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
