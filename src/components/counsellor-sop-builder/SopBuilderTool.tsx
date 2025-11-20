'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';

const sopContent = {
    small: [
        {
            title: "1. Lead Handling Protocol",
            points: [
                "First Response Time: All new leads must be contacted within 15 minutes of inquiry.",
                "Initial Contact Method: First contact should be a personalized WhatsApp message, followed by a call if there's no response within 1 hour.",
                "Lead Qualification: Use the 'Hot-Warm-Cold' method. Ask about their target exam, timeline, and current preparation level.",
                "Data Entry: All new lead details must be logged in the master Excel sheet/CRM by the end of the day."
            ]
        },
        {
            title: "2. Follow-Up Cadence",
            points: [
                "Hot Leads: Follow up every day for the first 3 days, then every 3 days.",
                "Warm Leads: Follow up on Day 1, Day 3, and Day 7.",
                "Cold Leads: Add to a monthly broadcast list for valuable content and new batch announcements.",
                "No Response: After 3 attempts with no response, mark the lead as 'Unresponsive' and attempt revival next month."
            ]
        },
        {
            title: "3. Demo Class Protocol",
            points: [
                "Pre-Demo: Send 3 reminders: 24 hours before, 1 hour before, and 10 minutes before the demo.",
                "Post-Demo: Call within 30 minutes of the demo ending to get feedback and discuss next steps.",
                "Absentees: Send a 'We missed you' message and offer to reschedule or provide a recording."
            ]
        }
    ],
    medium: [
        {
            title: "1. Lead Handling Protocol",
            points: [
                "First Response SLA: All new leads must receive a first response within 10 minutes.",
                "Assigned Counsellor: Each lead is assigned to a specific counsellor. No one else should contact that lead to avoid confusion.",
                "Lead Qualification: Use the BANT framework (Budget, Authority, Need, Timeline) to qualify leads during the first call.",
                "CRM Update: All interactions (calls, messages, emails) must be logged in the CRM in real-time."
            ]
        },
        {
            title: "2. Follow-Up Cadence",
            points: [
                "Hot Leads: Daily follow-up required. Mix of call and WhatsApp. Escalate to senior counsellor if no decision after 3 days.",
                "Warm Leads: Structured 7-day follow-up sequence (Day 1, 2, 4, 7).",
                "Cold Leads: Move to a long-term nurture sequence (automated emails/monthly broadcasts).",
                "Communication Log: Every follow-up attempt must be logged in the CRM with a 'Next Action Date'."
            ]
        },
        {
            title: "3. Demo Class & Admission Protocol",
            points: [
                "Pre-Demo: Automated reminders (24hr, 1hr, 10min) to be sent from the CRM.",
                "Post-Demo: Assigned counsellor must call within 15 minutes to discuss the admission process.",
                "Fee Discussion: Only use the official fee structure. Any discount requests must be approved by the Team Lead.",
                "Enrollment: Counsellor is responsible for guiding the student through the entire enrollment and payment process."
            ]
        }
    ],
    large: [
        {
            title: "1. Lead Handling & Routing",
            points: [
                "First Response SLA: 5 minutes, 24/7. An automated welcome message is sent first, followed by counsellor contact within 15 mins during work hours.",
                "Lead Routing: Leads are automatically assigned to counsellors based on course, region, and current workload via the CRM.",
                "Lead Qualification: A dedicated pre-sales team may qualify leads first before assigning them to a closing counsellor.",
                "CRM Discipline: CRM must be updated after every single interaction. No exceptions. Audits will be conducted weekly."
            ]
        },
        {
            title: "2. Multi-Channel Follow-Up Strategy",
            points: [
                "Hot Leads: Aggressive follow-up via Call, WhatsApp, and Email for 72 hours. Involve a senior counsellor or 'floor manager' for closing.",
                "Warm Leads: Enrolled in a 14-day automated nurture sequence (Email + WhatsApp) with periodic manual call check-ins.",
                "Cold Leads: Segmented into a central marketing database for long-term automated brand-building communication.",
                "Reporting: Each counsellor must submit a daily report summarizing calls made, demos scheduled, and admissions closed."
            ]
        },
        {
            title: "3. Sales & Conversion Process",
            points: [
                "Counsellor's Role: The counsellor is the single point of contact (SPOC) for the lead until admission is confirmed.",
                "Objection Handling: All counsellors must follow the scripts provided in the official Objection Handling Library.",
                "Discounts & Negotiations: No discounts are to be offered without written approval from the Sales Head. All negotiations must be logged.",
                "Handoff: After admission, the counsellor must smoothly hand over the student's details to the Student Success/Operations team."
            ]
        }
    ]
};

type SopSize = 'small' | 'medium' | 'large';

export default function SopBuilderTool() {
    const [sopSize, setSopSize] = useState<SopSize>('small');
    const [generatedSop, setGeneratedSop] = useState(sopContent.small);
    
    const handleGenerate = () => {
        setGeneratedSop(sopContent[sopSize]);
    };

    const handlePrint = () => {
        window.print();
    };

    return (
        <>
            <div className="max-w-4xl mx-auto print:hidden">
                <Card>
                    <CardHeader>
                        <CardTitle>Build Your Counsellor SOP</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label>What is the size of your counselling team?</Label>
                            <RadioGroup value={sopSize} onValueChange={(v: SopSize) => setSopSize(v)} className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="small" id="small" />
                                    <Label htmlFor="small">Small (1-3 Counsellors)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="medium" id="medium" />
                                    <Label htmlFor="medium">Medium (4-10 Counsellors)</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="large" id="large" />
                                    <Label htmlFor="large">Large (10+ Counsellors)</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <Button onClick={handleGenerate} className="w-full">
                          Generate SOP
                        </Button>
                        <Button onClick={handlePrint} className="w-full" variant="outline">
                            <Printer className="mr-2 h-4 w-4" />
                            Print SOP
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Printable Area */}
            <div className="printable-area p-6 border rounded-lg max-w-4xl mx-auto bg-white text-black mt-8">
                <header className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Standard Operating Procedure (SOP)</h1>
                    <p className="text-muted-foreground">For Counselling Team</p>
                </header>

                <main className="space-y-6">
                    {generatedSop.map(section => (
                        <div key={section.title}>
                            <h2 className="text-xl font-semibold border-b-2 border-black pb-2 mb-3">{section.title}</h2>
                            <ul className="list-disc list-inside space-y-2">
                                {section.points.map(point => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </main>
                 <footer className="text-center mt-8 text-xs text-gray-500">
                    Generated on {new Date().toLocaleDateString()}
                </footer>
            </div>
        </>
    );
}
