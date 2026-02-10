import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import FeaturedPrograms from "@/components/home/FeaturedPrograms";
import NewsEvents from "@/components/home/NewsEvents";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FeaturedPrograms />
      <NewsEvents />
      <Testimonials />
      <CTABanner />
    </>
  );
}
