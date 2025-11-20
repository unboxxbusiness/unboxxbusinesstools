import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free Demo",
  description: "Schedule a free demo to see how AI can automate your admissions process, from lead capture to follow-ups and enrollment.",
  openGraph: {
    title: "Book a Free Demo | UBX",
    description: "Schedule a free demo to see how AI can automate your admissions process, from lead capture to follow-ups and enrollment.",
  },
  twitter: {
    title: "Book a Free Demo | UBX",
    description: "Schedule a free demo to see how AI can automate your admissions process, from lead capture to follow-ups and enrollment.",
  },
  alternates: {
    canonical: "/book-demo",
  },
};

export default function BookDemoLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
