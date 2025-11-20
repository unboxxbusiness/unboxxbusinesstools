import { BarChart, CalendarCheck, Cpu, DollarSign, TrendingUp, UserCheck } from 'lucide-react';

const benefits = [
  {
    title: 'More Demo Bookings',
    description: 'Better follow-up and reminders turn interest into attendance.',
    icon: <CalendarCheck className="h-8 w-8" />,
  },
  {
    title: 'Higher Admissions',
    description: 'Clear fee explanation + structured nurturing = more sign-ups.',
    icon: <TrendingUp className="h-8 w-8" />,
  },
  {
    title: 'Less Manual Work',
    description: 'Your team stops guessing and starts following a system.',
    icon: <Cpu className="h-8 w-8" />,
  },
  {
    title: 'Data, Not Guesswork',
    description: 'You see real numbers: leads, follow-ups, conversions, gaps.',
    icon: <BarChart className="h-8 w-8" />,
  },
  {
    title: 'Better Use of Ad Spend',
    description: 'More admissions without always increasing the budget.',
    icon: <DollarSign className="h-8 w-8" />,
  },
    {
    title: 'Improved Team Performance',
    description: 'Standardized processes mean everyone performs like your best counsellor.',
    icon: <UserCheck className="h-8 w-8" />,
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-balance text-4xl font-medium lg:text-5xl">What Institutes Gain Using These Tools (And Automation)</h2>
          <p className="text-muted-foreground">
            When you start measuring and structuring your leads, follow-ups, and demos, growth becomes predictable. These tools give clarity; automation gives you scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-card border rounded-lg shadow-sm">
                <div className="p-4 bg-primary/10 rounded-full text-primary mb-4">
                    {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mt-1 mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
