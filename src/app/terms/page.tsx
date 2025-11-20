import { Mail } from "lucide-react";

export default function TermsPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <main className="container mx-auto max-w-3xl py-24 px-6">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">⭐ TERMS OF USE</h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdatedDate}</p>
        </div>
        
        <p>Welcome to our website. By accessing or using this platform, you agree to the following Terms of Use. If you do not agree, please do not use the website or any of its tools, templates, or resources.</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p>By using this website, its tools, templates, scripts, and resources, you agree to be bound by these Terms of Use and our Privacy Policy.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Use of Our Tools & Resources</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>All tools, templates, calculators, and scripts provided here are for informational and educational purposes only.</li>
            <li>You may use them for personal or business use, but you may not resell, copy, or redistribute them as your own.</li>
            <li>We do not guarantee exact results, conversions, or performance outcomes from using any tool.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. No Professional Advice</h2>
          <p>Our tools and templates are not legal, financial, or professional advice. They are general-purpose resources for improving lead handling and admissions processes.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. User Responsibilities</h2>
          <p>By using this platform, you agree:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Not to misuse any tool or feature</li>
            <li>Not to attempt to disrupt the website or servers</li>
            <li>Not to copy or reproduce the platform’s content without permission</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Accuracy of Information</h2>
          <p>We try to keep all information, templates, and tools accurate and updated, but we do not guarantee:</p>
          <ul className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>100% accuracy</li>
            <li>Error-free outputs</li>
            <li>Specific admission results, lead numbers, or conversions</li>
          </ul>
          <p>Use the tools at your own discretion.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Automation Services</h2>
          <p>If you book a demo or subscribe to our AI automation services:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>You agree to provide accurate information</li>
            <li>You understand that results depend on your institute’s processes, communication, and execution</li>
            <li>We reserve the right to accept or decline service requests</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
          <p>Some tools or resources may contain links to third-party platforms. We are not responsible for:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>External content</li>
            <li>External services</li>
            <li>Privacy practices of those sites</li>
          </ul>
           <p>Use them at your own risk.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Intellectual Property</h2>
          <p>All tools, templates, scripts, designs, and content on this website are our intellectual property. You may not copy, clone, resell, or publish them without written permission.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Limitation of Liability</h2>
          <p>We are not liable for:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Loss of leads</li>
            <li>Loss of revenue</li>
            <li>Errors in tool outputs</li>
            <li>Any direct or indirect damages resulting from the use of this website</li>
          </ul>
          <p>You use the platform “as is.”</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Changes to Terms</h2>
          <p>We may update these Terms of Use at any time. Continued use of the site means you accept the updated terms.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Contact</h2>
          <p>If you have any questions about these Terms of Use, contact us at:</p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@unboxxbusiness.live" className="hover:text-primary">info@unboxxbusiness.live</a>
          </div>
        </section>
      </div>
    </main>
  );
}