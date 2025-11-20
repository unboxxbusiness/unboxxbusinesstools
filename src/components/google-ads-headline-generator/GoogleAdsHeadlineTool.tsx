'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

// Character limit for Google Ads headlines
const HEADLINE_LIMIT = 30;

const headlineTemplates = [
    "{Course}",
    "{Course} Coaching",
    "{Course} Classes",
    "Best {Course} Coaching",
    "Top {Course} Institute",
    "Expert {Course} Tutors",
    "{USP}",
    "{Course} {Location}",
    "Enroll In {Course}",
    "Learn {Course} Now",
    "{Keywords}",
    "{Course} Online",
    "Free {Course} Demo",
    "{Course} Test Prep",
    "Affordable {Course} Course",
];

export default function GoogleAdsHeadlineTool() {
  const [inputs, setInputs] = useState({
    course: '',
    keywords: '',
    usp: '',
    location: '',
  });
  const [headlines, setHeadlines] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleGenerate = () => {
    const generated: string[] = [];
    const keywordsList = inputs.keywords.split(',').map(k => k.trim());

    headlineTemplates.forEach(template => {
        let headline = template
            .replace('{Course}', inputs.course.trim())
            .replace('{USP}', inputs.usp.trim())
            .replace('{Keywords}', keywordsList[0] || '') // Use first keyword
            .replace('{Location}', inputs.location.trim());
        
        // Ensure headline is within the character limit
        if (headline.length <= HEADLINE_LIMIT && headline.trim() !== '') {
            generated.push(headline.trim());
        }
    });

    // Add more variations
    if (inputs.course && keywordsList.length > 1) {
        keywordsList.forEach(kw => {
            const headline = `${inputs.course} ${kw}`;
            if (headline.length <= HEADLINE_LIMIT) generated.push(headline);
        });
    }

    if(inputs.usp) {
        const headline = `${inputs.course} - ${inputs.usp}`;
        if (headline.length <= HEADLINE_LIMIT) generated.push(headline);
    }

    // Remove duplicates and set
    setHeadlines([...new Set(generated)]);
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const canGenerate = inputs.course && inputs.keywords;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Ad Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course">Course Name</Label>
            <Input id="course" placeholder="e.g., IIT-JEE" value={inputs.course} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="keywords">Primary Keywords (comma-separated)</Label>
            <Input id="keywords" placeholder="e.g., best coaching, online class" value={inputs.keywords} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="usp">Unique Selling Point (USP)</Label>
            <Input id="usp" placeholder="e.g., Top Faculty" value={inputs.usp} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Location (Optional)</Label>
            <Input id="location" placeholder="e.g., in Delhi" value={inputs.location} onChange={handleInputChange} />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Headlines
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Headlines ({headlines.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {headlines.length > 0 ? (
            <ul className="space-y-3 h-96 overflow-y-auto pr-2">
              {headlines.map((headline, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50"
                >
                  <p className="text-sm text-muted-foreground flex-1 pr-4">
                    {headline}
                    <span className={`ml-2 font-medium ${headline.length > HEADLINE_LIMIT ? 'text-red-500' : 'text-green-500'}`}>
                        ({headline.length})
                    </span>
                  </p>
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
            <div className="flex items-center justify-center h-48 text-sm text-muted-foreground text-center p-4">
              Your generated Google Ads headlines will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
