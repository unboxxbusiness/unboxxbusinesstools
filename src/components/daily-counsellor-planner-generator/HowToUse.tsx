import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12 print:hidden">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Planner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool creates a structured, printable daily planner to help counsellors organize their day, prioritize tasks, and stay on top of their workload.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Counsellor Details:</strong> Fill in the counsellor's name and select the date for the planner.
              </li>
              <li>
                <strong>Generate & Print:</strong> Click the "Generate & Print Planner" button. This will open your browser's print dialog.
              </li>
              <li>
                <strong>Print or Save as PDF:</strong> You can print the sheet directly to use a physical copy or save it as a PDF for digital use.
              </li>
              <li>
                <strong>Plan Your Day:</strong> Use the printed sheet at the start of the day to list priorities, schedule follow-ups for hot/warm/cold leads, and track calls and demos. This ensures no important task is missed.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
