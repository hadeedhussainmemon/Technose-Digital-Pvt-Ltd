import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import PricingNavbar from "@/components/pricing-navbar";
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card";

const plans = [
  {
    name: "Starter",
    price: "Let's Talk",
    badge: null,
    features: [
      "Fully responsive on all screens",
      "Up to 5 pages",
      "Design + Development",
      "Basic SEO setup",
      "Dedicated communication channel",
      "1–2 week delivery",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80",
    description:
      "Ideal for individuals and small businesses looking for a clean, professional web presence.",
  },
  {
    name: "Growth",
    price: "Let's Talk",
    badge: "Most Popular",
    features: [
      "Fully responsive on all screens",
      "Up to 10 pages",
      "React / Next.js / Tailwind CSS",
      "Design + Development",
      "On-page SEO optimization",
      "24-hour support response time",
      "Dedicated communication channel",
      "2–4 week delivery",
    ],
    style:
      "rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80",
    description:
      "Best for startups and businesses that need a performance website with strong branding and visibility.",
  },
  {
    name: "Enterprise",
    price: "Custom",
    badge: "Full Scale",
    features: [
      "Fully responsive on all screens",
      "Unlimited pages",
      "React / Next.js / Tailwind CSS",
      "Design + Development",
      "Unlimited Revisions",
      "Priority delivery queue",
      "Dedicated Project Manager",
      "Advanced SEO + Performance audit",
    ],
    style:
      "h-full rounded-3xl py-10 flex flex-col bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80",
    description:
      "For established businesses and agencies that need a scalable, premium digital product with full support.",
  },
];

const Packages = () => {
  return (
    <div className="w-full md:items-center md:justify-center bg-white antialiased bg-grid-black/[0.02] relative overflow-hidden">
      <PricingNavbar />

      <div className="flex items-center justify-center flex-col">
        <div className="text-5xl pb-4 md:pb-8 text-black px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80">
          Our Packages
        </div>
        <p className="text-black/70 text-center max-w-lg px-6 pb-12">
          Every project is scoped and quoted based on your goals. Send us a
          message and we will get back to you within 24 hours.
        </p>

        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 pb-20 items-start">
          {plans.map((plan) => (
            <CardContainer containerClassName="w-full h-full py-0" key={plan.name}>
            <CardBody className="w-full h-full">
            <div
              className="h-full flex flex-col justify-between border rounded-3xl px-6 bg-white"
            >
              <CardItem translateZ="50" className={plan.style}>
                <div className="text-4xl flex items-center font-medium">
                  {plan.name}
                  {plan.badge && (
                    <div className="text-sm font-medium text-[#00AAE7] bg-[#00AAE7]/10 px-2 py-1 rounded-full ml-4">
                      {plan.badge}
                    </div>
                  )}
                </div>
                <div className="text-3xl pt-6">{plan.price}</div>
                <div className="py-6">{plan.description}</div>

                <ul>
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center"
                    >
                      <PiCheckCircleFill className="text-[#00AAE7] mr-2 text-xl shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardItem>

              <CardItem translateZ="30" className="w-full">
              <Link
                href="/contact"
                className="rounded-3xl my-6 py-3 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r bg-[#00AAE7] font-medium hover:opacity-90 transition-opacity"
              >
                Get in Touch
              </Link>
              </CardItem>
            </div>
            </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
