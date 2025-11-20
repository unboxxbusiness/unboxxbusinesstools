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
              This tool helps you quickly generate messages for promotional campaigns like festival discounts, seasonal offers, or early-bird pricing.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Offer Details:</strong> Fill in the course name, the specific offer details (e.g., "Flat 20% Off"), and the deadline.
              </li>
              <li>
                <strong>Select Offer Type:</strong> Choose the occasion for the offer, such as a festival or a seasonal promotion, to tailor the message's tone.
              </li>
              <li>
                <strong>Generate & Copy Scripts:</strong> Click "Generate Scripts" to create a set of compelling messages. Use the copy button to grab the one that best fits your campaign.
              </li>
              <li>
                <strong>Launch Your Campaign:</strong> Send the message via WhatsApp or SMS to your target audience to drive quick admissions during key periods.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
