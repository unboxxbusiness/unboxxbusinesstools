export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h3 className="text-2xl font-semibold leading-none tracking-tight mb-4">How to Use This Tool</h3>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This calculator helps you quantify the potential revenue you might be losing due to unanswered inquiries. Here’s how to use it:
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Monthly Inquiries:</strong> Enter the total number of new inquiries or leads your coaching institute receives on average each month.
              </li>
              <li>
                <strong>Your Response Rate (%):</strong> Estimate the percentage of those inquiries that your team responds to. If you answer 90 out of 100 inquiries, your response rate is 90%.
              </li>
              <li>
                <strong>Average Revenue per Client:</strong> Enter the average revenue you generate from a single client or student. This could be the total fee for a course or a year-long program.
              </li>
            </ul>
            <p>
              The calculator will instantly show you how many inquiries are going unanswered and the potential monthly revenue you're missing out on.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
