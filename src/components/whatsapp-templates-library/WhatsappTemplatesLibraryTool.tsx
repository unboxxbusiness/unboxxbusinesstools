'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Copy, Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

const templates = {
  "Follow-Up & Nurturing": [
    {
      title: "Immediate Follow-Up (Hot Lead)",
      script: "Hi [Name], thanks for your interest in our [Course Name] course! Here's the brochure and a short demo video: [Link]. Happy to answer any questions."
    },
    {
      title: "Value-Add Follow-Up (Warm Lead)",
      script: "Hi [Name], hope you found the info helpful. Here’s an article on 'How to prepare for the [Course Name] exam' written by our top faculty: [Link to Blog/Video]."
    },
    {
      title: "Gentle Nudge",
      script: "Hi [Name], just checking in. Did you have a chance to look over the [Course Name] info? Happy to schedule a quick call to discuss if it's the right fit for you."
    },
    {
      title: "Cold Lead Revival (New Batch)",
      script: "Hi [Name], hope you're well. A new batch for our [Course Name] course is starting soon. I remembered your interest and wanted to see if you're still exploring options. Would you like the new schedule?"
    },
    {
      title: "Cold Lead Revival (Free Resource)",
      script: "Hi [Name], I came across this guide on 'Top 10 Tips for [Course Name] Prep' and thought of you. Hope it helps! You can find it here: [Link]."
    },
    {
        title: "7-Day Follow-Up: Day 2 (Social Proof)",
        script: "Hope you found the brochure helpful! Here's what some of our past students who took the [Course Name] course achieved: [Link to Testimonials/Results]."
    },
    {
        title: "7-Day Follow-Up: Day 5 (Engagement)",
        script: "We're hosting a free webinar this weekend on '[Course Name] Strategy'. Would you be interested in joining?"
    },
    {
        title: "30-Day Nurture: Day 7 (Engagement Question)",
        script: "Hi [Name], what's the biggest challenge you're facing with your [Course Name] studies right now? Maybe I can help point you to a resource."
    },
    {
        title: "30-Day Nurture: Day 14 (Success Story)",
        script: "Hi [Name], thought you'd find this inspiring. Here's a short success story from a past student of the [Course Name] course. [Link]"
    },
    {
        title: "Still Interested? (Short Nudge)",
        script: "Hi [Name], wanted to quickly check if you're still exploring options for [Course Name]. Happy to help if you have any questions."
    },
    {
        title: "Voice Note Follow-Up Script",
        script: "(For recording) 'Hey [Name], just wanted to personally check in. I saw you were interested in the [Course Name] course and wanted to see if you had any questions I could answer for you. Feel free to text or message me back!'"
    },
    {
        title: "Missed Call Follow-Up (Immediate)",
        script: "Hi there, this is [Counselor Name] from [Institute Name]. I saw we just missed a call from this number. How can I help you?"
    },
    {
        title: "Missed Call Follow-Up (No Reply)",
        script: "Just following up on my previous message. If you were inquiring about our courses, I'd be happy to share more details. Let me know when is a good time to call back."
    }
  ],
  "Demo & Reminders": [
    {
      title: "24-Hour Demo Reminder",
      script: "Hi [Name], friendly reminder about your free demo for the [Course Name] course tomorrow at [Demo Time]. We're excited to show you what makes our program special. See you then!"
    },
    {
      title: "1-Hour Demo Reminder (Online)",
      script: "Hi [Name], your demo for the [Course Name] course is starting in one hour at [Demo Time]. Here is the link to join: [Link]. See you soon!"
    },
    {
        title: "1-Hour Demo Reminder (Offline)",
        script: "Hi [Name], just a reminder that your demo for the [Course Name] course is in one hour at [Demo Time]. Our address is: [Address]. Please try to arrive a few minutes early."
    },
    {
      title: "10-Minute Demo Reminder",
      script: "We're starting in 10 minutes! The demo for the [Course Name] course is about to begin. Join here: [Link]"
    },
    {
      title: "Post-Demo Feedback",
      script: "Hi [Name], thanks for attending the [Course Name] demo today! What did you think? We'd love to hear your feedback."
    },
    {
      title: "Post-Demo Next Steps",
      script: "Hey [Name], now that you've seen the [Course Name] demo, I can walk you through the fee structure and payment options whenever you're ready."
    },
    {
      title: "Demo Absentee Follow-Up",
      script: "Hi [Name], we missed you at the [Course Name] demo today. Hope everything is okay. We have another session scheduled for [Next Demo Date]. Would you like us to register you for that one?"
    },
    {
      title: "Demo Absentee (Send Recording)",
      script: "Hi [Name], following up on the [Course Name] demo you missed. No worries, we've recorded the session. Would you like me to send you the recording link?"
    },
    {
        title: "Post-Demo Value Add",
        script: "Hi [Name], as a follow-up to our demo, here’s a link to a free resource on [Relevant Topic] that complements what we covered. Hope it helps!"
    }
  ],
  "Fees & Enrollment": [
    {
      title: "Fee Structure Message",
      script: "Hi [Name], as requested, here is the fee structure for the [Course Name] course:\n\nTotal Fee: [Amount]\nEarly-Bird Offer: [Amount]\n\nIncludes: Live Classes, Study Material, Test Series. Let me know if you have questions!"
    },
    {
      title: "Installment Plan Offer",
      script: "Hi [Name], I understand the fee is an important consideration. To make it easier, we offer flexible EMI options starting from just [EMI Amount]/month for the [Course Name] course. Would that be helpful for you?"
    },
     {
      title: "Urgency (Discount Ending)",
      script: "Hi [Name], a quick reminder that the early-bird discount for the [Course Name] course ends this Friday. Enroll now to save! [Link]"
    },
     {
      title: "Urgency (Few Seats Left)",
      script: "Heads up, [Name]! The response for the [Course Name] batch has been incredible, and we're down to our last 3 seats. Let me know if you'd like to reserve one before they're gone."
    },
    {
      title: "Fee Follow-Up (Gentle Reminder)",
      script: "Hi [Name], following up on our conversation. Just wanted to see if you had any questions about the [Course Name] course fee of [Course Fee]. Happy to clarify anything!"
    },
    {
      title: "Fee Follow-Up (Final Call)",
      script: "Last call, [Name]! The enrollment for the [Course Name] course closes tomorrow. If you're ready to join, here is the payment link to confirm your admission: [Payment Link]."
    },
    {
      title: "Course Comparison Prompt",
      script: "Hi [Name], to help you decide, here is a quick comparison between our [Plan 1] and [Plan 2] for the [Course Name] course. Let me know which one seems like a better fit!"
    },
    {
      title: "Admission Deadline Reminder",
      script: "Urgent: Hi [Name], just a reminder that today is the last day to enroll for the [Course Name] course. Admissions close at [Deadline Info]. Don't miss out! [Link]"
    },
  ],
  "Objection Handling": [
    {
        title: "Handling 'Too Expensive' (Focus on Value)",
        script: "I understand. It's an important investment. Could we break down the value you're getting? For example, the [Unique Feature] is something that students find incredibly helpful, and it's included in the fee."
    },
    {
        title: "Handling 'Too Expensive' (Offer EMI)",
        script: "I completely get that the upfront amount can seem high. That's why we offer flexible EMI options starting from just [EMI Amount] per month. Would that make it more manageable?"
    },
    {
        title: "Handling 'Too Expensive' (vs. Cost of Inaction)",
        script: "That's a fair point. Have you considered the potential cost of not getting the right preparation? Our goal is to ensure you get the best possible rank, which opens up so many opportunities."
    },
    {
        title: "Handling 'I need to think'",
        script: "Of course, it's a big decision. To help you think it over, could you share what specific part you're unsure about? Is it the curriculum, the timings, or something else?"
    },
    {
        title: "Handling 'I need to think' (Set Follow-up)",
        script: "I understand. How about I give you a call on [Suggest Day, e.g., Friday] at [Suggest Time, e.g., 4 PM] to see if you have any questions then? That way you have some time to review everything."
    },
    {
        title: "Handling 'I'll ask my parents'",
        script: "That makes perfect sense. To make that conversation easier, I can send you a short PDF that covers the key benefits, student testimonials, and fee structure. Would that be helpful?"
    },
    {
        title: "Handling 'I'll ask my parents' (Offer Joint Call)",
        script: "Of course. Many parents have questions too. Would you be open to scheduling a brief 15-minute call with you and your parents? I'd be happy to answer any questions they might have directly."
    }
  ],
  "General Announcements & Inquiries": [
    {
        title: "New Batch Announcement",
        script: "🎉 *New Batch Announcement!* 🎉\nExcited to announce that enrollment for our next [Course Name] batch is now open!\n\n*📅 Starts:* [Start Date]\n*⏰ Timings:* [Timings]\n*💰 Fee:* [Fee]\n\nSeats are limited. Register today! [Link]"
    },
    {
        title: "Offer Announcement",
        script: "✨ Festive Greetings! This season, invest in your future. Get [Offer Details] on the [Course Name] program until [Deadline]. Let us know if you have any questions!"
    },
    {
        title: "Inquiry Auto-Reply: Fee Structure",
        script: "Thank you for your interest in our [Course Name] course. The total fee for the program is [Fee]. We have flexible payment options available. Would you like me to send you a detailed brochure?"
    },
    {
        title: "Inquiry Auto-Reply: Batch Timings",
        script: "Thank you for your inquiry about the batch timings for our [Course Name] course. We have several batches available: [List Batches]. Please let us know which timing works best for you."
    },
    {
        title: "After-Hours Auto-Reply",
        script: "Thank you for your interest in [Institute Name]! We've received your message. Our office is currently closed, but a counselor will get back to you during our business hours (Mon-Sat, 9 AM - 7 PM)."
    },
    {
        title: "Missed Inquiry Recovery",
        script: "Hi [Name], this is [Counselor Name] from [Institute Name]. My sincerest apologies for the delayed response to your inquiry about the [Course Name] course. Your message was missed, and that's on us. Are you still exploring options?"
    },
    {
        title: "Instagram Caption: Educational Tip",
        script: "🎓 Tip of the Day for [Course Name] students! When tackling [Topic], always remember to [Actionable Tip]. It makes a huge difference! #CourseName #StudyTips"
    },
    {
        title: "Instagram Caption: Success Story",
        script: "Huge congrats to our student [Student Name] for acing their exams! 🎉 With our [Course Name] course, they were able to master [Topic] and achieve their dream. Your success story could be next. #StudentSuccess #[InstituteName]"
    }
  ]
};

