'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { BackgroundGradient } from './ui/background-gradient';

interface ToolCardProps {
  title: string;
  description: string;
  href: string;
}

export default function ToolCard({ title, description, href }: ToolCardProps) {
  return (
    <Link href={href} className="group">
      <BackgroundGradient
        containerClassName="rounded-lg h-full"
        className="h-full rounded-lg bg-card text-card-foreground shadow-sm"
      >
        <div className="flex flex-col space-y-1.5 p-6 h-full">
          <h3 className="text-2xl font-semibold leading-none tracking-tight flex items-center justify-between">
            {title}
            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </BackgroundGradient>
    </Link>
  );
}
