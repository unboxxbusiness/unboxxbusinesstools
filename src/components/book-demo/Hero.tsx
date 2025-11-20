'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { IntegrationCard } from './IntegrationCard'
import { Bot, CalendarCheck, LineChart, MessageSquare, Zap } from 'lucide-react'
import { Logo } from '../Logo'

export default function Hero() {
    return (
        <section>
            <div className="bg-muted/30 dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="bg-muted/25 group relative mx-auto max-w-[22rem] items-center justify-between space-y-6 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] sm:max-w-md">
                        <div
                            role="presentation"
                            className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:32px_32px] opacity-50"></div>
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}>
                                <IntegrationCard>
                                    <Zap />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MessageSquare />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <Bot />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <LineChart />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <CalendarCheck />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <Zap />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}
                                reverse>
                               <IntegrationCard>
                                     <Bot />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <LineChart />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <CalendarCheck />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <Zap />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MessageSquare />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <Bot />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div>
                            <InfiniteSlider
                                gap={24}
                                speed={20}
                                speedOnHover={10}>
                               <IntegrationCard>
                                     <CalendarCheck />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <Zap />
                                </IntegrationCard>
                                <IntegrationCard>
                                    <MessageSquare />
                                </IntegrationCard>
                                 <IntegrationCard>
                                     <Bot />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <LineChart />
                                </IntegrationCard>
                                <IntegrationCard>
                                     <CalendarCheck />
                                </IntegrationCard>
                            </InfiniteSlider>
                        </div>
                        <div className="absolute inset-0 m-auto flex size-fit justify-center gap-2">
                            <IntegrationCard
                                className="shadow-black-950/10 size-16 bg-white/25 shadow-xl backdrop-blur-md backdrop-grayscale dark:border-white/10 dark:shadow-white/15"
                                isCenter={true}>
                                <Logo />
                            </IntegrationCard>
                        </div>
                    </div>
                    <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
                        <h2 className="text-balance text-3xl font-semibold md:text-4xl">See How AI Can Automate Your Admissions</h2>
                        <p className="text-muted-foreground">See how your institute can reply instantly, follow up automatically, and convert more leads into admissions — without extra staff.</p>
                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild>
                                <Link href="#book-demo">
                                    👉 Book My Free Demo
                                </Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#book-demo">
                                    <MessageSquare className="mr-2 h-5 w-5" />
                                    Chat on WhatsApp
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
