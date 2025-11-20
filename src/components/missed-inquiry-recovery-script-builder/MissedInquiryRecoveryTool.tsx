'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const scriptTemplates = [
  "Hi [Name], this is {counsellorName} from {instituteName}. My sincerest apologies for the delayed response to your inquiry about the {courseName} course. Your message was missed, and that's on us. Are you still exploring options? I'd be happy to help.",
  "Hello [Name], this is {counsellorName}. I'm so sorry we didn't get back to you sooner regarding your interest in our {courseName} program. To make up for the delay, I'd like to offer you a free one-on-one counseling session. Would you be open to that?",
  "Hi [Name], apologies for the late reply from {instituteName}. We were reviewing our records and noticed we missed your message about the {courseName} course. If you're still interested, let me know when would be a good time for a quick call.",
];

export default function MissedInquiryRecoveryTool() {
  const [courseName, setCourseName] = useState('');
  const [instituteName, setInstituteName] = useState('');
  const [counsellorName, setCounsellorName] = useState('');
  const [scripts, setScripts] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && instituteName && counsellorName) {
      const personalizedScripts = scriptTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{instituteName}/g, instituteName.trim())
         .replace(/{counsellorName}/g, counsellorName.trim())
      );
      setScripts(personalizedScripts);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const canGenerate = courseName && instituteName && counsellorName;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Script Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name Inquired About</Label>
            <Input
              id="course-name"
              placeholder="e.g., NEET Prep"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="institute-name">Your Institute's Name</Label>
            <Input
              id="institute-name"
              placeholder="e.g., Apex Academy"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="counsellor-name">Your Name</Label>
            <Input
              id="counsellor-name"
              placeholder="e.g., Riya"
              value={counsellorName}
              onChange={(e) => setCounsellorName(e.target.value)}
            />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Scripts
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Recovery Scripts</CardTitle>
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
              Your generated recovery scripts will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
