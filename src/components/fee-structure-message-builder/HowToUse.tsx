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
              This tool takes your course fee details and formats them into a clean, easy-to-read WhatsApp message. This ensures parents and students receive clear, professional communication, reducing confusion and saving your counselors time.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Fill in the Details:</strong> Enter the course name, duration, total fee, and what is included in the package. You can customize the call-to-action message as well.
              </li>
              <li>
                <strong>Generate the Message:</strong> Click the "Generate Message" button to create the formatted text.
              </li>
              <li>
                <strong>Copy and Send:</strong> Use the copy button to grab the message, then paste it directly into your WhatsApp chat with the student or parent.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
