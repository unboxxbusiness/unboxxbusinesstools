import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-20 md:py-32 bg-muted/20">
            <div className="container mx-auto max-w-3xl px-6 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
                    See How AI Can Automate Your Admissions
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    Book a free, no-obligation demo to see how our AI-powered system can capture every lead, automate follow-ups, and help you convert more students — 24/7.
                </p>
                <div className="mt-8">
                    <Button size="lg" asChild>
                        <Link href="#book-demo">
                            Schedule Your Free Demo
                            <ArrowDown className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}