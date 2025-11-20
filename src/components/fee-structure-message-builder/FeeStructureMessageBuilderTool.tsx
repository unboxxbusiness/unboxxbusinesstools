'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

export default function FeeStructureMessageBuilderTool() {
  const [details, setDetails] = useState({
    courseName: '',
    duration: '',
    totalFee: '',
    inclusions: 'Study Material, Test Series, Doubt Sessions',
    cta: 'You can enroll by visiting this link: [Payment Link]',
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setDetails(prev => ({ ...prev, [id]: value }));
  };

  const handleGenerate = () => {
    const message = `
*Fee Structure for {courseName}*

Here are the complete details for the course you inquired about:

*Course:* {courseName}
*Duration:* {duration}
*Total Fee:* {totalFee}

*What's Included:*
{inclusions}

*Next Step:*
{cta}

Please let me know if you have any questions!
    `.trim()
      .replace(/{courseName}/g, details.courseName.trim())
      .replace(/{duration}/g, details.duration.trim())
      .replace(/{totalFee}/g, details.totalFee.trim())
      .replace(/{inclusions}/g, details.inclusions.trim().split('\n').map(line => `- ${line}`).join('\n'))
      .replace(/{cta}/g, details.cta.trim());

    setGeneratedMessage(message);
  };

  const handleCopy = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const canGenerate = details.courseName && details.duration && details.totalFee;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Enter Fee Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name</Label>
            <Input id="courseName" placeholder="e.g., JEE Advanced Full Course" value={details.courseName} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="duration">Course Duration</Label>
            <Input id="duration" placeholder="e.g., 1 Year" value={details.duration} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="totalFee">Total Fee</Label>
            <Input id="totalFee" placeholder="e.g., ₹95,000" value={details.totalFee} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="inclusions">What's Included (one item per line)</Label>
            <Textarea id="inclusions" value={details.inclusions} onChange={handleInputChange} className="min-h-[100px]" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="cta">Call to Action</Label>
            <Input id="cta" value={details.cta} onChange={handleInputChange} />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Message
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Label htmlFor="generated-message">Generated WhatsApp Message</Label>
        <div className="relative">
          <Textarea
            id="generated-message"
            readOnly
            value={generatedMessage}
            placeholder="Your formatted message will appear here..."
            className="min-h-[400px] whitespace-pre-wrap"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground"
            onClick={handleCopy}
            disabled={!generatedMessage}
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
