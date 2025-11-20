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
              This tracker helps you understand which of your marketing channels are performing best by visualizing where your leads come from.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Lead Counts:</strong> Input the number of leads you received from each source in the corresponding input field.
              </li>
              <li>
                <strong>Add or Remove Sources:</strong> Click "Add Source" to track a new channel or the 'X' button to remove one.
              </li>
              <li>
                <strong>Analyze the Results:</strong> The chart on the right will automatically update to show the percentage breakdown of your lead sources.
              </li>
              <li>
                <strong>Optimize Your Spend:</strong> Use this data to focus your marketing budget on the channels that deliver the most leads.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
