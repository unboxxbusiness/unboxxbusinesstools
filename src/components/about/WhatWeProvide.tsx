'use client';

import { CheckCircle } from 'lucide-react';

const features = [
  "Capture leads properly",
  "Follow up consistently",
  "Send clear information",
  "Increase demo attendance",
  "Convert more admissions"
];

export default function WhatWeProvide() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold tracking-tight">What We Provide</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer free tools, templates, and checklists that help you:
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border shadow-sm">
              <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
              <span className="font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-xl text-foreground max-w-3xl mx-auto">
                These resources show you exactly where your current system is breaking.
            </p>
        </div>
      </div>
    </section>
  );
}
