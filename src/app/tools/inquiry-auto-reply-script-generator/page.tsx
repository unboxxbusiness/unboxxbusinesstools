'use client';

import { useState } from 'react';
import BackButton from '@/components/lead-leakage-calculator/BackButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Copy, Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const questionTypes = [
  'Fee Structure',
  'Batch Timings',
  'Syllabus & Course Details',
  'Scholarship & Discounts',
  'Faculty Information',
  'General Inquiry',
];

const templates = {
  'Fee Structure': `Thank you for your interest in our {courseName} course. 

The total fee for the program is [INSERT FEE]. We have flexible payment options available, including [mention options like EMI, installments, etc.].

Would you like me to send you a detailed brochure with the complete fee structure and payment plan details?`,
  'Batch Timings': `Thank you for your inquiry about the batch timings for our {courseName} course.

We have several batches available to suit your schedule:
- Morning Batch: [Morning Time, e.g., 8 AM - 10 AM]
- Afternoon Batch: [Afternoon Time, e.g., 2 PM - 4 PM]
- Weekend Batch: [Weekend Time, e.g., Sat/Sun 10 AM - 1 PM]

Please let us know which timing works best for you, and we can provide more details on class days.`,
  'Syllabus & Course Details': `Thank you for your interest in the {courseName} course.

This program provides comprehensive coverage of all key topics to ensure you are fully prepared. I've attached our detailed course syllabus and brochure for your review. It includes information on the curriculum, duration, and learning outcomes.

Do you have any specific questions about the topics covered?`,
  'Scholarship & Discounts': `Thank you for asking about our financial assistance options for the {courseName} course.

We offer scholarships for meritorious students and also have early-bird discounts available. To check your eligibility for a scholarship, could you please share your recent academic scores?

We'd be happy to help you find the best option.`,
  'Faculty Information': `Thank you for your inquiry. We pride ourselves on our experienced and dedicated faculty for the {courseName} course.

Our instructors are experts in their fields with years of teaching experience. You can find detailed profiles of our faculty members on our website here: [LINK TO FACULTY PAGE]

We believe their guidance will be invaluable to your success.`,
  'General Inquiry': `Thank you for reaching out to us regarding the {courseName} course.

We'd be happy to answer any questions you have. Could you please let us know what specific information you are looking for? Whether it's about the curriculum, fees, or anything else, we're here to help!`,
};

export default function InquiryAutoReplyScriptGeneratorPage() {
  const [courseName, setCourseName] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [generatedScript, setGeneratedScript] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerate = () => {
    if (courseName && questionType) {
      const template = templates[questionType];
      const script = template.replace(/{courseName}/g, courseName.trim());
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
    <main className="container py-12">
      <BackButton href="/tools" />
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Inquiry Auto-Reply Script Generator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Create professional, ready-to-use auto-reply scripts for common student inquiries.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Generator UI */}
        <Card className="shadow-none border-0">
          <CardContent className="p-0">
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="course-name">Course Name</Label>
                <Input
                  id="course-name"
                  placeholder="e.g., JEE Mains & Advanced"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="question-type">Question Type</Label>
                <Select onValueChange={setQuestionType} value={questionType}>
                  <SelectTrigger id="question-type">
                    <SelectValue placeholder="Select a question type..." />
                  </SelectTrigger>
                  <SelectContent>
                    {questionTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleGenerate} className="w-full" disabled={!courseName || !questionType}>
                Generate Script
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Generated Script Display */}
        <div className="space-y-4">
           <Label htmlFor="generated-script">Generated Script</Label>
          <div className="relative">
            <Textarea
              id="generated-script"
              readOnly
              value={generatedScript}
              placeholder="Your generated script will appear here..."
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
    </main>
  );
}
