import type { Metadata } from "next";

const title = "7-Day Follow-Up Sequence Generator";
const description = "Generates a complete 7-day WhatsApp follow-up plan to ensure structured nurturing for new inquiries and increase conversion rates.";

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
    canonical: "/tools/7-day-follow-up-sequence-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
