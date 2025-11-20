'use client'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
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
                data-state={menuState ? 'active' : 'inactive'}
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

                    <button
                        onClick={() => setMenuState(!menuState)}
                        aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                        className="relative z-20 -mr-2 block cursor-pointer p-2.5 lg:hidden">
                        <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                        <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                    </button>
                    
                    {/* Mobile Menu */}
                    <div className={cn("absolute top-full left-0 mt-2 w-full rounded-xl border bg-background shadow-lg lg:hidden", !menuState && "hidden")}>
                         <div className="flex flex-col p-4 space-y-2">
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary rounded-md hover:bg-muted">
                                    {link.label}
                                </Link>
                            ))}
                             <Button asChild>
                                <Link href="/book-demo">Book Demo</Link>
                            </Button>
                         </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
