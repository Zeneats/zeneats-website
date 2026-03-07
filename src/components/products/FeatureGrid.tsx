import { ReactNode } from "react";

export interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  lightMode?: boolean;
}

export default function FeatureGrid({ features, lightMode = false }: FeatureGridProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((f) => (
        <div
          key={f.title}
          className={`rounded-2xl p-6 ${
            lightMode
              ? "bg-white shadow-sm"
              : "glass-card"
          }`}
        >
          <div className={`mb-3 ${lightMode ? "text-accent" : "text-accent-light"}`}>
            {f.icon}
          </div>
          <h4
            className={`text-sm font-semibold mb-1 ${
              lightMode ? "text-text-dark" : "text-text-heading"
            }`}
          >
            {f.title}
          </h4>
          <p
            className={`text-xs leading-relaxed ${
              lightMode ? "text-text-muted-dark" : "text-text-primary/60"
            }`}
          >
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
}
