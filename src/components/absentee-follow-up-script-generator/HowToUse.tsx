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
              This tool creates polite and effective follow-up messages for leads who registered for a demo but did not attend. It helps you re-engage them without making them feel pressured.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> Personalize the message with the course the student was interested in.
              </li>
              <li>
                <strong>Provide Next Step:</strong> Add the date and time of the next available demo or batch. This gives them a clear action to take.
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Scripts" to get a list of templates. Use the copy button to grab the one that best fits the situation.
              </li>
              <li>
                <strong>Send and Re-engage:</strong> Send the message via WhatsApp or SMS to bring the lead back into your funnel and give them another chance to connect.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
