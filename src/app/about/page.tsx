import AutomationSolution from '@/components/about/AutomationSolution';
import FinalCtaSection from '@/components/FinalCtaSection';
import Hero from '@/components/about/Hero';
import TheRealProblem from '@/components/about/TheRealProblem';
import WhatWeProvide from '@/components/about/WhatWeProvide';
import WhyTrustUs from '@/components/about/WhyTrustUs';

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <WhatWeProvide />
      <TheRealProblem />
      <AutomationSolution />
      <WhyTrustUs />
      <FinalCtaSection />
    </main>
  );
}
