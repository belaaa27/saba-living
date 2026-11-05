import { useState } from "react";
import { Link } from "react-router-dom";
import { CATEGORIES } from "../data/products";

// High-resolution wide photographic interior from Saba Living's curated editorial vignette ("Tactile Living")
const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=1920&q=80";

function CategoryCard({ category }) {
  const [imageError, setImageError] = useState(false);
  const targetLink = category.link || `/shop?category=${category.id}`;

  return (
    <article className="group bg-warm-ivory rounded-sm border border-sand/80 overflow-hidden hover:border-walnut/40 transition-all duration-300 hover:shadow-md flex flex-col justify-between">
      {/* Category Image */}
      <Link
        to={targetLink}
        className="block relative aspect-16/10 overflow-hidden bg-sand/30"
        tabIndex={-1}
        aria-hidden="true"
      >
        {!imageError ? (
          <img
            src={category.image}
            alt={category.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-sand/20 text-walnut/70">
            <svg
              className="w-12 h-12 mb-2 text-terracotta/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-serif text-sm font-medium">{category.name}</span>
            <span className="text-xs text-charcoal-muted mt-1">Room preview</span>
          </div>
        )}
      </Link>

      {/* Category Content */}
      <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <span className="text-xs uppercase font-semibold text-terracotta tracking-widest block">
            {category.subtitle || "Collection"}
          </span>
          <h2 className="font-serif text-xl sm:text-2xl font-normal text-charcoal group-hover:text-walnut transition-colors">
            <Link
              to={targetLink}
              className="hover:underline focus:outline-none"
            >
              {category.name}
            </Link>
          </h2>
          <p className="text-sm text-charcoal-muted leading-relaxed font-normal pt-1">
            {category.description}
          </p>
        </div>

        {/* Explore Link */}
        <div className="pt-4 border-t border-sand/60">
          <Link
            to={targetLink}
            className="inline-flex items-center text-xs sm:text-sm font-semibold uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors gap-2"
          >
            <span>Explore {category.name}</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform"
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
    </article>
  );
}

export default function Collections() {
  return (
    <div className="space-y-16 sm:space-y-20 pb-20">
      {/* Hero Header with Photographic Background */}
      <section className="relative overflow-hidden bg-walnut-dark py-16 sm:py-20 lg:py-24 border-b border-sand/40">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE_URL}
            alt="Warm, minimalist furniture interior"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          {/* Subtle dark walnut / charcoal translucent gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-walnut-dark/75 to-charcoal/85" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-block text-xs uppercase tracking-widest text-sand-light font-semibold px-3.5 py-1 rounded-full bg-warm-ivory/15 border border-warm-ivory/25 backdrop-blur-xs">
            Design Stories
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-warm-ivory tracking-tight drop-shadow-xs">
            Curated Collections
          </h1>
          <p className="text-sm sm:text-base text-sand-light/90 leading-relaxed max-w-xl mx-auto font-normal drop-shadow-xs">
            Explore curated room edits and design categories crafted to bring
            harmony, warmth, and timeless functional design into your living
            spaces.
          </p>
        </div>
      </section>

      {/* Curated Living Categories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col max-w-2xl mb-10 sm:mb-12 text-center items-center mx-auto">
          <span className="text-xs font-semibold tracking-widest text-terracotta uppercase mb-2">
            Explore By Room
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-walnut tracking-tight">
            Curated Living Categories
          </h2>
          <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed max-w-lg">
            Discover pieces grouped by function and aesthetic for effortless
            interior curation.
          </p>
          <div className="w-10 h-0.5 bg-terracotta/60 mt-3 rounded-full" />
        </div>

        {/* 2x2 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {CATEGORIES.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Catalog CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-walnut text-warm-ivory rounded-sm p-8 sm:p-12 md:p-14 text-center max-w-3xl mx-auto border border-walnut-dark shadow-md space-y-5">
          <span className="text-xs font-semibold tracking-widest text-terracotta-light uppercase">
            Full Catalog
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-warm-ivory">
            Looking for a specific piece?
          </h2>
          <p className="text-sm sm:text-base text-sand-light/85 leading-relaxed max-w-xl mx-auto">
            Browse our entire collection across all room categories with full
            filter and search capabilities.
          </p>
          <div className="pt-2">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-7 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded bg-terracotta text-warm-ivory hover:bg-terracotta-dark transition-colors shadow-xs"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
