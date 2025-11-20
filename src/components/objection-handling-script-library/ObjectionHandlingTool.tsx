'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const objections = [
  {
    title: "Objection: \"It's too expensive.\"",
    id: "costly",
    responses: [
      {
        type: "Focus on Value",
        script: "I understand. It's an important investment. Could we break down the value you're getting? For example, the [Unique Feature, e.g., '24/7 doubt support'] is something that students find incredibly helpful for their results, and it's included in the fee."
      },
      {
        type: "Offer Installments",
        script: "I completely get that the upfront amount can seem high. That's why we offer flexible EMI options starting from just [EMI Amount] per month. Would that make it more manageable for you?"
      },
      {
        type: "Compare to Cost of Inaction",
        script: "That's a fair point. Have you considered the potential cost of not getting the right preparation for this exam? Our goal is to ensure you get the best possible rank, which can open up so many opportunities."
      }
    ]
  },
  {
    title: "Objection: \"I need to think about it / Let me get back to you.\"",
    id: "think",
    responses: [
      {
        type: "Clarify the Hesitation",
        script: "Of course, it's a big decision. To help you think it over, could you share what specific part you're unsure about? Is it the curriculum, the timings, or something else? I can provide more focused information."
      },
      {
        type: "Set a Follow-Up Time",
        script: "I understand. How about I give you a call on [Suggest Day, e.g., Friday] at [Suggest Time, e.g., 4 PM] to see if you have any questions then? That way, you have some time to review everything."
      },
      {
        type: "Create Gentle Urgency",
        script: "Absolutely, take your time. Just so you are aware, our current batch has only 3 seats left, and we usually fill up by the end of this week. I'd be happy to pencil you in if you'd like to reserve a spot."
      }
    ]
  },
  {
    title: "Objection: \"I need to talk to my parents/spouse.\"",
    id: "permission",
    responses: [
      {
        type: "Empower Them with Information",
        script: "That makes perfect sense. To make that conversation easier, I can send you a short summary PDF that covers the key benefits, student testimonials, and fee structure. Would that be helpful?"
      },
      {
        type: "Offer a Joint Call",
        script: "Of course. Many parents have questions too. Would you be open to scheduling a brief 15-minute call with you and your parents? I'd be happy to answer any questions they might have directly."
      },
      {
        type: "Ask About Their Opinion",
        script: "That's a great idea. Before you speak with them, what are your own thoughts on the program? Do you feel it's a good fit for your goals?"
      }
    ]
  }
];

export default function ObjectionHandlingTool() {
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Common Objections & Responses</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {objections.map((objection) => (
              <AccordionItem value={objection.id} key={objection.id}>
                <AccordionTrigger>{objection.title}</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    {objection.responses.map((response, index) => (
                      <div key={index} className="p-3 rounded-lg bg-muted/50">
                        <div className="flex justify-between items-center mb-2">
                           <p className="font-semibold text-sm">{response.type}</p>
                           <Button variant="ghost" size="icon" onClick={() => handleCopy(response.script)}>
                            {copiedText === response.script ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4 text-muted-foreground" />
                            )}
                           </Button>
                        </div>
                        <p className="text-sm text-muted-foreground">{response.script}</p>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}
