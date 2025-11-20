import type { Metadata } from "next";

const title = "Missed-Call Follow-Up Message Generator";
const description = "Generate professional templates for returning missed calls with proper context, ensuring you never lose a high-intent lead.";

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
    canonical: "/tools/missed-call-follow-up-message-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
