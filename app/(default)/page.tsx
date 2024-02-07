export const metadata = {
  title: "Best WhatsApp Bulk Sender | JomChatLah",
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
      <FeaturesBlocks />
      {/* <Testimonials /> */}
      <Pricing />
      <Newsletter />
    </>
  );
}
