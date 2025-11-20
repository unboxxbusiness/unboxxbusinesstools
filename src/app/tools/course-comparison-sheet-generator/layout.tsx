import type { Metadata } from "next";

const title = "Course Comparison Sheet Generator";
const description = "Create a clear side-by-side comparison of two courses or plans (e.g., Basic vs. Premium) to help students and parents decide.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title: `${title} | Unboxx Business Tools`,
    description,
  },
  twitter: {
    title: `${title} | Unboxx Business Tools`,
    description,
  },
  alternates: {
    canonical: "/tools/course-comparison-sheet-generator",
  },
};

export default function ToolLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
