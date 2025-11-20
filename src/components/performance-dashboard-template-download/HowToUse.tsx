import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Template</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool provides a link to a ready-made Google Sheet template that helps you monitor the health of your admissions funnel at a glance.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Access the Template:</strong> Click the "Use Google Sheet Template" button. This will open a new tab prompting you to create your own copy of the sheet.
              </li>
              <li>
                <strong>Make a Copy:</strong> Click the "Use template" button in the top right corner. This will save a personal, editable copy to your own Google Drive.
              </li>
              <li>
                <strong>Enter Your Data:</strong> Fill in your weekly or monthly numbers for leads, demos scheduled, demos attended, and final admissions.
              </li>
              <li>
                <strong>Analyze Performance:</strong> The dashboard will automatically calculate your conversion rates and visualize your performance, helping you see where your funnel is strong and where it's leaking. This is perfect for weekly reviews with your team or for monthly reporting.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
