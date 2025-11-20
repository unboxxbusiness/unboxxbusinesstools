'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Copy } from 'lucide-react';

interface Reminder {
  title: string;
  message: string;
}

const templates = {
  online: {
    '24-hour': "Hi [Name], friendly reminder about your free demo for the {courseName} course tomorrow at {demoTime}. We're excited to show you what makes our program special. See you then!",
    '1-hour': "Hi [Name], your demo for the {courseName} course is starting in one hour at {demoTime}. Please get ready. Here is the link to join: {link}. See you soon!",
    '10-minute': "We're starting in 10 minutes! The demo for the {courseName} course is about to begin. Join here: {link}",
  },
  offline: {
    '24-hour': "Hi [Name], friendly reminder about your free demo for the {courseName} course tomorrow at {demoTime} at our institute. We look forward to meeting you!",
    '1-hour': "Hi [Name], just a reminder that your demo for the {courseName} course is in one hour at {demoTime}. Our address is: {address}. Please try to arrive a few minutes early.",
    '10-minute': "Your demo for {courseName} is starting in 10 minutes at our institute. We're waiting for you! Address: {address}",
  }
};


export default function DemoReminderTool() {
  const [courseName, setCourseName] = useState('');
  const [demoTime, setDemoTime] = useState('');
  const [demoType, setDemoType] = useState<'online' | 'offline'>('online');
  const [onlineLink, setOnlineLink] = useState('');
  const [offlineAddress, setOfflineAddress] = useState('');
  const [reminders, setReminders] = useState<Reminder[] | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleGenerate = () => {
    if (!courseName || !demoTime || (demoType === 'online' && !onlineLink) || (demoType === 'offline' && !offlineAddress)) {
      return;
    }

    const templateSet = templates[demoType];
    const generatedReminders: Reminder[] = [
      { title: '24-Hour Reminder', message: templateSet['24-hour'] },
      { title: '1-Hour Reminder', message: templateSet['1-hour'] },
      { title: '10-Minute Reminder', message: templateSet['10-minute'] },
    ];

    const finalReminders = generatedReminders.map(r => ({
      ...r,
      message: r.message
        .replace(/{courseName}/g, courseName.trim())
        .replace(/{demoTime}/g, demoTime.trim())
        .replace(/{link}/g, onlineLink.trim())
        .replace(/{address}/g, offlineAddress.trim())
    }));

    setReminders(finalReminders);
  };
  
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const canGenerate = courseName && demoTime && ( (demoType === 'online' && onlineLink) || (demoType === 'offline' && offlineAddress));

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Reminder Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input id="course-name" placeholder="e.g., Advanced Physics" value={courseName} onChange={e => setCourseName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demo-time">Demo Date & Time</Label>
            <Input id="demo-time" placeholder="e.g., Tomorrow at 4:00 PM" value={demoTime} onChange={e => setDemoTime(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label>Demo Type</Label>
            <RadioGroup value={demoType} onValueChange={(v: 'online' | 'offline') => setDemoType(v)} className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online">Online</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="offline" id="offline" />
                <Label htmlFor="offline">Offline</Label>
              </div>
            </RadioGroup>
          </div>
          
          {demoType === 'online' && (
            <div className="space-y-2">
              <Label htmlFor="online-link">Meeting Link (Zoom, Meet, etc.)</Label>
              <Input id="online-link" placeholder="https://zoom.us/j/..." value={onlineLink} onChange={e => setOnlineLink(e.target.value)} />
            </div>
          )}

          {demoType === 'offline' && (
            <div className="space-y-2">
              <Label htmlFor="offline-address">Institute Address</Label>
              <Input id="offline-address" placeholder="123 Education Lane, Knowledge City" value={offlineAddress} onChange={e => setOfflineAddress(e.target.value)} />
            </div>
          )}

          <Button onClick={handleGenerate} className="w-full" disabled={!canGenerate}>Generate Reminders</Button>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        {reminders ? reminders.map((reminder, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg flex justify-between items-center">
                {reminder.title}
                <Button variant="ghost" size="icon" onClick={() => handleCopy(reminder.message, index)}>
                    {copiedIndex === index ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground bg-muted p-3 rounded-md">{reminder.message}</p>
            </CardContent>
          </Card>
        )) : (
            <Card className="flex items-center justify-center h-full">
                <p className="text-sm text-muted-foreground p-8 text-center">Your generated reminders for the demo will appear here.</p>
            </Card>
        )}
      </div>
    </div>
  );
}
