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
              Voice notes feel more personal and can cut through the noise of text messages. This tool gives you short, effective scripts to record for your leads. Keep them under 20 seconds for the best results.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Key Details:</strong> Personalize the script by providing the lead's name and the course they were interested in.
              </li>
              <li>
                <strong>Choose a Follow-Up Angle:</strong> Select the purpose of your voice note, whether it's a simple check-in, a demo reminder, or sharing some valuable info.
              </li>
              <li>
                <strong>Generate & Practice:</strong> Click "Generate Scripts" to get a few variations. Read them aloud once or twice to sound natural.
              </li>
              <li>
                <strong>Record and Send:</strong> Open WhatsApp, record the short voice note, and send it. The personal touch can significantly improve your response rates.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
