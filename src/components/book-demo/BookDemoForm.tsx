"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function BookDemoForm() {
    return (
        <section className="py-16 md:py-20 bg-muted/30" id="book-demo">
            <div className="container mx-auto max-w-2xl px-6">
                <Card>
                    <CardHeader className="text-center">
                        <CardTitle className="text-3xl">Schedule Your Free Demo</CardTitle>
                        <CardDescription>(Fill in the details below)</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="e.g., Anjali Sharma" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="institute">Institute Name</Label>
                                <Input id="institute" placeholder="e.g., Apex Coaching" />
                            </div>
                        </div>
                         <div className="grid sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input id="city" placeholder="e.g., Delhi" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email Address</Label>
                                <Input id="email" type="email" placeholder="e.g., anjali@apex.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                                <Label htmlFor="whatsapp-number">WhatsApp Number</Label>
                                <Input id="whatsapp-number" placeholder="e.g., 9876543210" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="challenge">What challenge are you currently facing? (optional)</Label>
                            <Textarea id="challenge" placeholder="e.g., We're losing leads after hours, our follow-up is inconsistent..." />
                        </div>
                        <Button className="w-full" size="lg">👉 Book Free Demo</Button>
                        <p className="text-center text-sm text-muted-foreground">We respect your time. No spam, no unnecessary calls.</p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}