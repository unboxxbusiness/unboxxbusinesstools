import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Read our Terms of Use to understand the rules and guidelines for using our website, tools, and resources.",
  openGraph: {
    title: "Terms of Use | Unboxx Business",
    description: "Read our Terms of Use to understand the rules and guidelines for using our website, tools, and resources.",
  },
  twitter: {
    title: "Terms of Use | Unboxx Business",
    description: "Read our Terms of Use to understand the rules and guidelines for using our website, tools, and resources.",
  },
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
