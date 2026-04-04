import type { Metadata } from "next";
import "./globals.css";
import WhatsAppButton from "@/components/whatsapp-button";
import BackToTop from "@/components/back-to-top";
import Footer from "@/components/footer";

import { Plus_Jakarta_Sans } from "next/font/google";

const font = Plus_Jakarta_Sans({ subsets: ["latin"] });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.technose-digital.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Technose Digital Pvt Ltd",
  url: siteUrl,
  logo: `${siteUrl}/logo/logo.png`,
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
    default: "Technose Digital Pvt Ltd | High-Performing Web & Branding Agency",
    template: "%s | Technose Digital Pvt Ltd",
  },
  description:
    "Technose Digital Pvt Ltd helps businesses scale with conversion-focused websites, E-commerce stores, branding, and digital growth marketing.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Technose Digital Pvt Ltd | Web, Branding, and Growth",
    description:
      "Scale your business with high-performing web design, branding, and conversion-focused digital marketing.",
    url: siteUrl,
    siteName: "Technose Digital Pvt Ltd",
    type: "website",
    images: [
      {
        url: `${siteUrl}/api/og?title=Technose%20Digital%20Pvt%20Ltd&subtitle=Web%2C%20Branding%2C%20and%20Growth`,
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
      `${siteUrl}/api/og?title=Technose%20Digital%20Pvt%20Ltd&subtitle=Web%2C%20Branding%2C%20and%20Growth`,
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={font.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  );
}
