import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import Link from 'next/link';

export default function FinalCtaSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="mx-auto max-w-3xl space-y-8 px-6 text-center">
        <div className="space-y-4">
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
            Turn These Tools Into a Fully Automated Admissions System
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Use the tools to understand your process. Then let us build an AI automation system that replies to every inquiry instantly, sends all follow-ups, and helps you convert more students — 24/7.
            </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
                <Link href="/book-demo">Book a Free AI Automation Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="/book-demo">
                    <MessageSquare className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                </Link>
            </Button>
        </div>
        <p className="text-sm text-muted-foreground">
            No obligation. Just a practical walkthrough of what automation can do for your institute.
        </p>
      </div>
    </section>
  );
}
