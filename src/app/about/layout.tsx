import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission to help coaching institutes fix lead handling and boost admissions with free tools and AI automation.",
  openGraph: {
    title: "About Us | Unboxx Business",
    description: "Learn about our mission to help coaching institutes fix lead handling and boost admissions with free tools and AI automation.",
  },
  twitter: {
    title: "About Us | Unboxx Business",
    description: "Learn about our mission to help coaching institutes fix lead handling and boost admissions with free tools and AI automation.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
