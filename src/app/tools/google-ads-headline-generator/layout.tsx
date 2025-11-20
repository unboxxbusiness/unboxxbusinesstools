import type { Metadata } from "next";

const title = "Google Ads Headline Generator";
const description = "Create packs of 15-30 SEO-friendly headline variations for your Google search ads based on your keywords and course type.";

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
    canonical: "/tools/google-ads-headline-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
