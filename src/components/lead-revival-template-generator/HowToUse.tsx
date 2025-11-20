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
              This tool helps you craft the perfect message to re-engage "cold" or unresponsive leads. It's designed for monthly revival campaigns to bring old inquiries back into the conversation.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> This personalizes the message to the course the lead was originally interested in.
              </li>
              <li>
                <strong>Select a Reason for Re-engaging:</strong> Choose an angle for your message, such as announcing a new batch, sharing a free resource, or offering a special discount. This makes your outreach feel relevant and valuable.
              </li>
              <li>
                <strong>Generate & Copy Templates:</strong> Click "Generate Templates" to get a list of non-pushy, effective messages. Use the copy button to grab your favorite one.
              </li>
              <li>
                <strong>Launch Your Campaign:</strong> Send the message to your list of cold leads and watch as old conversations get revived, potentially boosting your admissions.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
