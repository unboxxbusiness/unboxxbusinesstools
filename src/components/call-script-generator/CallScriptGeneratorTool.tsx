'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { Label } from '../ui/label';
import { Input } from '../ui/input';

const scripts = {
    introduction: [
        "Hi, am I speaking with {leadName}? This is [Your Name] calling from [Your Institute]. You recently inquired about our {courseName} course. Is this a good time to talk for a couple of minutes?",
        "Hello {leadName}, my name is [Your Name] from [Your Institute]. I'm following up on your interest in our {courseName} program. I just wanted to provide you with the information you were looking for. Do you have a moment?"
    ],
    discovery: [
        "To make sure I'm helping you correctly, could you tell me a bit about what you're currently preparing for?",
        "What's the biggest challenge you're facing right now with your {courseName} preparation?",
        "What are your main goals? Are you aiming for a specific score, rank, or college?",
        "Have you taken any coaching for {courseName} before? What was your experience like?"
    ],
    pitch: [
        "Based on what you've told me, I think our {courseName} course would be a perfect fit. It's specifically designed to help students like you with [mention a challenge they shared].",
        "A key feature of our program is [mention USP, e.g., our one-on-one mentorship]. This means you get personalized guidance to overcome your specific weak areas, which you mentioned is a priority for you.",
        "Many of our successful students, who are now at [mention top college/company], started with the same challenges. Our structured approach for {courseName} helped them get there."
    ],
    closing: [
        "So, does this sound like something that could help you achieve your goals with {courseName}?",
        "The next batch is starting on [Date], and we have a few spots left. I can walk you through the admission process right now if you're ready. It only takes a few minutes.",
        "We have a special early-bird offer ending this Friday. If you enroll this week, you get a [discount/bonus]. Would you be interested in taking advantage of that?",
        "What would be the next step for you, {leadName}? Would you like to attend a free demo class to experience it firsthand?"
    ]
};

export default function CallScriptGeneratorTool() {
  const [copiedText, setCopiedText] = useState('');
  const [leadName, setLeadName] = useState('');
  const [courseName, setCourseName] = useState('');

  const handleCopy = (text: string) => {
    const personalizedScript = text
      .replace(/{leadName}/g, leadName.trim() || '[Lead Name]')
      .replace(/{courseName}/g, courseName.trim() || '[Course Name]');
    navigator.clipboard.writeText(personalizedScript);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const getPersonalizedScript = (text: string) => {
    return text
      .replace(/{leadName}/g, leadName.trim() || '[Lead Name]')
      .replace(/{courseName}/g, courseName.trim() || '[Course Name]');
  };

  return (
    <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
            <CardHeader>
                <CardTitle>Personalize Script</CardTitle>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-4">
                 <div className="space-y-2">
                    <Label htmlFor="lead-name">Lead's Name</Label>
                    <Input id="lead-name" placeholder="e.g., Rohan" value={leadName} onChange={(e) => setLeadName(e.target.value)} />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="course-name">Course Name</Label>
                    <Input id="course-name" placeholder="e.g., NEET Prep" value={courseName} onChange={(e) => setCourseName(e.target.value)} />
                </div>
            </CardContent>
        </Card>

      <Card>
        <CardHeader>
          <CardTitle>Counsellor Call Script</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full" defaultValue="introduction">
            
            <AccordionItem value="introduction">
                <AccordionTrigger className="font-semibold text-lg">1. Introduction</AccordionTrigger>
                <AccordionContent className="space-y-3">
                    {scripts.introduction.map((script, index) => (
                        <ScriptItem key={index} script={getPersonalizedScript(script)} onCopy={() => handleCopy(script)} isCopied={copiedText === script} />
                    ))}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="discovery">
                <AccordionTrigger className="font-semibold text-lg">2. Discovery Questions</AccordionTrigger>
                <AccordionContent className="space-y-3">
                    {scripts.discovery.map((script, index) => (
                        <ScriptItem key={index} script={getPersonalizedScript(script)} onCopy={() => handleCopy(script)} isCopied={copiedText === script} />
                    ))}
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="pitch">
                <AccordionTrigger className="font-semibold text-lg">3. The Pitch</AccordionTrigger>
                <AccordionContent className="space-y-3">
                    {scripts.pitch.map((script, index) => (
                        <ScriptItem key={index} script={getPersonalizedScript(script)} onCopy={() => handleCopy(script)} isCopied={copiedText === script} />
                    ))}
                </AccordionContent>
            </AccordionItem>

             <AccordionItem value="closing">
                <AccordionTrigger className="font-semibold text-lg">4. Closing / Next Steps</AccordionTrigger>
                <AccordionContent className="space-y-3">
                    {scripts.closing.map((script, index) => (
                        <ScriptItem key={index} script={getPersonalizedScript(script)} onCopy={() => handleCopy(script)} isCopied={copiedText === script} />
                    ))}
                </AccordionContent>
            </AccordionItem>

          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

const ScriptItem = ({ script, onCopy, isCopied }: { script: string, onCopy: () => void, isCopied: boolean }) => (
    <div className="flex items-start justify-between p-3 rounded-lg bg-muted/50">
        <p className="text-sm text-muted-foreground flex-1 pr-4">{script}</p>
        <Button variant="ghost" size="icon" onClick={onCopy}>
            {isCopied ? (
                <Check className="h-4 w-4 text-green-500" />
            ) : (
                <Copy className="h-4 w-4 text-muted-foreground" />
            )}
        </Button>
    </div>
);
