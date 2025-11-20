import BookDemoForm from "@/components/book-demo/BookDemoForm";
import Faq from "@/components/book-demo/Faq";
import Hero from "@/components/book-demo/Hero";
import HowItWorks from "@/components/book-demo/HowItWorks";
import WhatYouWillSee from "@/components/book-demo/WhatYouWillSee";

export default function BookDemoPage() {
  return (
    <main>
      <Hero />
      <WhatYouWillSee />
      <HowItWorks />
      <BookDemoForm />
      <Faq />
    </main>
  );
}
