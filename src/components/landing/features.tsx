import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap, ShieldCheck, LayoutGrid, TrendingUp, CloudCog, Users } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Blazing Fast Performance",
    description: "Experience unparalleled speed and responsiveness. Our infrastructure is optimized for peak performance.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Enterprise-Grade Security",
    description: "Your data is protected with state-of-the-art security measures, ensuring compliance and peace of mind.",
  },
  {
    icon: <LayoutGrid className="h-8 w-8 text-primary" />,
    title: "Seamless Integrations",
    description: "Connect ubx with your favorite tools and services effortlessly. Our API is robust and well-documented.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Advanced Analytics",
    description: "Gain valuable insights from your data with our powerful analytics dashboard. Make data-driven decisions.",
  },
  {
    icon: <CloudCog className="h-8 w-8 text-primary" />,
    title: "Cloud Native",
    description: "Built for the cloud, ubx is scalable, resilient, and ready to grow with your business needs.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Collaborative Workspace",
    description: "Work together with your team in a shared environment that fosters productivity and innovation.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-secondary/50 py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Why Choose <span className="text-primary">ubx</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Our platform is packed with features designed to help you and your team succeed.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-6">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <CardDescription className="pt-2 text-base">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
