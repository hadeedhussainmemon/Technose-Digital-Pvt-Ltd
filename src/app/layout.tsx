import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import BackToTop from "@/components/back-to-top";

import { Outfit } from "next/font/google";

const font = Outfit({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.technose-digital.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technose Digital Pvt Ltd",
  url: siteUrl,
  logo: `${siteUrl}/images/assets.webp`,
  description:
    "Technose Digital Pvt Ltd helps businesses grow with conversion-focused websites, E-commerce stores, branding, and digital marketing.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: `${siteUrl}/contact`,
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Technose Digital Pvt Ltd | Web, Branding, and Growth",
    template: "%s | Technose Digital Pvt Ltd",
  },
  description:
    "Technose Digital Pvt Ltd helps businesses grow with conversion-focused websites, E-commerce stores, branding, and digital marketing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Technose Digital Pvt Ltd",
    description:
      "Conversion-focused websites, E-commerce stores, branding, and digital marketing for growth-ready businesses.",
    url: "/",
    siteName: "Technose Digital Pvt Ltd",
    type: "website",
    images: [
      {
        url: "/api/og?title=Technose%20Digital%20Pvt%20Ltd&subtitle=Web%2C%20Branding%2C%20and%20Growth",
        width: 1200,
        height: 630,
        alt: "Technose Digital Pvt Ltd agency showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Technose Digital Pvt Ltd",
    description:
      "Scale your business with high-performing web design, branding, and digital marketing.",
    images: [
      "/api/og?title=Technose%20Digital%20Pvt%20Ltd&subtitle=Web%2C%20Branding%2C%20and%20Growth",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
