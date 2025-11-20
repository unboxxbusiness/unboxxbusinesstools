import type { Metadata } from "next";

const title = "Voice Note Follow-Up Script Generator";
const description = "Generate short, personal voice-note scripts (10–20 seconds) that are more personal than text and can boost response rates.";

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
    canonical: "/tools/voice-note-follow-up-script-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
