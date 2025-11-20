'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const GOOGLE_SHEET_TEMPLATE_URL = "https://docs.google.com/spreadsheets/d/1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2/template/preview";

export default function PerformanceDashboardTool() {

  return (
    <div className="max-w-3xl mx-auto">
        <Card>
            <CardHeader>
                <CardTitle className="text-center">Weekly/Monthly Performance Dashboard</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center gap-6">
                <div className="border rounded-lg p-4 bg-muted/20 w-full">
                    <Image 
                        src="https://picsum.photos/seed/dashboard/800/450"
                        alt="Dashboard Preview"
                        width={800}
                        height={450}
                        className="rounded-md"
                        data-ai-hint="dashboard spreadsheet"
                    />
                </div>
                <p className="text-muted-foreground text-center max-w-md">
                    This Google Sheet template is designed to help you track key metrics like leads, demos, admissions, and conversion rates on a weekly and monthly basis.
                </p>
                <Link href={GOOGLE_SHEET_TEMPLATE_URL} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                    <Button className="w-full">
                        <Download className="mr-2 h-4 w-4" />
                        Use Google Sheet Template
                    </Button>
                </Link>
            </CardContent>
        </Card>
    </div>
  );
}
