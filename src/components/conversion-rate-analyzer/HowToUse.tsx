import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-5xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Analyzer</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you pinpoint exactly where your admission funnel is leaking. By comparing your rates to industry benchmarks, you can identify your biggest areas for improvement.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Your Funnel Data:</strong> Input the total number of leads, the number who attended a demo, and the final number of admissions for a specific period (e.g., last month).
              </li>
              <li>
                <strong>Analyze Your Rates:</strong> The tool automatically calculates three critical conversion rates:
                <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Lead → Demo Rate:</strong> Shows how effectively you convert inquiries into demo attendees.</li>
                    <li><strong>Demo → Admission Rate:</strong> Shows how well your demos convert attendees into enrolled students.</li>
                    <li><strong>Overall Conversion Rate:</strong> Your final funnel performance from lead to admission.</li>
                </ul>
              </li>
              <li>
                <strong>Compare with Benchmarks:</strong> Your rates are plotted against coaching industry averages. If your rate is below the benchmark, that's a key area to focus on improving.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
