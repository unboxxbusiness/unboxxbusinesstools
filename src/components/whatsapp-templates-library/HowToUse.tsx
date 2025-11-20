import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This library brings together all the individual template generators into one convenient place. Use it as your central hub for all WhatsApp and SMS communication needs.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Browse by Category:</strong> The tools are organized by common communication scenarios like "Follow-Up," "Fee Discussion," and "Demo Reminders."
              </li>
              <li>
                <strong>Select a Tool:</strong> Click on the tool that matches your current need (e.g., "7-Day Follow-Up Sequence Generator").
              </li>
              <li>
                <strong>Generate Your Template:</strong> Follow the instructions within that specific tool to create your tailored message or script.
              </li>
              <li>
                <strong>Copy and Communicate:</strong> Copy the generated content and use it in your WhatsApp, SMS, or email conversations to maintain professional and effective communication.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
