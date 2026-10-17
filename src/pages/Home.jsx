import { Link } from "react-router-dom";
import { CATEGORIES, FEATURED_PRODUCTS, EDITORIAL_VIGNETTES } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home() {
  return (
    <div className="space-y-20 sm:space-y-28 lg:space-y-36 pb-20">
      {/* SECTION 1: HERO */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Hero Copy */}
            <div className="lg:col-span-5 space-y-6 sm:space-y-8">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sand/50 border border-sand-muted text-charcoal-muted text-xs tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-terracotta inline-block" />
                <span>Contemporary Living • Studio Preview</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-walnut leading-[1.12]">
                Spaces Shaped by <span className="italic font-light text-terracotta">Stillness</span> & Form.
              </h1>

              <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed max-w-lg">
                Thoughtfully chosen furniture and natural textures for calm, welcoming spaces.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-walnut text-warm-ivory rounded hover:bg-terracotta transition-colors shadow-sm text-center"
                >
                  Shop Collection
                </Link>
                <a
                  href="#categories"
                  className="inline-flex items-center justify-center px-7 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase border border-walnut/30 text-charcoal hover:bg-sand/40 rounded transition-colors text-center"
                >
                  Explore Categories
                </a>
              </div>

              {/* Minimal Trust Indicator */}
              <div className="pt-4 border-t border-sand/60 grid grid-cols-3 gap-4 text-xs text-charcoal-muted">
                <div>
                  <span className="block font-semibold text-walnut">Solid Timber</span>
                  <span className="text-[11px]">Honest oak & walnut</span>
                </div>
                <div>
                  <span className="block font-semibold text-walnut">Tactile Comfort</span>
                  <span className="text-[11px]">Natural linens & wool</span>
                </div>
                <div>
                  <span className="block font-semibold text-walnut">Sample Catalog</span>
                  <span className="text-[11px]">Demo pricing in ETB</span>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-7">
              <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-5/4 rounded-sm overflow-hidden bg-sand/30 border border-sand/80 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80"
                  alt="Architectural living room with modern wooden furniture and natural sunlight"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                />
                <div className="absolute bottom-4 right-4 bg-warm-ivory/90 backdrop-blur-xs px-3.5 py-1.5 rounded text-[11px] font-medium text-walnut tracking-wide border border-sand/70">
                  The Sololo Living Vignette
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SHOP BY CATEGORY */}
      <section id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
              Spaces to Furnish
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-walnut font-normal">
              Shop by Category
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2">
              Every room designed around honest materials, intentional proportions, and relaxed comfort.
            </p>
          </div>
          <Link
            to="/shop"
            className="hidden md:inline-flex items-center text-xs font-semibold uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors mt-4 md:mt-0"
          >
            View All Categories
            <span className="ml-1.5">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="group relative flex flex-col bg-warm-ivory rounded-sm overflow-hidden border border-sand/70 hover:border-walnut/40 transition-all duration-300 hover:shadow-md"
            >
              <div className="relative aspect-4/3 sm:aspect-square w-full overflow-hidden bg-sand/30">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/10 group-hover:bg-charcoal/0 transition-colors" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-xl font-medium text-walnut group-hover:text-terracotta transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-charcoal-muted mt-1">
                    {cat.subtitle}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-sand/40 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-terracotta">
                  <span>Explore Pieces</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURED PIECES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14">
          <div className="max-w-xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
              Curated Selection
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-walnut font-normal">
              Featured Pieces
            </h2>
            <p className="text-charcoal-muted text-sm sm:text-base mt-2">
              Signature silhouettes, warm timber finishes, and tactile upholstery.
            </p>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors mt-4 md:mt-0"
          >
            Browse Full Catalog
            <span className="ml-1.5">→</span>
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Demo Disclaimer Banner */}
        <div className="mt-8 p-4 bg-sand/30 border border-sand rounded-sm text-center text-xs text-charcoal-muted">
          <p>
            <strong className="text-walnut">Sample Catalog Notice:</strong> Products and ETB prices shown above are realistic demonstration examples created for Saba Living (Project 03).
          </p>
        </div>
      </section>

      {/* SECTION 4: BRAND INTRODUCTION & ETHOS */}
      <section className="bg-sand/35 border-y border-sand/70 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta">
              Our Design Philosophy
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-walnut font-normal leading-tight">
              Furniture designed to bring quiet warmth into daily life.
            </h2>
            <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed">
              We design for restorative stillness—focusing on proportion, natural materials, and honest craft that gracefully weathers daily life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 sm:mt-18">
            <div className="bg-warm-ivory p-8 rounded-sm border border-sand/80 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-olive block">
                01 • Natural Timbers
              </span>
              <h3 className="font-serif text-xl font-medium text-walnut">
                Living Grain & Warmth
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Solid walnut, smoked oak, and natural oils that deepen in character over time.
              </p>
            </div>

            <div className="bg-warm-ivory p-8 rounded-sm border border-sand/80 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-olive block">
                02 • Thoughtful Utility
              </span>
              <h3 className="font-serif text-xl font-medium text-walnut">
                Form Guided by Comfort
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Calibrated proportions, comfortable seat depths, and durable everyday functionality.
              </p>
            </div>

            <div className="bg-warm-ivory p-8 rounded-sm border border-sand/80 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-olive block">
                03 • Calm Aesthetics
              </span>
              <h3 className="font-serif text-xl font-medium text-walnut">
                Understated Elegance
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Quiet earth tones and gentle curves that harmonize across contemporary spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: INTERIOR INSPIRATION (EDITORIAL VIGNETTES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-10 sm:mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
            Atmospheric Living
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-walnut font-normal">
            Interior Inspiration
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base mt-2">
            A glimpse into curated living spaces where texture, daylight, and considered silhouettes meet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Vignette 1 */}
          <div className="md:col-span-7">
            <div className="relative aspect-16/11 sm:aspect-16/10 rounded-sm overflow-hidden bg-sand/30 border border-sand/80 shadow-md group">
              <img
                src={EDITORIAL_VIGNETTES[0].image}
                alt={EDITORIAL_VIGNETTES[0].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
                <div className="text-warm-ivory">
                  <span className="text-xs font-medium uppercase tracking-widest text-sand-light block mb-1">
                    Editorial Lookbook
                  </span>
                  <h3 className="font-serif text-2xl font-normal text-warm-ivory">
                    {EDITORIAL_VIGNETTES[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-sand/80 mt-1 max-w-md">
                    {EDITORIAL_VIGNETTES[0].caption}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Vignette 2 */}
          <div className="md:col-span-5 space-y-6">
            <div className="relative aspect-4/3 rounded-sm overflow-hidden bg-sand/30 border border-sand/80 shadow-md group">
              <img
                src={EDITORIAL_VIGNETTES[1].image}
                alt={EDITORIAL_VIGNETTES[1].title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent flex items-end p-6">
                <div className="text-warm-ivory">
                  <h3 className="font-serif text-xl font-normal text-warm-ivory">
                    {EDITORIAL_VIGNETTES[1].title}
                  </h3>
                  <p className="text-xs text-sand/80 mt-1">
                    {EDITORIAL_VIGNETTES[1].caption}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-sand/20 border border-sand/70 rounded-sm space-y-3">
              <h4 className="font-serif text-lg text-walnut font-medium">
                Designing for Ethiopian Living Spaces
              </h4>
              <p className="text-xs sm:text-sm text-charcoal/80 leading-relaxed">
                Curated pieces blending natural materials with functional, comfortable living.
              </p>
              <Link
                to="/collections"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors"
              >
                View Full Lookbook →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CLOSING CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-walnut text-warm-ivory rounded-sm p-8 sm:p-14 lg:p-16 border border-walnut-dark relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-terracotta/15 blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-terracotta-light block">
              Start Your Living Project
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-warm-ivory">
              Create a home you truly love returning to.
            </h2>
            <p className="text-sand/80 text-sm sm:text-base leading-relaxed">
              Explore our collection of seating, dining tables, bedroom suites, and artisan accents crafted for everyday luxury.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase bg-terracotta text-white rounded hover:bg-terracotta-dark transition-colors text-center"
              >
                Explore Full Collection
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-semibold tracking-wider uppercase border border-sand/30 text-sand hover:bg-white/10 rounded transition-colors text-center"
              >
                Inquire with Studio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
