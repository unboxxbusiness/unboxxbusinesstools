import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Comparison Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you build a simple, clear comparison table for two different courses or packages. Use it in counseling sessions or send it as a PDF to help parents and students make a clear choice.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Name Your Packages:</strong> Start by giving each package a name (e.g., "Online Plan" vs. "Offline Plan" or "Basic" vs. "Premium").
              </li>
              <li>
                <strong>List the Features:</strong> Add or edit the features you want to compare. For each feature, use the checkboxes to indicate whether it's included in Package 1 or Package 2.
              </li>
              <li>
                <strong>Add or Remove Rows:</strong> Use the "Add Feature" button to add more comparison points, or the 'X' button to remove any you don't need.
              </li>
              <li>
                <strong>Present the Comparison:</strong> The table on the right updates in real-time. You can show this screen directly to a visitor or take a screenshot to send via WhatsApp.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
