import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This CTA Library</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              A Call-to-Action (CTA) is a prompt on a website, ad, or message that tells the user to take some specified action. A strong CTA can dramatically improve conversion rates.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Browse by Category:</strong> The library is organized into common marketing categories like "Urgency," "Benefit-Oriented," and "Free Offers." Scroll through to find the right tone for your needs.
              </li>
              <li>
                <strong>Search for Keywords:</strong> Use the search bar to quickly find CTAs containing specific words like "free," "now," or "learn."
              </li>
              <li>
                <strong>Copy with One Click:</strong> Find a CTA you like and click the copy icon next to it.
              </li>
              <li>
                <strong>Paste and Use:</strong> Paste the copied CTA into your ad copy, landing page button, WhatsApp message, or social media post to drive more engagement and conversions.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
