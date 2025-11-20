import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12 print:hidden">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Tool</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you create a professional, standardized lead capture sheet for visitors who walk into your institute. It ensures all important information is collected consistently.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Your Institute's Name:</strong> This will be added to the header of the sheet for branding.
              </li>
              <li>
                <strong>Generate & Print:</strong> Click the "Generate & Print Sheet" button. This will open your browser's print dialog.
              </li>
              <li>
                <strong>Print the Sheet:</strong> You can print the document directly or save it as a PDF for future use.
              </li>
              <li>
                <strong>Use at Your Front Desk:</strong> Keep a stack of these sheets at your reception to capture every walk-in lead's details systematically, improving your follow-up process.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
