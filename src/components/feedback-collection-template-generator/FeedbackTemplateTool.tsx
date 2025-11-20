'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const feedbackTemplates = {
  overallExperience: [
    "Hi [Name], thank you for attending the {courseName} demo with {instructorName} today. We'd love to know what you thought. On a scale of 1-5, how would you rate the overall experience?",
    "Hey [Name], hope you found the {courseName} demo helpful! We value your feedback. What was your biggest takeaway from the session?",
  ],
  teachingQuality: [
    "Hi [Name], thanks for joining the {courseName} demo. How did you find {instructorName}'s teaching style? Was it clear and easy to understand?",
    "Hey [Name], following up on the demo. We're always looking to improve. Did {instructorName} explain the concepts for {courseName} well? Any specific feedback for them?",
  ],
  nextSteps: [
    "Hi [Name], it was great having you in the {courseName} demo! Based on what you saw, do you have any questions about the enrollment process?",
    "Hey [Name], now that you've seen the {courseName} demo, do you feel this is the right course for you? Happy to discuss the next steps whenever you're ready.",
  ]
};

type FeedbackType = 'overallExperience' | 'teachingQuality' | 'nextSteps';

const feedbackOptions: { value: FeedbackType; label: string }[] = [
    { value: 'overallExperience', label: 'Ask About Overall Experience' },
    { value: 'teachingQuality', label: 'Ask About Teaching Quality' },
    { value: 'nextSteps', label: 'Ask About Next Steps' }
];

export default function FeedbackTemplateTool() {
  const [courseName, setCourseName] = useState('');
  const [instructorName, setInstructorName] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType | ''>('');
  const [templates, setTemplates] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && instructorName && feedbackType) {
      const selectedTemplates = feedbackTemplates[feedbackType];
      const personalizedTemplates = selectedTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{instructorName}/g, instructorName.trim())
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
              placeholder="e.g., NEET Biology"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
           <div className="space-y-2">
            <Label htmlFor="instructor-name">Instructor's Name</Label>
            <Input
              id="instructor-name"
              placeholder="e.g., Mr. Sharma"
              value={instructorName}
              onChange={(e) => setInstructorName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="feedback-type">Feedback Angle</Label>
            <Select onValueChange={(v: FeedbackType) => setFeedbackType(v)} value={feedbackType}>
              <SelectTrigger id="feedback-type">
                <SelectValue placeholder="Select a feedback angle..." />
              </SelectTrigger>
              <SelectContent>
                {feedbackOptions.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !instructorName || !feedbackType}>
            Generate Templates
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Feedback Templates</CardTitle>
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
              Your generated feedback templates will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
