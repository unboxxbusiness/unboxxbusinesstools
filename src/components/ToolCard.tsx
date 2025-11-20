'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

export default function ToolCard({ title, description, href, icon }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col rounded-xl border bg-card p-6 text-card-foreground shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <GlowingEffect disabled={false} />
      <div className="mb-4 text-primary">{React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}</div>
      <h3 className="text-lg font-semibold leading-none tracking-tight">{title}</h3>
      <p className="mt-2 flex-grow text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 flex items-center text-sm font-semibold text-primary">
        Use Tool
        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
