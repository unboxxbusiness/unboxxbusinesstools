'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

export default function WhatsappMessageTool() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
  });
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleGenerate = () => {
    const message = `*New Inquiry from Website*

*Name:* ${formData.name || 'N/A'}
*Phone:* ${formData.phone || 'N/A'}
*Email:* ${formData.email || 'N/A'}
*Course:* ${formData.course || 'N/A'}

*Message:*
${formData.message || 'No message provided.'}

---
Ready for callback.`;
    setGeneratedMessage(message);
  };

  const handleCopy = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isFormFilled = formData.name && formData.phone && formData.course;

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Student Name</Label>
            <Input id="name" placeholder="e.g., Ananya Sharma" value={formData.name} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="e.g., 9876543210" value={formData.phone} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="e.g., ananya@example.com" value={formData.email} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="course">Course of Interest</Label>
            <Input id="course" placeholder="e.g., NEET Preparation" value={formData.course} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Student's original message..." value={formData.message} onChange={handleInputChange} />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!isFormFilled}>
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
            placeholder="Your formatted WhatsApp message will appear here..."
            className="min-h-[350px] pr-20"
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
