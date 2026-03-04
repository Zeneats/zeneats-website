import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SubheadBanner from "@/components/SubheadBanner";
import StatsCounter from "@/components/StatsCounter";
import LogoMarquee from "@/components/LogoMarquee";
import BigCardsSection from "@/components/BigCardsSection";
import AudienceSection from "@/components/AudienceSection";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubheadBanner />
      <StatsCounter />
      <LogoMarquee />
      <BigCardsSection />
      <AudienceSection />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  );
}
