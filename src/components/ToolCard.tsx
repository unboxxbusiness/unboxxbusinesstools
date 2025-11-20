'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { cn } from '@/lib/utils';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  index: number;
}

export default function ToolCard({ title, description, href, icon, index }: ToolCardProps) {
    const isFirstCol = index % 4 === 0;
    const isLastCol = index % 4 === 3;

  return (
    <Link
        href={href}
        className={cn(
            "flex flex-col border-b border-r py-10 relative group/feature dark:border-neutral-800"
        )}
    >
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
        
        <div className="mb-4 relative z-10 px-10 text-primary">
            {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
        </div>
        <div className="text-lg font-bold mb-2 relative z-10 px-10">
            <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
            <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
            {title}
            </span>
        </div>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 flex-grow">
            {description}
        </p>
        <div className="mt-4 flex items-center text-sm font-semibold text-primary relative z-10 px-10">
            Use Tool
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
    </Link>
  );
}
