const trustItems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
    title: "Data Security",
    description: "End-to-end encryption with enterprise-grade infrastructure.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 14a1 1 0 01-.78-1.63l9.9-10.2a.5.5 0 01.86.46l-1.92 6.02A1 1 0 0013 10h7a1 1 0 01.78 1.63l-9.9 10.2a.5.5 0 01-.86-.46l1.92-6.02A1 1 0 0011 14H4z" />
      </svg>
    ),
    title: "Easy Integration",
    description: "Plugs into existing access control and HR systems.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "FSSAI Compliant",
    description: "Built-in compliance tracking for food safety standards.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Dedicated Support",
    description: "Hands-on onboarding and ongoing technical assistance.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 px-6" data-animate>
      <div className="max-w-[1120px] mx-auto">
        <p className="text-accent text-base font-medium uppercase tracking-wide text-center mb-3">
          TRUST & SECURITY
        </p>
        <h2 className="text-[28px] md:text-[40px] font-semibold text-text-heading text-center mb-12">
          Enterprise-ready from day one
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {trustItems.map((item) => (
            <div key={item.title} className="glass-card rounded-2xl p-8">
              <div className="text-accent mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-text-heading mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-text-primary/60">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
