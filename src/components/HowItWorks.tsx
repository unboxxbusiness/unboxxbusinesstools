'use client';

import { Button } from '@/components/ui/button';
import { Lightbulb, BotMessageSquare, Wrench } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import React from 'react';

const steps = [
  {
    title: 'Use the Tools',
    description: 'Check your lead leakage, follow-up gaps, and conversion rates using our free tools and templates.',
    icon: <Wrench />,
  },
  {
    title: 'Understand the Gaps',
    description: 'See where you’re losing inquiries, missing follow-ups, or failing to convert demos into admissions.',
    icon: <Lightbulb />,
  },
  {
    title: 'Automate the System',
    description: 'If you want, we set up an AI automation system that replies instantly, follows up automatically, and boosts admissions.',
    icon: <BotMessageSquare />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">How This Platform Helps Your Institute</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Feature key={step.title} {...step} index={index} />
          ))}
        </div>

        <div className="text-center space-y-2">
            <Button asChild size="lg">
                <Link href="#">Book a Free Automation Demo</Link>
            </Button>
            <p className="text-sm text-muted-foreground">See how these tools become a 24/7 admissions system.</p>
        </div>
      </div>
    </section>
  );
}


const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};