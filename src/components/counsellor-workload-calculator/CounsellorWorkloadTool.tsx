'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Clock, Users, Zap } from 'lucide-react';
import { cn } from '@/lib/utils';

const ResultCard = ({ icon, title, value, unit, isHighlighted }: { icon: React.ReactNode, title: string, value: string, unit: string, isHighlighted?: boolean }) => (
    <Card className={cn(isHighlighted && 'bg-primary/5 border-primary')}>
        <CardContent className="p-4 flex items-center gap-4">
            <div className={cn("p-3 rounded-lg", isHighlighted ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground")}>
                {icon}
            </div>
            <div>
                <p className="text-xl font-bold">{value} <span className="text-sm font-normal text-muted-foreground">{unit}</span></p>
                <p className="text-sm text-muted-foreground">{title}</p>
            </div>
        </CardContent>
    </Card>
);


export default function CounsellorWorkloadTool() {
  const [leadsPerDay, setLeadsPerDay] = useState(50);
  const [timePerLead, setTimePerLead] = useState(15);
  const [numCounsellors, setNumCounsellors] = useState(2);

  const [totalTime, setTotalTime] = useState(0);
  const [timePerCounsellor, setTimePerCounsellor] = useState(0);
  const [overload, setOverload] = useState(false);

  useEffect(() => {
    const leads = Number(leadsPerDay) || 0;
    const time = Number(timePerLead) || 0;
    const counsellors = Number(numCounsellors) || 1;

    const totalMinutes = leads * time;
    const totalHours = totalMinutes / 60;
    const hoursPerCounsellor = totalHours / counsellors;

    setTotalTime(totalHours);
    setTimePerCounsellor(hoursPerCounsellor);
    setOverload(hoursPerCounsellor > 8);

  }, [leadsPerDay, timePerLead, numCounsellors]);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Team &amp; Workload Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label>New Leads Per Day: {leadsPerDay}</Label>
            <Slider
              value={[leadsPerDay]}
              onValueChange={(value) => setLeadsPerDay(value[0])}
              min={10}
              max={500}
              step={10}
            />
             <div className="flex justify-between text-xs text-muted-foreground">
              <span>10</span>
              <span>500</span>
            </div>
          </div>
          <div className="space-y-4">
            <Label>Avg. Time Per Lead (minutes): {timePerLead}</Label>
            <Slider
              value={[timePerLead]}
              onValueChange={(value) => setTimePerLead(value[0])}
              min={5}
              max={60}
              step={1}
            />
             <div className="flex justify-between text-xs text-muted-foreground">
              <span>5</span>
              <span>60</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="num-counsellors">Number of Counsellors</Label>
            <Input
              id="num-counsellors"
              type="number"
              value={numCounsellors > 0 ? numCounsellors : ''}
              onChange={(e) => setNumCounsellors(Number(e.target.value))}
              min="1"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center mb-4">Calculated Workload</h2>
        <ResultCard 
            icon={<Clock className="h-6 w-6" />}
            title="Total Daily Time on Leads"
            value={totalTime.toFixed(1)}
            unit="hours"
        />
        <ResultCard 
            icon={<Users className="h-6 w-6" />}
            title="Workload Per Counsellor"
            value={timePerCounsellor.toFixed(1)}
            unit="hours/day"
            isHighlighted={true}
        />
        {overload && (
            <Card className="bg-destructive/10 border-destructive">
                <CardContent className="p-4 flex items-center gap-4 text-destructive">
                    <div className="p-3 rounded-lg bg-destructive/10">
                        <Zap className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="font-bold">Team Overload Alert</p>
                        <p className="text-sm">Each counsellor is spending over 8 hours a day just on leads. This is unsustainable and a prime area for automation.</p>
                    </div>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}
