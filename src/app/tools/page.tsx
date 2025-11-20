'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ToolsGrid from '@/components/ToolsGrid';
import { IconCalculator, IconScript, IconChartPie } from '@tabler/icons-react';

const tools = [
  {
    title: 'Lead Leakage Calculator',
    description: 'Shows lost inquiries & revenue.',
    href: '/tools/lead-leakage-calculator',
    icon: <IconCalculator />,
  },
  {
    title: 'Inquiry Auto-Reply Script Generator',
    description: 'Static templates based on course + question type.',
    href: '/tools/inquiry-auto-reply-script-generator',
    icon: <IconScript />,
  },
  {
    title: 'Lead Source Tracker',
    description: 'Track where your inquiries come from to optimize marketing spend.',
    href: '/tools/lead-source-tracker',
    icon: <IconChartPie />,
  }
];

export default function ToolsPage() {
  return (
    <div className="bg-gray-50/90 dark:bg-neutral-900">
      <section className="py-24 lg:py-32">
        <div className="container text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            50+ Free Tools Built for Coaching Institutes
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A complete suite of free, easy-to-use tools to help you manage and
            grow your coaching business, from lead management to student
            engagement.
          </p>
          <div className="mt-10 mx-auto max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for a tool..."
                className="pl-10 h-12 text-base"
              />
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
