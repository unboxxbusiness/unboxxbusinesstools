import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
const faqs = [
    {
        question: "Is the demo really free?",
        answer: "Yes, absolutely. The demo is 100% free with no obligation. Our goal is to show you the value our automation system can bring to your institute."
    },
    {
        question: "How long is the demo?",
        answer: "The demo call usually takes about 30-45 minutes. We'll give you a full tour of the system, show you how it works, and answer any questions you have."
    },
    {
        question: "What do I need for the demo?",
        answer: "Just a computer with an internet connection. We'll send you a link to a video call (usually Google Meet or Zoom). No technical preparation is needed on your end."
    },
    {
        question: "What happens after the demo?",
        answer: "After the demo, we'll send you a summary and a proposal. There's no pressure to buy. You can take your time to decide if it's the right fit for you."
    }
]
  export default function Faq() {
    return (
        <section className="py-16 md:py-20">
            <div className="container mx-auto max-w-3xl px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-semibold">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-3">Everything you need to know before booking your demo.</p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                        <AccordionItem value={`item-${i}`} key={i}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    )
  }
  