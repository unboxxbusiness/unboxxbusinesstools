'use client'
import Link from 'next/link'
import { Logo } from '@/components/Logo'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from './ui/sheet'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
  } from "@/components/ui/navigation-menu"
import { IconCalculator, IconScript, IconChartPie, IconClockHour3, IconMessage, IconPrinter, IconTypography, IconListCheck, IconTimeline, IconCalendarMonth, IconBellRinging, IconRecycle, IconMessageQuestion, IconUserOff, IconCash, IconPhoneOff, IconRotateClockwise, IconMicrophone, IconAnalyze, IconThumbUp, IconReportMoney, IconReceipt2, IconMessagesOff, IconAlarm, IconSpeakerphone, IconColumns, IconAd, IconBrandInstagram, IconGift, IconTargetArrow, IconPigMoney, IconReportAnalytics, IconReceiptRefund, IconUsers, IconCalendarEvent, IconClipboardList, IconPhoneCall, IconMessageCircleQuestion, IconTable, IconBrandWhatsapp, IconSearch } from '@tabler/icons-react';

const leadCaptureTools = [
  {
    title: 'Lead Leakage Calculator',
    description: 'Shows lost inquiries & revenue.',
    href: '/tools/lead-leakage-calculator',
    icon: <IconCalculator />,
  },
  {
    title: 'Inquiry Auto-Reply Script Generator',
    description: 'Static templates based on course + question type.',
    href: '/tools/inquiry-auto-reply-script-generator',
    icon: <IconScript />,
  },
  {
    title: 'Lead Source Tracker',
    description: 'Track where your inquiries come from to optimize marketing spend.',
    href: '/tools/lead-source-tracker',
    icon: <IconChartPie />,
  },
];

const communicationTools = [
  {
    title: 'WhatsApp Templates Library',
    description: '100+ templates for follow-ups, fees, demos, and more.',
    href: '/tools/whatsapp-templates-library',
    icon: <IconBrandWhatsapp />,
  },
  {
    title: '7-Day Follow-Up Sequence Generator',
    description: 'Generates a 7-day WhatsApp plan to nurture new leads.',
    href: '/tools/7-day-follow-up-sequence-generator',
    icon: <IconTimeline />,
  },
  {
    title: '30-Day Nurture Calendar Generator',
    description: 'Creates a month-long engagement plan for undecided leads.',
    href: '/tools/30-day-nurture-calendar-generator',
    icon: <IconCalendarMonth />,
  },
];

const allTools = [...leadCaptureTools, ...communicationTools];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";


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
    ];
    
    const mobileNavLinks = [
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
                       <NavigationMenu>
                          <NavigationMenuList>
                             <NavigationMenuItem>
                                <Link href="/" passHref>
                                    <NavigationMenuLink asChild>
                                      <a className={navigationMenuTriggerStyle()}>Home</a>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <Link href="/about" passHref>
                                    <NavigationMenuLink asChild>
                                      <a className={navigationMenuTriggerStyle()}>About</a>
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                                  {allTools.map((component) => (
                                    <ListItem
                                      key={component.title}
                                      title={component.title}
                                      href={component.href}
                                    >
                                      {component.description}
                                    </ListItem>
                                  ))}
                                </ul>
                                <div className="p-4 bg-muted/50">
                                    <Link href="/tools" className="font-semibold text-primary hover:underline">
                                        View all tools...
                                    </Link>
                                </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
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
                                {mobileNavLinks.map(link => (
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
