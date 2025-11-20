'use client';

import { Cpu, Zap } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl">Who We Are</h2>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div className="relative space-y-4">
                        <p className="text-muted-foreground">
                            We help coaching and training institutes improve their lead handling and admissions. <span className="text-accent-foreground font-bold">Our goal is simple: make sure you never lose a student inquiry again.</span>
                        </p>
                        <p className="text-muted-foreground">It supports an entire ecosystem — from products to the APIs and platforms helping developers and businesses innovate</p>
                         <div className="grid grid-cols-2 gap-3 pt-6 sm:gap-4">
                            <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                    <Zap className="size-4" />
                                    <h3 className="text-sm font-medium">Free Tools</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Calculators, templates, and scripts to fix your process.</p>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Cpu className="size-4" />
                                    <h3 className="text-sm font-medium">AI Automation</h3>
                                </div>
                                <p className="text-muted-foreground text-sm">Turn your fixed process into a 24/7 automated system.</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-6 sm:mt-0">
                        <div className="bg-linear-to-b aspect-67/34 relative rounded-2xl from-zinc-300 to-transparent p-px dark:from-zinc-700">
                             <Image 
                                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763658202/Gemini_Generated_Image_bx7bybbx7bybbx7b_x1rdjs.png" 
                                className="hidden rounded-[15px] dark:block" 
                                alt="illustration dark" 
                                width={1206} 
                                height={612}
                                data-ai-hint="abstract dark"
                             />
                             <Image 
                                src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763658202/Gemini_Generated_Image_bx7bybbx7bybbx7b_x1rdjs.png" 
                                className="rounded-[15px] shadow dark:hidden" 
                                alt="illustration light" 
                                width={1206} 
                                height={612}
                                data-ai-hint="abstract light"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
