'use client';

import { Clock, TrendingDown, Users, EyeOff } from 'lucide-react';

const problems = [
    {
      title: 'Fast replies',
      icon: <Clock />,
    },
    {
      title: 'Organized follow-ups',
      icon: <TrendingDown />,
    },
    {
      title: 'Proper reminders',
      icon: <Users />,
    },
    {
      title: 'Systematic communication',
      icon: <EyeOff />,
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {problems.map((problem) => (
                        <div key={problem.title} className="p-4 bg-background border rounded-lg flex flex-col items-center justify-center space-y-2">
                             <div className="p-3 bg-destructive/10 rounded-full text-destructive">
                                {problem.icon}
                            </div>
                            <p className="font-semibold text-sm">{problem.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
