'use client';

import { Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function PrivacyPolicyPage() {
  const [lastUpdatedDate, setLastUpdatedDate] = useState('');

  useEffect(() => {
    setLastUpdatedDate(new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }));
  }, []);


  return (
    <main className="container mx-auto max-w-3xl py-24 px-6">
      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">⭐ PRIVACY POLICY</h1>
          <p className="text-muted-foreground">Last Updated: {lastUpdatedDate || '...'}</p>
        </div>
        
        <p>Your privacy is important to us. This Privacy Policy explains how we collect, use, protect, and handle your information when you use our website, tools, templates, and services.</p>
        <p>By using this website, you agree to the practices described below.</p>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
          <p>We collect two types of information:</p>
          <div className="space-y-3">
              <div>
                  <h3 className="font-semibold">A. Information You Provide Directly</h3>
                  <p className="text-muted-foreground">When you:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Use our tools</li>
                    <li>Download resources</li>
                    <li>Submit a contact form</li>
                    <li>Book a demo</li>
                    <li>Chat with us through WhatsApp</li>
                    <li>Subscribe to updates</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">We may collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Name</li>
                    <li>Institute name</li>
                    <li>Email</li>
                    <li>Phone/WhatsApp number</li>
                    <li>City</li>
                    <li>Your inquiry or message</li>
                  </ul>
              </div>
               <div>
                  <h3 className="font-semibold">B. Information Collected Automatically</h3>
                  <p className="text-muted-foreground">When you browse our website, we may collect:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>IP address</li>
                    <li>Device type</li>
                    <li>Browser type</li>
                    <li>Pages visited</li>
                    <li>Time spent on site</li>
                    <li>Referring website</li>
                  </ul>
                   <p className="text-muted-foreground mt-2">This helps us improve user experience and platform performance.</p>
              </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Provide access to our tools and templates</li>
            <li>Respond to your inquiries</li>
            <li>Book demo sessions</li>
            <li>Improve our tools and resources</li>
            <li>Send relevant updates (only if you opt-in)</li>
            <li>Offer automation-related services</li>
            <li>Improve website performance and user experience</li>
          </ul>
           <p className="font-semibold">We do NOT sell your information to third parties.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. How We Protect Your Data</h2>
          <p>We take data security seriously and use:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Secure servers</li>
            <li>Encrypted connections (HTTPS)</li>
            <li>Limited access to user data</li>
            <li>Regular monitoring and updates</li>
          </ul>
          <p>However, no online platform is 100% secure — use the site at your own discretion.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. How We Share Your Information</h2>
          <p>We do not sell, trade, or rent your personal information.</p>
          <p>We may share data only when necessary:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>With trusted tools/services like email providers or analytics tools</li>
            <li>When required by law or government request</li>
          </ul>
          <p>All third-party partners follow privacy and data protection standards.</p>
        </section>
        
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Cookies & Tracking Technologies</h2>
          <p>We may use cookies to:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Improve user experience</li>
            <li>Analyze site traffic</li>
            <li>Save tool inputs temporarily</li>
            <li>Understand visitor behavior</li>
          </ul>
          <p>You can disable cookies in your browser settings if you prefer.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Third-Party Links</h2>
          <p>Our website may link to:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>YouTube</li>
            <li>WhatsApp</li>
            <li>External resources</li>
          </ul>
           <p>We are not responsible for the privacy practices of external sites. Please review their policies separately.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Your Rights</h2>
          <p>You can request:</p>
           <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Access to the data we hold</li>
            <li>Correction of your information</li>
            <li>Deletion of your information</li>
            <li>To unsubscribe from updates</li>
          </ul>
           <p>To exercise any rights, contact us using the information below.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Data Retention</h2>
          <p>We store your information only as long as necessary to:</p>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Provide services</li>
            <li>Improve the platform</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>If you request deletion, we will remove your data within 7–30 days.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. For Children Under 13</h2>
          <p>This website is not intended for children under 13. We do not knowingly collect data from minors.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">10. Updates to This Policy</h2>
          <p>We may update the Privacy Policy from time to time. Updated versions will be posted on this page with a new “Last Updated” date.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">11. Contact Us</h2>
          <p>If you have questions about this Privacy Policy or want your data removed, contact us:</p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="h-4 w-4" />
            <a href="mailto:info@unboxxbusiness.live" className="hover:text-primary">info@unboxxbusiness.live</a>
          </div>
        </section>
      </div>
    </main>
  );
}
