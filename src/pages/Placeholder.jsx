import { Link } from "react-router-dom";

export default function Placeholder({ title, subtitle }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-center bg-warm-ivory border border-sand/80 p-8 sm:p-12 rounded-sm shadow-xs">
        <span className="text-xs uppercase tracking-widest font-semibold text-terracotta block mb-3">
          Milestone Preview
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-walnut mb-4">
          {title}
        </h1>
        <p className="text-charcoal-muted text-sm sm:text-base leading-relaxed mb-8">
          {subtitle ||
            "This section of Saba Living is scheduled for implementation in the next milestone of the 30-Website Challenge."}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-walnut text-warm-ivory rounded hover:bg-terracotta transition-colors"
          >
            ← Return to Homepage
          </Link>
          <a
            href="#categories"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 text-xs font-semibold uppercase tracking-wider border border-walnut/30 text-charcoal hover:bg-sand/30 rounded transition-colors"
          >
            Browse Categories
          </a>
        </div>
      </div>
    </div>
  );
}
