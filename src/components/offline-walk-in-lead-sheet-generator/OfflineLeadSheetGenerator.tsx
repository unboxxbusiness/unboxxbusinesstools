'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';

export default function OfflineLeadSheetGenerator() {
  const [instituteName, setInstituteName] = useState('');

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="max-w-4xl mx-auto print:hidden">
        <Card>
          <CardHeader>
            <CardTitle>Customize Your Lead Sheet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="institute-name">Your Institute's Name</Label>
              <Input
                id="institute-name"
                placeholder="e.g., Apex Coaching Center"
                value={instituteName}
                onChange={(e) => setInstituteName(e.target.value)}
              />
            </div>
            <Button onClick={handlePrint} className="w-full">
              <Printer className="mr-2 h-4 w-4" />
              Generate & Print Sheet
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold text-center my-8">Sheet Preview</h2>
      </div>

      {/* Printable Area */}
      <div className="printable-area p-8 border rounded-lg max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-2xl font-bold">{instituteName || "[Your Institute Name]"}</h1>
          <p className="text-muted-foreground">Walk-In Inquiry Log</p>
        </header>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="border p-2 text-left font-semibold">Date</th>
              <th className="border p-2 text-left font-semibold">Name</th>
              <th className="border p-2 text-left font-semibold">Phone</th>
              <th className="border p-2 text-left font-semibold">Course Interest</th>
              <th className="border p-2 text-left font-semibold">Source</th>
              <th className="border p-2 text-left font-semibold">Urgency</th>
              <th className="border p-2 text-left font-semibold">Notes / Counselor</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(15)].map((_, i) => (
              <tr key={i}>
                <td className="border p-2 h-12"></td>
                <td className="border p-2 h-12"></td>
                <td className="border p-2 h-12"></td>
                <td className="border p-2 h-12"></td>
                <td className="border p-2 h-12"></td>
                <td className="border p-2 h-12"></td>
                <td className="border p-2 h-12"></td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <footer className="text-center mt-4 text-xs text-muted-foreground">
            {new Date().toLocaleDateString()}
        </footer>
      </div>
    </>
  );
}
