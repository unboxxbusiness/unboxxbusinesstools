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
      title: "Post-Demo Feedback",
      script: "Hi [Name], thanks for attending the [Course Name] demo today! What did you think? We'd love to hear your feedback."
    },
    {
      title: "Demo Absentee Follow-Up",
      script: "Hi [Name], we missed you at the [Course Name] demo today. Hope everything is okay. We have another session scheduled for [Next Demo Date]. Would you like us to register you for that one?"
    },
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
      title: "Urgency (Few Seats Left)",
      script: "Heads up, [Name]! The response for the [Course Name] batch has been incredible, and we're down to our last 3 seats. Let me know if you'd like to reserve one before they're gone."
    },
     {
      title: "Urgency (Discount Ending)",
      script: "Hi [Name], a quick reminder that the early-bird discount for the [Course Name] course ends this Friday. Enroll now to save! [Link]"
    },
  ]
};

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
                placeholder="Search templates for 'fees', 'reminder', etc."
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
