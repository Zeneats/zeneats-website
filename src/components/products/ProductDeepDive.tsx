import { ReactNode } from "react";
import FeatureGrid, { Feature } from "./FeatureGrid";

interface ProductDeepDiveProps {
  id: string;
  productName: string;
  audienceTag: string;
  heading: ReactNode;
  description: string;
  features: Feature[];
  phoneContent: ReactNode;
  secondaryPhoneContent?: ReactNode;
  reversed?: boolean;
  lightBackground?: boolean;
  ctaText?: string;
}

export default function ProductDeepDive({
  id,
  productName,
  audienceTag,
  heading,
  description,
  features,
  phoneContent,
  secondaryPhoneContent,
  reversed = false,
  lightBackground = false,
  ctaText = "Schedule a Demo",
}: ProductDeepDiveProps) {
  return (
    <section
      id={id}
      className={`py-16 px-6 ${lightBackground ? "bg-surface-light" : ""}`}
      data-animate
    >
      <div className="max-w-[1120px] mx-auto">
        {/* Top: Text + Phone */}
        <div
          className={`flex flex-col ${
            reversed ? "lg:flex-row-reverse" : "lg:flex-row"
          } gap-12 items-center mb-16`}
        >
          {/* Text */}
          <div className="flex-1">
            <span
              className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${
                lightBackground
                  ? "bg-accent/10 text-accent"
                  : "highlight-pill-gradient text-accent border border-accent/20"
              }`}
            >
              {productName}
            </span>
            <p
              className={`text-sm mb-2 ${
                lightBackground ? "text-text-muted-dark" : "text-text-primary/60"
              }`}
            >
              {audienceTag}
            </p>
            <h2
              className={`text-[28px] md:text-[40px] font-semibold leading-[1.15] mb-4 ${
                lightBackground ? "text-text-dark" : "text-text-heading"
              }`}
            >
              {heading}
            </h2>
            <p
              className={`text-base leading-relaxed mb-6 max-w-[520px] ${
                lightBackground ? "text-text-muted-dark" : "text-text-primary"
              }`}
            >
              {description}
            </p>
            <a
              href="/#home"
              className={`inline-flex items-center gap-2 rounded-[160px] px-6 py-3 font-medium transition-colors ${
                lightBackground
                  ? "bg-accent text-white hover:bg-accent-bright"
                  : "bg-white text-cta-dark-text hover:bg-white/90"
              }`}
            >
              {ctaText}
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

          {/* Phone(s) */}
          <div className="flex-1 flex items-center justify-center">
            <div className="relative">
              {phoneContent}
              {secondaryPhoneContent && (
                <div className="hidden sm:block absolute -right-16 top-12">
                  {secondaryPhoneContent}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <FeatureGrid features={features} lightMode={lightBackground} />
      </div>
    </section>
  );
}
