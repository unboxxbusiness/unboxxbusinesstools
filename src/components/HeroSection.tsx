'use client';
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function HeroSection() {
    return (
        <section className="relative w-full overflow-hidden pt-24 pb-12 md:pt-36 md:pb-24">
             <div aria-hidden="true" className="absolute inset-0 -z-20">
                <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent" />
            </div>
            <div
                aria-hidden
                className="absolute inset-0 -z-10 bg-[radial-gradient(125%_125%_at_50%_10%,hsl(var(--background))_40%,_hsl(var(--primary))_100%)]"
            />
            
            <div className="container mx-auto max-w-7xl px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <div
                        className="mx-auto flex w-fit items-center gap-4 rounded-full border bg-primary/5 px-4 py-1 shadow-md transition-colors duration-300">
                        <span className="text-sm text-primary">Free forever. No login. Built for coaching institutes.</span>
                    </div>

                    <h1 className="mt-8 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        Free tools to fix lead handling and boost admissions.
                    </h1>
                    
                    <p className="mx-auto mt-6 max-w-2xl text-balance text-lg text-muted-foreground">
                        Use simple calculators and templates to fix your lead handling — then automate it with AI.
                    </p>

                    <div
                        className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">
                        <Button asChild size="lg">
                            <Link href="/tools">
                                Browse Tools
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="ghost">
                            <Link href="/book-demo">
                                Book Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="relative mt-12 md:mt-20 px-4">
                <div className="relative mx-auto max-w-6xl overflow-hidden rounded-xl border bg-background shadow-lg">
                    <Image
                        className="w-full"
                        src="https://res.cloudinary.com/dhrigocvd/image/upload/v1763657539/demo_cei0ua.png"
                        alt="app screen"
                        width="2700"
                        height="1440"
                        data-ai-hint="dashboard"
                    />
                </div>
            </div>
        </section>
    )
}
