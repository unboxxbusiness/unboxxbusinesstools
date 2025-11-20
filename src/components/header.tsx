'use client'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet'

export const HeroHeader = () => {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About' },
        { href: '/tools', label: 'Tools' },
        { href: '/book-demo', label: 'Book Demo' },
    ];

    return (
        <header className={cn("fixed top-0 z-50 w-full transition-all duration-300", isScrolled ? "py-2" : "py-4")}>
            <nav
                className="container mx-auto max-w-7xl px-6">
                <div className={cn("flex items-center justify-between transition-all duration-300 rounded-2xl px-4", isScrolled && "bg-background/80 backdrop-blur-lg border shadow-sm")}>
                    <div className="flex items-center gap-6 py-3">
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2">
                            <Logo />
                        </Link>
                    </div>
                    
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-4">
                        <Button asChild size="sm">
                            <Link href="/book-demo">Book Demo</Link>
                        </Button>
                    </div>

                    <div className="lg:hidden">
                       <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Menu className="h-6 w-6" />
                              <span className="sr-only">Open Menu</span>
                            </Button>
                          </SheetTrigger>
                          <SheetContent side="right">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <div className="flex flex-col p-4 space-y-2">
                                <div className='pb-4'>
                                     <Link
                                        href="/"
                                        aria-label="home"
                                        className="flex items-center space-x-2">
                                        <Logo />
                                    </Link>
                                </div>
                                {navLinks.map(link => (
                                    <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-muted">
                                        {link.label}
                                    </Link>
                                ))}
                                 <Button asChild>
                                    <Link href="/book-demo">Book Demo</Link>
                                </Button>
                             </div>
                          </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    )
}
