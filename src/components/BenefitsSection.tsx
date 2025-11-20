'use client';

import { BarChart, CalendarCheck, Cpu, DollarSign, TrendingUp, UserCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import React from 'react';

const benefits = [
  {
    title: 'More Demo Bookings',
    description: 'Better follow-up and reminders turn interest into attendance.',
    icon: <CalendarCheck />,
  },
  {
    title: 'Higher Admissions',
    description: 'Clear fee explanation + structured nurturing = more sign-ups.',
    icon: <TrendingUp />,
  },
  {
    title: 'Less Manual Work',
    description: 'Your team stops guessing and starts following a system.',
    icon: <Cpu />,
  },
  {
    title: 'Data, Not Guesswork',
    description: 'You see real numbers: leads, follow-ups, conversions, gaps.',
    icon: <BarChart />,
  },
  {
    title: 'Better Use of Ad Spend',
    description: 'More admissions without always increasing the budget.',
    icon: <DollarSign />,
  },
  {
    title: 'Improved Team Performance',
    description: 'Standardized processes mean everyone performs like your best counsellor.',
    icon: <UserCheck />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What Institutes Gain Using These Tools (And Automation)</h2>
          <p className="text-muted-foreground">
            When you start measuring and structuring your leads, follow-ups, and demos, growth becomes predictable. These tools give clarity; automation gives you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
           {benefits.map((feature, index) => (
             <Feature key={feature.title} {...feature} index={index} />
           ))}
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
        "flex flex-col py-10 relative group/feature",
        "lg:border-r dark:border-neutral-800",
        (index === 0 || index === 3) && "lg:border-l dark:border-neutral-800",
        index < 3 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 3 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
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
