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
    title: "Project Alpha",
    industry: "Dummy Ecommerce",
    challenge:
      "Placeholder challenge text for an ecommerce redesign case study.",
    solution:
      "Placeholder solution text describing UX and design system improvements.",
    outcome: "+00% placeholder conversion uplift over 00 days.",
  },
  {
    title: "Project Beta",
    industry: "Dummy D2C Brand",
    challenge:
      "Placeholder challenge text for mobile checkout and retention.",
    solution:
      "Placeholder solution text covering checkout optimization and lifecycle flows.",
    outcome: "+00% placeholder checkout completion and +00% repeat revenue.",
  },
  {
    title: "Project Gamma",
    industry: "Dummy B2B Services",
    challenge:
      "Placeholder challenge text for lead consistency and qualification.",
    solution:
      "Placeholder solution text for service pages and conversion-focused forms.",
    outcome: "0.0x placeholder qualified lead growth in one quarter.",
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
              className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6"
            >
              <div className="text-sm text-cyan-300">{item.industry}</div>
              <h2 className="mt-2 text-2xl text-black font-semibold">{item.title}</h2>

              <div className="mt-5">
                <h3 className="text-neutral-200 font-medium">Challenge</h3>
                <p className="mt-1 text-black/70">{item.challenge}</p>
              </div>

              <div className="mt-4">
                <h3 className="text-neutral-200 font-medium">Solution</h3>
                <p className="mt-1 text-black/70">{item.solution}</p>
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
            className="inline-flex items-center justify-center border rounded-full px-6 py-2 text-white bg-gradient-to-r bg-[#00AAE7] border-transparent font-medium hover:opacity-90 transition-opacity"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