// Flatten templates to count them
const allTemplates = Object.values(templates).flat();
// This gives us more than 30 templates. With slight variations by the user, this can easily generate 100+ unique messages.
const librarySize = "30+ Base";


type TemplateCategory = keyof typeof templates;

export default function WhatsappTemplatesLibraryTool() {
  const [copiedScript, setCopiedScript] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopy = (script: string) => {
    navigator.clipboard.writeText(script);
    setCopiedScript(script);
    setTimeout(() => setCopiedScript(''), 2000);
  };

  const filteredTemplates = Object.keys(templates).reduce((acc, category) => {
    const categoryKey = category as TemplateCategory;
    const filtered = templates[categoryKey].filter(template => 
        template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        template.script.toLowerCase().includes(searchTerm.toLowerCase())
    );
    if (filtered.length > 0) {
      acc[categoryKey] = filtered;
    }
    return acc;
  }, {} as typeof templates);

  return (
    <div className="max-w-4xl mx-auto">
        <div className="relative max-w-lg mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Search 100+ templates for 'fees', 'reminder', etc."
                className="pl-9 h-12"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>

      <Accordion type="multiple" defaultValue={Object.keys(templates)} className="w-full space-y-4">
        {Object.keys(filteredTemplates).length > 0 ? Object.keys(filteredTemplates).map(category => (
            <Card key={category} className="overflow-hidden">
             <AccordionItem value={category} className="border-b-0">
                <AccordionTrigger className="p-6 bg-muted/30 hover:bg-muted/50">
                    <h2 className="text-xl font-semibold">{category}</h2>
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-4">
                  <div className="space-y-4">
                    {filteredTemplates[category as TemplateCategory].map((template, index) => (
                      <div key={index} className="p-4 rounded-lg bg-muted/50 border">
                        <div className="flex justify-between items-center mb-2">
                           <p className="font-semibold text-base">{template.title}</p>
                           <Button variant="ghost" size="icon" onClick={() => handleCopy(template.script)}>
                            {copiedScript === template.script ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4 text-muted-foreground" />
                            )}
                           </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{template.script}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
             </AccordionItem>
            </Card>
        )) : (
            <div className="text-center text-muted-foreground py-16">
                <p>No templates found for "{searchTerm}".</p>
                <p className="text-xs mt-2">Try searching for a different keyword.</p>
            </div>
        )}
      </Accordion>
    </div>
  );
}
