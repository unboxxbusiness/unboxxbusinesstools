import type { Metadata } from "next";

const title = "'Still Interested?' Message Builder";
const description = "Create short, polite nudges to check student interest and revive semi-active leads who have gone silent.";

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
    canonical: "/tools/still-interested-message-builder",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
