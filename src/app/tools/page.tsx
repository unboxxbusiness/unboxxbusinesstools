'use client';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ToolsGrid from '@/components/ToolsGrid';
import { IconCalculator, IconScript, IconChartPie, IconClockHour3, IconMessage, IconPrinter, IconTypography, IconListCheck } from '@tabler/icons-react';

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
  },
  {
    title: 'After-Hours Lead Handling Script Library',
    description: 'Provides pre-written messages for late-night student inquiries.',
    href: '/tools/after-hours-lead-handling-script-library',
    icon: <IconClockHour3 />,
  },
  {
    title: 'Contact Form → WhatsApp Message Template Tool',
    description: 'Converts form submissions into clean WhatsApp callback messages.',
    href: '/tools/contact-form-whatsapp-message-template-tool',
    icon: <IconMessage />,
  },
  {
    title: 'Offline Walk-In Lead Sheet Generator',
    description: 'Creates a printable lead capture sheet for walk-in visitors.',
    href: '/tools/offline-walk-in-lead-sheet-generator',
    icon: <IconPrinter />,
  },
  {
    title: 'Landing Page Headline Generator',
    description: 'Generates effective one-line headlines for coaching landing pages.',
    href: '/tools/landing-page-headline-generator',
    icon: <IconTypography />,
  },
  {
    title: 'Inquiry Qualification Checklist Tool',
    description: 'Helps classify leads as Hot, Warm, or Cold based on key criteria.',
    href: '/tools/inquiry-qualification-checklist-tool',
    icon: <IconListCheck />,
  }
];

export default function ToolsPage() {
  return (
    <>
      <section className="py-24 lg:py-32 text-center w-full">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          50+ Free Tools Built for Coaching Institutes
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
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
      </section>

      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-4">
          ⭐ CATEGORY 1: Lead Capture Tools (8 Tools)
        </h2>
        <ToolsGrid tools={tools} />
      </div>
    </>
  );
}
