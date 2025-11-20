import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-3xl space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                        See How AI Can Automate Your Admissions
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        See how your institute can reply instantly, follow up automatically, and convert more leads into admissions — without extra staff.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
                    <div>
                        <div className="mb-12 mt-12 grid grid-cols-2 gap-2 md:mb-0">
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">24/7</div>
                                <p className="text-muted-foreground">Lead Capture</p>
                            </div>
                            <div className="space-y-4">
                                <div className="bg-linear-to-r from-zinc-950 to-zinc-600 bg-clip-text text-5xl font-bold text-transparent dark:from-white dark:to-zinc-800">90%</div>
                                <p className="text-muted-foreground">Follow-up Automation</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="mt-8 flex flex-col sm:flex-row items-start justify-start gap-4">
                            <Button size="lg" asChild>
                                <Link href="#book-demo">
                                    👉 Book My Free Demo
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <Link href="#">
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
