import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HowToUse() {
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card>
        <CardHeader>
          <CardTitle>How to Use This Caption Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-muted-foreground">
            <p>
              This tool helps you quickly generate engaging captions for your Instagram posts, complete with relevant hashtags. Use it to save time and maintain a consistent social media presence.
            </p>
            <ul className="list-decimal list-inside space-y-2">
              <li>
                <strong>Enter Post Details:</strong> Fill in the course name and the main topic or benefit you want to highlight in your post.
              </li>
              <li>
                <strong>Select a Caption Angle:</strong> Choose the type of caption you want to create, such as an educational tip, a student success story, or a course announcement. This tailors the tone and structure of the caption.
              </li>
              <li>
                <strong>Generate & Copy:</strong> Click "Generate Captions" to get a list of templates and a block of suggested hashtags. Use the copy button to grab the text you need.
              </li>
              <li>
                <strong>Post to Instagram:</strong> Paste the caption and hashtags into your Instagram post. Remember to pair it with a high-quality image or video for the best results.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
