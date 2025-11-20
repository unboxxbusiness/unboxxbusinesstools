'use client'
import React from 'react'
import { TextEffect } from '@/components/motion-primitives/text-effect'

export default function Hero({ toolCount }: { toolCount: number }) {
    return (
        <>
            <main className="overflow-hidden pt-32 pb-20 lg:pt-48">
                <section>
                    <div className="relative mx-auto max-w-6xl px-6">
                        <div className="relative z-10 mx-auto max-w-4xl text-center">
                            <TextEffect
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                as="h1"
                                className="text-balance text-5xl font-medium md:text-6xl">
                                {toolCount}+ Free Tools Built for Coaching Institutes
                            </TextEffect>
                            <TextEffect
                                per="line"
                                preset="fade-in-blur"
                                speedSegment={0.3}
                                delay={0.5}
                                as="p"
                                className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
                                A complete suite of free, easy-to-use tools to help you manage and grow your coaching business, from lead management to student engagement.
No login. No cost. Built specifically for coaching & training institutes.
                            </TextEffect>

                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}