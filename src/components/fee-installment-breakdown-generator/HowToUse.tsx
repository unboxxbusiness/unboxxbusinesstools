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
              This tool helps you quickly create clear and flexible installment plans for parents and students, making high-value courses more accessible and easier to commit to.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Course Details:</strong> Input the course name, the total fee, and the desired down payment amount.
              </li>
              <li>
                <strong>Select Number of Installments:</strong> Use the slider to choose the total number of payments (including the down payment). The tool will automatically calculate the amount for each subsequent installment.
              </li>
              <li>
                <strong>Review the Schedule:</strong> The payment schedule is instantly generated, showing the amount and due date for each installment (due dates are set monthly from today).
              </li>
              <li>
                <strong>Generate & Send Message:</strong> Click "Generate Message" to create a pre-formatted WhatsApp message with the complete payment plan, then copy and send it to the lead.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
