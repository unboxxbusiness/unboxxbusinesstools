"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BookDemoForm() {
    return (
        <section className="py-16 md:py-20 bg-muted/30" id="book-demo">
            <div className="container mx-auto max-w-2xl px-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center text-3xl">Schedule Your Free Demo</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Full Name</Label>
                                <Input id="name" placeholder="e.g., Anjali Sharma" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="institute">Institute Name</Label>
                                <Input id="institute" placeholder="e.g., Apex Coaching" />
                            </div>
                        </div>
                         <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="phone">Phone Number</Label>
                                <Input id="phone" placeholder="e.g., 9876543210" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="e.g., anjali@apex.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">What are your biggest challenges right now? (Optional)</Label>
                            <Textarea id="message" placeholder="e.g., We're losing leads after hours, our follow-up is inconsistent..." />
                        </div>
                        <Button className="w-full" size="lg">Request a Demo Callback</Button>
                        <p className="text-center text-sm text-muted-foreground">A team member will call you back within 24 hours to schedule a time.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}