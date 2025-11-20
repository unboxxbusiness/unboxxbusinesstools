import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              After a student attends a demo, the follow-up is critical. This tool provides structured message templates to guide them from being interested to becoming enrolled.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> Personalize the templates with the specific course the student attended.
              </li>
              <li>
                <strong>Select Follow-Up Type:</strong> Choose an angle for your message based on how many days have passed since the demo (e.g., asking for feedback on Day 1, creating urgency on Day 4).
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Nudges" to get a list of optimized messages. Use the copy button to grab the one that fits your timing.
              </li>
              <li>
                <strong>Send and Convert:</strong> Send the message via WhatsApp to keep the conversation going and gently push the lead towards making a final admission decision.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
