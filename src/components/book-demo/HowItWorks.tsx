import { GraduationCap, School, Laptop, Target, Briefcase } from 'lucide-react';
import { Card } from '@/components/ui/card';

const targetAudience = [
  {
    title: 'Coaching Institutes',
    description: 'For traditional centers looking to systemize their admission process.',
    icon: <School />,
  },
  {
    title: 'Training Centers',
    description: 'For professional training providers seeking to improve lead conversion.',
    icon: <Briefcase />,
  },
  {
    title: 'Online Course Creators',
    description: 'For digital educators who want to automate their sales funnel.',
    icon: <Laptop />,
  },
  {
    title: 'Competitive Exam Academies',
    description: 'For NEET/JEE, UPSC, SSC, and Banking institutes with high lead volume.',
    icon: <Target />,
  },
  {
    title: 'Skill-Based Academies',
    description: 'For institutes teaching skills like coding, design, or languages.',
    icon: <GraduationCap />,
  },
];

export default function HowItWorks() {
  return (
    <section>
      <div className="py-16 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Who This Demo Is For
            </h2>
            <p className="text-muted-foreground mt-6">
              If you receive student inquiries and want more admissions — this is
              for you.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {targetAudience.map((audience) => (
              <AudienceCard
                key={audience.title}
                title={audience.title}
                description={audience.description}
              >
                {audience.icon}
              </AudienceCard>
            ))}
            <Card className="p-6 flex flex-col justify-center items-center text-center bg-muted/30">
                 <div className="space-y-2">
                     <h3 className="text-base font-medium">And more...</h3>
                     <p className="text-muted-foreground line-clamp-2 text-sm">Any educational business that manages leads.</p>
                 </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

const AudienceCard = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="text-primary *:size-10">{children}</div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
