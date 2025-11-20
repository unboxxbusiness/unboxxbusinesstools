'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';

interface Message {
  title: string;
  content: string;
}

const messageTemplates: Message[] = [
  {
    title: "1st Message (Immediate)",
    content: "Hi there, this is {counsellorName} from {instituteName}. I saw we just missed a call from this number. How can I help you?",
  },
  {
    title: "2nd Message (If no reply in 1-2 hours)",
    content: "Just following up on my previous message. If you were inquiring about our courses, I'd be happy to share more details. Let me know when is a good time to call back.",
  },
  {
    title: "Fallback Line (If still no reply)",
    content: "No problem if you're busy! Feel free to save my number. This is {counsellorName} from {instituteName}, and you can reach out anytime for information about our programs. Have a great day!",
  },
];

export default function MissedCallFollowUpTool() {
  const [instituteName, setInstituteName] = useState('');
  const [counsellorName, setCounsellorName] = useState('');
  const [messages, setMessages] = useState<Message[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (instituteName && counsellorName) {
      const personalizedMessages = messageTemplates.map(msg => ({
        ...msg,
        content: msg.content
          .replace(/{instituteName}/g, instituteName.trim())
          .replace(/{counsellorName}/g, counsellorName.trim()),
      }));
      setMessages(personalizedMessages);
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };
  
  const canGenerate = instituteName && counsellorName;

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Message Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="institute-name">Your Institute's Name</Label>
            <Input id="institute-name" placeholder="e.g., Apex Coaching" value={instituteName} onChange={e => setInstituteName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="counsellor-name">Your Name (Counselor)</Label>
            <Input id="counsellor-name" placeholder="e.g., Priya" value={counsellorName} onChange={e => setCounsellorName(e.target.value)} />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>Generate Messages</Button>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {messages ? messages.map((msg, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg flex justify-between items-center">
                {msg.title}
                <Button variant="ghost" size="icon" onClick={() => handleCopy(msg.content, index)}>
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">{msg.content}</p>
            </CardContent>
          </Card>
        )) : (
            <Card className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground p-8 text-center">Your generated messages for missed calls will appear here.</p>
            </Card>
        )}
      </div>
    </div>
  );
}
