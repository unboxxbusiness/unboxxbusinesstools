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
              This tool creates professional, pre-written messages to send to students who contact you after your business hours. It ensures every lead feels acknowledged, even when you're offline.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Your Institute's Name:</strong> This personalizes the message.
              </li>
              <li>
                <strong>Select a Script Category:</strong> Choose the template that best fits the situation, whether it's a general acknowledgment or a specific promise to send info later.
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Script" to create the message, then use the copy button to transfer it to your WhatsApp Business, SMS auto-responder, or email auto-reply system.
              </li>
            </ul>
            <p>
              By providing an instant, polite response, you reduce the chance of a potential student looking elsewhere before you've had a chance to reply the next morning.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
