'use client';
import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ToolsGrid from '@/components/ToolsGrid';
import { IconCalculator, IconScript, IconChartPie, IconClockHour3, IconMessage, IconPrinter, IconTypography, IconListCheck, IconTimeline, IconCalendarMonth, IconBellRinging, IconRecycle, IconMessageQuestion, IconUserOff, IconCash, IconPhoneOff, IconRotateClockwise, IconMicrophone, IconAnalyze, IconThumbUp, IconReportMoney, IconReceipt2, IconMessagesOff, IconAlarm, IconSpeakerphone, IconColumns, IconAd, IconBrandInstagram, IconGift, IconTargetArrow, IconPigMoney, IconReportAnalytics, IconReceiptRefund } from '@tabler/icons-react';
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
  },
  {
    title: 'Missed-Call Follow-Up Message Generator',
    description: 'Generates professional templates for returning missed calls.',
    href: '/tools/missed-call-follow-up-message-generator',
    icon: <IconPhoneOff />,
  },
  {
    title: 'Missed Inquiry Recovery Script Builder',
    description: 'Polite templates to recover inquiries that were not answered in time.',
    href: '/tools/missed-inquiry-recovery-script-builder',
    icon: <IconRotateClockwise />,
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
  {
    title: 'Voice Note Follow-Up Script Generator',
    description: 'Short, personal scripts for voice notes to boost response rates.',
    href: '/tools/voice-note-follow-up-script-generator',
    icon: <IconMicrophone />,
  },
  {
    title: 'Batch Announcement Message Maker',
    description: 'Creates WhatsApp/SMS messages for announcing new batches.',
    href: '/tools/batch-announcement-message-maker',
    icon: <IconSpeakerphone />,
  },
];

const leadConversionTools = [
    {
    title: 'Course Comparison Sheet Generator',
    description: 'Creates a side-by-side view of two courses or plans.',
    href: '/tools/course-comparison-sheet-generator',
    icon: <IconColumns />,
  },
  {
    title: 'Fee Follow-Up Template Generator',
    description: 'Creates structured follow-up messages after fee explanation.',
    href: '/tools/fee-follow-up-template-generator',
    icon: <IconCash />,
  },
  {
    title: 'Demo → Admission Nudge Generator',
    description: 'Creates follow-up messages to convert attendees after a demo.',
    href: '/tools/demo-admission-nudge-generator',
    icon: <IconThumbUp />,
  },
  {
    title: 'Fee Structure Message Builder',
    description: 'Converts fee details into a clear, professional WhatsApp message.',
    href: '/tools/fee-structure-message-builder',
    icon: <IconReportMoney />,
  },
  {
    title: 'Fee Installment Breakdown Generator',
    description: 'Creates clear payment schedules with fixed timelines and due dates.',
    href: '/tools/fee-installment-breakdown-generator',
    icon: <IconReceipt2 />,
  },
  {
    title: 'Objection Handling Script Library',
    description: 'Templates for common objections like "Too costly" or "Maybe later".',
    href: '/tools/objection-handling-script-library',
    icon: <IconMessagesOff />,
  },
  {
    title: 'Admission Deadline Reminder Generator',
    description: 'Creates urgency-based reminders (last date, few seats left).',
    href: '/tools/admission-deadline-reminder-generator',
    icon: <IconAlarm />,
  },
  {
    title: 'Offer Message Builder',
    description: 'Templates for festival, seasonal, or early-bird offers.',
    href: '/tools/offer-message-builder',
    icon: <IconGift />,
  },
];

const marketingTools = [
  {
    title: 'Facebook/Instagram Ad Copy Generator',
    description: 'Provides short, medium, and long ad copy templates based on your offer.',
    href: '/tools/facebook-instagram-ad-copy-generator',
    icon: <IconAd />,
  },
  {
    title: 'Google Ads Headline Generator',
    description: 'Creates packs of 15-30 SEO-friendly headline variations for search ads.',
    href: '/tools/google-ads-headline-generator',
    icon: <IconAd />,
  },
  {
    title: 'Instagram Caption Generator',
    description: 'Generates caption templates with hashtags for educational marketing.',
    href: '/tools/instagram-caption-generator',
    icon: <IconBrandInstagram />,
  },
  {
    title: 'CTA Library Tool',
    description: 'A library of 100+ ready-to-use calls-to-action for ads, landing pages, and WhatsApp messages.',
    href: '/tools/cta-library-tool',
    icon: <IconTargetArrow />,
  },
  {
    title: 'Ad Budget Planner',
    description: 'Estimates leads and admissions based on your monthly ad spend.',
    href: '/tools/ad-budget-planner',
    icon: <IconPigMoney />,
  }
];

const analysisTools = [
    {
    title: 'Conversion Rate Analyzer',
    description: 'Calculates key conversion rates to identify funnel bottlenecks.',
    href: '/tools/conversion-rate-analyzer',
    icon: <IconAnalyze />,
  },
  {
    title: 'Lead Cost Calculator',
    description: 'Calculates your Cost Per Lead (CPL) and Cost Per Admission (CPA).',
    href: '/tools/lead-cost-calculator',
    icon: <IconReportAnalytics />,
  },
  {
    title: 'Ad Spend ROI Calculator',
    description: 'Shows return on ad spend based on admissions generated.',
    href: '/tools/ad-spend-roi-calculator',
    icon: <IconReceiptRefund />,
  }
]

const allTools = [...leadCaptureTools, ...leadNurturingTools, ...leadConversionTools, ...marketingTools, ...analysisTools];

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
  const displayedConversionTools = filteredTools.filter(tool => leadConversionTools.includes(tool));
  const displayedMarketingTools = filteredTools.filter(tool => marketingTools.includes(tool));
  const displayedAnalysisTools = filteredTools.filter(tool => analysisTools.includes(tool));

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
              ⭐ Lead Capture &amp; Qualification Tools
            </h2>
            <ToolsGrid tools={displayedCaptureTools} />
          </div>
        )}

        {displayedNurturingTools.length > 0 && (
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              🌱 Lead Nurturing &amp; Follow-Up Tools
            </h2>
            <ToolsGrid tools={displayedNurturingTools} />
          </div>
        )}

        {displayedConversionTools.length > 0 && (
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              🎯 Lead Conversion &amp; Closing Tools
            </h2>
            <ToolsGrid tools={displayedConversionTools} />
          </div>
        )}

        {displayedMarketingTools.length > 0 && (
          <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              📣 Marketing &amp; Ad Tools
            </h2>
            <ToolsGrid tools={displayedMarketingTools} />
          </div>
        )}

        {displayedAnalysisTools.length > 0 && (
          <div className="w-full">
            <h2 className="text-2xl font-bold text-center">
              📊 Conversion Rate &amp; Funnel Analysis
            </h2>
            <ToolsGrid tools={displayedAnalysisTools} />
          </div>
        )}
      </main>
    </>
  );
}
