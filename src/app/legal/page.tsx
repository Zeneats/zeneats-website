"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

gsap.registerPlugin(ScrollTrigger);

interface LegalLink {
  title: string;
  description: string;
  href: string;
}

const legalLinks: LegalLink[] = [
  {
    title: "Privacy Policy",
    description:
      "How ZenEats collects, uses, stores, and protects your personal data, in compliance with the DPDP Act, 2023.",
    href: "/privacy",
  },
  {
    title: "Delete Your Account",
    description:
      "How to request deletion of your ZenEats account and data, what is deleted, and what is retained.",
    href: "/legal/delete-account",
  },
  {
    title: "Terms of Use",
    description:
      "The terms governing your access to and use of the ZenEats platform, website, and mobile application.",
    href: "/legal/terms-of-use",
  },
  {
    title: "Terms & Conditions for Vendors",
    description:
      "Obligations of Vendors on the platform, covering food safety, payments, liability, and compliance.",
    href: "/legal/vendor-terms",
  },
  {
    title: "Terms & Conditions for Corporate Clients",
    description:
      "Terms for organizations availing ZenEats cafeteria management technology services.",
    href: "/legal/corporate-terms",
  },
  {
    title: "API Policy",
    description:
      "Terms for developers, partners, and integrators accessing the ZenEats Application Programming Interfaces.",
    href: "/legal/api-policy",
  },
];

export default function LegalHubPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".legal-hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
      );
      gsap.fromTo(
        ".legal-hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4 }
      );

      const cards = gsap.utils.toArray<HTMLElement>("[data-animate]");
      cards.forEach((el, i) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
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
        {/* ═══ Hero ═══ */}
        <section className="relative flex flex-col items-center justify-center pt-28 sm:pt-32 md:pt-36 pb-12 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />
          <div className="absolute top-24 right-[12%] w-2.5 h-2.5 rounded-full bg-accent/40 animate-pulse pointer-events-none" />
          <div className="absolute top-36 left-[14%] w-2 h-2 rounded-full bg-accent-light/30 animate-pulse pointer-events-none" />

          <p className="legal-hero-subtitle text-accent text-sm font-medium uppercase tracking-wide mb-3 opacity-0">
            Legal
          </p>
          <h1 className="legal-hero-heading text-[32px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.1] text-text-heading text-center max-w-[760px] mb-5 opacity-0">
            Legal <em className="text-accent-bright italic">Documents</em>
          </h1>
          <p className="legal-hero-subtitle text-base md:text-lg text-text-primary text-center max-w-[680px] opacity-0">
            Our policies and agreements governing the use of the ZenEats
            platform — for users, vendors, corporate clients, and developers.
          </p>
          <p className="legal-hero-subtitle text-sm text-text-muted text-center mt-4 opacity-0">
            ZEN EATS Platform · HKD TECH LLP
          </p>
        </section>

        {/* ═══ Document list ═══ */}
        <section className="py-12 md:py-16 px-6 bg-surface-light">
          <div className="max-w-[860px] mx-auto grid sm:grid-cols-2 gap-5">
            {legalLinks.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                data-animate
                className="group block rounded-2xl bg-surface-card p-6 border border-accent/10 hover:border-accent/40 transition-colors"
              >
                <h2 className="text-lg font-semibold text-text-dark mb-2 group-hover:text-accent transition-colors">
                  {doc.title}
                </h2>
                <p className="text-sm text-text-muted-dark leading-relaxed">
                  {doc.description}
                </p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-accent">
                  Read
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
