'use client';

import { CheckCircle2 } from 'lucide-react';

const trustFactors = [
    "Built specifically for the education sector",
    "Simple tools + practical solutions",
    "Clear communication",
    "100% implementation support"
];

export default function WhyTrustUs() {
    return (
        <section className="py-12 md:py-20">
            <div className="mx-auto max-w-4xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
                    <h2 className="text-balance text-4xl font-medium lg:text-5xl">Why Institutes Trust Us</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {trustFactors.map((factor) => (
                        <div key={factor} className="flex items-center gap-3">
                           <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                            <p className="text-muted-foreground">{factor}</p>
                        </div>
                    ))}
                </div>
                 <div className="text-center max-w-2xl mx-auto">
                    <p className="font-semibold text-lg">We focus only on coaching institutes, so our system fits your exact needs.</p>
                </div>
            </div>
        </section>
    );
}
