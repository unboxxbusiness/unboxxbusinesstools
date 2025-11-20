'use client';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ToolsGrid from '@/components/ToolsGrid';
import { IconCalculator, IconScript, IconChartPie, IconClockHour3, IconMessage, IconPrinter, IconTypography, IconListCheck, IconTimeline, IconCalendarMonth, IconBellRinging, IconRecycle, IconMessageQuestion, IconUserOff } from '@tabler/icons-react';
import Hero from '@/components/tools/Hero';
import { BackgroundGradient } from '@/components/ui/background-gradient';

const leadCaptureTools = [
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

const leadNurturingTools = [
  {
    title: '7-Day Follow-Up Sequence Generator',
    description: 'Generates a 7-day WhatsApp follow-up plan to nurture new leads.',
    href: '/tools/7-day-follow-up-sequence-generator',
    icon: <IconTimeline />,
  },
  {
    title: '30-Day Nurture Calendar Generator',
    description: 'Creates a month-long engagement plan for undecided leads.',
    href: '/tools/30-day-nurture-calendar-generator',
    icon: <IconCalendarMonth />,
  },
    {
    title: 'Demo Reminder Message Builder',
    description: 'Creates 24-hour, 1-hour, and last-minute demo reminders.',
    href: '/tools/demo-reminder-message-builder',
    icon: <IconBellRinging />,
  },
  {
    title: 'Lead Revival Template Generator',
    description: 'Generates messages for cold leads who stopped responding.',
    href: '/tools/lead-revival-template-generator',
    icon: <IconRecycle />,
  },
  {
    title: '"Still Interested?" Message Builder',
    description: 'Creates short, polite nudges to check student interest.',
    href: '/tools/still-interested-message-builder',
    icon: <IconMessageQuestion />,
  },
  {
    title: 'Absentee Follow-Up Script Generator',
    description: 'Templates for students who missed a registered demo.',
    href: '/tools/absentee-follow-up-script-generator',
    icon: <IconUserOff />,
  },
];

const allTools = [...leadCaptureTools, ...leadNurturingTools];

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState(allTools);

  useEffect(() => {
    if (!allTools) return;
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = allTools.filter(tool => 
      tool.title.toLowerCase().includes(lowercasedQuery) || 
      tool.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredTools(filtered);
  }, [searchQuery]);

  const displayedCaptureTools = filteredTools.filter(tool => leadCaptureTools.includes(tool));
  const displayedNurturingTools = filteredTools.filter(tool => leadNurturingTools.includes(tool));

  return (
    <>
      <Hero />
      <main className="container py-12">
        <div className="mx-auto max-w-md mb-16">
            <BackgroundGradient containerClassName="rounded-full" className="bg-background rounded-full">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for a tool..."
                  className="pl-11 h-14 w-full text-base bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </BackgroundGradient>
          </div>

        {displayedCaptureTools.length > 0 && (
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              ⭐ Lead Capture & Qualification Tools
            </h2>
            <ToolsGrid tools={displayedCaptureTools} />
          </div>
        )}

        {displayedNurturingTools.length > 0 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center">
              🌱 Lead Nurturing & Follow-Up Tools
            </h2>
            <ToolsGrid tools={displayedNurturingTools} />
          </div>
        )}
      </main>
    </>
  );
}
