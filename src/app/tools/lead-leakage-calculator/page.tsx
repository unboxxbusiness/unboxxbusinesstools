'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LeadLeakageCalculatorPage() {
  const [monthlyInquiries, setMonthlyInquiries] = useState(100);
  const [responseRate, setResponseRate] = useState(80);
  const [avgRevenue, setAvgRevenue] = useState(500);
  const [lostRevenue, setLostRevenue] = useState(0);
  const [unansweredInquiries, setUnansweredInquiries] = useState(0);

  useEffect(() => {
    const inquiries = Number(monthlyInquiries) || 0;
    const rate = Number(responseRate) || 0;
    const revenue = Number(avgRevenue) || 0;

    if (inquiries > 0 && rate >= 0 && rate <= 100) {
      const unanswered = inquiries * ((100 - rate) / 100);
      const potentialLoss = unanswered * revenue;
      setUnansweredInquiries(Math.round(unanswered));
      setLostRevenue(potentialLoss);
    } else {
      setUnansweredInquiries(0);
      setLostRevenue(0);
    }
  }, [monthlyInquiries, responseRate, avgRevenue]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <main className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Lead Leakage Calculator</h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          See how much potential revenue you're losing from unanswered inquiries. Adjust the sliders to match your numbers.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">Your Numbers</h3>
          </div>
          <div className="p-6 pt-0 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="monthly-inquiries">Monthly Inquiries</Label>
              <Input
                id="monthly-inquiries"
                type="number"
                value={monthlyInquiries}
                onChange={(e) => setMonthlyInquiries(Number(e.target.value))}
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="response-rate">Your Response Rate (%)</Label>
              <Input
                id="response-rate"
                type="number"
                value={responseRate}
                onChange={(e) => setResponseRate(Number(e.target.value))}
                max={100}
                min={0}
                className="text-lg"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="avg-revenue">Average Revenue per Client</Label>
              <Input
                id="avg-revenue"
                type="number"
                value={avgRevenue}
                onChange={(e) => setAvgRevenue(Number(e.target.value))}
                className="text-lg"
              />
            </div>
          </div>
        </div>

        <div className="rounded-lg border bg-secondary text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="text-2xl font-semibold leading-none tracking-tight">The Leakage</h3>
          </div>
          <div className="p-6 pt-0 flex flex-col items-center justify-center h-full space-y-4 text-center">
            <div>
              <p className="text-5xl font-bold text-primary">{unansweredInquiries}</p>
              <p className="text-muted-foreground">Unanswered Inquiries / mo</p>
            </div>
            <div className="w-full border-t border-border"></div>
            <div>
              <p className="text-5xl font-bold text-destructive">{formatCurrency(lostRevenue)}</p>
              <p className="text-muted-foreground">Potential Lost Revenue / mo</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
