export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import FeaturesBlocks from "@/components/features-blocks";
import Testimonials from "@/components/testimonials";
import Newsletter from "@/components/newsletter";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <Testimonials />
      <Pricing />
      <Newsletter />
    </>
  );
}
