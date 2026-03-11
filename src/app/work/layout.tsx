import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Explore case-study snapshots from Technose Digital Pvt Ltd across web design, Shopify, and growth campaigns.",
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work | Technose Digital Pvt Ltd",
    description:
      "Case studies with goals, solutions, and outcomes across digital projects.",
    url: "/work",
    images: [
      "/api/og?title=Technose%20Case%20Studies&subtitle=Real%20outcomes%20from%20design%2C%20development%2C%20and%20growth",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work | Technose Digital Pvt Ltd",
    description: "Browse selected project case studies.",
    images: [
      "/api/og?title=Technose%20Case%20Studies&subtitle=Real%20outcomes%20from%20design%2C%20development%2C%20and%20growth",
    ],
  },
};

export default function WorkLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
