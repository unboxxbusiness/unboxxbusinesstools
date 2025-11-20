'use client';

import { CheckCircle2 } from 'lucide-react';

const solutions = [
    "Replies instantly to new inquiries",
    "Sends automatic follow-ups",
    "Reminds students about demos",
    "Helps convert them into admissions",
    "Works 24/7 — even after working hours"
];

export default function AutomationSolution() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Our Automation Solution</h2>
                    <p className="text-muted-foreground text-lg">
                        When you're ready, we set up a done-for-you AI automation system that works 24/7 to grow your admissions.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {solutions.map((solution) => (
                        <div key={solution} className="flex items-center gap-3">
                           <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">{solution}</p>
                        </div>
                    ))}
                </div>
                 <div className="text-center">
                    <p className="font-semibold">No extra staff. No technical knowledge needed.</p>
                </div>
            </div>
        </section>
    );
}
