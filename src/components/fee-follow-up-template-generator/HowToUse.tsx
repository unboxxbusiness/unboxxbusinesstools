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
              This tool helps you craft the right message to send after you've discussed the course fees with a potential student. A timely and well-worded follow-up can significantly increase your conversion rate.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Details:</strong> Fill in the course name and the fee you discussed.
              </li>
              <li>
                <strong>Select Follow-Up Type:</strong> Choose the scenario that fits your situation, whether it's a gentle reminder, an answer to a common question, or a final call-to-action.
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Templates" to get a list of optimized messages. Use the copy button to grab the one that fits best.
              </li>
              <li>
                <strong>Send and Convert:</strong> Send the message via WhatsApp to re-engage the lead, address any lingering doubts, and guide them toward making a decision.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
