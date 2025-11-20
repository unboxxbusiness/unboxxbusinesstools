import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you understand the true cost of acquiring a student through your ad campaigns. By calculating costs at each stage of the funnel, you can make smarter decisions about your marketing budget.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Your Ad Spend:</strong> Input the total amount you spent on a particular campaign or over a specific period.
              </li>
              <li>
                <strong>Fill in Your Funnel Numbers:</strong> Provide the total number of leads generated, the number of leads who attended a demo, and the final number of admissions from that campaign.
              </li>
              <li>
                <strong>Analyze Your Costs:</strong> The tool will instantly calculate your:
                <ul className="list-disc list-inside ml-4 mt-1">
                    <li><strong>Cost Per Lead (CPL):</strong> How much you pay for each inquiry.</li>
                    <li><strong>Cost Per Demo (CPD):</strong> How much you pay for each demo attendee.</li>
                    <li><strong>Cost Per Admission (CPA):</strong> The final cost to acquire one paying student.</li>
                </ul>
              </li>
              <li>
                <strong>Optimize Your Campaigns:</strong> Use this data to identify which campaigns are most cost-effective and where you can optimize your ad spend for better results.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
