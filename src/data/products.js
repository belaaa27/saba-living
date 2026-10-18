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
    description:
      "Deep, comfortable seating and sculptural timber tables designed for gatherings and quiet evenings.",
    image:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=living-room",
  },
  {
    id: "bedroom",
    name: "Bedroom",
    subtitle: "Beds, Nightstands & Dressers",
    description:
      "Serene silhouettes and tactile linen finishes crafted to bring peaceful stillness to your resting space.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=bedroom",
  },
  {
    id: "dining",
    name: "Dining",
    subtitle: "Solid Tables, Chairs & Benches",
    description:
      "Honest solid-wood dining tables and contoured seating built around the warmth of shared meals.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=dining",
  },
  {
    id: "home-decor",
    name: "Home Décor",
    subtitle: "Ceramics, Lighting & Textiles",
    description:
      "Thoughtful accents, hand-shaped clay vessels, and organic woven throws to complete the room.",
    image:
      "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=800&q=80",
    link: "/shop?category=home-decor",
  },
];

/**
 * 4 signature showcase pieces displayed on the Homepage
 */
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
    description:
      "A low-slung, ergonomic lounge chair with sculpted walnut joinery and resilient textured upholstery.",
    badge: "Signature Piece",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&w=800&q=80",
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
    description:
      "Substantial 8-seater dining table with soft beveled edges and monolithic pedestal legs.",
    badge: "Crafted to Order",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80",
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
    description:
      "Generously proportioned modular sofa unit designed for flexible living room arrangements.",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
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
    description:
      "Sculptural tabletop vase with tactile ribbed detailing, suitable for dry botanicals or standalone display.",
    badge: "Artisan Accent",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=800&q=80",
  },
];

/**
 * Complete 12-piece catalog for the Shop page (exactly 3 per category)
 */
export const ALL_PRODUCTS = [
  // --- LIVING ROOM (3 pieces) ---
  FEATURED_PRODUCTS[0], // kefa-lounge-chair
  FEATURED_PRODUCTS[2], // sololo-modular-sofa
  {
    id: "goba-coffee-table",
    name: "Goba Low Coffee Table",
    category: "living-room",
    categoryLabel: "Living Room",
    price: 28500,
    priceFormatted: "28,500 ETB",
    materials: "Solid White Oak with Clear Wax Finish",
    dimensions: "120cm L × 65cm W × 38cm H",
    description:
      "A low-profile solid oak table with rounded organic corners and cylindrical legs.",
    badge: "Crafted to Order",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=800&q=80",
  },

  // --- BEDROOM (3 pieces) ---
  {
    id: "bale-platform-bed",
    name: "Bale Platform Bedframe",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 68000,
    priceFormatted: "68,000 ETB",
    materials: "Solid Walnut & Natural Flax Linen Headboard",
    dimensions: "210cm L × 190cm W × 92cm H",
    description:
      "Low platform bedframe with integrated slatted base and soft padded linen headrest.",
    badge: "Signature Piece",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "awash-bedside-table",
    name: "Awash Bedside Nightstand",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 16500,
    priceFormatted: "16,500 ETB",
    materials: "American Walnut with Soft-Close Drawer",
    dimensions: "50cm W × 42cm D × 48cm H",
    description:
      "Clean-lined bedside table featuring a concealed drawer and lower open shelf.",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1532372576444-dda954194ad0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "zway-linen-dresser",
    name: "Zway Six-Drawer Dresser",
    category: "bedroom",
    categoryLabel: "Bedroom",
    price: 56000,
    priceFormatted: "56,000 ETB",
    materials: "Smoked Oak & Hand-Turned Brass Pulls",
    dimensions: "145cm W × 48cm D × 84cm H",
    description:
      "Spacious six-drawer chest crafted with dovetailed joinery and quiet soft-closing runners.",
    badge: "Crafted to Order",
    image:
      "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
  },

  // --- DINING (3 pieces) ---
  FEATURED_PRODUCTS[1], // arba-dining-table
  {
    id: "langano-dining-chair",
    name: "Langano Cane Dining Chair",
    category: "dining",
    categoryLabel: "Dining",
    price: 19500,
    priceFormatted: "19,500 ETB",
    materials: "Solid Ash Wood & Woven Natural Rattan Cane",
    dimensions: "52cm W × 54cm D × 80cm H",
    description:
      "Airy dining chair combining sculpted ash framing with durable hand-woven cane.",
    badge: "Best Seller",
    image:
      "https://images.pexels.com/photos/14332439/pexels-photo-14332439.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "tana-timber-bench",
    name: "Tana Solid Dining Bench",
    category: "dining",
    categoryLabel: "Dining",
    price: 29000,
    priceFormatted: "29,000 ETB",
    materials: "Solid Smoked Oak with Rounded Edges",
    dimensions: "160cm L × 38cm W × 46cm H",
    description:
      "Sturdy companion bench designed to slide neatly beneath our Arba Dining Table.",
    badge: "Crafted to Order",
    image:
      "https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&w=800&q=80",
  },

  // --- HOME DÉCOR (3 pieces) ---
  FEATURED_PRODUCTS[3], // entoto-terracotta-vessel
  {
    id: "wondo-ambient-lamp",
    name: "Wondo Ceramic Table Lamp",
    category: "home-decor",
    categoryLabel: "Home Décor",
    price: 12500,
    priceFormatted: "12,500 ETB",
    materials: "Stoneware Clay Base & Natural Linen Shade",
    dimensions: "32cm Dia × 52cm H",
    description:
      "Warm diffused accent lamp with a textured ceramic base and organic linen drum shade.",
    badge: "Artisan Accent",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "simien-wool-throw",
    name: "Simien Handwoven Wool Blanket",
    category: "home-decor",
    categoryLabel: "Home Décor",
    price: 9800,
    priceFormatted: "9,800 ETB",
    materials: "100% Unbleached Highland Wool",
    dimensions: "180cm L × 140cm W",
    description:
      "Heavyweight, tactile wool throw with natural twisted fringe and earthy neutral tones.",
    badge: "New Arrival",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80",
  },
];

export const EDITORIAL_VIGNETTES = [
  {
    id: "vignette-1",
    title: "Quiet Geometry",
    caption:
      "Low profiles and warm light carve out tranquil nooks for slow mornings.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    aspect: "tall",
  },
  {
    id: "vignette-2",
    title: "Tactile Living",
    caption:
      "Unvarnished timber, raw linen, and brushed metal age with warmth and grace.",
    image:
      "https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&w=800&q=80",
    aspect: "wide",
  },
];
