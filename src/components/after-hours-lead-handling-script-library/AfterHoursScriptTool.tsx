'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Check, Copy } from 'lucide-react';

const scriptTemplates = {
  general: `Thank you for your interest in [Institute Name]! We've received your message. Our office is currently closed, but a counselor will get back to you during our business hours (Mon-Sat, 9 AM - 7 PM). We appreciate your patience.`,
  reassure: `Hello! Thanks for reaching out to [Institute Name]. We're currently assisting other students, but your inquiry is important to us. We'll respond as soon as possible. In the meantime, feel free to browse our courses on our website.`,
  setExpectations: `Hi there! Thank you for contacting [Institute Name]. We've received your message outside of our normal working hours. A member of our team will review your query and get in touch with you first thing tomorrow morning.`,
  courseInfo: `Thank you for your inquiry about our courses at [Institute Name]! We've logged your request. Our team is offline for the day, but we will send you the detailed brochure and fee structure as soon as we're back in the office.`,
};

const scriptCategories = [
  { value: 'general', label: 'General Inquiry' },
  { value: 'reassure', label: 'Acknowledge & Reassure' },
  { value: 'setExpectations', label: 'Set Expectations' },
  { value: 'courseInfo', label: 'Course Information Request' },
];

export default function AfterHoursScriptTool() {
  const [instituteName, setInstituteName] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (instituteName && selectedCategory) {
      const template = scriptTemplates[selectedCategory as keyof typeof scriptTemplates];
      const script = template.replace(/\[Institute Name\]/g, instituteName.trim());
      setGeneratedScript(script);
    }
  };

  const handleCopy = () => {
    if (generatedScript) {
      navigator.clipboard.writeText(generatedScript);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <Card>
        <CardContent className="p-6 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="institute-name">Your Institute's Name</Label>
            <Input
              id="institute-name"
              placeholder="e.g., Apex Tutorials"
              value={instituteName}
              onChange={(e) => setInstituteName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="script-category">Select a Script Category</Label>
            <Select onValueChange={setSelectedCategory} value={selectedCategory}>
              <SelectTrigger id="script-category">
                <SelectValue placeholder="Choose a response type..." />
              </SelectTrigger>
              <SelectContent>
                {scriptCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!instituteName || !selectedCategory}>
            Generate Script
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <Label htmlFor="generated-script">Generated After-Hours Script</Label>
        <div className="relative">
          <Textarea
            id="generated-script"
            readOnly
            value={generatedScript}
            placeholder="Your auto-reply script will appear here..."
            className="min-h-[250px] pr-20"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground"
            onClick={handleCopy}
            disabled={!generatedScript}
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
