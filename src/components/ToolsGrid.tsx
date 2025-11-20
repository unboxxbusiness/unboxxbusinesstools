'use client';
import ToolCard from './ToolCard';
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
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto border-t border-l">
      {tools.map((tool, index) => (
        <ToolCard key={tool.title} {...tool} index={index} />
      ))}
    </div>
  );
}
