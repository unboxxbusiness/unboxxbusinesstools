import type { Metadata } from "next";

const title = "Offline Walk-In Lead Sheet Generator";
const description = "Create a printable lead capture sheet for walk-in visitors to help you organize offline leads systematically and professionally.";

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
    canonical: "/tools/offline-walk-in-lead-sheet-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
