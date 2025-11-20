'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const scriptTemplates = {
  generalCheckIn: [
    "Hey {leadName}, just wanted to personally check in. I saw you were interested in the {courseName} course and wanted to see if you had any questions I could answer for you. Feel free to text or message me back!",
    "Hi {leadName}, hope you're having a good day. I'm just following up on your inquiry about the {courseName} course. It’s a great program, and I’d be happy to share more about it whenever you have a moment.",
  ],
  demoReminder: [
    "Hey {leadName}, quick reminder about your demo for the {courseName} course tomorrow. We're really looking forward to showing you around. See you then!",
    "Hi {leadName}, just a heads-up, your {courseName} demo is coming up in about an hour. We're excited to have you. Talk soon!",
  ],
  valueAdd: [
    "Hi {leadName}, I was just thinking about your interest in the {courseName} course and I remembered we have a great little guide on [related topic]. I'll text you the link. Hope it helps!",
    "Hey {leadName}, I came across a success story from a former {courseName} student and thought of you. I'll send it over in a text. It’s pretty inspiring!",
  ],
};

type FollowUpType = 'generalCheckIn' | 'demoReminder' | 'valueAdd';

const followUpOptions: { value: FollowUpType; label: string }[] = [
    { value: 'generalCheckIn', label: 'General Check-In' },
    { value: 'demoReminder', label: 'Demo Reminder' },
    { value: 'valueAdd', label: 'Sharing Value (Resource/Story)' }
];

export default function VoiceNoteFollowUpTool() {
  const [leadName, setLeadName] = useState('');
  const [courseName, setCourseName] = useState('');
  const [followUpType, setFollowUpType] = useState<FollowUpType | ''>('');
  const [scripts, setScripts] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (leadName && courseName && followUpType) {
      const selectedTemplates = scriptTemplates[followUpType];
      const personalizedScripts = selectedTemplates.map(t =>
        t.replace(/{leadName}/g, leadName.trim())
         .replace(/{courseName}/g, courseName.trim())
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
            <Label htmlFor="lead-name">Lead's First Name</Label>
            <Input
              id="lead-name"
              placeholder="e.g., Priya"
              value={leadName}
              onChange={(e) => setLeadName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., JEE Mains"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="follow-up-type">Follow-Up Angle</Label>
            <Select onValueChange={(v: FollowUpType) => setFollowUpType(v)} value={followUpType}>
              <SelectTrigger id="follow-up-type">
                <SelectValue placeholder="Select a scenario..." />
              </SelectTrigger>
              <SelectContent>
                {followUpOptions.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!leadName || !courseName || !followUpType}>
            Generate Scripts
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Voice Note Scripts</CardTitle>
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
              Your generated scripts will appear here. Read them aloud to practice.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
