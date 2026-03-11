import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

type RateLimitEntry = {
  count: number;
  windowStart: number;
};

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const rateLimitStore = new Map<string, RateLimitEntry>();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.technose-digital.com";

const ContactPayloadSchema = z.object({
  first_name: z.string().min(1),
  last_name: z.string().min(1),
  email: z.string().email(),
  job_title: z.string().min(1),
  company_name: z.string().min(1),
  help: z.string().min(1),
  services: z.string().min(1),
  info: z.string().min(1),
  website: z.string().optional(),
  formLoadedAt: z.coerce.number(),
});

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = request.headers.get("x-real-ip");
  return realIp || "unknown";
}

function isRateLimited(ipAddress: string): boolean {
  const now = Date.now();
  const existing = rateLimitStore.get(ipAddress);

  if (!existing || now - existing.windowStart > RATE_LIMIT_WINDOW_MS) {
    rateLimitStore.set(ipAddress, { count: 1, windowStart: now });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  rateLimitStore.set(ipAddress, existing);
  return false;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  try {
    const ipAddress = getClientIp(req);

    if (isRateLimited(ipAddress)) {
      return NextResponse.json(
        { message: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const parsedPayload = ContactPayloadSchema.safeParse(await req.json());

    if (!parsedPayload.success) {
      return NextResponse.json(
        { message: "Invalid request payload." },
        { status: 400 }
      );
    }

    const {
      first_name,
      last_name,
      email,
      job_title,
      company_name,
      help,
      services,
      info,
      website,
      formLoadedAt,
    } = parsedPayload.data;

    // Honeypot field should stay empty in legitimate submissions.
    if (website && website.trim().length > 0) {
      return NextResponse.json({ message: "Spam detected." }, { status: 400 });
    }

    // Reject submissions that happen unrealistically fast.
    if (Date.now() - formLoadedAt < 3000) {
      return NextResponse.json(
        { message: "Form submitted too quickly." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || "465");
    const smtpSecure = process.env.SMTP_SECURE !== "false";
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactToEmail = process.env.CONTACT_TO_EMAIL || smtpUser;

    if (!smtpHost || !smtpUser || !smtpPass || !contactToEmail) {
      return NextResponse.json(
        { message: "Email service is not configured." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: smtpUser,
      to: contactToEmail,
      replyTo: email,
      subject: `New inquiry from ${first_name} ${last_name}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>First Name:</strong> ${escapeHtml(first_name)}</p>
        <p><strong>Last Name:</strong> ${escapeHtml(last_name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Company Name:</strong> ${escapeHtml(company_name)}</p>
        <p><strong>Job Title:</strong> ${escapeHtml(job_title)}</p>
        <p><strong>Service Interest:</strong> ${escapeHtml(services)}</p>
        <p><strong>How We Can Help:</strong> ${escapeHtml(help)}</p>
        <p><strong>Project Details:</strong> ${escapeHtml(info)}</p>
      `,
    });

    // Auto-reply confirmation to the client
    await transporter.sendMail({
      from: smtpUser,
      to: email,
      subject: "We received your message — Technose Digital",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#333">
          <h2 style="color:#0891b2">Thanks for reaching out, ${escapeHtml(first_name)}!</h2>
          <p>We&apos;ve received your message and our team will get back to you within <strong>24&ndash;48 hours</strong>.</p>
          <p>In the meantime, feel free to explore our work:
            <a href="${siteUrl}" style="color:#0891b2">technose-digital.com</a>
          </p>
          <br/>
          <p>Best regards,<br/><strong>Technose Digital Pvt Ltd</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Email has been sent." }, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Email could not be sent." },
      { status: 500 }
    );
  }
}
