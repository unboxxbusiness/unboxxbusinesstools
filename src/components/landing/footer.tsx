import { Rocket, Twitter, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <Rocket className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">ubx</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} ubx Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="GitHub">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
