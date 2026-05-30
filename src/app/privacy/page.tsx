"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  policySections,
  policyIntro,
  policyLastUpdated,
} from "./policyContent";

gsap.registerPlugin(ScrollTrigger);

export default function PrivacyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entry animations
      gsap.fromTo(
        ".privacy-hero-heading",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, delay: 0.2 }
      );
      gsap.fromTo(
        ".privacy-hero-subtitle",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, delay: 0.4 }
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
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
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
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full bg-accent/10 blur-[150px] pointer-events-none" />
          <div className="absolute top-24 right-[12%] w-2.5 h-2.5 rounded-full bg-accent/40 animate-pulse pointer-events-none" />
          <div className="absolute top-36 left-[14%] w-2 h-2 rounded-full bg-accent-light/30 animate-pulse pointer-events-none" />

          <p className="privacy-hero-subtitle text-accent text-sm font-medium uppercase tracking-wide mb-3 opacity-0">
            Legal
          </p>
          <h1 className="privacy-hero-heading text-[32px] sm:text-[40px] md:text-[52px] font-semibold leading-[1.1] text-text-heading text-center max-w-[760px] mb-5 opacity-0">
            Privacy <em className="text-accent-bright italic">Policy</em>
          </h1>
          <p className="privacy-hero-subtitle text-base md:text-lg text-text-primary text-center max-w-[680px] opacity-0">
            {policyIntro}
          </p>
          <p className="privacy-hero-subtitle text-sm text-text-muted text-center mt-4 opacity-0">
            ZEN EATS Platform · HKD TECH LLP · Last updated {policyLastUpdated}
          </p>
        </section>

        {/* ═══ Policy Body ═══ */}
        <section className="py-12 md:py-16 px-6 bg-surface-light">
          <div className="max-w-[1120px] mx-auto lg:grid lg:grid-cols-[260px_1fr] lg:gap-12">
            {/* Sticky section nav */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
                <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-4">
                  On this page
                </p>
                <ul className="space-y-2.5">
                  {policySections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block text-sm text-text-muted-dark hover:text-accent transition-colors leading-snug"
                      >
                        {s.number}. {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            {/* Sections */}
            <div className="max-w-[760px] space-y-10">
              {policySections.map((s) => (
                <article
                  key={s.id}
                  id={s.id}
                  data-animate
                  className="scroll-mt-28"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-text-dark mb-4">
                    <span className="text-accent">{s.number}.</span> {s.title}
                  </h2>

                  {s.body?.map((para, i) => (
                    <p
                      key={i}
                      className="text-base text-text-muted-dark leading-relaxed mb-4 last:mb-0"
                    >
                      {para}
                    </p>
                  ))}

                  {s.listIntro && (
                    <p className="text-base text-text-muted-dark leading-relaxed mb-3">
                      {s.listIntro}
                    </p>
                  )}

                  {s.list && (
                    <ul className="space-y-2.5 mt-1">
                      {s.list.map((item, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-base text-text-muted-dark leading-relaxed"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Grievance Officer contact block */}
                  {s.id === "grievance" && (
                    <div className="mt-5 rounded-2xl bg-surface-card p-6 border border-accent/10">
                      <p className="text-accent text-xs font-semibold uppercase tracking-wider mb-3">
                        Grievance Officer
                      </p>
                      <dl className="space-y-2 text-sm text-text-muted-dark">
                        <div className="flex gap-2">
                          <dt className="text-text-dark font-medium min-w-[64px]">
                            Email
                          </dt>
                          <dd>
                            <a
                              href="mailto:info@zeneats.co.in"
                              className="hover:text-accent transition-colors"
                            >
                              info@zeneats.co.in
                            </a>
                          </dd>
                        </div>
                        <div className="flex gap-2">
                          <dt className="text-text-dark font-medium min-w-[64px]">
                            Address
                          </dt>
                          <dd className="leading-relaxed">
                            1602 Lodha, Lower Parel,
                            <br />
                            Mumbai 400013, Maharashtra, India
                          </dd>
                        </div>
                      </dl>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
