import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Call Script</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool provides a structured script to guide counsellors through a sales call. It helps ensure all key points are covered, from introduction to closing, making new counsellors sound professional and confident.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Personalize the Script:</strong> Enter the lead's name and the course they inquired about. This will insert their details into the script templates.
              </li>
              <li>
                <strong>Follow the Structure:</strong> Go through the script section by section. Start with the <strong>Introduction</strong>, then move to <strong>Discovery Questions</strong> to understand the lead's needs.
              </li>
              <li>
                <strong>Deliver the Pitch:</strong> Use the <strong>Pitch</strong> section to connect your course's features to the lead's specific problems or goals.
              </li>
              <li>
                <strong>Aim for a Close:</strong> Use the <strong>Closing / Next Steps</strong> scripts to guide the lead towards a decision, whether it's enrolling, paying a fee, or attending a demo.
              </li>
              <li>
                <strong>Use as a Guide, Not a Rulebook:</strong> This script is a guide. Listen to the lead and adapt your conversation naturally. The best calls are dialogues, not monologues.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
