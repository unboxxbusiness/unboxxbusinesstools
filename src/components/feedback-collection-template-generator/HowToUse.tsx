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
              This tool helps you craft polite and effective messages to collect feedback after a demo class. Gathering feedback is crucial for understanding a student's interest level and planning your next follow-up step.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Demo Details:</strong> Fill in the course name and the instructor's name to personalize the templates.
              </li>
              <li>
                <strong>Select a Feedback Angle:</strong> Choose what you want to ask about. You can ask about the overall experience, the quality of teaching, or what the student's next steps are.
              </li>
              <li>
                <strong>Generate & Copy Templates:</strong> Click the button to create a set of optimized messages. Use the copy icon to grab the script that best fits your needs.
              </li>
              <li>
                <strong>Send and Gather Insights:</strong> Send the message via WhatsApp within an hour of the demo finishing. The responses will give you valuable insights to tailor your follow-up and improve your chances of conversion.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
