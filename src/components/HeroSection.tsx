'use client';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { TextEffect } from '@/components/motion-primitives/text-effect';
import { AnimatedGroup } from '@/components/motion-primitives/animated-group';
import { HeroHeader } from "@/components/header";

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
};

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-32 lg:pt-40">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative z-10 text-center lg:text-left">
                                <TextEffect
                                    preset="fade-in-blur"
                                    speedSegment={0.1}
                                    as="h1"
                                    className="text-balance text-4xl font-semibold md:text-5xl">
                                    Tools & Templates to Help Coaching Institutes Capture, Follow Up & Convert More Leads
                                </TextEffect>
                                <TextEffect
                                    per="line"
                                    preset="fade-in-blur"
                                    speedSegment={0.3}
                                    delay={0.5}
                                    as="p"
                                    className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground lg:mx-0">
                                    A free resource platform for coaching institutes. Use calculators, scripts, and checklists to fix your lead handling — then automate everything with AI.
                                </TextEffect>

                                <AnimatedGroup
                                    variants={{
                                        ...transitionVariants,
                                    }}
                                    delay={0.8}
                                    className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                    <Button asChild size="lg">
                                        <Link href="/tools">Browse Free Tools</Link>
                                    </Button>
                                    <Button asChild size="lg" variant="ghost">
                                        <Link href="#">Book a Free Automation Demo</Link>
                                    </Button>
                                </AnimatedGroup>

                                <AnimatedGroup delay={1.0} variants={transitionVariants.item}>
                                    <p className="mt-4 text-xs text-muted-foreground">
                                        No login. No cost. Built specifically for coaching & training institutes.
                                    </p>
                                </AnimatedGroup>

                            </div>
                             <AnimatedGroup delay={0.6} variants={transitionVariants.item} className="relative">
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-4xl overflow-hidden rounded-2xl border p-2 shadow-lg shadow-zinc-950/10 ring-1">
                                    <Image
                                        src="https://picsum.photos/seed/calculator/1200/900"
                                        alt="Lead Leakage Calculator Preview"
                                        width={1200}
                                        height={900}
                                        className="rounded-xl"
                                        data-ai-hint="calculator tool"
                                    />
                                </div>
                            </AnimatedGroup>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
