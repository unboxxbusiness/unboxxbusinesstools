import { Clock, TrendingDown, Users, EyeOff } from 'lucide-react'

export default function Features() {
    return (
        <section className="py-12 md:py-20 w-full">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
                    <h2 className="text-balance text-3xl font-medium md:text-4xl lg:text-5xl">Why Coaching Institutes Lose Leads (And Admissions)</h2>
                    <p className="text-muted-foreground">Most institutes don’t need more leads. They need better systems. Slow replies, weak follow-ups, and manual work silently kill admissions every month.</p>
                </div>

                <div className="relative mx-auto grid max-w-4xl divide-x divide-y border sm:grid-cols-2">
                    <div className="space-y-3 p-8 md:p-12">
                        <div className="flex items-center gap-2">
                            <Clock className="size-4" />
                            <h3 className="text-sm font-medium">Slow Response</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Students don’t get instant replies, so they ask your competitors.</p>
                    </div>
                    <div className="space-y-2 p-8 md:p-12">
                        <div className="flex items-center gap-2">
                            <TrendingDown className="size-4" />
                            <h3 className="text-sm font-medium">No Follow-Up Structure</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Counsellors follow up randomly, then forget.</p>
                    </div>
                    <div className="space-y-2 p-8 md:p-12">
                        <div className="flex items-center gap-2">
                            <Users className="size-4" />

                            <h3 className="text-sm font-medium">Demo No-Shows</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">Students register for demos but don’t attend because there are no reminders.</p>
                    </div>
                    <div className="space-y-2 p-8 md:p-12">
                        <div className="flex items-center gap-2">
                            <EyeOff className="size-4" />

                            <h3 className="text-sm font-medium">No Clear View of Lead Leakage</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">You don’t know how many leads are slipping away every month.</p>
                    </div>
                </div>
                 <div className="text-center text-muted-foreground">
                    <p>This platform gives you tools to measure and fix these problems — free.</p>
                </div>
            </div>
        </section>
    )
}
