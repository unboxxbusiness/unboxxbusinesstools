'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ToolsGrid from '@/components/ToolsGrid';
import { IconCalculator } from '@tabler/icons-react';

const tools = [
  {
    title: 'Lead Leakage Calculator',
    description: 'Shows lost inquiries & revenue.',
    href: '/tools/lead-leakage-calculator',
    icon: <IconCalculator />,
  },
];

export default function ToolsPage() {
  return (
    <div className="bg-gray-50/90 dark:bg-neutral-900">
      <section className="py-12 md:py-20">
          <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
              <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                  <h2 className="text-4xl font-medium lg:text-5xl">Tools in numbers</h2>
                  <p>A complete suite of free, easy-to-use tools to help you manage and grow your coaching business, from lead management to student engagement.</p>
              </div>

              <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0 dark:divide-neutral-800">
                  <div className="space-y-4 pt-8 md:pt-0">
                      <div className="text-5xl font-bold">+50</div>
                      <p>Free Tools</p>
                  </div>
                  <div className="space-y-4 pt-8 md:pt-0">
                      <div className="text-5xl font-bold">10k+</div>
                      <p>Active Users</p>
                  </div>
                  <div className="space-y-4 pt-8 md:pt-0">
                      <div className="text-5xl font-bold">+1000</div>
                      <p>Businesses Powered</p>
                  </div>
              </div>
          </div>
      </section>

      <div className="container pb-24">
        <ToolsGrid tools={tools} />
      </div>
    </div>
  );
}
