import type { Metadata } from "next";

const title = "CTA Library Tool";
const description = "Access a library of 100+ ready-to-use calls-to-action for ads, landing pages, and WhatsApp messages to improve conversion rates.";

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
    canonical: "/tools/cta-library-tool",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
