import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Follow-Up Plan</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool creates a structured 7-day communication plan to nurture new leads, increasing the chance of conversion without overwhelming them.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Name:</strong> This personalizes the message templates for the specific course the lead inquired about.
              </li>
              <li>
                <strong>Select Lead Temperature:</strong> Choose whether the lead seems Hot (ready to buy), Warm (interested but comparing), or Cold (just exploring). This tailors the intensity of the follow-up sequence.
              </li>
              <li>
                <strong>Generate & Follow the Plan:</strong> Click "Generate Sequence." The tool will output a day-by-day plan with recommended message content and call-to-actions (CTAs).
              </li>
              <li>
                <strong>Adapt and Personalize:</strong> Use the generated content as a template. Always personalize the message with the lead's name and reference previous conversations to make it more effective.
              </li>
            </ul>
            <p>
              Consistent, value-driven follow-up is key to converting leads. This plan provides the framework to do it systematically.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
