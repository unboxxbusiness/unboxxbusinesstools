import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12 print:hidden">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This SOP Builder</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool generates a foundational Standard Operating Procedure (SOP) document tailored to your institute's size. An SOP ensures every team member follows the same best practices, which is crucial for consistent performance and easier onboarding.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Select Your Institute Size:</strong> Choose whether your team is small, medium, or large. The complexity and structure of the SOP will adjust accordingly.
              </li>
              <li>
                <strong>Generate the SOP:</strong> Click "Generate SOP" to see the customized document.
              </li>
              <li>
                <strong>Print or Save as PDF:</strong> Use the print button to get a physical copy or save it as a PDF. This document can then be shared with your entire counselling team.
              </li>
              <li>
                <strong>Review and Refine:</strong> This generated SOP is a strong starting point. Review it with your team and add any institute-specific rules or processes to make it your own.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
