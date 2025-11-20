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
              This tool helps counselors quickly qualify new inquiries by generating a "lead temperature" based on a few key factors. It standardizes the qualification process and helps prioritize follow-ups.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Select the Criteria:</strong> While on a call with a potential student, choose the option from each dropdown that best matches their situation.
              </li>
              <li>
                <strong>Check the Lead Temperature:</strong> The tool will instantly classify the lead as "Hot," "Warm," or "Cold" based on your selections.
              </li>
              <li>
                <strong>Follow Suggested Actions:</strong> Based on the temperature, the tool provides a list of recommended next steps to help you convert the lead effectively.
              </li>
              <li>
                <strong>Reset and Repeat:</strong> Use the "Reset" button to clear the form for the next inquiry.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
