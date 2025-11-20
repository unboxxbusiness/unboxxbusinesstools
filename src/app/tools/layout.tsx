import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Tools for Coaching Institutes",
  description: "Explore our complete suite of free tools designed to help coaching institutes manage leads, improve communication, and boost admissions.",
  openGraph: {
    title: "Free Tools for Coaching Institutes | Unboxx Business",
    description: "Explore our complete suite of free tools designed to help coaching institutes manage leads, improve communication, and boost admissions.",
  },
  twitter: {
    title: "Free Tools for Coaching Institutes | Unboxx Business",
    description: "Explore our complete suite of free tools designed to help coaching institutes manage leads, improve communication, and boost admissions.",
  },
  alternates: {
    canonical: "/tools",
  },
};

export default function ToolsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
