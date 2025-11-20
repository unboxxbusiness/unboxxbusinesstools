'use client';

import { IconBrandWhatsapp } from '@tabler/icons-react';
import Link from 'next/link';

// TODO: Replace with your actual phone number
const WHATSAPP_NUMBER = "911234567890";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <IconBrandWhatsapp size={32} />
    </Link>
  );
}
