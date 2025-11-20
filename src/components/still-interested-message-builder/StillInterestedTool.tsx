'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const messageTemplates = [
  "Hi [Name], just checking in to see if you had any more questions about the {courseName} course. Let me know!",
  "Following up on our conversation about the {courseName} course. Are you still interested in finding out more?",
  "Hope you're having a great week! Is there any other information I can provide about the {courseName} program?",
  "Hi [Name], wanted to quickly check if you're still exploring options for {courseName}. Happy to help if you have any questions.",
];

export default function StillInterestedTool() {
  const [courseName, setCourseName] = useState('');
  const [templates, setTemplates] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName) {
      const personalizedTemplates = messageTemplates.map(t =>
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
          <CardTitle>Message Builder</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., NEET Biology"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName}>
            Generate Messages
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Nudge Messages</CardTitle>
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
              Your generated messages will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
