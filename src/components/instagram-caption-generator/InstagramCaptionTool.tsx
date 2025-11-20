'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';

const captionTemplates = {
  educationalTip: [
    "🎓 Tip of the Day for {courseName} students! When tackling {topic}, always remember to [Actionable Tip]. It makes a huge difference! What's your go-to strategy? 👇",
    "Struggling with {topic} in your {courseName} prep? Here’s a quick hack: [Simple Hack]. Save this post for later and share it with a friend who needs it!",
  ],
  successStory: [
    "Huge congrats to our student [Student Name] for acing their exams! 🎉 With our {courseName} course, they were able to master {topic} and achieve their dream. We're so proud! Your success story could be next.",
    "From confusion to clarity! Here's how one of our students conquered {topic} using our {courseName} program. Swipe to see their journey! 👉",
  ],
  courseAnnouncement: [
    "🚀 New Batch Alert! Enrollment for our popular {courseName} course is now OPEN. We'll be covering {topic} and much more. DM us 'ENROLL' to get the details. Seats are limited!",
    "Ready to take your {courseName} skills to the next level? Our next batch starts soon! We focus on making difficult concepts like {topic} easy to understand. Link in bio to learn more!",
  ],
  engagingQuestion: [
    "It's poll time, {courseName} aspirants! When it comes to {topic}, what do you find most challenging? A) Concept Clarity, B) Practice Questions, or C) Time Management? Vote in our story!",
    "If you could ask our expert faculty one question about {topic} for your {courseName} prep, what would it be? Drop your questions in the comments below! 👇",
  ],
};

type CaptionType = 'educationalTip' | 'successStory' | 'courseAnnouncement' | 'engagingQuestion';

const captionOptions: { value: CaptionType; label: string }[] = [
    { value: 'educationalTip', label: 'Educational Tip / Hack' },
    { value: 'successStory', label: 'Student Success Story' },
    { value: 'courseAnnouncement', label: 'Course / Batch Announcement' },
    { value: 'engagingQuestion', label: 'Engaging Question / Poll' }
];

export default function InstagramCaptionTool() {
  const [courseName, setCourseName] = useState('');
  const [topic, setTopic] = useState('');
  const [captionType, setCaptionType] = useState<CaptionType | ''>('');
  const [captions, setCaptions] = useState<string[]>([]);
  const [hashtags, setHashtags] = useState('');
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleGenerate = () => {
    if (courseName && topic && captionType) {
      const selectedTemplates = captionTemplates[captionType];
      const personalizedCaptions = selectedTemplates.map(t =>
        t.replace(/{courseName}/g, courseName.trim())
         .replace(/{topic}/g, topic.trim())
      );
      setCaptions(personalizedCaptions);

      const courseHashtag = courseName.trim().replace(/\s+/g, '').toLowerCase();
      const generatedHashtags = `
#${courseHashtag} #${courseName.trim().replace(/\s+/g, '')}Prep #Education #Coaching #StudyTips #${topic.trim().replace(/\s+/g, '')} #[YourCity]Coaching #[YourInstituteName] #Success
      `.trim();
      setHashtags(generatedHashtags);
    }
  };

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(key);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const canGenerate = courseName && topic && captionType;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Caption Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., JEE Advanced Physics"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="topic">Key Topic or Benefit</Label>
            <Input
              id="topic"
              placeholder="e.g., Rotational Motion, top ranks"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="caption-type">Caption Angle</Label>
            <Select onValueChange={(v: CaptionType) => setCaptionType(v)} value={captionType}>
              <SelectTrigger id="caption-type">
                <SelectValue placeholder="Select a caption type..." />
              </SelectTrigger>
              <SelectContent>
                {captionOptions.map(o => (
                  <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>
            Generate Captions
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Generated Captions & Hashtags</CardTitle>
        </CardHeader>
        <CardContent>
          {captions.length > 0 ? (
            <div className="space-y-6">
              <ul className="space-y-3">
                {captions.map((caption, index) => (
                  <li
                    key={index}
                    className="flex items-start justify-between p-3 rounded-lg bg-muted/50"
                  >
                    <p className="text-sm text-muted-foreground flex-1 pr-4">{caption}</p>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(caption, `caption-${index}`)}
                    >
                      {copiedItem === `caption-${index}` ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                  </li>
                ))}
              </ul>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                    <Label htmlFor="hashtags">Suggested Hashtags</Label>
                     <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(hashtags, 'hashtags')}
                    >
                      {copiedItem === 'hashtags' ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                </div>
                <Textarea id="hashtags" readOnly value={hashtags} className="h-24 bg-muted/50" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-sm text-muted-foreground text-center p-4">
              Your generated captions and hashtags will appear here.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
