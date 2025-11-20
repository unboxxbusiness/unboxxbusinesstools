'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const nudgeTemplates = {
  feedback: [
    "Hi [Name], thanks for attending the {courseName} demo today! What did you think? We'd love to hear your feedback.",
    "Hey [Name], hope you found the {courseName} demo useful. Was there anything specific you enjoyed or any questions that came up for you afterward?",
  ],
  valueAdd: [
    "Hi [Name], as a follow-up to our demo, here’s a link to a free resource on [Relevant Topic] that complements what we covered. Hope it helps!",
    "Hey [Name], I thought you might find this useful. It's a short guide on how to get the most out of the {courseName} course. Let me know if you have any questions after the demo!",
  ],
  nextSteps: [
    "Hi [Name], enjoyed having you at the {courseName} demo! The next step would be to discuss the enrollment process. Are you free for a quick 5-minute call tomorrow?",
    "Hey [Name], now that you've seen the demo, I can walk you through the fee structure and payment options for the {courseName} course whenever you're ready.",
  ],
  urgency: [
    "Hi [Name], great to have you at the demo. Just a heads-up, the early-bird discount for the {courseName} course is ending in 2 days. Let me know if you want to lock it in!",
    "Hey [Name], we're finalizing the list for the upcoming {courseName} batch. We have just 3 spots left. Would you like to reserve yours?",
  ]
};

type NudgeType = 'feedback' | 'valueAdd' | 'nextSteps' | 'urgency';

const nudgeOptions: { value: NudgeType; label: string }[] = [
    { value: 'feedback', label: 'Ask for Feedback (Day 1)' },
    { value: 'valueAdd', label: 'Share a Value-Add (Day 2)' },
    { value: 'nextSteps', label: 'Guide to Next Steps (Day 3)' },
    { value: 'urgency', label: 'Create Urgency/Scarcity (Day 4)' }
];

export default function DemoAdmissionNudgeTool() {
  const [courseName, setCourseName] = useState('');
  const [nudgeType, setNudgeType] = useState<NudgeType | ''>('');
  const [templates, setTemplates] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && nudgeType) {
      const selectedTemplates = nudgeTemplates[nudgeType];
      const personalizedTemplates = selectedTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
      );
      setTemplates(personalizedTemplates);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Nudge Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., JEE Advanced"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="nudge-type">Follow-Up Type</Label>
            <Select onValueChange={(v: NudgeType) => setNudgeType(v)} value={nudgeType}>
              <SelectTrigger id="nudge-type">
                <SelectValue placeholder="Select a nudge type..." />
              </SelectTrigger>
              <SelectContent>
                {nudgeOptions.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !nudgeType}>
            Generate Nudges
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Nudge Templates</CardTitle>
        </CardHeader>
        <CardContent>
          {templates.length > 0 ? (
            <ul className="space-y-3">
              {templates.map((template, index) => (
                <li
                  key={index}
                  className="flex items-start justify-between p-3 rounded-lg bg-muted/50"
                >
                  <p className="text-sm text-muted-foreground flex-1 pr-4">{template}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(template, index)}
                  >
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center h-48 text-sm text-muted-foreground text-center p-4">
              Your generated follow-up messages will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
