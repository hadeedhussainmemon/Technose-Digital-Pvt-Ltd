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
    title: "Northgate Commerce Redesign",
    industry: "D2C Ecommerce",
    challenge:
      "Low conversion rate and inconsistent branding across landing pages.",
    solution:
      "Rebuilt the storefront UX, streamlined product page hierarchy, and created a design system for campaign pages.",
    outcome: "+38% conversion rate and +24% average order value in 90 days.",
  },
  {
    title: "Urban Bloom Shopify Growth Sprint",
    industry: "Beauty and Personal Care",
    challenge:
      "High mobile drop-off during checkout and weak retention from paid traffic.",
    solution:
      "Optimized mobile checkout flow, improved PDP speed, and launched lifecycle email sequences.",
    outcome: "+31% checkout completion and +42% returning customer revenue.",
  },
  {
    title: "PrimeBuild Lead Engine",
    industry: "B2B Construction Services",
    challenge:
      "Website traffic existed but qualified inbound leads were inconsistent.",
    solution:
      "Created service-focused pages, lead magnets, and a conversion-first contact workflow.",
    outcome: "2.7x increase in qualified leads over one quarter.",
  },
];

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <PricingNavbar />

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="text-center pt-4 md:pt-10">
          <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Selected Work
          </h1>
          <p className="mt-4 text-neutral-300 max-w-2xl mx-auto">
            A snapshot of project outcomes across web design, Shopify,
            branding, and growth execution.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {caseStudies.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6"
            >
              <div className="text-sm text-cyan-300">{item.industry}</div>
              <h2 className="mt-2 text-2xl text-white font-semibold">{item.title}</h2>

              <div className="mt-5">
                <h3 className="text-neutral-200 font-medium">Challenge</h3>
                <p className="mt-1 text-neutral-400">{item.challenge}</p>
              </div>

              <div className="mt-4">
                <h3 className="text-neutral-200 font-medium">Solution</h3>
                <p className="mt-1 text-neutral-400">{item.solution}</p>
              </div>

              <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-emerald-300">
                {item.outcome}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center border rounded-full px-6 py-2 text-white bg-gradient-to-r from-cyan-500 to-emerald-400 border-transparent font-medium hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
