"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductHero from "@/components/products/ProductHero";
import PlatformOverview from "@/components/products/PlatformOverview";
import ProductDeepDive from "@/components/products/ProductDeepDive";
import TrustSection from "@/components/products/TrustSection";
import PhoneFrame from "@/components/ui/PhoneFrame";
import CafeteriaHome from "@/components/phone-screens/CafeteriaHome";
import MenuBrowser from "@/components/phone-screens/MenuBrowser";
import OrderTracking from "@/components/phone-screens/OrderTracking";
import AdminDashboard from "@/components/phone-screens/AdminDashboard";
import type { Feature } from "@/components/products/FeatureGrid";

gsap.registerPlugin(ScrollTrigger);

/* ── Feature data ─────────────────────────────────── */

const employeeFeatures: Feature[] = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" /></svg>,
    title: "Live Menus",
    description: "Real-time menus with prices, photos, and availability updated throughout the day.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    title: "Pre-ordering",
    description: "Order meals in advance to skip the queue and reduce wait times.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" /><path d="M1 10h22" /></svg>,
    title: "Cashless Payments",
    description: "Pay via UPI, wallet, or meal benefits — fast, secure, contactless.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    title: "Order Tracking",
    description: "Track your order status in real time from preparation to ready for pickup.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" /></svg>,
    title: "Dietary Preferences",
    description: "Filter by veg, vegan, allergen-free, or calorie count to find the right meal.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
    title: "Ratings & Feedback",
    description: "Rate meals and share feedback to help vendors improve quality.",
  },
];

const vendorFeatures: Feature[] = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>,
    title: "Live Order Feed",
    description: "See incoming orders in real time with item details and special requests.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5" /><path d="M4 20L21 3" /><path d="M21 16v5h-5" /><path d="M15 15l6 6" /><path d="M4 4l5 5" /></svg>,
    title: "FIFO Queue Management",
    description: "Automated first-in-first-out order queuing for fair and efficient preparation.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></svg>,
    title: "Demand Forecasting",
    description: "AI-powered predictions to plan ingredients and reduce overproduction.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" /><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>,
    title: "Waste Tracking",
    description: "Monitor food waste by category and identify reduction opportunities.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>,
    title: "Menu Management",
    description: "Create, update, and schedule menus with pricing and availability controls.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
    title: "Performance Analytics",
    description: "Track sales, ratings, and fulfillment speed to optimize operations.",
  },
];

const zensightFeatures: Feature[] = [
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="M7 16l4-8 4 4 4-6" /></svg>,
    title: "Real-time Analytics",
    description: "Live dashboards showing sales, footfall, and order trends across locations.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" /></svg>,
    title: "Vendor Performance",
    description: "Compare vendors on quality, speed, ratings, and revenue contribution.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>,
    title: "Compliance Monitoring",
    description: "Automated FSSAI and hygiene compliance tracking with audit trails.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18" /><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6" /><path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2" /></svg>,
    title: "Food Waste Analytics",
    description: "Identify waste patterns and track sustainability improvement over time.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" /></svg>,
    title: "Multi-location Management",
    description: "Unified view across all your cafeteria locations from a single dashboard.",
  },
  {
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /></svg>,
    title: "Custom Reports",
    description: "Generate tailored reports for stakeholders with exportable data.",
  },
];

/* ── Component ────────────────────────────────────── */

export default function ProductsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entry animations
      gsap.fromTo(
        ".products-hero-eyebrow",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.1 }
      );
      gsap.fromTo(
        ".products-hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
      );
      gsap.fromTo(
        ".products-hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4 }
      );

      // Platform cards stagger
      gsap.fromTo(
        ".platform-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".platform-card",
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Scroll-triggered sections
      const sections = gsap.utils.toArray<HTMLElement>("[data-animate]");
      sections.forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar />
      <main>
        {/* 1. Hero */}
        <ProductHero />

        {/* 2. Platform Overview */}
        <PlatformOverview />

        {/* 3. Employee App */}
        <ProductDeepDive
          id="employee-app"
          productName="Employee App"
          audienceTag="For corporate employees"
          heading={
            <>
              Everything your employees need,{" "}
              <em className="text-accent-bright italic">in one app</em>
            </>
          }
          description="From browsing live menus to pre-ordering meals and paying cashlessly — the Employee App makes cafeteria dining fast, personalized, and hassle-free."
          features={employeeFeatures}
          phoneContent={
            <PhoneFrame>
              <CafeteriaHome />
            </PhoneFrame>
          }
          secondaryPhoneContent={
            <PhoneFrame className="scale-90 opacity-80">
              <MenuBrowser />
            </PhoneFrame>
          }
        />

        {/* 4. Vendor Dashboard */}
        <ProductDeepDive
          id="vendor-dashboard"
          productName="Vendor Dashboard"
          audienceTag="For kitchen teams & vendors"
          heading={
            <>
              Run your kitchen{" "}
              <em className="text-accent italic">smarter</em>, not harder
            </>
          }
          description="The Vendor Dashboard gives kitchen teams real-time order feeds, FIFO queue management, demand forecasting, and waste tracking — all in one place to boost efficiency and reduce cost."
          features={vendorFeatures}
          phoneContent={
            <PhoneFrame>
              <OrderTracking />
            </PhoneFrame>
          }
          reversed
          lightBackground
        />

        {/* 5. ZenSight Dashboard */}
        <ProductDeepDive
          id="zensight-dashboard"
          productName="ZenSight Dashboard"
          audienceTag="For facility managers & admins"
          heading={
            <>
              Complete{" "}
              <em className="text-accent-bright italic">visibility</em> across
              every location
            </>
          }
          description="ZenSight gives facility managers a single dashboard to monitor real-time analytics, vendor performance, compliance, and food waste metrics — enabling data-driven decisions at scale."
          features={zensightFeatures}
          phoneContent={
            <PhoneFrame>
              <AdminDashboard />
            </PhoneFrame>
          }
        />

        {/* 6. Trust & Security */}
        <TrustSection />

        {/* 7. CTA Banner */}
        <section className="py-16 px-6" data-animate>
          <div className="max-w-[1120px] mx-auto">
            <div className="glass-card rounded-3xl px-8 md:px-12 py-8 md:py-12 text-center">
              <h2 className="text-[28px] md:text-[40px] font-semibold text-white mb-6">
                Ready to transform your{" "}
                <em className="text-accent-bright italic">cafeteria</em>?
              </h2>
              <a
                href="/#home"
                className="bg-white text-cta-dark-text rounded-[128px] px-6 py-4 font-semibold inline-flex items-center gap-2 hover:bg-white/90 transition-colors"
              >
                Schedule a Demo
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
