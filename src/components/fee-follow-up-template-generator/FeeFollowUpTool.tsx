'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const followUpTemplates = {
  gentleReminder: [
    "Hi [Name], following up on our conversation. Just wanted to see if you had any questions about the {courseName} course fee of {courseFee}. Happy to clarify anything!",
    "Hi [Name], hope you're having a good day. It was great discussing the {courseName} course with you. Let me know if you need any more details about the {courseFee} fee structure or payment options."
  ],
  handleObjections: [
    "Hi [Name], some students ask about payment flexibility. For the {courseName} course, we offer easy EMI options starting at just [EMI Amount]/month. Would that be helpful for you?",
    "Hi [Name], following up on our discussion about the {courseFee} fee. We also have a scholarship test this weekend that could give you up to a 50% discount. Would you be interested in that?",
    "Hi [Name], I understand making a decision is important. Just to let you know, our refund policy is very straightforward. You can find all the details here: [Link to Policy]. Let me know if that helps!"
  ],
  finalCall: [
    "Hi [Name], just a quick heads-up: The current batch for {courseName} is almost full, with only 3 spots left. The special discount on the {courseFee} fee also ends this Friday. Let me know if you'd like to secure your spot!",
    "Last call, [Name]! The enrollment for the {courseName} course closes tomorrow. If you're ready to join, here is the payment link to confirm your admission: [Payment Link]. Look forward to having you!",
    "Hi [Name], we're finalizing the student list for the next {courseName} batch. If you're still planning to join, please let us know today so we can reserve your seat. The fee is {courseFee}."
  ]
};

type FollowUpType = 'gentleReminder' | 'handleObjections' | 'finalCall';

const followUpOptions: { value: FollowUpType; label: string }[] = [
    { value: 'gentleReminder', label: 'Gentle Reminder (Day 1)' },
    { value: 'handleObjections', label: 'Handle Common Objections (Day 2)' },
    { value: 'finalCall', label: 'Final Call-to-Action (Day 3)' }
];

export default function FeeFollowUpTool() {
  const [courseName, setCourseName] = useState('');
  const [courseFee, setCourseFee] = useState('');
  const [followUpType, setFollowUpType] = useState<FollowUpType | ''>('');
  const [templates, setTemplates] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && courseFee && followUpType) {
      const selectedTemplates = followUpTemplates[followUpType];
      const personalizedTemplates = selectedTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{courseFee}/g, courseFee.trim())
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
              placeholder="e.g., UPSC Prelims"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course-fee">Course Fee</Label>
            <Input
              id="course-fee"
              placeholder="e.g., ₹50,000"
              value={courseFee}
              onChange={(e) => setCourseFee(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Follow-Up Type</Label>
            <Select onValueChange={(v: FollowUpType) => setFollowUpType(v)} value={followUpType}>
              <SelectTrigger id="reason">
                <SelectValue placeholder="Select a follow-up scenario..." />
              </SelectTrigger>
              <SelectContent>
                {followUpOptions.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !courseFee || !followUpType}>
            Generate Templates
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Follow-Up Templates</CardTitle>
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
              Your generated follow-up templates will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
