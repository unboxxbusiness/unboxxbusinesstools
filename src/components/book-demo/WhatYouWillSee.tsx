import { Bot, LineChart, MessageSquare, Zap } from "lucide-react"

const features = [
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Instant Lead Capture",
        description: "See how the AI system instantly responds to every new inquiry from WhatsApp, Facebook, or your website, 24/7."
    },
    {
        icon: <MessageSquare className="h-6 w-6" />,
        title: "Automated Follow-Ups",
        description: "Watch how the system sends personalized follow-up sequences to nurture leads without any manual work from your team."
    },
    {
        icon: <Bot className="h-6 w-6" />,
        title: "AI-Powered Conversations",
        description: "Experience how the AI can answer common questions about fees, timings, and course details, freeing up your counselors."
    },
    {
        icon: <LineChart className="h-6 w-6" />,
        title: "Performance Dashboard",
        description: "Get a look at the central dashboard where you can track all your leads, conversations, and admission metrics in one place."
    },
]

export default function WhatYouWillSee() {
    return (
        <section className="py-16 md:py-20 bg-muted/30">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold">What You'll See in the Demo</h2>
                    <p className="text-muted-foreground mt-3">A sneak peek into how our AI system works.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {features.map(feature => (
                        <div key={feature.title} className="flex gap-4">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary h-fit">
                                {feature.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}