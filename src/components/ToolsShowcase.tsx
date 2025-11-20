'use client';
import { cn } from "@/lib/utils";
import { Calculator, CalendarCheck2, MessageCircleWarning, MessagesSquare, Percent, MessageSquareReply, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from 'react';

const tools = [
    {
      title: "Lead Leakage Calculator",
      description: "Find out how many student inquiries you’re actually losing every month.",
      icon: <Calculator />,
      href: "/tools/lead-leakage-calculator",
    },
    {
      title: "7-Day Follow-Up Sequence",
      description: "Generate a complete follow-up plan for new leads in one click.",
      icon: <CalendarCheck2 />,
      href: "/tools/7-day-follow-up-sequence-generator",
    },
    {
      title: "Demo Reminder Message Builder",
      description: "Create ready-to-send WhatsApp reminders for demo classes.",
      icon: <MessagesSquare />,
      href: "/tools/demo-reminder-message-builder",
    },
    {
      title: "Fee Structure Message Maker",
      description: "Turn your fee details into a clear, professional message for parents and students.",
      icon: <MessageCircleWarning />,
      href: "/tools/fee-structure-message-builder",
    },
    {
      title: "Conversion Rate Analyzer",
      description: "Check your lead → demo → admission conversion health.",
      icon: <Percent />,
      href: "/tools/conversion-rate-analyzer",
    },
    {
      title: "Missed Inquiry Recovery Script",
      description: "Templates to re-engage leads you replied late to.",
      icon: <MessageSquareReply />,
      href: "/tools/missed-inquiry-recovery-script-builder",
    },
];

export default function ToolsShowcase() {
    return (
        <section className="py-12 md:py-20 w-full">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-5xl">Free Tools Built for Coaching Institutes</h2>
                    <p className="text-muted-foreground">Use these tools to understand your lead leakage, improve follow-ups, and structure your admissions — then let us automate it all for you.</p>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10 py-10 max-w-7xl mx-auto">
                    {tools.map((tool, index) => (
                        <Feature key={tool.title} {...tool} />
                    ))}
                </div>
                 <div className="text-center">
                    <Link href="/tools" className="font-semibold text-primary hover:underline">
                        View all tools <ArrowRight className="inline-block h-4 w-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}

const Feature = ({
  title,
  description,
  icon,
  href,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      className="flex flex-col p-8 relative group/feature border-b lg:border-b-0 lg:border-r dark:border-neutral-800"
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-muted to-transparent pointer-events-none" />
      
      <div className="mb-4 relative z-10 text-primary">
        {React.cloneElement(icon as React.ReactElement, { className: "h-6 w-6" })}
      </div>
      <div className="text-lg font-semibold mb-2 relative z-10">
        <span className="group-hover/feature:translate-x-1 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 relative z-10 flex items-center">
        {description}
        <ArrowRight className="w-4 h-4 ml-2 text-gray-400 opacity-0 group-hover/feature:opacity-100 group-hover/feature:translate-x-1 transition-all" />
      </p>
    </Link>
  );
};
