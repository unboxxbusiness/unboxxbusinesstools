'use client';
import {
    IconTimeline,
    IconCalendarMonth,
    IconBellRinging,
    IconRecycle,
    IconMessageQuestion,
    IconUserOff,
    IconCash,
    IconThumbUp,
    IconReportMoney,
    IconReceipt2,
    IconAlarm,
    IconSpeakerphone,
    IconMicrophone
} from '@tabler/icons-react';
import ToolsGrid from '../ToolsGrid';

const followUpTools = [
  {
    title: '7-Day Follow-Up Sequence Generator',
    description: 'Generates a 7-day WhatsApp plan to nurture new leads.',
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
    title: 'Voice Note Follow-Up Script Generator',
    description: 'Short, personal scripts for voice notes to boost response rates.',
    href: '/tools/voice-note-follow-up-script-generator',
    icon: <IconMicrophone />,
  },
];

const demoTools = [
    {
    title: 'Demo Reminder Message Builder',
    description: 'Creates 24-hour, 1-hour, and last-minute demo reminders.',
    href: '/tools/demo-reminder-message-builder',
    icon: <IconBellRinging />,
  },
  {
    title: 'Absentee Follow-Up Script Generator',
    description: 'Templates for students who missed a registered demo.',
    href: '/tools/absentee-follow-up-script-generator',
    icon: <IconUserOff />,
  },
  {
    title: 'Demo → Admission Nudge Generator',
    description: 'Creates follow-up messages to convert attendees after a demo.',
    href: '/tools/demo-admission-nudge-generator',
    icon: <IconThumbUp />,
  },
];

const feeTools = [
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
    title: 'Fee Follow-Up Template Generator',
    description: 'Creates structured follow-up messages after fee explanation.',
    href: '/tools/fee-follow-up-template-generator',
    icon: <IconCash />,
  },
];

const announcementTools = [
    {
        title: 'Batch Announcement Message Maker',
        description: 'Creates WhatsApp/SMS messages for announcing new batches.',
        href: '/tools/batch-announcement-message-maker',
        icon: <IconSpeakerphone />,
    },
    {
        title: 'Admission Deadline Reminder Generator',
        description: 'Creates urgency-based reminders (last date, few seats left).',
        href: '/tools/admission-deadline-reminder-generator',
        icon: <IconAlarm />,
    },
]


export default function WhatsappTemplatesLibraryTool() {
  return (
    <>
        <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              🗓️ Follow-Up & Nurturing Templates
            </h2>
            <ToolsGrid tools={followUpTools} />
        </div>

        <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              🖥️ Demo Related Templates
            </h2>
            <ToolsGrid tools={demoTools} />
        </div>

        <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              💰 Fee Discussion Templates
            </h2>
            <ToolsGrid tools={feeTools} />
        </div>

        <div className="w-full mb-16">
            <h2 className="text-2xl font-bold text-center">
              📢 Announcement Templates
            </h2>
            <ToolsGrid tools={announcementTools} />
        </div>
    </>
  );
}
