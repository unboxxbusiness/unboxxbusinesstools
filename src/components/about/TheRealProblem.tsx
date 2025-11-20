'use client';

import { Clock, TrendingDown, Users, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

const problems = [
    {
      title: 'Slow Response',
      description: 'Students don’t get instant replies, so they ask your competitors.',
      icon: <Clock className="size-6" />,
    },
    {
      title: 'No Follow-Up Structure',
      description: 'Counsellors follow up randomly, then forget.',
      icon: <TrendingDown className="size-6" />,
    },
    {
      title: 'Demo No-Shows',
      description: 'Students register for demos but don’t attend because there are no reminders.',
      icon: <Users className="size-6" />,
    },
    {
      title: 'No Clear View of Lead Leakage',
      description: 'You don’t know how many leads are slipping away every month.',
      icon: <EyeOff className="size-6" />,
    },
  ];


export default function TheRealProblem() {
    return (
        <section className="py-12 md:py-20 bg-muted/30">
            <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">The Real Problem We Solve</h2>
                    <p className="text-muted-foreground text-lg">
                        Coaching institutes don’t lack leads. They lack a system. This leads to lost students and wasted ad spend.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2  relative z-10 py-10 max-w-7xl mx-auto">
                    {problems.map((problem, index) => (
                        <Feature key={problem.title} {...problem} index={index} />
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
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 2) && "lg:border-l dark:border-neutral-800",
        index < 2 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 2 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
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