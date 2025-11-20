'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Check, Copy } from 'lucide-react';

export default function BatchAnnouncementTool() {
  const [details, setDetails] = useState({
    courseName: '',
    batchStartDate: '',
    batchTimings: '',
    courseFee: '',
    callToAction: 'Enroll now: [Link]',
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setDetails(prev => ({ ...prev, [id]: value }));
  };

  const handleGenerate = () => {
    const message = `
🎉 *New Batch Announcement!* 🎉

Excited to announce that enrollment for our next *{courseName}* batch is now open!

*📅 Starts:* {batchStartDate}
*⏰ Timings:* {batchTimings}
*💰 Fee:* {courseFee}

This is a great opportunity to start your journey towards success.

{callToAction}

Seats are limited. Register today!
    `.trim()
      .replace(/{courseName}/g, details.courseName.trim())
      .replace(/{batchStartDate}/g, details.batchStartDate.trim())
      .replace(/{batchTimings}/g, details.batchTimings.trim())
      .replace(/{courseFee}/g, details.courseFee.trim())
      .replace(/{callToAction}/g, details.callToAction.trim());

    setGeneratedMessage(message);
  };

  const handleCopy = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const canGenerate = details.courseName && details.batchStartDate && details.batchTimings && details.courseFee;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Batch Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="courseName">Course Name</Label>
            <Input id="courseName" placeholder="e.g., IIT-JEE 1-Year Program" value={details.courseName} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="batchStartDate">Batch Start Date</Label>
            <Input id="batchStartDate" placeholder="e.g., July 15th, 2024" value={details.batchStartDate} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="batchTimings">Batch Timings</Label>
            <Input id="batchTimings" placeholder="e.g., 4 PM - 6 PM, Mon-Fri" value={details.batchTimings} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="courseFee">Course Fee</Label>
            <Input id="courseFee" placeholder="e.g., ₹1,20,000" value={details.courseFee} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="callToAction">Call to Action</Label>
            <Input id="callToAction" value={details.callToAction} onChange={handleInputChange} />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Message
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Label htmlFor="generated-message">Generated Announcement Message</Label>
        <div className="relative">
          <Textarea
            id="generated-message"
            readOnly
            value={generatedMessage}
            placeholder="Your formatted announcement message will appear here..."
            className="min-h-[300px] whitespace-pre-wrap"
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
