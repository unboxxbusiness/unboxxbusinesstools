'use client';

import { BarChart, CalendarCheck, Cpu, DollarSign, TrendingUp, UserCheck } from 'lucide-react';

const benefits = [
  {
    title: 'More Demo Bookings',
    description: 'Better follow-up and reminders turn interest into attendance.',
    icon: <CalendarCheck className="size-4" />,
  },
  {
    title: 'Higher Admissions',
    description: 'Clear fee explanation + structured nurturing = more sign-ups.',
    icon: <TrendingUp className="size-4" />,
  },
  {
    title: 'Less Manual Work',
    description: 'Your team stops guessing and starts following a system.',
    icon: <Cpu className="size-4" />,
  },
  {
    title: 'Data, Not Guesswork',
    description: 'You see real numbers: leads, follow-ups, conversions, gaps.',
    icon: <BarChart className="size-4" />,
  },
  {
    title: 'Better Use of Ad Spend',
    description: 'More admissions without always increasing the budget.',
    icon: <DollarSign className="size-4" />,
  },
    {
    title: 'Improved Team Performance',
    description: 'Standardized processes mean everyone performs like your best counsellor.',
    icon: <UserCheck className="size-4" />,
  },
];

export default function WhatWeProvide() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What Institutes Gain Using These Tools</h2>
          <p className="text-muted-foreground">When you start measuring and structuring your leads, follow-ups, and demos, growth becomes predictable. These tools give clarity; automation gives you scale.</p>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="space-y-3 p-8 md:p-12">
                <div className="flex items-center gap-2">
                    {benefit.icon}
                    <h3 className="text-sm font-medium">{benefit.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
