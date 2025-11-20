'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

const PlannerSection = ({ title, rows = 5, placeholder }: { title: string; rows?: number; placeholder?: string }) => (
    <div className="border rounded-lg">
        <h3 className="font-semibold p-2 bg-muted border-b">{title}</h3>
        <div className="p-2 space-y-1">
            {[...Array(rows)].map((_, i) => (
                <div key={i} className="flex items-center gap-2">
                    <div className="w-5 h-5 border rounded-sm flex-shrink-0"></div>
                    <div className="w-full border-b" style={{ minHeight: '24px' }}>{placeholder && i === 0 ? <span className="text-muted-foreground text-sm">{placeholder}</span> : ''}</div>
                </div>
            ))}
        </div>
    </div>
);

const TimeSlotSection = ({ title, slots }: { title: string, slots: string[] }) => (
    <div className="border rounded-lg">
        <h3 className="font-semibold p-2 bg-muted border-b">{title}</h3>
        <div className="p-2 space-y-1">
            {slots.map((slot, i) => (
                <div key={i} className="flex items-center gap-2">
                    <span className="text-sm font-semibold w-20">{slot}</span>
                    <div className="w-full border-b" style={{ minHeight: '24px' }}></div>
                </div>
            ))}
        </div>
    </div>
);

export default function DailyPlannerTool() {
  const [counsellorName, setCounsellorName] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handlePrint = () => {
    window.print();
  };
  
  const callSlots = ['9AM-11AM', '11AM-1PM', '2PM-4PM', '4PM-6PM'];
  const demoSlots = ['10:00 AM', '12:00 PM', '3:00 PM', '5:00 PM'];

  return (
    <>
      <div className="max-w-4xl mx-auto print:hidden">
        <Card>
          <CardHeader>
            <CardTitle>Customize Your Daily Planner</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="counsellor-name">Counsellor's Name</Label>
                    <Input
                        id="counsellor-name"
                        placeholder="e.g., Anjali Sharma"
                        value={counsellorName}
                        onChange={(e) => setCounsellorName(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="date">Date</Label>
                    <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
            </div>
            <Button onClick={handlePrint} className="w-full" disabled={!counsellorName || !date}>
              <Printer className="mr-2 h-4 w-4" />
              Generate & Print Planner
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-center my-8">Planner Preview</h2>
      </div>

      {/* Printable Area */}
      <div className="printable-area p-6 border rounded-lg max-w-4xl mx-auto bg-white text-black">
        <header className="flex justify-between items-center mb-6 border-b pb-4">
            <div>
              <h1 className="text-2xl font-bold">{counsellorName || "[Counsellor Name]"}</h1>
              <p className="text-muted-foreground">Daily Action Plan</p>
            </div>
            <div className="text-right">
                <p className="font-semibold text-lg">{new Date(date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-1 space-y-4">
                <PlannerSection title="⭐ Today's Top 3 Priorities" rows={3} />
                <PlannerSection title="🔥 Hot Lead Follow-Ups" placeholder="Lead Name | Course"/>
            </div>
            <div className="md:col-span-1 space-y-4">
                <PlannerSection title="☀️ Warm Lead Follow-Ups" placeholder="Lead Name | Follow-up #" />
                <PlannerSection title="❄️ Cold Lead Re-engagement" placeholder="Lead Name | Revival Angle" />
            </div>
             <div className="md:col-span-1 space-y-4">
                <TimeSlotSection title="📞 Scheduled Calls" slots={callSlots} />
                <TimeSlotSection title="💻 Demo Classes" slots={demoSlots} />
            </div>
        </main>

        <footer className="mt-6">
            <div className="border rounded-lg">
                <h3 className="font-semibold p-2 bg-muted border-b">📝 Notes & End-of-Day Summary</h3>
                <div className="p-2" style={{minHeight: '100px'}}></div>
            </div>
        </footer>
      </div>
    </>
  );
}
