import { Bot, LineChart, MessageSquare, Zap } from "lucide-react"
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const features = [
    {
        icon: <Zap />,
        name: "Instant Lead Capture",
        description: "See how the AI responds instantly to every new inquiry, 24/7."
    },
    {
        icon: <MessageSquare />,
        name: "Automated Follow-Ups",
        description: "Watch the system send personalized follow-up sequences to nurture leads."
    },
    {
        icon: <Bot />,
        name: "AI-Powered Conversations",
        description: "Experience how the AI answers common questions about fees, timings, and courses."
    },
    {
        icon: <LineChart />,
        name: "Performance Dashboard",
        description: "Get a look at the central dashboard to track all your leads and metrics."
    },
     {
        icon: <Bot />,
        name: "AI-Powered Conversations",
        description: "Experience how the AI can answer common questions about fees, timings, and course details, freeing up your counselors."
    },
    {
        icon: <LineChart />,
        name: "Performance Dashboard",
        description: "Get a look at the central dashboard where you can track all your leads, conversations, and admission metrics in one place."
    },
]

export default function WhatYouWillSee() {
    return (
         <section>
             <div className="bg-muted/30 dark:bg-background py-24 md:py-32">
                 <div className="mx-auto flex flex-col px-6 md:grid md:max-w-5xl md:grid-cols-2 md:gap-12">
                     <div className="order-last mt-6 flex flex-col gap-12 md:order-first">
                         <div className="space-y-6">
                             <h2 className="text-balance text-3xl font-semibold md:text-4xl lg:text-5xl">What You'll See in the Demo</h2>
                             <p className="text-muted-foreground">A sneak peek into how our AI-powered admissions system works for you.</p>
                             <Button
                                 size="sm"
                                 asChild>
                                 <Link href="#book-demo">Book a Free Demo</Link>
                             </Button>
                         </div>
                     </div>
                     <div className="-mx-6 px-6 [mask-image:radial-gradient(ellipse_100%_100%_at_50%_0%,#000_70%,transparent_100%)] sm:mx-auto sm:max-w-md md:-mx-6 md:ml-auto md:mr-0">
                         <div className="bg-background dark:bg-muted/50 rounded-2xl border p-3 shadow-lg md:pb-12">
                             <div className="grid grid-cols-2 gap-2">
                                 {features.slice(0, 6).map(feature => (
                                     <FeatureCard 
                                         key={feature.name}
                                         icon={feature.icon}
                                         name={feature.name}
                                         description={feature.description}
                                     />
                                 ))}
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
         </section>
    )
}

const FeatureCard = ({ icon, name, description }: { icon: React.ReactNode; name: string; description: string }) => {
    return (
        <div className="hover:bg-muted dark:hover:bg-muted/50 space-y-4 rounded-lg border p-4 transition-colors">
            <div className="flex size-fit items-center justify-center text-primary">{icon}</div>
            <div className="space-y-1">
                <h3 className="text-sm font-medium">{name}</h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>
            </div>
        </div>
    )
}
