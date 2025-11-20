'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const revivalTemplates = {
  newBatch: [
    "Hi [Name], hope you're well. A new batch for our {courseName} course is starting soon. I remembered your interest and wanted to see if you're still exploring options. Would you like the new schedule?",
    "Quick update, [Name]! Our next {courseName} batch begins next month. We have a few early-bird spots left. Let me know if you'd like the details!"
  ],
  freeResource: [
    "Hi [Name], I came across this guide on 'Top 10 Tips for {courseName} Prep' and thought of you. Hope it helps! You can find it here: [Link].",
    "Hope you're having a productive week, [Name]. We just published a new video on a key {courseName} topic that I thought you might find valuable. Here’s the link: [Link]."
  ],
  specialDiscount: [
    "Hi [Name], for a limited time, we're offering a special discount on the {courseName} course you were interested in. Is this something you'd like to learn more about?",
    "Just a heads-up, [Name]! We have a special offer for past inquiries on our {courseName} program. Let me know if you're interested, and I can share the details."
  ],
  generalCheckIn: [
    "Hi [Name], just checking in. How are your preparations for {courseName} going? Let me know if I can help with any information.",
    "Hope you are doing well, [Name]. It's been a while. Are you still planning to take up the {courseName} course? Happy to answer any questions you may have."
  ]
};

type ReasonType = 'newBatch' | 'freeResource' | 'specialDiscount' | 'generalCheckIn';

const reasons: { value: ReasonType; label: string }[] = [
    { value: 'newBatch', label: 'New Batch Starting' },
    { value: 'freeResource', label: 'Sharing a Free Resource' },
    { value: 'specialDiscount', label: 'Special Discount Offer' },
    { value: 'generalCheckIn', label: 'General Check-in' }
];

export default function LeadRevivalTool() {
  const [courseName, setCourseName] = useState('');
  const [reason, setReason] = useState<ReasonType | ''>('');
  const [templates, setTemplates] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && reason) {
      const selectedTemplates = revivalTemplates[reason];
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
          <CardTitle>Template Generator</CardTitle>
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
            <Label htmlFor="reason">Reason for Re-engaging</Label>
            <Select onValueChange={(v: ReasonType) => setReason(v)} value={reason}>
              <SelectTrigger id="reason">
                <SelectValue placeholder="Select an angle..." />
              </SelectTrigger>
              <SelectContent>
                {reasons.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !reason}>
            Generate Templates
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Revival Templates</CardTitle>
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
              Your generated templates for re-engaging cold leads will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
