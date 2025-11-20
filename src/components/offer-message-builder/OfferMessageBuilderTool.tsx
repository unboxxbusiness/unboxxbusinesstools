'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

const offerTemplates = {
  festival: [
    "🪔 Happy Diwali, [Name]! To celebrate the festival of lights, we're offering {offerDetails} on our {courseName} course. This special offer is valid until {deadline}. Don't miss out! Enroll here: [Link]",
    "✨ Festive Greetings! This season, invest in your future. Get {offerDetails} on the {courseName} program until {deadline}. Let us know if you have any questions!",
  ],
  seasonal: [
    "☀️ Summer Special! Get a head start on your {courseName} prep. We're offering {offerDetails} for all new enrollments before {deadline}. Secure your spot today!",
    "🎓 Admission Season is here! To help you get started, we have a special offer: {offerDetails} on our acclaimed {courseName} course, valid until {deadline}.",
  ],
  earlyBird: [
    "🐦 The early bird gets the discount! Enroll in our upcoming {courseName} batch before {deadline} and get {offerDetails}. Seats are filling fast!",
    "Be an early bird! We're rewarding proactive students with {offerDetails} on our {courseName} course. This offer is only for the first 20 students or until {deadline}.",
  ]
};

type OfferType = 'festival' | 'seasonal' | 'earlyBird';

const offerOptions: { value: OfferType; label: string }[] = [
    { value: 'festival', label: 'Festival Offer (e.g., Diwali, Holi)' },
    { value: 'seasonal', label: 'Seasonal Offer (e.g., Summer, New Year)' },
    { value: 'earlyBird', label: 'Early-Bird Discount' }
];

export default function OfferMessageBuilderTool() {
  const [courseName, setCourseName] = useState('');
  const [offerDetails, setOfferDetails] = useState('');
  const [deadline, setDeadline] = useState('');
  const [offerType, setOfferType] = useState<OfferType | ''>('');
  const [scripts, setScripts] = useState<string[]>([]);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (courseName && offerDetails && deadline && offerType) {
      const selectedTemplates = offerTemplates[offerType];
      const personalizedScripts = selectedTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{offerDetails}/g, offerDetails.trim())
         .replace(/{deadline}/g, deadline.trim())
      );
      setScripts(personalizedScripts);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const canGenerate = courseName && offerDetails && deadline && offerType;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Offer Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., NEET 1-Year Program"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="offer-details">Offer Details</Label>
            <Input
              id="offer-details"
              placeholder="e.g., a flat 20% discount, a free test series"
              value={offerDetails}
              onChange={(e) => setOfferDetails(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deadline">Offer Deadline</Label>
            <Input
              id="deadline"
              placeholder="e.g., this Sunday, Oct 31st"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="offer-type">Offer Type</Label>
            <Select onValueChange={(v: OfferType) => setOfferType(v)} value={offerType}>
              <SelectTrigger id="offer-type">
                <SelectValue placeholder="Select an offer type..." />
              </SelectTrigger>
              <SelectContent>
                {offerOptions.map(r => (
                  <SelectItem key={r.value} value={r.value}>{r.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Scripts
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Offer Scripts</CardTitle>
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
              Your generated offer scripts will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
