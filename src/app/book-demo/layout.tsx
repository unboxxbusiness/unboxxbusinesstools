import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Schedule a free demo to see how AI can automate your admissions.",
};

export default function BookDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
