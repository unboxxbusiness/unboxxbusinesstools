'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Check, Minus, Plus, X } from 'lucide-react';
import { Checkbox } from '../ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

interface Feature {
  id: number;
  text: string;
  inPackage1: boolean;
  inPackage2: boolean;
}

const initialFeatures: Feature[] = [
  { id: 1, text: 'Live Classes', inPackage1: true, inPackage2: true },
  { id: 2, text: 'Recorded Lectures', inPackage1: true, inPackage2: true },
  { id: 3, text: 'Printed Study Material', inPackage1: false, inPackage2: true },
  { id: 4, text: 'One-on-One Mentorship', inPackage1: false, inPackage2: true },
  { id: 5, text: 'Weekly Mock Tests', inPackage1: true, inPackage2: true },
];

export default function CourseComparisonTool() {
  const [package1Name, setPackage1Name] = useState('Online Plan');
  const [package2Name, setPackage2Name] = useState('Offline Plan');
  const [features, setFeatures] = useState<Feature[]>(initialFeatures);

  const handleFeatureTextChange = (id: number, text: string) => {
    setFeatures(features.map(f => f.id === id ? { ...f, text } : f));
  };

  const handleCheckboxChange = (id: number, pkg: 'pkg1' | 'pkg2') => {
    setFeatures(features.map(f => {
      if (f.id === id) {
        return pkg === 'pkg1' ? { ...f, inPackage1: !f.inPackage1 } : { ...f, inPackage2: !f.inPackage2 };
      }
      return f;
    }));
  };

  const addFeature = () => {
    const newId = features.length > 0 ? Math.max(...features.map(f => f.id)) + 1 : 1;
    setFeatures([...features, { id: newId, text: '', inPackage1: false, inPackage2: false }]);
  };

  const removeFeature = (id: number) => {
    setFeatures(features.filter(f => f.id !== id));
  };

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <div className="md:col-span-1">
        <Card>
          <CardHeader>
            <CardTitle>Define Features</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
                <Label htmlFor="package1Name">Package 1 Name</Label>
                <Input id="package1Name" value={package1Name} onChange={(e) => setPackage1Name(e.target.value)} />
            </div>
            <div className="space-y-2">
                <Label htmlFor="package2Name">Package 2 Name</Label>
                <Input id="package2Name" value={package2Name} onChange={(e) => setPackage2Name(e.target.value)} />
            </div>
            <hr />
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-2">
                  <Input 
                    placeholder="Feature name..." 
                    value={feature.text}
                    onChange={(e) => handleFeatureTextChange(feature.id, e.target.value)}
                  />
                   <Button variant="ghost" size="icon" onClick={() => removeFeature(feature.id)}>
                    <X className="h-4 w-4 text-destructive" />
                   </Button>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full" onClick={addFeature}>
              <Plus className="h-4 w-4 mr-2" /> Add Feature
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="md:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>Comparison Sheet</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[60%]">Features</TableHead>
                  <TableHead className="text-center">{package1Name || "Package 1"}</TableHead>
                  <TableHead className="text-center">{package2Name || "Package 2"}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                   <TableRow key={feature.id}>
                    <TableCell className="font-medium">{feature.text || '...'}</TableCell>
                    <TableCell className="text-center">
                        <div className="flex justify-center">
                            <Checkbox 
                                checked={feature.inPackage1} 
                                onCheckedChange={() => handleCheckboxChange(feature.id, 'pkg1')}
                            />
                        </div>
                    </TableCell>
                    <TableCell className="text-center">
                        <div className="flex justify-center">
                            <Checkbox 
                                checked={feature.inPackage2} 
                                onCheckedChange={() => handleCheckboxChange(feature.id, 'pkg2')}
                            />
                        </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
