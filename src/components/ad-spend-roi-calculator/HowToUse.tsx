import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This ROI Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool calculates the Return on Investment (ROI) from your ad campaigns, helping you understand the direct financial impact of your marketing efforts.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Total Ad Spend:</strong> Input the total amount of money you spent on your advertising campaigns for a specific period.
              </li>
              <li>
                <strong>Enter Total Admissions:</strong> Input the number of new, paying students that were directly generated from those ad campaigns.
              </li>
              <li>
                <strong>Enter Revenue Per Admission:</strong> Input the average course fee or revenue you collect from a single student.
              </li>
              <li>
                <strong>Analyze Your ROI:</strong> The tool will automatically calculate your total revenue, net profit (or loss), and the final Return on Ad Spend (ROI) as a percentage. A positive ROI means your campaigns are profitable.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
