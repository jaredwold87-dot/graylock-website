import { Link } from "wouter";
import { AlertCircle } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found | Graylock Digital" description="The page you're looking for doesn't exist. Head back to the homepage to see our work, plans, or schedule a free evaluation." noindex />
      <div className="min-h-[80vh] w-full flex items-center justify-center bg-charcoal text-offwhite px-6">
        <div className="text-center max-w-md bg-navy p-10 rounded-2xl border border-gunmetal shadow-2xl">
          <AlertCircle className="w-16 h-16 text-orange mx-auto mb-6" />
          <h1 className="text-4xl font-display font-bold text-offwhite mb-4">404 - Page Not Found</h1>
          <p className="mt-2 text-lg text-stone mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="inline-flex items-center justify-center font-sans font-semibold tracking-wide px-8 py-3 rounded bg-orange text-white hover:bg-orange/90 transition-colors shadow-lg">
            Return to Home
          </Link>
        </div>
      </div>
    </>
  );
}
