'use client';

import BackButton from '@/components/lead-leakage-calculator/BackButton';

export default function InquiryAutoReplyScriptGeneratorPage() {
  return (
    <main className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Inquiry Auto-Reply Script Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Create static templates based on course and question type.
        </p>
      </div>

      {/* Generator UI will go here */}
      <div className="max-w-4xl mx-auto text-center text-muted-foreground">
        <p>Coming soon...</p>
      </div>
    </main>
  );
}
