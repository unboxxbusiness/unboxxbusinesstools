import type { Metadata } from "next";

const title = "Objection Handling Script Library";
const description = "Provides counsellors with effective templates to respond confidently to common objections like 'it's too costly' or 'I need to think'.";

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
    canonical: "/tools/objection-handling-script-library",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
