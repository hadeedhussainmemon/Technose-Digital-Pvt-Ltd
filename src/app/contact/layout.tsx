import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Technose Digital Pvt Ltd to discuss your website, branding, E-commerce, or marketing growth goals.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Technose Digital Pvt Ltd",
    description:
      "Speak with our strategy team and get a custom roadmap for your business growth.",
    url: "/contact",
    images: [
      "/api/og?title=Contact%20Technose%20Digital&subtitle=Share%20your%20project%20goals",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Technose Digital Pvt Ltd",
    description:
      "Start your project with Technose Digital Pvt Ltd.",
    images: [
      "/api/og?title=Contact%20Technose%20Digital&subtitle=Share%20your%20project%20goals",
    ],
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
