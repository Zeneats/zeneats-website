"use client";

import { useState } from "react";

const faqItems = [
  {
    q: "What is ZenEats?",
    a: "ZenEats is a rewards and engagement platform that connects banks, brands, and consumers. We help banking apps increase engagement while giving brands access to high-intent audiences.",
  },
  {
    q: "How does ZenEats integrate with banking apps?",
    a: "We provide a lightweight SDK that integrates into your existing mobile app within days. Our modular architecture means you can enable specific features without overhauling your app.",
  },
  {
    q: "What kind of rewards can be offered?",
    a: "ZenEats supports cashback, vouchers, loyalty points, instant discounts, gamified rewards, and co-branded offers. The reward type can be customized per campaign.",
  },
  {
    q: "How do brands reach banking audiences?",
    a: "Brands can create targeted campaigns that appear as native experiences within banking apps — think sponsored rewards, offer walls, and contextual promotions.",
  },
  {
    q: "What is the typical ROI for banks?",
    a: "Banks typically see a 3-4x increase in daily active users, 6x growth in digital transactions, and significant improvement in NPS scores within the first 90 days.",
  },
  {
    q: "Is ZenEats compliant with banking regulations?",
    a: "Yes. We are fully compliant with RBI guidelines, data protection regulations, and banking industry standards. We undergo regular security audits and certifications.",
  },
  {
    q: "How long does integration take?",
    a: "A typical integration takes 1-2 weeks from SDK integration to go-live. We provide dedicated engineering support throughout the process.",
  },
  {
    q: "What analytics and reporting is available?",
    a: "Our dashboard provides real-time analytics on user engagement, redemption rates, campaign performance, ROI metrics, and detailed demographic insights.",
  },
  {
    q: "Can we customize the user experience?",
    a: "Absolutely. The entire rewards experience can be white-labeled to match your app's design language, brand colors, and user flows.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Column */}
        <div className="lg:w-[360px] shrink-0">
          <span className="text-accent text-base font-medium uppercase tracking-wide">
            FAQ
          </span>
          <h2 className="text-[28px] md:text-[40px] font-medium text-text-heading mt-3 mb-4">
            Get all your questions answered here
          </h2>
          <p className="text-base text-text-primary">
            Everything you need to know about ZenEats and how it works for banks,
            brands, and publishers.
          </p>
        </div>

        {/* Right Column - Accordion */}
        <div className="flex-1 space-y-2">
          {faqItems.map((item, i) => (
            <div
              key={i}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="text-base font-medium text-text-primary pr-4">
                  {item.q}
                </span>
                <span
                  className={`text-text-primary text-xl shrink-0 transition-transform duration-300 ${
                    openIndex === i ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? "max-h-60" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-sm text-text-primary/80 leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
