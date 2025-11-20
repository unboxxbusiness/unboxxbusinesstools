'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const adCopyTemplates = {
  freeDemo: {
    short: "Free Demo for {courseName}! See why our students get top ranks. Limited seats. Sign up now!",
    medium: "Struggling with {courseName}? Join our FREE live demo and experience a new way of learning. Our expert faculty will show you the path to success. Perfect for {targetAudience}. Reserve your spot today!",
    long: `Attention {targetAudience}! Are you ready to ace your {courseName} exams?
    
Join our exclusive FREE demo class and get a firsthand look at why our students consistently achieve top results.

In this session, you'll:
✅ Learn from expert instructors.
✅ Understand complex topics easily.
✅ Get a feel for our unique teaching style.

Don't miss this chance to kickstart your preparation. Seats are filling up fast!
👇 Click the link to register for your free demo now!`
  },
  earlyBird: {
    short: "Early Bird Offer for {courseName}! Enroll now and get a flat 20% OFF. Offer ends this week.",
    medium: "Get ahead with your {courseName} preparation! Our new batch is starting soon, and we have a special Early Bird Discount for a limited time. Save big and secure your seat. Ideal for {targetAudience}.",
    long: `Your journey to mastering {courseName} starts here!
    
We are excited to announce that admissions for our next batch are now open for {targetAudience}. And we have a special offer for you!

Enroll before [End Date] and get a flat 20% OFF with our Early Bird Discount.

Our course includes:
✅ Comprehensive Study Material
✅ Regular Mock Tests
✅ Doubt-Clearing Sessions

Don't wait! This is the best price you'll get.
👇 Click to enroll now and claim your discount!`
  },
  scholarshipTest: {
    short: "Get up to 100% scholarship for our {courseName} course! Take our online test and prove your merit.",
    medium: "Think you've got what it takes? We're looking for bright {targetAudience} for our {courseName} program. Take our scholarship test and stand a chance to win up to 100% off on fees.",
    long: `An incredible opportunity for talented {targetAudience}!
    
[Institute Name] is conducting a Scholarship Test for our upcoming {courseName} batch. This is your chance to get quality education at an unbeatable price.

🏆 Top performers can get up to 100% scholarship!

Test Details:
📅 Date: [Test Date]
⏰ Time: [Test Time]
💻 Mode: Online

Why wait? Your hard work can earn you a massive discount.
👇 Register for the scholarship test now!`
  },
};

type OfferType = 'freeDemo' | 'earlyBird' | 'scholarshipTest';
interface AdCopy {
    short: string;
    medium: string;
    long: string;
}

const offerOptions: { value: OfferType; label: string }[] = [
    { value: 'freeDemo', label: 'Promote a Free Demo Class' },
    { value: 'earlyBird', label: 'Announce an Early-Bird Discount' },
    { value: 'scholarshipTest', label: 'Run a Scholarship Test' }
];

export default function AdCopyGeneratorTool() {
  const [courseName, setCourseName] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [offerType, setOfferType] = useState<OfferType | ''>('');
  const [generatedCopy, setGeneratedCopy] = useState<AdCopy | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleGenerate = () => {
    if (courseName && targetAudience && offerType) {
      const templates = adCopyTemplates[offerType];
      const personalizedCopy = {
          short: templates.short.replace(/{courseName}/g, courseName.trim()).replace(/{targetAudience}/g, targetAudience.trim()),
          medium: templates.medium.replace(/{courseName}/g, courseName.trim()).replace(/{targetAudience}/g, targetAudience.trim()),
          long: templates.long.replace(/{courseName}/g, courseName.trim()).replace(/{targetAudience}/g, targetAudience.trim()),
      };
      setGeneratedCopy(personalizedCopy);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const canGenerate = courseName && targetAudience && offerType;

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Ad Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
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
            <Label htmlFor="target-audience">Target Audience</Label>
            <Input
              id="target-audience"
              placeholder="e.g., Class 12 Students"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="offer-type">Offer Type</Label>
            <Select onValueChange={(v: OfferType) => setOfferType(v)} value={offerType}>
              <SelectTrigger id="offer-type">
                <SelectValue placeholder="Select an offer..." />
              </SelectTrigger>
              <SelectContent>
                {offerOptions.map(o => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Ad Copy
          </Button>
        </CardContent>
      </Card>

      <div className="md:col-span-2 space-y-4">
        {generatedCopy ? (
            <>
                <CopyCard title="Short Copy (e.g., Headline)" text={generatedCopy.short} onCopy={() => handleCopy(generatedCopy.short, 'short')} isCopied={copiedKey === 'short'} />
                <CopyCard title="Medium Copy (e.g., Post Text)" text={generatedCopy.medium} onCopy={() => handleCopy(generatedCopy.medium, 'medium')} isCopied={copiedKey === 'medium'} />
                <CopyCard title="Long Copy (e.g., Ad Description)" text={generatedCopy.long} onCopy={() => handleCopy(generatedCopy.long, 'long')} isCopied={copiedKey === 'long'} minHeight="200px" />
            </>
        ) : (
             <Card className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground p-8 text-center">Your generated ad copy templates will appear here.</p>
            </Card>
        )}
      </div>
    </div>
  );
}

interface CopyCardProps {
    title: string;
    text: string;
    onCopy: () => void;
    isCopied: boolean;
    minHeight?: string;
}

const CopyCard = ({ title, text, onCopy, isCopied, minHeight = '100px' }: CopyCardProps) => (
    <Card>
        <CardHeader>
          <CardTitle className="text-lg flex justify-between items-center">
            {title}
            <Button variant="ghost" size="icon" onClick={onCopy}>
                {isCopied ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea readOnly value={text} className="whitespace-pre-wrap bg-muted" style={{minHeight}} />
        </CardContent>
    </Card>
)
