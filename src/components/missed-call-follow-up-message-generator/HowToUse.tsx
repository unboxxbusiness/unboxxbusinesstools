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
              This tool helps you respond to missed calls from unknown numbers professionally and effectively. It provides a sequence of messages to ensure you connect with every potential lead.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Your Details:</strong> Add your institute's name and your name to personalize the messages.
              </li>
              <li>
                <strong>Generate Messages:</strong> Click the button to create a 3-step message sequence.
              </li>
              <li>
                <strong>Send the 1st Message Immediately:</strong> Copy and send the first message as soon as you see a missed call to provide immediate context.
              </li>
              <li>
                <strong>Follow Up if Needed:</strong> If you don't receive a reply, use the 2nd and 3rd messages over the next few hours or day to politely follow up and leave the door open for future contact.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
