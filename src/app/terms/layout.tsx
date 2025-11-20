import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read our terms of use.",
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}