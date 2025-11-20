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
              This tool helps you quickly create clear and exciting messages to announce a new batch for one of your courses. It formats the information perfectly for WhatsApp or SMS marketing campaigns.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Fill in the Batch Details:</strong> Enter all the necessary information for your new batch, including the course name, start date, timings, fee, and a call-to-action (like an enrollment link).
              </li>
              <li>
                <strong>Generate the Message:</strong> Click the "Generate Message" button to create a professionally formatted announcement.
              </li>
              <li>
                <strong>Copy and Broadcast:</strong> Use the copy button to grab the message, then paste it into your WhatsApp or SMS broadcast list to send to your target audience.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
