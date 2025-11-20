'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';

const features = [
  "Capture leads properly",
  "Follow up consistently",
  "Send clear information",
  "Increase demo attendance",
  "Convert more admissions"
];

export default function WhatWeProvide() {
  return (
    <section className="py-16 md:py-32 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <h2 className="text-4xl font-semibold lg:text-5xl">What We Provide</h2>
              <p className="mt-6 text-muted-foreground">
                We offer free tools, templates, and checklists that help you:
              </p>
            </div>
            <ul className="mt-8 divide-y border-y">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3 py-3">
                  <CheckCircle className="size-5 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
              <Image
                src="https://picsum.photos/seed/payments-dark/1207/929"
                className="hidden rounded-[15px] dark:block"
                alt="payments illustration dark"
                width={1207}
                height={929}
                data-ai-hint="dashboard dark"
              />
              <Image
                src="https://picsum.photos/seed/payments-light/1207/929"
                className="rounded-[15px] shadow dark:hidden"
                alt="payments illustration light"
                width={1207}
                height={929}
                data-ai-hint="dashboard light"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
