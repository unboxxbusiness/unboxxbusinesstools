'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Users, Presentation, UserCheck, DollarSign } from 'lucide-react';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
};

const ResultCard = ({ icon, title, value }: { icon: React.ReactNode, title: string, value: string }) => (
    <Card>
        <CardContent className="p-4 flex items-center gap-4">
            <div className="bg-primary/10 text-primary p-3 rounded-lg">
                {icon}
            </div>
            <div>
                <p className="text-xl font-bold">{value}</p>
                <p className="text-sm text-muted-foreground">{title}</p>
            </div>
        </CardContent>
    </Card>
);

export default function LeadCostCalculatorTool() {
  const [adSpend, setAdSpend] = useState(50000);
  const [totalLeads, setTotalLeads] = useState(200);
  const [demosAttended, setDemosAttended] = useState(80);
  const [admissions, setAdmissions] = useState(20);

  const [cpl, setCpl] = useState(0);
  const [cpd, setCpd] = useState(0);
  const [cpa, setCpa] = useState(0);

  useEffect(() => {
    const spend = Number(adSpend) || 0;
    const leads = Number(totalLeads) || 0;
    const demos = Number(demosAttended) || 0;
    const enrolled = Number(admissions) || 0;

    setCpl(leads > 0 ? spend / leads : 0);
    setCpd(demos > 0 ? spend / demos : 0);
    setCpa(enrolled > 0 ? spend / enrolled : 0);

  }, [adSpend, totalLeads, demosAttended, admissions]);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Campaign Performance Data</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ad-spend">Total Ad Spend</Label>
            <Input
              id="ad-spend"
              type="number"
              placeholder="e.g., 50000"
              value={adSpend > 0 ? adSpend : ''}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="total-leads">Total Leads Generated</Label>
            <Input
              id="total-leads"
              type="number"
              placeholder="e.g., 200"
              value={totalLeads > 0 ? totalLeads : ''}
              onChange={(e) => setTotalLeads(Number(e.target.value))}
              min="0"
            />
          </div>
           <div className="space-y-2">
            <Label htmlFor="demos-attended">Total Demos Attended</Label>
            <Input
              id="demos-attended"
              type="number"
              placeholder="e.g., 80"
              value={demosAttended > 0 ? demosAttended : ''}
              onChange={(e) => setDemosAttended(Number(e.target.value))}
              min="0"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="admissions">Total Admissions</Label>
            <Input
              id="admissions"
              type="number"
              placeholder="e.g., 20"
              value={admissions > 0 ? admissions : ''}
              onChange={(e) => setAdmissions(Number(e.target.value))}
              min="0"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center mb-4">Your Campaign Costs</h2>
        <ResultCard 
            icon={<Users className="h-6 w-6" />}
            title="Cost Per Lead (CPL)"
            value={formatCurrency(cpl)}
        />
        <ResultCard 
            icon={<Presentation className="h-6 w-6" />}
            title="Cost Per Demo (CPD)"
            value={formatCurrency(cpd)}
        />
        <ResultCard 
            icon={<UserCheck className="h-6 w-6" />}
            title="Cost Per Admission (CPA)"
            value={formatCurrency(cpa)}
        />
      </div>
    </div>
  );
}
