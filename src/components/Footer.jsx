import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-sand border-t border-walnut/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Intro Column */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-[0.2em] text-sand uppercase block">
              Saba Living
            </span>
            <p className="text-sand/80 text-sm leading-relaxed max-w-sm">
              Contemporary furniture and home accents designed for everyday warmth and calm serenity.
              Crafted with honest timbers, tactile fabrics, and enduring proportions.
            </p>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider bg-walnut/40 text-sand/90 border border-sand/20 rounded">
                Showroom by Appointment • Addis Ababa
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-warm-ivory">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm text-sand/70">
              <li>
                <Link to="/" className="hover:text-terracotta-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-terracotta-light transition-colors">
                  Shop All Pieces
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-terracotta-light transition-colors">
                  Curated Collections
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="hover:text-terracotta-light transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-terracotta-light transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-warm-ivory">
              Categories
            </h3>
            <ul className="space-y-2 text-sm text-sand/70">
              <li>
                <Link to="/shop?category=living-room" className="hover:text-terracotta-light transition-colors">
                  Living Room
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bedroom" className="hover:text-terracotta-light transition-colors">
                  Bedroom
                </Link>
              </li>
              <li>
                <Link to="/shop?category=dining" className="hover:text-terracotta-light transition-colors">
                  Dining Room
                </Link>
              </li>
              <li>
                <Link to="/shop?category=home-decor" className="hover:text-terracotta-light transition-colors">
                  Home Décor & Accents
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio & Inquiries (Placeholders clearly marked) */}
          <div className="space-y-3">
            <h3 className="font-serif text-sm font-semibold tracking-wider uppercase text-warm-ivory">
              Studio & Inquiries
            </h3>
            <p className="text-xs text-sand/60">
              Showroom visits and custom inquiries are handled by appointment.
            </p>
            <div className="text-xs text-sand/80 space-y-1.5 pt-1">
              <p>
                <span className="text-sand/50 block">Showroom (Placeholder):</span>
                Bole Sub-City, Addis Ababa, Ethiopia
              </p>
              <p>
                <span className="text-sand/50 block">Direct Inquiries:</span>
                <span className="text-terracotta-light">inquiries@sabaliving.demo</span>
              </p>
              <p>
                <span className="text-sand/50 block">Telephone (Demo):</span>
                <span>+251 900 000 000</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-sand/15 flex flex-col sm:flex-row items-center justify-between text-xs text-sand/50 gap-4">
          <p>
            © {new Date().getFullYear()} Saba Living. All rights reserved. 30-Website Challenge (Project 03).
          </p>
          <p className="text-center sm:text-right">
            Sample catalog pieces for demonstration. Photography via Unsplash.
          </p>
        </div>
      </div>
    </footer>
  );
}
