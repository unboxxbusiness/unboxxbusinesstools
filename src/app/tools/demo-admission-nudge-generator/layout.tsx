import type { Metadata } from "next";

const title = "Demo → Admission Nudge Generator";
const description = "Create follow-up messages to send after a demo class to help convert warm leads into paying students.";

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
    canonical: "/tools/demo-admission-nudge-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
