import Link from "next/link";
import PricingNavbar from "@/components/pricing-navbar";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] flex flex-col">
      <PricingNavbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          404
        </div>
        <h1 className="mt-4 text-2xl md:text-4xl text-white font-semibold">
          Page not found
        </h1>
        <p className="mt-4 text-neutral-400 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center border rounded-full px-6 py-2 text-white bg-gradient-to-r from-cyan-500 to-emerald-400 border-transparent font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
