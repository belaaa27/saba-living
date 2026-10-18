import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CATEGORIES, ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState("");

  const filterTabs = useMemo(() => {
    return [
      { id: "all", name: "All Pieces" },
      ...CATEGORIES.map((c) => ({ id: c.id, name: c.name })),
    ];
  }, []);

  const handleCategorySelect = (categoryId) => {
    const nextParams = new URLSearchParams(searchParams);
    if (categoryId === "all") {
      nextParams.delete("category");
    } else {
      nextParams.set("category", categoryId);
    }
    setSearchParams(nextParams);
  };

  const handleClearFilters = () => {
    setSearchQuery("");
    setSearchParams({});
  };

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.category.toLowerCase().includes(q) ||
        product.categoryLabel.toLowerCase().includes(q) ||
        product.materials.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
      {/* 1. COMPACT PAGE HEADER */}
      <div className="border-b border-sand/70 pb-8">
        <span className="text-xs font-semibold uppercase tracking-widest text-terracotta block mb-2">
          Curated Catalog
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl text-walnut font-normal">
          Furniture & Home Décor
        </h1>
        <p className="text-charcoal/80 text-sm sm:text-base mt-2 max-w-xl">
          Timeless pieces crafted with solid timbers, tactile upholstery, and enduring proportions.
        </p>
      </div>

      {/* 2. SEARCH & CATEGORY FILTERS TOOLBAR */}
      <div className="space-y-4">
        {/* Search Field */}
        <div className="relative max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-charcoal-muted">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by name, material, or category..."
            className="w-full pl-10 pr-10 py-2.5 bg-warm-ivory border border-sand/80 rounded-sm text-sm text-charcoal placeholder-charcoal-muted/70 focus:outline-none focus:border-walnut focus:ring-1 focus:ring-walnut transition-colors"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-charcoal-muted hover:text-walnut"
              aria-label="Clear search query"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Pills & Count */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {filterTabs.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => handleCategorySelect(tab.id)}
                  className={`px-4 py-2 rounded-sm text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? "bg-walnut text-warm-ivory shadow-xs"
                      : "bg-sand/40 text-charcoal hover:bg-sand/70 border border-sand/70"
                  }`}
                >
                  {tab.name}
                </button>
              );
            })}
          </div>

          <div className="text-xs text-charcoal-muted">
            {filteredProducts.length === 1
              ? "1 piece available"
              : `${filteredProducts.length} pieces available`}
          </div>
        </div>
      </div>

      {/* 3. PRODUCT GRID OR EMPTY STATE */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pt-2">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        /* 4. EMPTY STATE */
        <div className="text-center py-16 px-4 bg-sand/20 rounded-sm border border-sand/70 space-y-4">
          <div className="w-12 h-12 mx-auto rounded-full bg-sand/50 flex items-center justify-center text-terracotta">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
          </div>
          <div className="space-y-1">
            <h3 className="font-serif text-lg font-medium text-walnut">
              No matching pieces found
            </h3>
            <p className="text-xs text-charcoal-muted max-w-sm mx-auto">
              No pieces match your current filter or search criteria.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={handleClearFilters}
              className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-walnut text-warm-ivory rounded hover:bg-terracotta transition-colors shadow-2xs"
            >
              Reset Filters
            </button>
          </div>
        </div>
      )}

      {/* 5. SAMPLE CATALOG DISCLOSURE */}
      <div className="pt-6">
        <div className="p-4 bg-sand/30 border border-sand rounded-sm text-center text-xs text-charcoal-muted">
          <p>
            <strong className="text-walnut">Sample Catalog Notice:</strong> Products and ETB prices shown are realistic demonstration examples created for Saba Living (Project 03).
          </p>
        </div>
      </div>
    </div>
  );
}

