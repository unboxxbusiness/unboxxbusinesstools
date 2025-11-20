'use client';

import BackButton from '@/components/lead-leakage-calculator/BackButton';
import Calculator from '@/components/lead-leakage-calculator/Calculator';
import HowToUse from '@/components/lead-leakage-calculator/HowToUse';

export default function LeadLeakageCalculatorPage() {
  return (
    <div className="container py-12 pt-24">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Lead Leakage Calculator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          See how much potential revenue you're losing from unanswered inquiries. Adjust the sliders to match your numbers.
        </p>
      </div>

      <Calculator />

      <HowToUse />
    </div>
  );
}
