import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Explore service packages by Technose Digital Pvt Ltd — website design, Shopify development, branding, and digital marketing. Get in touch to get a custom quote.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Our Packages | Technose Digital Pvt Ltd",
    description:
      "See what we offer across web design, Shopify, branding, and marketing. No checkout — just reach out and we will get back to you.",
    url: "/pricing",
    images: [
      "/api/og?title=Technose%20Packages&subtitle=Website%2C%20Shopify%2C%20branding%2C%20and%20growth",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Packages | Technose Digital Pvt Ltd",
    description:
      "Browse our service packages and get in touch to start your project.",
    images: [
      "/api/og?title=Technose%20Packages&subtitle=Website%2C%20Shopify%2C%20branding%2C%20and%20growth",
    ],
  },
};

export default function PricingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
