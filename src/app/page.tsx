"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BigCardsSection from "@/components/BigCardsSection";
import FAQ from "@/components/FAQ";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import AnimationProvider from "@/components/AnimationProvider";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  const handleSplashComplete = useCallback(() => {
    setSplashDone(true);
  }, []);

  // Total splash duration: ~2.1s (0.5 fade in + 0.6 hold + 0.7 move + 0.3 fade out)
  const heroDelay = splashDone ? 0 : 2.1;

  return (
    <AnimationProvider>
      <main>
        <SplashScreen onComplete={handleSplashComplete} />
        <Navbar />
        <Hero delayStart={heroDelay} />
        <BigCardsSection />
        <FAQ />
        <CTABanner />
        <Footer />
      </main>
    </AnimationProvider>
  );
}
