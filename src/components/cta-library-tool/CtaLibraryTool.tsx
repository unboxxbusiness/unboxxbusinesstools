'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Copy, Search } from 'lucide-react';
import { Input } from '../ui/input';

const ctas = {
  "Urgency": [
    "Enroll Now, Spots Are Limited!", "Offer Ends Tonight!", "Last Chance to Register!", "Don't Miss Out!", "Limited Time Offer!", "Join Before It's Too Late!", "Act Fast, Seats Are Filling Up!", "Claim Your Spot Before It's Gone!", "Final Call for Enrollment!", "Sale Ends in 24 Hours!"
  ],
  "Benefit-Oriented": [
    "Start Your Journey to Success.", "Unlock Your Full Potential.", "Get the Score You Deserve.", "Master a New Skill Today.", "Achieve Your Career Goals.", "Transform Your Future.", "Invest in Yourself.", "Learn from the Best.", "Build a Brighter Future.", "Take the First Step to Excellence."
  ],
  "Direct & Simple": [
    "Sign Up Now", "Join Now", "Enroll Today", "Get Started", "Register Now", "Apply Now", "Book Your Seat", "Subscribe", "Download Now", "Learn More"
  ],
  "Free Offers": [
    "Get a Free Demo Class", "Download Your Free Guide", "Claim Your Free Consultation", "Start Your Free Trial", "Get Free Access", "Request a Free Sample", "Join Our Free Webinar", "Get a Free E-book", "Try It For Free", "Get Your Free Checklist"
  ],
  "Questions": [
    "Ready to Get Started?", "Why Wait? Enroll Today!", "What Are You Waiting For?", "Ready to Take the Next Step?", "Want to Learn More?", "Ready for a Challenge?", "Ready to Ace Your Exams?", "Why Not Start Now?", "Ready to Transform Your Career?", "Interested? Let's Talk."
  ],
  "Community & Social Proof": [
    "Join Thousands of Successful Students.", "See What Our Alumni Say.", "Become Part of Our Community.", "Join a Network of Achievers.", "Trusted by Over 10,000 Students.", "Read Our Success Stories.", "Join the Ranks of Toppers.", "Learn with a Community of Peers.", "Be Our Next Success Story.", "Join the conversation."
  ],
  "Personalized": [
    "Find the Right Course for You.", "Get Your Personalized Study Plan.", "Talk to Our Counselors.", "Customize Your Learning Path.", "Get a Plan Tailored for You.", "Discover Your Perfect Course.", "Let Us Help You Choose.", "Create Your Own Schedule.", "Get a Custom Quote.", "Build Your Own Program."
  ],
  "Low-Commitment": [
    "Learn More About the Course.", "View Course Details.", "Explore Our Programs.", "See the Syllabus.", "Watch a Demo Video.", "Request More Information.", "Download the Brochure.", "Compare Our Plans.", "Read the FAQ.", "Check Eligibility."
  ],
  "Exclusive Access": [
    "Get Exclusive Content.", "Unlock Premium Features.", "Join Our VIP List.", "Get Early Access.", "Access the Full Library.", "Become an Insider.", "Get Member-Only Benefits.", "Gain Exclusive Insights.", "Join the Waitlist.", "Pre-register for Exclusive Access."
  ],
  "Discounts & Savings": [
    "Save 20% Today!", "Claim Your Discount.", "Get Early Bird Pricing.", "Apply for a Scholarship.", "Check Your Eligibility for a Discount.", "Unlock a Special Offer.", "Get the Best Price.", "Take Advantage of Our Sale.", "Save Big on Your Enrollment.", "Use Code SAVE20 at Checkout."
  ]
};

type CtaCategory = keyof typeof ctas;

export default function CtaLibraryTool() {
  const [copiedCta, setCopiedCta] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleCopy = (cta: string) => {
    navigator.clipboard.writeText(cta);
    setCopiedCta(cta);
    setTimeout(() => setCopiedCta(''), 2000);
  };

  const filteredCtas = Object.keys(ctas).reduce((acc, category) => {
    const categoryKey = category as CtaCategory;
    const filtered = ctas[categoryKey].filter(cta => cta.toLowerCase().includes(searchTerm.toLowerCase()));
    if (filtered.length > 0) {
      acc[categoryKey] = filtered;
    }
    return acc;
  }, {} as typeof ctas);

  return (
    <div className="max-w-6xl mx-auto">
        <div className="relative max-w-lg mx-auto mb-12">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
                placeholder="Search CTAs..."
                className="pl-9"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>

      {Object.keys(filteredCtas).map(category => (
        <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{category}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {(filteredCtas[category as CtaCategory]).map((cta, index) => (
                    <Card key={index} className="flex items-center justify-between p-4 bg-muted/30 hover:bg-muted/60 transition-colors">
                        <p className="text-sm font-medium pr-2">{cta}</p>
                        <Button variant="ghost" size="icon" onClick={() => handleCopy(cta)}>
                            {copiedCta === cta ? (
                                <Check className="h-4 w-4 text-green-500" />
                            ) : (
                                <Copy className="h-4 w-4 text-muted-foreground" />
                            )}
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
      ))}
       {Object.keys(filteredCtas).length === 0 && (
          <div className="text-center text-muted-foreground py-16">
            <p>No CTAs found for "{searchTerm}".</p>
          </div>
        )}
    </div>
  );
}
