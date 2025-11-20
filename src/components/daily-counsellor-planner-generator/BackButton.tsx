import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
    href: string;
}

export default function BackButton({ href }: BackButtonProps) {
  return (
    <div className="mb-8 print:hidden">
      <Link href={href} className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Tools
      </Link>
    </div>
  );
}
