import Link from "next/link";
import PricingNavbar from "@/components/pricing-navbar";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-white antialiased bg-grid-black/[0.02] flex flex-col">
      <PricingNavbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-black/80">
          404
        </div>
        <h1 className="mt-4 text-2xl md:text-4xl text-black font-semibold">
          Page not found
        </h1>
        <p className="mt-4 text-black/70 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center border rounded-full px-6 py-2 text-white bg-gradient-to-r bg-[#00AAE7] border-transparent font-medium hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
