'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';

interface Benchmark {
  rate: number;
  label: string;
}

const benchmarks: Record<string, Benchmark> = {
  leadToDemo: { rate: 40, label: 'Industry Average: 40%' },
  demoToAdmission: { rate: 25, label: 'Industry Average: 25%' },
  overallConversion: { rate: 10, label: 'Industry Average: 10%' },
};

const RateDisplayCard = ({ title, rate, benchmark }: { title: string, rate: number, benchmark: Benchmark }) => {
  const isAboveBenchmark = rate >= benchmark.rate;
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold">{rate.toFixed(1)}%</p>
        <Progress value={rate} className="mt-2 h-2" />
        <div className="text-xs text-muted-foreground mt-2 flex justify-between">
          <span>Your Rate</span>
          <span className={isAboveBenchmark ? 'text-green-500' : 'text-orange-500'}>{benchmark.label}</span>
        </div>
      </CardContent>
    </Card>
  );
};


export default function ConversionRateAnalyzerTool() {
  const [totalLeads, setTotalLeads] = useState(100);
  const [demosAttended, setDemosAttended] = useState(50);
  const [admissions, setAdmissions] = useState(10);

  const [leadToDemoRate, setLeadToDemoRate] = useState(0);
  const [demoToAdmissionRate, setDemoToAdmissionRate] = useState(0);
  const [overallConversionRate, setOverallConversionRate] = useState(0);

  useEffect(() => {
    const leads = Number(totalLeads) || 0;
    const demos = Number(demosAttended) || 0;
    const enrolled = Number(admissions) || 0;

    const ltdRate = leads > 0 ? (demos / leads) * 100 : 0;
    const dtaRate = demos > 0 ? (enrolled / demos) * 100 : 0;
    const ocrRate = leads > 0 ? (enrolled / leads) * 100 : 0;

    setLeadToDemoRate(ltdRate);
    setDemoToAdmissionRate(dtaRate);
    setOverallConversionRate(ocrRate);
  }, [totalLeads, demosAttended, admissions]);

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <Card className="md:col-span-1">
        <CardHeader>
          <CardTitle>Your Funnel Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="total-leads">1. Total Leads / Inquiries</Label>
            <Input
              id="total-leads"
              type="number"
              placeholder="e.g., 100"
              value={totalLeads > 0 ? totalLeads : ''}
              onChange={(e) => setTotalLeads(Number(e.target.value))}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="demos-attended">2. Demos Attended</Label>
            <Input
              id="demos-attended"
              type="number"
              placeholder="e.g., 50"
              value={demosAttended > 0 ? demosAttended : ''}
              onChange={(e) => setDemosAttended(Number(e.target.value))}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admissions">3. Total Admissions</Label>
            <Input
              id="admissions"
              type="number"
              placeholder="e.g., 10"
              value={admissions > 0 ? admissions : ''}
              onChange={(e) => setAdmissions(Number(e.target.value))}
              min="0"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="md:col-span-2 space-y-4">
         <RateDisplayCard 
            title="Lead → Demo Rate"
            rate={leadToDemoRate}
            benchmark={benchmarks.leadToDemo}
         />
         <RateDisplayCard 
            title="Demo → Admission Rate"
            rate={demoToAdmissionRate}
            benchmark={benchmarks.demoToAdmission}
         />
         <RateDisplayCard 
            title="Overall Lead → Admission Rate"
            rate={overallConversionRate}
            benchmark={benchmarks.overallConversion}
         />
      </div>
    </div>
  );
}
