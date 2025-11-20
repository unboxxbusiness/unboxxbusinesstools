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
              This tool generates powerful, attention-grabbing headlines for your website's landing pages, social media posts, or ad campaigns.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> Type in the name of the course you are promoting (e.g., "NEET Biology," "Advanced Python").
              </li>
              <li>
                <strong>Enter Key Highlight:</strong> Add the single most important benefit or feature you want to emphasize (e.g., "Live Doubt Solving," "Guaranteed Results," "Free Demo Class").
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Headlines" to see a list of professionally crafted headlines. Use the copy button next to your favorite one.
              </li>
              <li>
                <strong>Test and Convert:</strong> Use these headlines on your landing page and see which one converts the most visitors into leads!
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
