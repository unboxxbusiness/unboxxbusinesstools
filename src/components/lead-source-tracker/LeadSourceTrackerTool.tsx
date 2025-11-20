'use client';
import { useState, useEffect, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plus, X } from 'lucide-react';
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from 'recharts';

const COLORS = [
  '#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', 
  '#ffc658', '#82ca9d', '#d0ed57', '#a4de6c', '#8dd1e1'
];

const initialSources = [
  { id: 1, name: 'Google Ads', count: 0 },
  { id: 2, name: 'Instagram', count: 0 },
  { id: 3, name: 'YouTube', count: 0 },
  { id: 4, name: 'Walk-ins', count: 0 },
];

export default function LeadSourceTrackerTool() {
  const [sources, setSources] = useState(initialSources.map((s, i) => ({...s, color: COLORS[i % COLORS.length]})));
  const [totalLeads, setTotalLeads] = useState(0);

  useEffect(() => {
    const total = sources.reduce((acc, source) => acc + (Number(source.count) || 0), 0);
    setTotalLeads(total);
  }, [sources]);

  const handleSourceCountChange = (id: number, count: string) => {
    const newSources = sources.map(source => 
      source.id === id ? { ...source, count: Number(count) } : source
    );
    setSources(newSources);
  };
  
  const handleSourceNameChange = (id: number, name: string) => {
    const newSources = sources.map(source =>
      source.id === id ? { ...source, name } : source
    );
    setSources(newSources);
  };

  const addSource = () => {
    const newId = sources.length > 0 ? Math.max(...sources.map(s => s.id)) + 1 : 1;
    const newSource = {
      id: newId,
      name: `Source ${sources.length + 1}`,
      count: 0,
      color: COLORS[sources.length % COLORS.length]
    };
    setSources([...sources, newSource]);
  };

  const removeSource = (id: number) => {
    setSources(sources.filter(source => source.id !== id));
  };
  
  const chartData = useMemo(() => 
    sources
      .filter(s => s.count > 0)
      .map(s => ({
        name: s.name,
        value: s.count
      })),
  [sources]);

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Enter Lead Counts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {sources.map((source, index) => (
            <div key={source.id} className="flex items-center gap-2">
              <Input
                value={source.name}
                onChange={(e) => handleSourceNameChange(source.id, e.target.value)}
                className="w-1/2"
                placeholder="Source Name"
              />
              <Input
                type="number"
                value={source.count > 0 ? source.count : ''}
                onChange={(e) => handleSourceCountChange(source.id, e.target.value)}
                placeholder="No. of Leads"
                className="w-1/2"
                min="0"
              />
              <Button variant="ghost" size="icon" onClick={() => removeSource(source.id)} disabled={sources.length <= 1}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button onClick={addSource} variant="outline" className="w-full">
            <Plus className="h-4 w-4 mr-2" /> Add Source
          </Button>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Lead Source Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          {totalLeads > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={sources.find(s => s.name === entry.name)?.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value, name) => [`${value} leads`, name]}/>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-[300px] flex items-center justify-center text-muted-foreground">
              Enter lead counts to see the chart.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
