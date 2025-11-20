import type { Metadata } from "next";

const title = "Inquiry Qualification Checklist Tool";
const description = "Create a checklist that counsellors can use to identify lead intent and classify leads as Hot, Warm, or Cold for better prioritization.";

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
    canonical: "/tools/inquiry-qualification-checklist-tool",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
