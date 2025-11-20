'use client';

import { CalendarCheck } from 'lucide-react';
import Link from 'next/link';

const BOOK_DEMO_URL = "/book-demo#book-demo";

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href={BOOK_DEMO_URL}
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
      aria-label="Book a Demo"
    >
      <CalendarCheck size={28} />
    </Link>
  );
}
