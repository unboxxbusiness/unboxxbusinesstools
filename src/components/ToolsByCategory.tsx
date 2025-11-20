import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BarChart, Captions, Presentation, Users, Zap } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';

function generateId(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
}

const categories = [
  {
    title: 'Lead Capture & Qualification',
    description: 'Tools that improve how you handle new inquiries.',
    examples: ['Lead Leakage Calculator', 'Inquiry Reply Templates'],
    icon: <Zap className="h-8 w-8" />,
    href: `/tools#${generateId('⭐ Lead Capture & Qualification Tools')}`
  },
  {
    title: 'Follow-Up & Nurture',
    description: 'Tools to plan and structure your follow-ups.',
    examples: ['Follow-Up Sequence Generator', 'Demo Reminder Builder'],
    icon: <Presentation className="h-8 w-8" />,
    href: `/tools#${generateId('📱 WhatsApp & Communication Tools')}`
  },
  {
    title: 'Admissions & Conversion',
    description: 'Tools to improve demo-to-admission conversions.',
    examples: ['Conversion Rate Analyzer', 'Fee Explanation Scripts'],
    icon: <Captions className="h-8 w-8" />,
    href: `/tools#${generateId('🎯 Lead Conversion & Closing Tools')}`
  },
  {
    title: 'Counsellor & Team Productivity',
    description: 'Tools for daily planning and SOPs for your team.',
    examples: ['Daily Planner', 'SOP Builder'],
    icon: <Users className="h-8 w-8" />,
    href: `/tools#${generateId('⚙️ Team & Productivity Tools')}`
  },
  {
    title: 'Marketing & Ads ROI',
    description: 'Tools to calculate lead cost, ROI and campaign performance.',
    examples: ['Ad Spend ROI Calculator', 'Lead Cost Calculator'],
    icon: <BarChart className="h-8 w-8" />,
    href: `/tools#${generateId('📣 Marketing & Ad Tools')}`
  }
];

export default function ToolsByCategory() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">Browse Tools by What You Want to Improve</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
             <Link href={category.href} key={category.title} className="relative group">
                <GlowingEffect disabled={false} />
                <Card className="flex flex-col h-full">
                <CardHeader>
                    <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">
                        {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                    <div>
                    <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                    <ul className="text-xs text-muted-foreground space-y-1 mb-6">
                        {category.examples.map(ex => <li key={ex}>e.g., {ex}</li>)}
                    </ul>
                    </div>
                    <Button asChild variant="secondary" className="w-full mt-auto">
                    <div className="flex items-center">
                        View Tools <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                    </Button>
                </CardContent>
                </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
