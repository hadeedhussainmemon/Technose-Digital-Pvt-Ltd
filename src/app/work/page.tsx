import Link from "next/link";
import PricingNavbar from "@/components/pricing-navbar";

type CaseStudy = {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  outcome: string;
};

// TODO: Replace with your actual project case studies.
const caseStudies: CaseStudy[] = [
  {
    title: "Global Supply Chain Rebranding",
    industry: "B2B Logistics",
    challenge:
      "Legacy website was failing to capture high-value leads due to an outdated user experience and poor mobile performance.",
    solution:
      "A complete ground-up Next.js rebuild focused on rapid page loads, intuitive navigation, and lead-gen funnels.",
    outcome: "+210% increase in inbound enterprise queries within 3 months.",
  },
  {
    title: "D2C Skincare Platform",
    industry: "E-Commerce",
    challenge:
      "High checkout abandonment and slow image loading were dragging down overall conversion rates during peak traffic.",
    solution:
      "Implemented a headless Shopify integration with optimized CDN delivery and a streamlined 2-step checkout.",
    outcome: "+45% checkout completion and 2x average session duration.",
  },
  {
    title: "FinTech Mobile Onboarding",
    industry: "Financial Services",
    challenge:
      "Drop-off rates during the KYC (Know Your Customer) process were exceeding 60% on mobile devices.",
    solution:
      "Designed a frictionless, step-by-step PWA interface with predictive validation and clear progress indicators.",
    outcome: "Reduced onboarding drop-off by 40% in the first quarter.",
  },
];

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-white antialiased bg-grid-black/[0.02]">
      <PricingNavbar />

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center pt-4 md:pt-10">
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80">
            Selected Work
          </h1>
          <p className="mt-4 text-black/70 max-w-2xl mx-auto">
            A snapshot of project outcomes across web design, E-commerce,
            branding, and growth execution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm text-[#00AAE7] font-semibold">{item.industry}</div>
              <h2 className="mt-2 text-2xl text-black font-semibold">{item.title}</h2>

              <div className="mt-5">
                <h3 className="text-black font-bold">Challenge</h3>
                <p className="mt-1 text-black/70">{item.challenge}</p>
              </div>

              <div className="mt-4">
                <h3 className="text-black font-bold">Solution</h3>
                <p className="mt-1 text-black/70">{item.solution}</p>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-800 font-medium">
                {item.outcome}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border rounded-full px-6 py-2 text-white bg-gradient-to-r bg-[#00AAE7] border-transparent font-medium hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
