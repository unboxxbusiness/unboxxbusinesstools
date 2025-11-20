import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Reminder Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you create a series of professional reminder messages for your upcoming demos, which can significantly reduce the number of no-shows.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Fill in the Demo Details:</strong> Provide the course name, the exact date and time of the demo, and whether it's an online or offline event.
              </li>
              <li>
                <strong>Provide Context:</strong> If it's an online demo, provide the meeting link. If it's offline, provide your institute's address.
              </li>
              <li>
                <strong>Generate Reminders:</strong> Click the "Generate Reminders" button to create three optimized messages for 24 hours before, 1 hour before, and 10 minutes before the demo.
              </li>
              <li>
                <strong>Copy and Send:</strong> Use the copy buttons to easily grab the messages and send them to your leads via WhatsApp or SMS at the appropriate times.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
