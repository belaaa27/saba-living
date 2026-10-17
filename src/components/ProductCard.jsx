import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="group flex flex-col bg-warm-ivory rounded-sm border border-sand/70 overflow-hidden hover:border-walnut/40 transition-all duration-300 hover:shadow-md">
      {/* Product Image Area */}
      <div className="relative aspect-4/5 w-full overflow-hidden bg-sand/30">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-700 ease-out"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-sand/20 text-walnut/70">
            <svg
              className="w-12 h-12 mb-2 text-terracotta/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.25}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="font-serif text-sm font-medium">{product.name}</span>
            <span className="text-xs text-charcoal-muted mt-1">Interior piece preview</span>
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider bg-warm-ivory/90 backdrop-blur-xs text-walnut rounded border border-sand/80 shadow-2xs">
              {product.badge}
            </span>
          </div>
        )}
      </div>

      {/* Product Meta */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-terracotta block mb-1">
            {product.categoryLabel}
          </span>
          <h3 className="font-serif text-lg font-semibold text-charcoal group-hover:text-walnut transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-charcoal-muted mt-1.5 line-clamp-2 leading-relaxed">
            {product.materials}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-sand/50 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-charcoal-muted block">
              Sample Price
            </span>
            <span className="text-base font-bold text-walnut">
              {product.priceFormatted}
            </span>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-terracotta hover:text-terracotta-dark transition-colors"
          >
            Details
            <svg
              className="w-3.5 h-3.5 ml-1 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
