import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 px-6 md:px-12 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand & Tagline */}
        <div className="md:col-span-1">
          <Link href="/" className="block mb-4 group">
            <img 
              src={`${import.meta.env.BASE_URL}logo-stacked.png`}
              alt="Graylock Digital" 
              className="h-24 w-auto group-hover:opacity-90 transition-opacity"
            />
          </Link>
          <p className="text-stone font-sans mt-4 max-w-xs">
            Modern websites for small service businesses. Done for you, maintained forever.
          </p>
        </div>

        {/* Link Column 1 */}
        <div>
          <h4 className="font-display text-offwhite text-lg mb-6 tracking-wide">COMPANY</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/how-it-works" className="text-stone hover:text-offwhite transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-stone hover:text-offwhite transition-colors">Pricing</Link>
            <Link href="/work" className="text-stone hover:text-offwhite transition-colors">Our Work</Link>
            <Link href="/about" className="text-stone hover:text-offwhite transition-colors">About Us</Link>
          </ul>
        </div>

        {/* Link Column 2 */}
        <div>
          <h4 className="font-display text-offwhite text-lg mb-6 tracking-wide">SUPPORT</h4>
          <ul className="space-y-4 flex flex-col">
            <Link href="/faq" className="text-stone hover:text-offwhite transition-colors">FAQ</Link>
            <Link href="/get-started" className="text-stone hover:text-offwhite transition-colors">Contact</Link>
            <a href="#" className="text-stone hover:text-offwhite transition-colors">Privacy Policy</a>
            <a href="#" className="text-stone hover:text-offwhite transition-colors">Terms of Service</a>
          </ul>
        </div>

        {/* CTA Column */}
        <div>
          <h4 className="font-display text-offwhite text-lg mb-6 tracking-wide">READY?</h4>
          <Link href="/get-started" className="inline-block bg-orange text-white font-sans font-bold px-6 py-3 rounded hover:bg-orange/90 transition-colors w-full text-center shadow-lg shadow-orange/20 mb-6">
            Get a Free Evaluation
          </Link>
          <p className="text-stone text-sm text-center">
            hello@graylockdigital.com
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-gunmetal flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-stone text-sm">
          © {new Date().getFullYear()} Graylock Digital. All rights reserved.
        </p>
        <p className="text-stone text-sm flex gap-4">
          <span>Based in the USA</span>
          <span>•</span>
          <span>Built for local businesses</span>
        </p>
      </div>
    </footer>
  );
}
