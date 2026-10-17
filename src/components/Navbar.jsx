import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Shop", to: "/shop" },
    { label: "Collections", to: "/collections" },
    { label: "Our Story", to: "/our-story" },
    { label: "Contact", to: "/contact" },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-ivory/95 backdrop-blur-md border-b border-sand/70 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="group flex flex-col items-start focus:outline-none"
          >
            <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.2em] text-walnut uppercase group-hover:text-terracotta transition-colors">
              Saba Living
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-charcoal-muted -mt-0.5">
              Furniture & Interior Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);

              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wider uppercase font-medium transition-colors py-1 relative ${
                    isActive
                      ? "text-terracotta font-semibold"
                      : "text-charcoal hover:text-walnut"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-terracotta rounded-full" />
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Action CTA Placeholder */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase bg-walnut text-warm-ivory rounded hover:bg-terracotta transition-colors shadow-xs"
            >
              Browse Catalog
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-charcoal hover:text-walnut hover:bg-sand/40 focus:outline-none focus:ring-2 focus:ring-terracotta"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.75}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-sand/70 bg-warm-ivory px-4 pt-4 pb-6 space-y-3 shadow-lg animate-in fade-in duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive =
                link.to === "/"
                  ? location.pathname === "/"
                  : location.pathname.startsWith(link.to);

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={closeMenu}
                  className={`px-3 py-2.5 rounded-md text-base font-medium tracking-wide transition-colors ${
                    isActive
                      ? "bg-sand/60 text-terracotta font-semibold"
                      : "text-charcoal hover:bg-sand/30 hover:text-walnut"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-sand/50">
            <Link
              to="/shop"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold tracking-wider uppercase bg-walnut text-warm-ivory rounded hover:bg-terracotta transition-colors"
            >
              Browse Catalog
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
