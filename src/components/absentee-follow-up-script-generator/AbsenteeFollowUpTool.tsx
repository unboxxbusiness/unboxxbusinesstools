'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const scriptTemplates = [
  "Hi [Name], we missed you at the {courseName} demo today. Hope everything is okay. We have another session scheduled for {nextDemoDate}. Would you like us to register you for that one?",
  "Hi [Name], sorry you couldn't make it to the {courseName} demo. If you're still interested, we'd be happy to reschedule. Our next one is on {nextDemoDate}. Let me know if that works for you!",
  "Hi [Name], following up on the {courseName} demo you missed. No worries, we've recorded the session. Would you like me to send you the recording link?",
  "Just checking in, [Name]. We noticed you missed the {courseName} demo. Is there a better time for you? We have a slot open on {nextDemoDate}.",
];

export default function AbsenteeFollowUpTool() {
  const [courseName, setCourseName] = useState('');
  const [nextDemoDate, setNextDemoDate] = useState('');
  const [scripts, setScripts] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && nextDemoDate) {
      const personalizedScripts = scriptTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{nextDemoDate}/g, nextDemoDate.trim())
      );
      setScripts(personalizedScripts);
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
          <CardTitle>Script Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., Advanced NEET Physics"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="next-demo-date">Next Demo Date/Time or Batch Info</Label>
            <Input
              id="next-demo-date"
              placeholder="e.g., this Friday at 5 PM"
              value={nextDemoDate}
              onChange={(e) => setNextDemoDate(e.target.value)}
            />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !nextDemoDate}>
            Generate Scripts
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Follow-Up Scripts</CardTitle>
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
              Your generated scripts for demo absentees will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
