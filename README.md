# Technose Digital Pvt Ltd - Agency Website

Official marketing website for **Technose Digital Pvt Ltd**, built with Next.js and TypeScript.
The site showcases services, packages, portfolio sections, FAQs, and lead-capture via contact form.

## Overview

This project is a modern, component-based agency website with:

- Homepage sections for Website Design, Graphic Design, Shopify Stores, Brands, Services, and FAQs.
- Dedicated pages for Packages, Contact, and Work.
- Interactive UI using shadcn/ui patterns, Framer Motion, and custom animated components.
- Contact API route using Nodemailer.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui + Radix UI
- Framer Motion
- React Hook Form + Zod
- Nodemailer

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run in development:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run lint checks

## Key Routes

- `/` - Homepage
- `/pricing` - Pricing plans
- `/contact` - Contact and lead form
- `/work` - Case studies and project highlights

## Project Structure

```text
src/
	app/
		page.tsx                 # Homepage
		pricing/page.tsx         # Pricing
		contact/page.tsx         # Contact form page
		work/page.tsx            # Case studies page
		api/contact/route.ts     # Contact email API
	components/
		navbar.tsx
		pricing-navbar.tsx
		ui/                      # Shared UI primitives/components
```

## Branding and Content Customization

Main files to customize for agency content updates:

- `src/app/page.tsx` - Hero text, CTA, and section ordering
- `src/app/services.tsx` - Service messaging
- `src/app/faq.tsx` - Frequently asked questions
- `src/app/pricing/page.tsx` - Packages showcase content
- `src/components/navbar.tsx` - Navigation labels and CTA
- `src/app/layout.tsx` - SEO title and meta description

## Environment and Security

The contact API currently sends email through Nodemailer.

Recommended environment variables:

```env
NEXT_PUBLIC_SITE_URL=https://www.technose-digital.com

SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@example.com
SMTP_PASS=your-app-password
CONTACT_TO_EMAIL=your-email@example.com
```

You can copy `.env.example` and create a local `.env.local` file. Do not hardcode credentials in source files.

## Deployment

Recommended target: Hostinger (Node.js hosting).

1. Build locally: `npm run build`.
2. Add production environment variables in Hostinger panel.
3. Start app with `npm run start` on your Node.js instance.
4. Point domain and SSL to the running app.

## Next Improvement Roadmap

1. Conversion optimization:
- Add stronger proof blocks (case studies, quantified outcomes, client logos with real names).
- Improve CTA hierarchy on homepage and pricing.

2. Performance:
- Further optimize image loading with modern formats and per-breakpoint variants.
- Introduce lazy-loaded section bundles for below-the-fold components.

3. SEO:
- Add Organization and Service schema markup with real business details.
- Add dedicated Open Graph artwork for each key route.

4. Reliability and maintainability:
- Add integration tests for contact submission and pricing CTA flows.
- Add smoke tests for routing and key user flows.
- Add linting and build checks in CI.

## License

This project is private and maintained for Technose Digital Pvt Ltd.






