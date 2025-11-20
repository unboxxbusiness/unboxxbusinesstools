import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-6xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Ad Copy Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool provides ready-to-use ad copy templates for your social media campaigns. It generates different lengths of copy suitable for various ad placements like headlines, post text, and descriptions.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course & Audience:</strong> Fill in the name of your course and define your target audience (e.g., "Class 12 students," "working professionals").
              </li>
              <li>
                <strong>Select an Offer Type:</strong> Choose the primary goal of your ad, such as promoting a free demo, announcing a discount, or running a scholarship test. This will tailor the copy to your campaign's objective.
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Ad Copy" to create a set of short, medium, and long templates. Use the copy button to grab the text you need.
              </li>
              <li>
                <strong>Launch Your Ad:</strong> Paste the copy into your Facebook or Instagram ad campaign. Remember to fill in any bracketed details like `[End Date]` or `[Institute Name]` before publishing.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
