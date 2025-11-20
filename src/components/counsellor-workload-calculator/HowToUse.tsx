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
              This tool helps you quantify the time your counseling team spends on lead management, making it easier to identify bottlenecks and justify the need for automation.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Adjust the Sliders:</strong> Use the sliders to input the average number of new leads you get per day and the estimated time (in minutes) a counselor spends on each lead (including calls, messages, and data entry).
              </li>
              <li>
                <strong>Enter Team Size:</strong> Input the number of counselors on your team who are responsible for handling these leads.
              </li>
              <li>
                <strong>Analyze the Workload:</strong> The tool will automatically calculate the total hours your team spends on leads daily and, more importantly, the workload per counselor.
              </li>
              <li>
                <strong>Identify Overload:</strong> If the workload per counselor exceeds a standard 8-hour workday, an "Overload Alert" will appear. This is a strong indicator that your team is overworked and that implementing automated systems could significantly improve efficiency and prevent burnout.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
