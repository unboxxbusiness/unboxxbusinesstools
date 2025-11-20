import { CheckCircle, Contact, Laptop } from "lucide-react"

const steps = [
    {
        icon: <Contact className="h-8 w-8" />,
        title: "1. Fill the Form",
        description: "Submit your details in the form below so we know how to reach you."
    },
    {
        icon: <CheckCircle className="h-8 w-8" />,
        title: "2. We'll Call You",
        description: "Our team will call you within 24 hours to schedule a convenient time for your live demo."
    },
    {
        icon: <Laptop className="h-8 w-8" />,
        title: "3. Attend the Demo",
        description: "Join the live video call to see the AI system in action and get all your questions answered."
    },
]

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-5xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold">How It Works</h2>
                    <p className="text-muted-foreground mt-3">A simple, 3-step process to get your free demo.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map(step => (
                        <div key={step.title} className="text-center p-6 border rounded-lg bg-card">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-primary/10 rounded-full text-primary">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}