'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

interface Tool {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

interface ToolsGridProps {
  tools: Tool[];
}

export default function ToolsGrid({ tools }: ToolsGridProps) {
  // Determine grid columns based on the number of tools, up to 4
  const numCols = Math.min(tools.length, 4);
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
  };
  const gridClass = `grid grid-cols-1 ${gridClasses[2]} ${gridClasses[3]} ${gridClasses[4]}`;
  
  // Calculate a sensible max width
  const maxWidths = {
    1: 'max-w-md',
    2: 'max-w-4xl',
    3: 'max-w-7xl',
    4: 'max-w-7xl',
  }
  const maxWidthClass = maxWidths[numCols] || 'max-w-7xl';


  return (
    <div className={`${gridClass} relative z-10 py-10 ${maxWidthClass} mx-auto`}>
      {tools.map((tool, index) => (
        <Feature key={tool.title} {...tool} index={index} total={tools.length} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  href,
  index,
  total,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  index: number;
  total: number;
}) => {
  const numColsLg = Math.min(total, 4);
  const isFirstInRow = index % numColsLg === 0;
  const isBottomRow = index >= total - (total % numColsLg || numColsLg);
  
  return (
    <Link
      href={href}
      className={cn(
        'flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800',
        isFirstInRow && 'lg:border-l dark:border-neutral-800',
        !isBottomRow && 'lg:border-b dark:border-neutral-800'
      )}
    >
      {!isBottomRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {isBottomRow && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </Link>
  );
};
