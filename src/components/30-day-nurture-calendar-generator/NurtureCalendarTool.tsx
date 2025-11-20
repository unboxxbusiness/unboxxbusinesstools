'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CheckSquare, Coffee, Gift, MessageCircle } from 'lucide-react';

const calendarTemplate = [
  { day: 1, type: 'Initial Follow-up', icon: <CheckSquare />, details: "Confirm they received the brochure for {courseName} and ask if they have any initial questions." },
  { day: 4, type: 'Value Message', icon: <Gift />, details: "Send a link to a helpful blog post or video, e.g., '5 Common Mistakes to Avoid in {courseName} Prep'." },
  { day: 7, type: 'Engagement Question', icon: <MessageCircle />, details: "Ask a simple, non-sales question, e.g., 'What's the biggest challenge you're facing with your {courseName} studies right now?'" },
  { day: 10, type: 'Break', icon: <Coffee />, details: 'No action needed. Give the lead some space.' },
  { day: 14, type: 'Success Story', icon: <Gift />, details: "Share a short testimonial or success story from a past student of the {courseName} course." },
  { day: 18, type: 'Gentle Nudge', icon: <MessageCircle />, details: "Check in to see if they've had a chance to review the materials. Offer to schedule a brief, no-pressure call." },
  { day: 21, type: 'Break', icon: <Coffee />, details: 'No action needed.' },
  { day: 25, type: 'Webinar/Event Invite', icon: <Gift />, details: "Invite them to a free upcoming webinar or online event related to {courseName}." },
  { day: 30, type: 'Final Check-in', icon: <MessageCircle />, details: "A final, polite check-in. 'Hi [Name], just wanted to see if you had any further questions about the {courseName} course. Let me know!'" },
];

interface CalendarItem {
  day: number;
  type: string;
  icon: React.ReactNode;
  details: string;
}

export default function NurtureCalendarTool() {
  const [courseName, setCourseName] = useState('');
  const [calendar, setCalendar] = useState<CalendarItem[] | null>(null);

  const handleGenerate = () => {
    if (courseName) {
      const personalizedCalendar = calendarTemplate.map(item => ({
        ...item,
        details: item.details.replace(/{courseName}/g, courseName.trim()),
      }));
      setCalendar(personalizedCalendar);
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Calendar Generator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input
              id="course-name"
              placeholder="e.g., UPSC Mains Prep"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
            />
          </div>
          <Button onClick={handleGenerate} className="w-full" disabled={!courseName}>
            Generate Calendar
          </Button>
        </CardContent>
      </Card>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Your 30-Day Nurture Plan</CardTitle>
          </CardHeader>
          <CardContent>
            {calendar ? (
              <div className="space-y-4">
                {calendar.map((item) => (
                  <div key={item.day} className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                    <div className="flex-shrink-0 flex flex-col items-center w-16">
                      <span className="font-bold">Day {item.day}</span>
                      <div className="text-muted-foreground mt-1">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold">{item.type}</p>
                      <p className="text-sm text-muted-foreground">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-64 text-sm text-muted-foreground">
                Your generated calendar will appear here.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
