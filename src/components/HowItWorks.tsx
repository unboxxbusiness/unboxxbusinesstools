import { Button } from '@/components/ui/button';
import { Lightbulb, BotMessageSquare, Wrench } from 'lucide-react';
import Link from 'next/link';

const steps = [
  {
    step: 'Step 1',
    title: 'Use the Tools',
    description: 'Check your lead leakage, follow-up gaps, and conversion rates using our free tools and templates.',
    icon: <Wrench className="h-8 w-8" />,
  },
  {
    step: 'Step 2',
    title: 'Understand the Gaps',
    description: 'See where you’re losing inquiries, missing follow-ups, or failing to convert demos into admissions.',
    icon: <Lightbulb className="h-8 w-8" />,
  },
  {
    step: 'Step 3',
    title: 'Automate the System',
    description: 'If you want, we set up an AI automation system that replies instantly, follows up automatically, and boosts admissions.',
    icon: <BotMessageSquare className="h-8 w-8" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">How This Platform Helps Your Institute</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.title} className="flex flex-col items-center text-center p-6 bg-card border rounded-lg shadow-sm">
                <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                    {step.icon}
                </div>
                <p className="text-sm font-semibold text-primary">{step.step}</p>
                <h3 className="text-xl font-semibold mt-1 mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
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