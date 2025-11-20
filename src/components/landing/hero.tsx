import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const heroImage = PlaceHolderImages.find((image) => image.id === "hero-image");

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Unlock Your Potential with <span className="text-primary">ubx</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Our platform provides seamless integration and powerful tools to boost your productivity. Join us and experience the future of innovation.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link href="#">
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="#">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                data-ai-hint={heroImage.imageHint}
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl"
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
