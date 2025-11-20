'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const headlineTemplates = [
  "Master {courseName}: {highlight} Included.",
  "Unlock Your Potential in {courseName} with Our {highlight}.",
  "The Ultimate Prep Course for {courseName}. Now Featuring {highlight}.",
  "Ace {courseName} with Expert Guidance. {highlight} Available Now!",
  "{highlight}: Your First Step to Topping the {courseName} Exam.",
  "From Beginner to Pro in {courseName}. Join for {highlight}.",
  "Stop Dreaming, Start Achieving in {courseName}. Get {highlight} Today.",
  "Guaranteed Results in {courseName} with our {highlight}.",
];

export default function HeadlineGeneratorTool() {
  const [courseName, setCourseName] = useState('');
  const [highlight, setHighlight] = useState('');
  const [generatedHeadlines, setGeneratedHeadlines] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && highlight) {
      const headlines = headlineTemplates.map(template =>
        template
          .replace('{courseName}', courseName.trim())
          .replace('{highlight}', highlight.trim())
      );
      setGeneratedHeadlines(headlines);
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
          <CardTitle>Headline Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., JEE Mains, UPSC Prelims"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="highlight">Key Highlight</Label>
            <Input
              id="highlight"
              placeholder="e.g., Free Demo, Top 100 Ranks"
              value={highlight}
              onChange={(e) => setHighlight(e.target.value)}
            />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !highlight}>
            Generate Headlines
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Headlines</CardTitle>
        </CardHeader>
        <CardContent>
          {generatedHeadlines.length > 0 ? (
            <ul className="space-y-3">
              {generatedHeadlines.map((headline, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <p className="text-sm text-muted-foreground flex-1 pr-4">{headline}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleCopy(headline, index)}
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
            <div className="flex items-center justify-center h-48 text-sm text-muted-foreground">
              Your generated headlines will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
