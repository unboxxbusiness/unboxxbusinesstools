import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Headline Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool creates a variety of short, punchy headlines (under 30 characters) suitable for Google Search Ads. Using multiple headlines improves your ad's performance.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Core Details:</strong> Provide your course name, main keywords (like "best coaching," "online class"), a unique selling point (like "Top Faculty"), and an optional location.
              </li>
              <li>
                <strong>Generate Headlines:</strong> Click the "Generate Headlines" button to create a list of optimized headlines based on different combinations of your inputs.
              </li>
              <li>
                <strong>Review and Copy:</strong> The tool will generate a list of headlines, each with a character count. Copy the ones you like and use them when setting up your ad group in Google Ads.
              </li>
              <li>
                <strong>Run Your Campaign:</strong> Google will automatically test different combinations of your headlines to find the best-performing ones, improving your click-through rate.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
