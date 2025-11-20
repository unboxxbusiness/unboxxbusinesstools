import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Ad Budget Planner</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you forecast the results of your advertising spend, allowing you to set realistic goals and manage your budget effectively.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Set Your Monthly Ad Budget:</strong> Use the slider to define how much you plan to spend on advertising each month.
              </li>
              <li>
                <strong>Enter Your Cost Per Lead (CPL):</strong> Input the average amount you pay for a single lead or inquiry from your ad campaigns. If you're unsure, start with an industry average (e.g., ₹200-₹500).
              </li>
              <li>
                <strong>Set Your Conversion Rate:</strong> Adjust the slider to reflect the percentage of leads that typically convert into paying students.
              </li>
              <li>
                <strong>Analyze the Estimates:</strong> The tool will automatically calculate the estimated number of leads, the expected number of admissions, and your cost per admission (CPA). Use this data to justify your ad spend and project your growth.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
