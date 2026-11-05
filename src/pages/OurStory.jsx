import { Link } from "react-router-dom";

// High-resolution photographic interior from Saba Living's curated editorial vignette ("Quiet Geometry")
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80";

// Supporting furniture & interior photograph from Saba Living's curated editorial vignette ("Tactile Living")
const PHILOSOPHY_IMAGE_URL =
  "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1200&q=80";

const DESIGN_VALUES = [
  {
    number: "01",
    title: "Honest Materials",
    description:
      "We celebrate the intrinsic beauty of solid timbers, textured bouclé, raw linens, and earth-born ceramics that age with grace and tactile character.",
  },
  {
    number: "02",
    title: "Calibrated Proportions",
    description:
      "Every piece is balanced for human comfort and everyday utility — generous seat depths, ergonomic joins, and silhouettes that lend visual lightness.",
  },
  {
    number: "03",
    title: "Timeless Simplicity",
    description:
      "Clean architectural lines unencumbered by fleeting trends, creating enduring harmony across evolving interior settings.",
  },
];

export default function OurStory() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-walnut-dark py-16 sm:py-20 lg:py-24 border-b border-sand/40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE_URL}
            alt="Minimalist living room with natural daylight and warm wooden furnishings"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Translucent dark walnut / charcoal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-walnut-dark/75 to-charcoal/85" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest text-sand-light font-semibold px-3.5 py-1 rounded-full bg-warm-ivory/15 border border-warm-ivory/25 backdrop-blur-xs">
            Studio Ethos
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-warm-ivory tracking-tight drop-shadow-xs">
            Our Story
          </h1>
          <p className="text-sm sm:text-base text-sand-light/90 leading-relaxed max-w-xl mx-auto font-normal drop-shadow-xs">
            Creating living environments rooted in calm aesthetics, honest
            natural materials, and enduring everyday comfort.
          </p>
        </div>
      </section>

      {/* 2. Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Philosophy Statement & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-semibold tracking-widest text-terracotta uppercase block">
                Our Philosophy
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-walnut leading-snug tracking-tight">
                Furniture designed around stillness, tactile warmth, and daily
                harmony.
              </h2>
              <div className="w-12 h-0.5 bg-terracotta/60 mt-3 rounded-full" />
            </div>

            <div className="space-y-4 text-charcoal-muted text-sm sm:text-base leading-relaxed">
              <p>
                At Saba Living, we believe a home should feel calm, welcoming,
                and timeless. We create furniture that brings together natural
                textures, thoughtful craftsmanship, and enduring forms to make
                everyday living more comfortable and meaningful.
              </p>
            </div>
          </div>

          {/* Supporting Photograph */}
          <div className="lg:col-span-6">
            <div className="relative aspect-4/3 sm:aspect-16/10 lg:aspect-4/3 rounded-sm overflow-hidden bg-sand/30 border border-sand/80 shadow-md">
              <img
                src={PHILOSOPHY_IMAGE_URL}
                alt="Tactile living room interior with natural wooden finishes and soft linen"
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Design Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-sand/70 pt-14 sm:pt-16">
          {/* Section Header */}
          <div className="flex flex-col max-w-2xl mb-12 text-center items-center mx-auto">
            <span className="text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
              Design Values
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-walnut tracking-tight">
              Principles That Guide Our Work
            </h2>
            <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-lg">
              A considered approach to craftsmanship, material integrity, and
              spatial balance.
            </p>
            <div className="w-10 h-0.5 bg-terracotta/60 mt-3 rounded-full" />
          </div>

          {/* 3 Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {DESIGN_VALUES.map((value) => (
              <div
                key={value.number}
                className="bg-warm-ivory p-6 sm:p-8 rounded-sm border border-sand/80 space-y-3 flex flex-col justify-between hover:border-walnut/40 transition-colors"
              >
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-terracotta block">
                    {value.number} • Value
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-charcoal">
                    {value.title}
                  </h3>
                  <p className="text-sm text-charcoal-muted leading-relaxed pt-1">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Closing CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-walnut text-warm-ivory rounded-sm p-8 sm:p-12 md:p-14 text-center max-w-3xl mx-auto border border-walnut-dark shadow-md space-y-5">
          <span className="text-xs font-semibold tracking-widest text-terracotta-light uppercase">
            Curated Spaces
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-warm-ivory">
            Explore Our Collections
          </h2>
          <p className="text-sm sm:text-base text-sand-light/85 leading-relaxed max-w-xl mx-auto">
            Discover room edits and signature pieces designed to bring balance,
            comfort, and tactile beauty to every corner of your home.
          </p>
          <div className="pt-2">
            <Link
              to="/collections"
              className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded bg-terracotta text-warm-ivory hover:bg-terracotta-dark transition-colors shadow-xs gap-2"
            >
              <span>View Collections</span>
              <svg
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
