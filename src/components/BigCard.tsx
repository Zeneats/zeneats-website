"use client";

interface BigCardProps {
  eyebrow: string;
  heading: React.ReactNode;
  description: string;
  ctaText: string;
  ctaHref: string;
  chips?: string[];
  phoneContent?: React.ReactNode;
  reversed?: boolean;
}

export default function BigCard({
  eyebrow,
  heading,
  description,
  ctaText,
  ctaHref,
  chips,
  phoneContent,
  reversed = false,
}: BigCardProps) {
  return (
    <div
      className={`bg-surface-light rounded-2xl p-8 pb-12 sm:p-10 sm:pb-16 flex flex-col ${
        reversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8`}
    >
      {/* Content */}
      <div className="big-card-content flex-1 flex flex-col justify-center opacity-0">
        <span className="text-accent text-lg font-medium uppercase tracking-wide mb-4">
          {eyebrow}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-text-dark leading-[1.2] sm:leading-[1.2] mb-5">
          {heading}
        </h3>
        <p className="text-base sm:text-lg text-text-muted-dark mb-8">{description}</p>

        {chips && chips.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-6">
            {chips.map((chip) => (
              <span
                key={chip}
                className="bg-white-30 rounded-lg px-3 py-2 text-sm text-text-dark"
              >
                {chip}
              </span>
            ))}
          </div>
        )}

        <a href={ctaHref} className="self-start bg-accent text-white rounded-[160px] px-6 py-4 font-medium flex items-center gap-2 hover:bg-accent-bright transition-colors">
          {ctaText}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="ml-1"
          >
            <path
              d="M3 8h10m0 0l-4-4m4 4l-4 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      {/* Phone Mockup */}
      <div className="big-card-phone flex-1 flex items-center justify-center opacity-0">
        {phoneContent ? (
          phoneContent
        ) : (
          <div className="w-[200px] h-[360px] rounded-[24px] bg-gray-200 flex items-center justify-center">
            <span className="text-gray-400 text-sm">App Screen</span>
          </div>
        )}
      </div>
    </div>
  );
}
