import type { Metadata } from "next";

const title = "Fee Structure Message Builder";
const description = "Convert your course fee details into a clear, professional WhatsApp message to send to parents and students.";

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
    canonical: "/tools/fee-structure-message-builder",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
