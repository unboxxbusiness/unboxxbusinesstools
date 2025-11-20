import AutomationSolution from '@/components/about/AutomationSolution';
import Hero from '@/components/about/Hero';
import TheRealProblem from '@/components/about/TheRealProblem';
import WhatWeProvide from '@/components/about/WhatWeProvide';

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <WhatWeProvide />
      <TheRealProblem />
      <AutomationSolution />
    </main>
  );
}
