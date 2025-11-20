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
        containerClassName="rounded-xl h-full"
        className="h-full rounded-xl bg-card text-card-foreground shadow-sm p-6"
      >
        <div className="flex flex-col space-y-1.5 h-full">
          <h3 className="text-xl font-semibold leading-none tracking-tight flex items-center justify-between">
            {title}
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform" />
          </h3>
          <p className="text-sm text-muted-foreground pt-2">{description}</p>
        </div>
      </BackgroundGradient>
    </Link>
  );
}
