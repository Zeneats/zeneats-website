const platforms = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Employee App",
    description: "Browse menus, pre-order meals, and pay cashlessly.",
    anchor: "#employee-app",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    title: "Vendor Dashboard",
    description: "Manage orders, track demand, and reduce waste.",
    anchor: "#vendor-dashboard",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <path d="M7 16l4-8 4 4 4-6" />
      </svg>
    ),
    title: "ZenSight Dashboard",
    description: "Monitor analytics, compliance, and performance.",
    anchor: "#zensight-dashboard",
  },
];

export default function PlatformOverview() {
  return (
    <section className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto">
        <p className="text-accent text-base font-medium uppercase tracking-wide text-center mb-3">
          ONE PLATFORM
        </p>
        <h2 className="text-[28px] md:text-[40px] font-semibold text-text-heading text-center mb-4">
          Built to work together
        </h2>
        <p className="text-text-primary text-center max-w-[600px] mx-auto mb-12">
          Orders flow from employees to vendors, and every data point feeds into
          real-time analytics — one connected ecosystem.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {platforms.map((p, i) => (
            <a
              key={p.title}
              href={p.anchor}
              className="platform-card relative glass-card rounded-2xl p-8 text-center hover:bg-card-glass/80 transition-colors group"
            >
              <div className="text-accent mb-4 flex justify-center">{p.icon}</div>
              <h3 className="text-lg font-semibold text-text-heading mb-2 group-hover:text-accent-light transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-text-primary/70">{p.description}</p>

              {/* Connector arrow (between cards) */}
              {i < platforms.length - 1 && (
                <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 text-accent/30">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
