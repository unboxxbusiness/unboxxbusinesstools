import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="py-20 md:py-32 bg-muted/20">
            <div className="container mx-auto max-w-3xl px-6 text-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-balance">
                    See How AI Can Automate Your Admissions
                </h1>
                <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
                    See how your institute can reply instantly, follow up automatically, and convert more leads into admissions — without extra staff.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
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
        </section>
    )
}
