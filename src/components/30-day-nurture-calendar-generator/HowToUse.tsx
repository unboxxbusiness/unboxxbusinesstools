import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Nurture Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool creates a structured 30-day plan to maintain contact with "warm" or "cold" leads who aren't ready to enroll immediately. It focuses on building relationships through value-driven communication.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> This personalizes the message templates for the specific course the lead inquired about.
              </li>
              <li>
                <strong>Generate & Follow the Plan:</strong> Click "Generate Calendar" to get a month-long schedule of touchpoints.
              </li>
              <li>
                <strong>Execute the Actions:</strong> Follow the recommendations for each active day. The plan includes a mix of sending valuable content, asking questions, and gentle reminders.
              </li>
              <li>
                <strong>Be Patient:</strong> The goal of a nurture sequence is to stay top-of-mind, not to force a quick decision. This slow and steady approach builds trust and increases the likelihood of conversion over time.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
