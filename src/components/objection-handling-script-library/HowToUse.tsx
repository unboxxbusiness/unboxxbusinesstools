import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Script Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool provides a library of proven responses to the most common objections that counselors face. Using these scripts can help you stay confident and guide conversations toward a positive outcome.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Identify the Objection:</strong> When a lead gives you a reason for not enrolling, find the matching objection in the list (e.g., "It's too expensive," "I need to think about it").
              </li>
              <li>
                <strong>Expand to See Scripts:</strong> Click on the objection to reveal a list of different response strategies (e.g., "Focus on Value," "Offer Installments").
              </li>
              <li>
                <strong>Copy the Best Response:</strong> Read through the different script options and choose the one that best fits the current conversation. Use the copy button to grab the text.
              </li>
              <li>
                <strong>Adapt and Respond:</strong> Personalize the script with specific details (like the lead's name or exact EMI amount) before using it in your chat or call. These scripts are templates, not rigid rules!
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
