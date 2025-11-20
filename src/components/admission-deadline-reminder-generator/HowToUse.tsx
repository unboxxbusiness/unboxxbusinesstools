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
              This tool helps you create time-sensitive reminders that encourage undecided leads to take action. Use it to announce final deadlines or limited seat availability.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course & Deadline Info:</strong> Fill in the name of the course and the specific deadline (e.g., "tonight at 11 PM," "this Friday").
              </li>
              <li>
                <strong>Select an Urgency Angle:</strong> Choose the reason for the reminder, such as "Last Day to Enroll" or "Only a Few Seats Left," to tailor the message.
              </li>
              <li>
                <strong>Generate & Copy Scripts:</strong> Click "Generate Reminders" to create a set of effective messages. Use the copy button to grab the one that best fits your needs.
              </li>
              <li>
                <strong>Send and Convert:</strong> Send the message via WhatsApp to your list of warm leads. The soft urgency often provides the final nudge needed for them to complete their admission.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
