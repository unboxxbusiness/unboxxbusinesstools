'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { DollarSign, TrendingUp, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';

const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
};

const ResultCard = ({ icon, title, value, isPositive }: { icon: React.ReactNode, title: string, value: string, isPositive?: boolean }) => (
    <Card>
        <CardContent className="p-4 flex items-center gap-4">
            <div className={cn("p-3 rounded-lg", isPositive === true && "bg-green-100 text-green-700", isPositive === false && "bg-red-100 text-red-700", isPositive === undefined && "bg-primary/10 text-primary")}>
                {icon}
            </div>
            <div>
                <p className={cn("text-xl font-bold", isPositive === true && "text-green-700", isPositive === false && "text-red-700")}>{value}</p>
                <p className="text-sm text-muted-foreground">{title}</p>
            </div>
        </CardContent>
    </Card>
);

export default function AdSpendRoiCalculatorTool() {
  const [adSpend, setAdSpend] = useState(50000);
  const [admissions, setAdmissions] = useState(10);
  const [revenuePerAdmission, setRevenuePerAdmission] = useState(25000);

  const [totalRevenue, setTotalRevenue] = useState(0);
  const [netProfit, setNetProfit] = useState(0);
  const [roi, setRoi] = useState(0);

  useEffect(() => {
    const spend = Number(adSpend) || 0;
    const enrolled = Number(admissions) || 0;
    const revenue = Number(revenuePerAdmission) || 0;

    const totalRev = enrolled * revenue;
    const profit = totalRev - spend;
    const calculatedRoi = spend > 0 ? (profit / spend) * 100 : 0;
    
    setTotalRevenue(totalRev);
    setNetProfit(profit);
    setRoi(calculatedRoi);

  }, [adSpend, admissions, revenuePerAdmission]);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Financial Inputs</CardTitle>
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
            <Label htmlFor="admissions">Total Admissions from Ads</Label>
            <Input
              id="admissions"
              type="number"
              placeholder="e.g., 10"
              value={admissions > 0 ? admissions : ''}
              onChange={(e) => setAdmissions(Number(e.target.value))}
              min="0"
            />
          </div>
           <div className="space-y-2">
            <Label htmlFor="revenue-per-admission">Revenue Per Admission (Course Fee)</Label>
            <Input
              id="revenue-per-admission"
              type="number"
              placeholder="e.g., 25000"
              value={revenuePerAdmission > 0 ? revenuePerAdmission : ''}
              onChange={(e) => setRevenuePerAdmission(Number(e.target.value))}
              min="0"
            />
          </div>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-center mb-4">Return on Investment</h2>
        <ResultCard 
            icon={<Wallet className="h-6 w-6" />}
            title="Total Revenue Generated"
            value={formatCurrency(totalRevenue)}
        />
        <ResultCard 
            icon={<DollarSign className="h-6 w-6" />}
            title="Net Profit / Loss"
            value={formatCurrency(netProfit)}
            isPositive={netProfit >= 0}
        />
        <Card>
            <CardContent className="p-4 flex flex-col items-center justify-center text-center">
                <p className={cn("text-4xl font-bold", roi >= 0 ? "text-green-700" : "text-red-700")}>{roi.toFixed(1)}%</p>
                <p className="text-sm text-muted-foreground">Return on Ad Spend (ROI)</p>
            </CardContent>
        </Card>
      </div>
    </div>
  );
}
