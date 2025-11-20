import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Rocket } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="ubx homepage">
          <Rocket className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">ubx</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost">Sign In</Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Get Started
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex h-full flex-col">
                <div className="border-b p-4">
                  <Link href="/" className="flex items-center gap-2" aria-label="ubx homepage">
                    <Rocket className="h-6 w-6 text-primary" />
                    <span className="text-xl font-bold">ubx</span>
                  </Link>
                </div>
                <nav className="grid gap-4 p-4 text-lg font-medium">
                   {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4 border-t p-4">
                  <Button variant="ghost">Sign In</Button>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
