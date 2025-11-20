'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const reminderTemplates = {
  lastDate: [
    "Urgent: Hi [Name], just a reminder that today is the last day to enroll for the {courseName} course. Admissions close at {deadlineInfo}. Don't miss out! [Link]",
    "Final call, [Name]! The deadline to join the {courseName} program is {deadlineInfo}. Let me know if you have any last-minute questions before you enroll.",
  ],
  fewSeats: [
    "Hi [Name], quick update on the {courseName} course. We have only a few seats left and they're filling up fast. If you're planning to join, now would be the perfect time!",
    "Heads up, [Name]! The response for the {courseName} batch has been incredible, and we're down to our last 3 seats. Let me know if you'd like to reserve one before they're gone.",
  ],
  discountEnding: [
    "Hi [Name], a quick reminder that the early-bird discount for the {courseName} course ends {deadlineInfo}. Enroll now to save! [Link]",
    "Don't miss out, [Name]! Your special discount for the {courseName} course expires {deadlineInfo}. This is the best price we'll be offering.",
  ]
};

type ReasonType = 'lastDate' | 'fewSeats' | 'discountEnding';

const reasons: { value: ReasonType; label: string }[] = [
    { value: 'lastDate', label: 'Last Day to Enroll' },
    { value: 'fewSeats', label: 'Only a Few Seats Left' },
    { value: 'discountEnding', label: 'Early-Bird Discount Ending' }
];

export default function AdmissionDeadlineReminderTool() {
  const [courseName, setCourseName] = useState('');
  const [deadlineInfo, setDeadlineInfo] = useState('');
  const [reason, setReason] = useState<ReasonType | ''>('');
  const [scripts, setScripts] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && deadlineInfo && reason) {
      const selectedTemplates = reminderTemplates[reason];
      const personalizedScripts = selectedTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{deadlineInfo}/g, deadlineInfo.trim())
      );
      setScripts(personalizedScripts);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const canGenerate = courseName && deadlineInfo && reason;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Reminder Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., JEE Advanced 2025"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline-info">Deadline Info</Label>
            <Input
              id="deadline-info"
              placeholder="e.g., this Friday, tonight at 11 PM"
              value={deadlineInfo}
              onChange={(e) => setDeadlineInfo(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="reason">Urgency Angle</Label>
            <Select onValueChange={(v: ReasonType) => setReason(v)} value={reason}>
              <SelectTrigger id="reason">
                <SelectValue placeholder="Select a reason..." />
              </SelectTrigger>
              <SelectContent>
                {reasons.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Reminders
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Reminder Scripts</CardTitle>
        </CardHeader>
        <CardContent>
          {scripts.length > 0 ? (
            <ul className="space-y-3">
              {scripts.map((script, index) => (
                <li
                  key={index}
                  className="flex items-start justify-between p-3 rounded-lg bg-muted/50"
                >
                  <p className="text-sm text-muted-foreground flex-1 pr-4">{script}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(script, index)}
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
              Your generated reminder scripts will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
