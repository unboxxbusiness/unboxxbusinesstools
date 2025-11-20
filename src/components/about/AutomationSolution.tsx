'use client';

import { Bot, CalendarCheck, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import Image from 'next/image';

const solutions = [
    {
        text: "Replies instantly to new inquiries",
        icon: <Zap className="size-5" />
    },
    {
        text: "Sends automatic follow-ups",
        icon: <MessageSquare className="size-5" />
    },
    {
        text: "Reminds students about demos",
        icon: <CalendarCheck className="size-5" />
    },
    {
        text: "Helps convert them into admissions",
        icon: <TrendingUp className="size-5" />
    },
    {
        text: "Works 24/7 — even after working hours",
        icon: <Bot className="size-5" />
    }
];

export default function AutomationSolution() {
    return (
        <section className="py-16 md:py-32">
             <div className="mx-auto max-w-6xl px-6">
                 <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
                     <div className="lg:col-span-2">
                         <div className="md:pr-6 lg:pr-0">
                             <h2 className="text-4xl font-semibold lg:text-5xl">Our Automation Solution</h2>
                             <p className="mt-6 text-muted-foreground">
                                When you're ready, we set up a done-for-you AI automation system that works 24/7 to grow your admissions.
                             </p>
                         </div>
                         <ul className="mt-8 divide-y border-y">
                            {solutions.map(solution => (
                                <li key={solution.text} className="flex items-center gap-3 py-3">
                                    {solution.icon}
                                    {solution.text}
                                </li>
                            ))}
                         </ul>
                          <p className="mt-4 font-semibold">No extra staff. No technical knowledge needed.</p>
                     </div>
                     <div className="border-border/50 relative rounded-3xl border p-3 lg:col-span-3">
                         <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                             <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763658202/Gemini_Generated_Image_bx7bybbx7bybbx7b_x1rdjs.png" className="hidden rounded-[15px] dark:block" alt="automation illustration dark" width={1207} height={929} data-ai-hint="automation abstract dark" />
                             <Image src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763658202/Gemini_Generated_Image_bx7bybbx7bybbx7b_x1rdjs.png" className="rounded-[15px] shadow dark:hidden" alt="automation illustration light" width={1207} height={929} data-ai-hint="automation abstract light" />
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    );
}
