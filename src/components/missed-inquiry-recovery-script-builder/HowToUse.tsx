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
              This tool helps you craft a professional and polite apology for inquiries you missed or replied to late. It's a great way to recover potentially lost leads.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Details:</strong> Fill in the course the lead was interested in, your institute's name, and your name to personalize the message.
              </li>
              <li>
                <strong>Generate Scripts:</strong> Click the button to create a set of templates designed to apologize and restart the conversation.
              </li>
              <li>
                <strong>Copy & Send:</strong> Choose the script that best fits the situation, copy it, and send it to the lead via WhatsApp or SMS.
              </li>
              <li>
                <strong>Recover the Lead:</strong> A sincere apology can often re-engage a lead and give you a second chance to make a good impression.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
