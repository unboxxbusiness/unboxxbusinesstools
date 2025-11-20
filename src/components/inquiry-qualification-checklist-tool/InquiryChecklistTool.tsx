'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Flame, Sun, Snowflake } from 'lucide-react';

const criteria = {
  timing: [
    { value: 'now', label: 'Needs to join immediately', points: 3 },
    { value: 'month', label: 'Planning to join within a month', points: 2 },
    { value: 'exploring', label: 'Just exploring options', points: 1 },
  ],
  source: [
    { value: 'referral', label: 'Referred by a friend/alumni', points: 3 },
    { value: 'organic', label: 'Found us on Google/Online', points: 2 },
    { value: 'ad', label: 'Came from a social media ad', points: 1 },
  ],
  knowledge: [
    { value: 'informed', label: 'Knows about our courses/results', points: 3 },
    { value: 'aware', label: 'Has heard of us before', points: 2 },
    { value: 'unaware', label: 'First time hearing about us', points: 1 },
  ],
};

const results = {
  Hot: {
    icon: <Flame className="h-6 w-6" />,
    bgColor: 'bg-red-100 dark:bg-red-900/50',
    textColor: 'text-red-600 dark:text-red-300',
    borderColor: 'border-red-500',
    title: "Hot Lead",
    description: "High intent. Prioritize immediate follow-up.",
    actions: ["Schedule a detailed counseling session today.", "Send enrollment form and payment link.", "Create urgency with a limited-time offer."]
  },
  Warm: {
    icon: <Sun className="h-6 w-6" />,
    bgColor: 'bg-yellow-100 dark:bg-yellow-900/50',
    textColor: 'text-yellow-600 dark:text-yellow-300',
    borderColor: 'border-yellow-500',
    title: "Warm Lead",
    description: "Good potential. Nurture this lead.",
    actions: ["Add to a follow-up sequence (2-3 days).", "Invite to a free demo class or webinar.", "Send testimonials and success stories."]
  },
  Cold: {
    icon: <Snowflake className="h-6 w-6" />,
    bgColor: 'bg-blue-100 dark:bg-blue-900/50',
    textColor: 'text-blue-600 dark:text-blue-300',
    borderColor: 'border-blue-500',
    title: "Cold Lead",
    description: "Low intent for now. Long-term nurturing.",
    actions: ["Add to a monthly newsletter.", "Send valuable content (blog posts, tips).", "Re-engage after a few weeks with a soft touchpoint."]
  }
};

type LeadCategory = 'Hot' | 'Warm' | 'Cold' | null;

export default function InquiryChecklistTool() {
  const [selections, setSelections] = useState({ timing: '', source: '', knowledge: '' });
  const [score, setScore] = useState(0);
  const [category, setCategory] = useState<LeadCategory>(null);

  const handleSelectChange = (key: 'timing' | 'source' | 'knowledge', value: string) => {
    setSelections(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    let currentScore = 0;
    const { timing, source, knowledge } = selections;

    if (timing) {
      currentScore += criteria.timing.find(c => c.value === timing)?.points || 0;
    }
    if (source) {
      currentScore += criteria.source.find(c => c.value === source)?.points || 0;
    }
    if (knowledge) {
      currentScore += criteria.knowledge.find(c => c.value === knowledge)?.points || 0;
    }

    setScore(currentScore);

    if (currentScore > 0) {
      if (currentScore >= 7) {
        setCategory('Hot');
      } else if (currentScore >= 4) {
        setCategory('Warm');
      } else {
        setCategory('Cold');
      }
    } else {
        setCategory(null);
    }
  }, [selections]);
  
  const resetForm = () => {
    setSelections({ timing: '', source: '', knowledge: '' });
    setScore(0);
    setCategory(null);
  };

  const allSelected = selections.timing && selections.source && selections.knowledge;
  const resultData = category ? results[category] : null;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Qualification Checklist</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label>When is the student planning to join?</Label>
            <Select onValueChange={(v) => handleSelectChange('timing', v)} value={selections.timing}>
              <SelectTrigger><SelectValue placeholder="Select joining urgency..." /></SelectTrigger>
              <SelectContent>
                {criteria.timing.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>How did they hear about you?</Label>
            <Select onValueChange={(v) => handleSelectChange('source', v)} value={selections.source}>
              <SelectTrigger><SelectValue placeholder="Select lead source..." /></SelectTrigger>
              <SelectContent>
                {criteria.source.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>How familiar are they with your institute?</Label>
            <Select onValueChange={(v) => handleSelectChange('knowledge', v)} value={selections.knowledge}>
              <SelectTrigger><SelectValue placeholder="Select familiarity level..." /></SelectTrigger>
              <SelectContent>
                {criteria.knowledge.map(c => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <Button onClick={resetForm} variant="outline" className="w-full">Reset</Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Lead Temperature & Next Steps</CardTitle>
        </CardHeader>
        <CardContent>
          {allSelected && resultData ? (
            <div className={cn("p-4 rounded-lg border-2", resultData.bgColor, resultData.borderColor)}>
              <div className="flex items-center gap-3">
                <div className={cn("p-2 rounded-full", resultData.textColor)}>
                    {resultData.icon}
                </div>
                <div>
                  <h3 className={cn("text-xl font-bold", resultData.textColor)}>{resultData.title}</h3>
                  <p className="text-sm text-muted-foreground">{resultData.description}</p>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Recommended Actions:</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  {resultData.actions.map(action => <li key={action}>{action}</li>)}
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-48 text-sm text-muted-foreground">
              Complete the checklist to see the result.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
