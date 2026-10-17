/**
 * Saba Living — Sample Product & Category Data
 * 
 * Note: These are curated sample catalog pieces for demonstration purposes.
 * Prices are in Ethiopian Birr (ETB).
 */

export const CATEGORIES = [
  {
    id: "living-room",
    name: "Living Room",
    subtitle: "Lounge Seating, Tables & Credenzas",
    description: "Deep, comfortable seating and sculptural timber tables designed for gatherings and quiet evenings.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=living-room",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    subtitle: "Beds, Nightstands & Dressers",
    description: "Serene silhouettes and tactile linen finishes crafted to bring peaceful stillness to your resting space.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=bedroom",
  },
  {
    id: "dining",
    name: "Dining",
    subtitle: "Solid Tables, Chairs & Benches",
    description: "Honest solid-wood dining tables and contoured seating built around the warmth of shared meals.",
    image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=dining",
  },
  {
    id: "home-decor",
    name: "Home Décor",
    subtitle: "Ceramics, Lighting & Textiles",
    description: "Thoughtful accents, hand-shaped clay vessels, and organic woven throws to complete the room.",
    image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=home-decor",
  },
];

export const FEATURED_PRODUCTS = [
  {
    id: "kefa-lounge-chair",
    name: "Kefa Low Lounge Chair",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 38500,
    priceFormatted: "38,500 ETB",
    materials: "Solid American Walnut & Organic Oat Bouclé",
    dimensions: "82cm W × 78cm D × 74cm H",
    description: "A low-slung, ergonomic lounge chair with sculpted walnut joinery and resilient textured upholstery.",
    badge: "Signature Piece",
    image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "arba-dining-table",
    name: "Arba Solid Timber Table",
    category: "dining",
    categoryLabel: "Dining",
    price: 74000,
    priceFormatted: "74,000 ETB",
    materials: "Smoked Oak with Natural Matte Finish",
    dimensions: "220cm L × 95cm W × 75cm H",
    description: "Substantial 8-seater dining table with soft beveled edges and monolithic pedestal legs.",
    badge: "Crafted to Order",
    image: "https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sololo-modular-sofa",
    name: "Sololo Linen Sectional Element",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 92000,
    priceFormatted: "92,000 ETB",
    materials: "Belgian Washed Linen & High-Density Down Core",
    dimensions: "105cm W × 105cm D × 68cm H",
    description: "Generously proportioned modular sofa unit designed for flexible living room arrangements.",
    badge: "New Arrival",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "entoto-terracotta-vessel",
    name: "Entoto Fluted Ceramic Vessel",
    category: "home-decor",
    categoryLabel: "Home Décor",
    price: 8400,
    priceFormatted: "8,400 ETB",
    materials: "Wheel-Thrown Terracotta & Raw Matte Glaze",
    dimensions: "28cm Dia × 42cm H",
    description: "Sculptural tabletop vase with tactile ribbed detailing, suitable for dry botanicals or standalone display.",
    badge: "Artisan Accent",
    image: "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
  },
];

export const EDITORIAL_VIGNETTES = [
  {
    id: "vignette-1",
    title: "Quiet Geometry",
    caption: "Low profiles and warm light carve out tranquil nooks for slow mornings.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    aspect: "tall",
  },
  {
    id: "vignette-2",
    title: "Tactile Living",
    caption: "Unvarnished timber, raw linen, and brushed metal age with warmth and grace.",
    image: "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
    aspect: "wide",
  },
];

