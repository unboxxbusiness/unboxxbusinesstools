import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How it Works</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you quickly convert a standard website form submission into a perfectly formatted WhatsApp message, making it easy for your counseling team to initiate a callback.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Fill the Form:</strong> Enter the details from the inquiry you received, just as a student would on your website.
              </li>
              <li>
                <strong>Generate Message:</strong> Click the "Generate Message" button.
              </li>
              <li>
                <strong>Copy & Paste:</strong> The tool will create a structured message. Simply copy it and paste it into WhatsApp to send to your counseling team or manager for a fast and informed follow-up.
              </li>
            </ul>
            <p>
              This is especially useful for institutes that don't use a CRM, as it creates a standardized, clear record of every new lead for your team to act on.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
