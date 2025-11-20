import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read our privacy policy to understand how we collect, use, and protect your information when you use our website and tools.",
  openGraph: {
    title: "Privacy Policy | Unboxx Business",
    description: "Read our privacy policy to understand how we collect, use, and protect your information when you use our website and tools.",
  },
  twitter: {
    title: "Privacy Policy | Unboxx Business",
    description: "Read our privacy policy to understand how we collect, use, and protect your information when you use our website and tools.",
  },
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
