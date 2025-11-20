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
              This tool helps you craft short, non-intrusive messages to re-engage leads who have gone quiet. It's perfect for situations where you've had a conversation, but it has stalled.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> Personalize the message with the course the student was interested in.
              </li>
              <li>
                <strong>Generate Messages:</strong> Click the button to get a list of polite, open-ended questions.
              </li>
              <li>
                <strong>Copy Your Favorite:</strong> Use the copy button to grab the message you like best.
              </li>
              <li>
                <strong>Send and Revive:</strong> Send the message via WhatsApp or SMS. The goal is to gently reopen the conversation, not to push for a sale.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
