'use client';
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Copy } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Textarea } from '../ui/textarea';

interface Installment {
  number: number;
  amount: number;
  dueDate: string;
}

export default function FeeInstallmentTool() {
  const [totalFee, setTotalFee] = useState(100000);
  const [numInstallments, setNumInstallments] = useState(3);
  const [downPayment, setDownPayment] = useState(25000);
  const [courseName, setCourseName] = useState('');
  
  const [schedule, setSchedule] = useState<Installment[]>([]);
  const [generatedMessage, setGeneratedMessage] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (totalFee > 0 && numInstallments > 0 && downPayment >= 0 && downPayment < totalFee) {
      const remainingFee = totalFee - downPayment;
      const installmentAmount = remainingFee / (numInstallments - (downPayment > 0 ? 1 : 0));
      const newSchedule: Installment[] = [];
      const today = new Date();

      if (downPayment > 0) {
        newSchedule.push({
          number: 1,
          amount: downPayment,
          dueDate: 'On Enrollment',
        });
      }

      const startIndex = downPayment > 0 ? 2 : 1;
      const numRemainingInstallments = numInstallments - (downPayment > 0 ? 1 : 0);

      for (let i = 0; i < numRemainingInstallments; i++) {
        const dueDate = new Date(today);
        dueDate.setMonth(today.getMonth() + i + 1);
        newSchedule.push({
          number: startIndex + i,
          amount: installmentAmount,
          dueDate: dueDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        });
      }
      setSchedule(newSchedule);
    } else {
        setSchedule([]);
    }
  }, [totalFee, numInstallments, downPayment]);
  
  const handleGenerateMessage = () => {
    if (courseName && schedule.length > 0) {
        let message = `*Payment Plan for ${courseName.trim()}*\n\n`;
        message += `Total Fee: ${formatCurrency(totalFee)}\n\n`;
        message += `Here is the installment schedule:\n`;
        
        schedule.forEach(inst => {
            message += `\n*Installment ${inst.number}:* ${formatCurrency(inst.amount)}\n`;
            message += `*Due Date:* ${inst.dueDate}`;
        });

        message += `\n\nLet me know if this works for you or if you have any questions!`;
        setGeneratedMessage(message);
    }
  };
  
  const handleCopy = () => {
    if (generatedMessage) {
      navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };
  
  const canGenerate = courseName && schedule.length > 0;

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Installment Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-2">
            <Label htmlFor="course-name">Course Name</Label>
            <Input id="course-name" placeholder="e.g., IIT-JEE 2-Year Program" value={courseName} onChange={e => setCourseName(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="total-fee">Total Course Fee: {formatCurrency(totalFee)}</Label>
            <Input id="total-fee" type="number" value={totalFee} onChange={e => setTotalFee(Number(e.target.value))} min="0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="down-payment">Down Payment: {formatCurrency(downPayment)}</Label>
            <Input id="down-payment" type="number" value={downPayment} onChange={e => setDownPayment(Number(e.target.value))} min="0" max={totalFee} />
          </div>
          <div className="space-y-4">
            <Label>Number of Installments: {numInstallments}</Label>
            <Slider
              value={[numInstallments]}
              onValueChange={(value) => setNumInstallments(value[0])}
              min={2}
              max={12}
              step={1}
            />
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>2</span>
              <span>12</span>
            </div>
          </div>
          <Button onClick={handleGenerateMessage} className="w-full" disabled={!canGenerate}>Generate Message</Button>
        </CardContent>
      </Card>
      
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Payment Schedule</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {schedule.length > 0 ? (
                schedule.map(inst => (
                    <div key={inst.number} className="flex justify-between items-center p-3 rounded-lg bg-muted/50">
                        <div>
                            <p className="font-semibold">Installment {inst.number}</p>
                            <p className="text-sm text-muted-foreground">Due: {inst.dueDate}</p>
                        </div>
                        <p className="font-bold text-lg">{formatCurrency(inst.amount)}</p>
                    </div>
                ))
            ) : (
                <div className="text-center text-muted-foreground py-10">
                    Adjust the inputs to generate a schedule.
                </div>
            )}
          </CardContent>
        </Card>

        <div className="relative">
          <Textarea
            readOnly
            value={generatedMessage}
            placeholder="Your generated WhatsApp message will appear here..."
            className="min-h-[200px]"
          />
           <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 text-muted-foreground"
            onClick={handleCopy}
            disabled={!generatedMessage}
          >
            {copied ? (
              <Check className="h-5 w-5 text-green-500" />
            ) : (
              <Copy className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
