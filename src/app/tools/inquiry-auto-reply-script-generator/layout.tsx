import type { Metadata } from "next";

const title = "Inquiry Auto-Reply Script Generator";
const description = "Create professional, ready-to-use auto-reply scripts for common student inquiries about fees, timings, and course details.";

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
    canonical: "/tools/inquiry-auto-reply-script-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
