'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { TrendingUp, Users, DollarSign } from 'lucide-react';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
};

const ResultCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
    <Card>
        <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-sm text-muted-foreground">{title}</p>
            </div>
        </CardContent>
    </Card>
);

export default function AdBudgetPlannerTool() {
  const [budget, setBudget] = useState(50000);
  const [cpl, setCpl] = useState(250);
  const [conversionRate, setConversionRate] = useState(10);

  const [estimatedLeads, setEstimatedLeads] = useState(0);
  const [estimatedAdmissions, setEstimatedAdmissions] = useState(0);
  const [costPerAdmission, setCostPerAdmission] = useState(0);

  useEffect(() => {
    const leads = cpl > 0 ? budget / cpl : 0;
    const admissions = leads * (conversionRate / 100);
    const cpa = admissions > 0 ? budget / admissions : 0;

    setEstimatedLeads(Math.round(leads));
    setEstimatedAdmissions(Math.round(admissions));
    setCostPerAdmission(cpa);
  }, [budget, cpl, conversionRate]);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Your Ad Spend Inputs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <Label htmlFor="budget">Monthly Ad Budget: {formatCurrency(budget)}</Label>
            <Slider
              id="budget"
              value={[budget]}
              onValueChange={(value) => setBudget(value[0])}
              min={1000}
              max={500000}
              step={1000}
            />
             <div className="flex justify-between text-xs text-muted-foreground">
              <span>{formatCurrency(1000)}</span>
              <span>{formatCurrency(500000)}</span>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cpl">Expected Cost Per Lead (CPL): {formatCurrency(cpl)}</Label>
            <Input
              id="cpl"
              type="number"
              value={cpl > 0 ? cpl : ''}
              onChange={(e) => setCpl(Number(e.target.value))}
              min="1"
            />
          </div>
          <div className="space-y-4">
            <Label>Lead to Admission Rate: {conversionRate}%</Label>
            <Slider
              value={[conversionRate]}
              onValueChange={(value) => setConversionRate(value[0])}
              min={1}
              max={100}
              step={1}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>1%</span>
              <span>100%</span>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center mb-4">Estimated Results</h2>
        <ResultCard 
            icon={<Users className="h-6 w-6" />}
            title="Estimated Leads per Month"
            value={estimatedLeads.toString()}
        />
        <ResultCard 
            icon={<TrendingUp className="h-6 w-6" />}
            title="Estimated Admissions per Month"
            value={estimatedAdmissions.toString()}
        />
        <ResultCard 
            icon={<DollarSign className="h-6 w-6" />}
            title="Cost Per Admission (CPA)"
            value={formatCurrency(costPerAdmission)}
        />
      </div>
    </div>
  );
}
