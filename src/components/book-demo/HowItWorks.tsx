import { Check } from "lucide-react"

const targetAudience = [
    "Coaching institutes",
    "Training centers",
    "Online course creators",
    "NEET/JEE, UPSC, SSC, Banking academies",
    "Skill-based training providers",
]

export default function HowItWorks() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-3xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold">Who This Demo Is For</h2>
                    <p className="text-muted-foreground mt-3">If you receive student inquiries and want more admissions — this is for you.</p>
                </div>
                <div className="max-w-md mx-auto">
                    <ul className="space-y-3">
                        {targetAudience.map(item => (
                            <li key={item} className="flex items-start gap-3">
                                <div className="p-1 bg-green-100 rounded-full mt-1">
                                    <Check className="h-4 w-4 text-green-700" />
                                </div>
                                <span className="text-lg text-muted-foreground">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
