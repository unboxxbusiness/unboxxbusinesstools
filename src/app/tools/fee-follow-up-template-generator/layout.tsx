import type { Metadata } from "next";

const title = "Fee Follow-Up Template Generator";
const description = "Create structured follow-up messages to send after a fee explanation to help push leads closer to admission.";

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
    canonical: "/tools/fee-follow-up-template-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
