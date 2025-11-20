'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const sequences = {
  Hot: [
    { day: 'Day 1', timing: 'Within 5 mins', type: 'Instant Welcome & Value', content: 'Hi [Name], thanks for your interest in our {courseName} course! Here\'s a link to our detailed brochure and a short demo video: [Link]. Happy to answer any questions.', cta: 'Ask if they have any initial questions.' },
    { day: 'Day 2', timing: '11 AM', type: 'Social Proof', content: 'Hope you found the brochure helpful! Here\'s what some of our past students who took the {courseName} course achieved: [Link to Testimonials/Results].', cta: 'Ask which result impressed them most.' },
    { day: 'Day 3', timing: '2 PM', type: 'Urgency & Scarcity', content: 'Just a heads-up, our early-bird discount for the {courseName} course ends this week. We have only 3 seats left at this price. Would you like to reserve your spot?', cta: 'Push for enrollment decision.' },
    { day: 'Day 4', timing: '4 PM', type: 'Handle Objections', content: 'Do you have any questions about the fee structure, timings, or anything else for the {courseName} course? We offer flexible payment plans too.', cta: 'Directly address potential blockers.' },
    { day: 'Day 5', timing: '1 PM', type: 'Final Call', content: 'Hi [Name], following up on our chat. This is the last day for the special offer on the {courseName} course. Let me know if you\'d like to proceed. Here is the payment link: [Link]', cta: 'Final push with direct link.' },
    { day: 'Day 6', timing: '6 PM', type: 'Break-up (Polite)', content: 'Hi [Name], it seems you might be busy. I won\'t follow up further on the {courseName} course, but feel free to reach out if you have questions later. Best of luck!', cta: 'Leave the door open for future contact.' },
    { day: 'Day 7', timing: '-', type: '-', content: '-', cta: '-' },
  ],
  Warm: [
    { day: 'Day 1', timing: 'Within 1 hour', type: 'Welcome & Info', content: 'Hi [Name], thanks for inquiring about our {courseName} course! I\'ve sent the detailed brochure to your email. Feel free to ask any questions here.', cta: 'Confirm they received the info.' },
    { day: 'Day 2', timing: '1 PM', type: 'Value & Insight', content: 'Here’s a helpful article on "How to prepare for the {courseName} exam" written by one of our top faculty: [Link to Blog/Video].', cta: 'Share value, no hard sell.' },
    { day: 'Day 3', timing: '3 PM', type: 'Social Proof', content: 'Curious about student success? Check out some testimonials from our {courseName} alumni: [Link to Testimonials].', cta: 'Build trust and credibility.' },
    { day: 'Day 4', timing: 'Break', type: '-', content: '-', cta: 'Give them space.' },
    { day: 'Day 5', timing: '12 PM', type: 'Engagement', content: 'We\'re hosting a free webinar this weekend on "{courseName} Strategy". Would you be interested in joining?', cta: 'Invite to a low-commitment event.' },
    { day: 'Day 6', timing: 'Break', type: '-', content: '-', cta: 'Give them space.' },
    { day: 'Day 7', timing: '5 PM', type: 'Gentle Nudge', content: 'Hi [Name], just checking in. Did you have a chance to look over the {courseName} info? Happy to schedule a quick call to discuss if it\'s the right fit for you.', cta: 'Offer a no-pressure call.' },
  ],
  Cold: [
    { day: 'Day 1', timing: 'Within 2-4 hours', type: 'Initial Contact', content: 'Hi [Name], thanks for your interest in {courseName}. Here is the brochure you requested. Let me know if you need anything else!', cta: 'Simple, low-pressure confirmation.' },
    { day: 'Day 2', timing: 'Break', type: '-', content: '-', cta: 'Give them space.' },
    { day: 'Day 3', timing: '4 PM', type: 'Valuable Content', content: 'Thought you might find this useful: A free guide to "Top 5 Mistakes to Avoid in {courseName} Prep". Download it here: [Link].', cta: 'Provide value without asking for anything.' },
    { day: 'Day 4', timing: 'Break', type: '-', content: '-', cta: '-' },
    { day: 'Day 5', timing: 'Break', type: '-', content: '-', cta: '-' },
    { day: 'Day 6', timing: '2 PM', type: 'Soft Engagement', content: 'We share daily tips and updates on our Instagram page for students preparing for {courseName}. You can follow us here: [Link].', cta: 'Guide them to a low-engagement channel.' },
    { day: 'Day 7', timing: 'Break', type: '-', content: '-', cta: '-' },
  ],
};

type LeadType = 'Hot' | 'Warm' | 'Cold';
interface SequenceStep {
  day: string;
  timing: string;
  type: string;
  content: string;
  cta: string;
}

export default function FollowUpSequenceTool() {
  const [courseName, setCourseName] = useState('');
  const [leadType, setLeadType] = useState<LeadType | ''>('');
  const [sequence, setSequence] = useState<SequenceStep[] | null>(null);

  const handleGenerate = () => {
    if (courseName && leadType) {
      const baseSequence = sequences[leadType];
      const personalizedSequence = baseSequence.map(step => ({
        ...step,
        content: step.content.replace(/{courseName}/g, courseName.trim()),
      }));
      setSequence(personalizedSequence);
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Sequence Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., NEET Preparation"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="lead-type">Lead Temperature</Label>
            <Select onValueChange={(v: LeadType) => setLeadType(v)} value={leadType}>
              <SelectTrigger id="lead-type">
                <SelectValue placeholder="Select lead type..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Hot">Hot Lead (High Intent)</SelectItem>
                <SelectItem value="Warm">Warm Lead (Medium Intent)</SelectItem>
                <SelectItem value="Cold">Cold Lead (Low Intent)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !leadType}>
            Generate Sequence
          </Button>
        </CardContent>
      </Card>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Your 7-Day Follow-Up Plan</CardTitle>
          </CardHeader>
          <CardContent>
            {sequence ? (
              <Accordion type="single" collapsible defaultValue="item-0">
                {sequence.map((step, index) =>
                  step.type !== '-' ? (
                    <AccordionItem value={`item-${index}`} key={index}>
                      <AccordionTrigger>
                        <div className="flex justify-between w-full pr-4">
                          <span>{step.day}</span>
                          <span className="text-muted-foreground text-sm">{step.type}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="space-y-4 pt-2">
                        <div className="text-sm">
                          <p className="font-semibold">Timing:</p>
                          <p className="text-muted-foreground">{step.timing}</p>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold">Example Message:</p>
                          <p className="text-muted-foreground bg-muted p-2 rounded-md">{step.content}</p>
                        </div>
                        <div className="text-sm">
                          <p className="font-semibold">Recommended CTA / Goal:</p>
                          <p className="text-muted-foreground">{step.cta}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ) : (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b-0">
                       <div className="flex items-center justify-between p-4">
                         <span>{step.day}</span>
                         <span className="text-muted-foreground text-sm">No Action (Give Space)</span>
                        </div>
                    </AccordionItem>
                  )
                )}
              </Accordion>
            ) : (
              <div className="flex items-center justify-center h-64 text-sm text-muted-foreground">
                Your generated sequence will appear here.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
