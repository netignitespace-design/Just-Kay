import { Product } from './types';

// Using a stable, high-quality texture image for the logo representative
export const LOGO_URL = "https://foamdecor.co.za/wp-content/uploads/2026/02/FD.png";

export const PRODUCTS: Product[] = [
  // Couches
  {
    id: 'c1',
    name: "The Cloud Modular Sofa",
    category: 'couch',
    price: 44999,
    description: "Experience the feeling of floating on a cloud. This modular sofa features deep seats and plush, down-filled cushions wrapped in premium linen blend fabric. Perfect for modern living spaces seeking both style and supreme comfort.",
    image: "https://images.unsplash.com/photo-1493663284049-e3e270316e2e?q=80&w=800&auto=format&fit=crop",
    dimensions: "108\"W x 40\"D x 32\"H",
    material: "Performance Linen",
    colors: ["Cream", "Charcoal", "Oatmeal"]
  },
  {
    id: 'c2',
    name: "Haven Sectional",
    category: 'couch',
    price: 57999,
    description: "A low-profile masterpiece. The Haven Sectional anchors your room with its solid wood base and structured yet soft form. Designed for conversation and relaxation.",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop",
    dimensions: "120\"W x 60\"D x 30\"H",
    material: "Italian Velvet",
    colors: ["Rust", "Olive", "Sand"]
  },
  {
    id: 'c3',
    name: "Serenity Loveseat",
    category: 'couch',
    price: 32999,
    description: "Compact elegance. The Serenity Loveseat fits perfectly in smaller apartments or cozy reading nooks, offering firm support with a soft touch.",
    image: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?q=80&w=800&auto=format&fit=crop",
    dimensions: "72\"W x 38\"D x 34\"H",
    material: "Bouclé",
    colors: ["White", "Pearl Grey"]
  },
  {
    id: 'c4',
    name: "The Atelier Leather Sofa",
    category: 'couch',
    price: 64999,
    description: "Full-grain Italian leather that ages gracefully. The Atelier features slim arms and a deep sit, combining mid-century aesthetics with modern luxury.",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=800&auto=format&fit=crop",
    dimensions: "96\"W x 38\"D x 32\"H",
    material: "Full-Grain Leather",
    colors: ["Tan", "Espresso", "Black"]
  },
  
  // Cushions
  {
    id: 'p1',
    name: "Waffle Knit Cushion",
    category: 'cushion',
    price: 699,
    description: "Add texture to your space with our chunky waffle knit cushion. Soft, durable, and effortlessly chic.",
    image: "https://images.unsplash.com/photo-1579656381226-5fc7036582d3?q=80&w=800&auto=format&fit=crop",
    material: "100% Cotton",
    colors: ["Terracotta", "Cream", "Sage"]
  },
  {
    id: 'p2',
    name: "Lumbar Velvet Pillow",
    category: 'cushion',
    price: 899,
    description: "Support meets luxury. This elongated lumbar pillow provides lower back support while adding a touch of sophisticated velvet shine.",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=800&auto=format&fit=crop",
    material: "Silk Velvet",
    colors: ["Midnight Blue", "Emerald", "Gold"]
  },
  {
    id: 'p3',
    name: "Nomad Wool Pillow",
    category: 'cushion',
    price: 1299,
    description: "Hand-woven wool pillow featuring geometric patterns inspired by desert landscapes. Each piece is unique.",
    image: "https://images.unsplash.com/photo-1584100936603-9d628876c16f?q=80&w=800&auto=format&fit=crop",
    material: "Wool",
    colors: ["Natural/Black", "Brown/Cream"]
  },
  {
    id: 'p4',
    name: "Linen Throw Pillow",
    category: 'cushion',
    price: 599,
    description: "A staple for any home. Stonewashed linen for that perfectly lived-in look.",
    image: "https://images.unsplash.com/photo-1531835551805-16d864c8d311?q=80&w=800&auto=format&fit=crop",
    material: "French Linen",
    colors: ["White", "Flax", "Slate"]
  },
  {
    id: 'p5',
    name: "Artisan Bolster",
    category: 'cushion',
    price: 1100,
    description: "A structured cylindrical pillow perfect for daybeds or adding dimension to your sofa styling. Upholstered in premium textured weave.",
    image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop",
    material: "Textured Blend",
    colors: ["Beige", "Charcoal"]
  },
  {
    id: 'p6',
    name: "Mongolian Faux Fur",
    category: 'cushion',
    price: 950,
    description: "Ethically sourced faux fur that brings immediate warmth and softness to any cold corner.",
    image: "https://images.unsplash.com/photo-1522758971460-1d21eed7dc1d?q=80&w=800&auto=format&fit=crop",
    material: "Faux Fur",
    colors: ["Ivory", "Dove Grey"]
  },

  // Foam
  {
    id: 'f1',
    name: "Luxor High-Resilience Foam",
    category: 'foam',
    price: 850,
    description: "Professional grade high-resilience foam sheet. Ideal for custom seating projects requiring firm support and longevity. Sold per sheet.",
    image: "https://images.unsplash.com/photo-1631049552240-59c37fcae896?q=80&w=800&auto=format&fit=crop",
    dimensions: "100cm x 200cm x 5cm",
    material: "Polyurethane Foam",
    colors: ["White", "Blue"]
  },
  {
    id: 'f2',
    name: "Cloud Memory Foam Slab",
    category: 'foam',
    price: 1200,
    description: "Viscoelastic memory foam that contours perfectly to the body. Excellent for mattress toppers or adding a plush layer to existing cushions.",
    image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=800&auto=format&fit=crop",
    dimensions: "100cm x 200cm x 4cm",
    material: "Memory Foam",
    colors: ["White"]
  },
  {
    id: 'f3',
    name: "Outdoor Quick-Dry Foam",
    category: 'foam',
    price: 1450,
    description: "Engineered with open pores to allow water to drain through almost instantly. The only choice for patio furniture and poolside lounging.",
    image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop",
    dimensions: "100cm x 200cm x 8cm",
    material: "Reticulated Foam",
    colors: ["Yellow"]
  },

  // Custom Furniture
  {
    id: 'cf1',
    name: "Bespoke Armchair",
    category: 'furniture',
    price: 12500,
    description: "Handcrafted armchair tailored to your specifications. Choose your fabric, wood finish, and dimensions for a truly unique piece.",
    image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=800&auto=format&fit=crop",
    dimensions: "Custom",
    material: "Various Options",
    colors: ["Custom"]
  },
  {
    id: 'cf2',
    name: "Custom Ottoman",
    category: 'furniture',
    price: 4500,
    description: "Versatile and stylish. Our custom ottomans can serve as extra seating, a footrest, or a coffee table alternative.",
    image: "https://images.unsplash.com/photo-1519961655809-34fa156820ff?q=80&w=800&auto=format&fit=crop",
    dimensions: "Custom",
    material: "Various Options",
    colors: ["Custom"]
  },

  // Headboards
  {
    id: 'h1',
    name: "Velvet Fluted Headboard",
    category: 'headboard',
    price: 8900,
    description: "Add a touch of hotel luxury to your bedroom with our deep-fluted velvet headboard. Available in wall-mounted or floor-standing options.",
    image: "https://images.unsplash.com/photo-1505693416388-b0346efee535?q=80&w=800&auto=format&fit=crop",
    dimensions: "Queen / King / Super King",
    material: "Velvet",
    colors: ["Emerald", "Navy", "Blush"]
  },
  {
    id: 'h2',
    name: "Linen Upholstered Headboard",
    category: 'headboard',
    price: 6500,
    description: "Simple, clean lines for a minimalist aesthetic. Upholstered in natural linen for a breathable, organic look.",
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=800&auto=format&fit=crop",
    dimensions: "Double / Queen / King",
    material: "Linen",
    colors: ["Natural", "Grey", "White"]
  },

  // Curtains & Blinds
  {
    id: 'cb1',
    name: "Sheer Linen Curtains",
    category: 'curtains',
    price: 1200,
    description: "Let the light in while maintaining privacy. Our sheer linen curtains drape beautifully and add an airy feel to any room.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    dimensions: "Custom Lengths",
    material: "100% Linen",
    colors: ["White", "Off-White"]
  },
  {
    id: 'cb2',
    name: "Custom Roman Blinds",
    category: 'curtains',
    price: 2800,
    description: "Tailored window treatments that offer a clean, structured look. Available in blackout or light-filtering fabrics.",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=800&auto=format&fit=crop",
    dimensions: "Made to Measure",
    material: "Various Fabrics",
    colors: ["Custom"]
  },

  // Services
  {
    id: 's1',
    name: "Foam Cut-to-Size Service",
    category: 'service',
    price: 0,
    description: "We cut high-density foam to your exact specifications. Perfect for DIY sofa repairs, boat cushions, or custom seating projects. Contact us for a quote.",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=800&auto=format&fit=crop",
    dimensions: "Custom",
    material: "High Density Foam",
    colors: ["N/A"]
  },
  {
    id: 's2',
    name: "Re-upholstery Service",
    category: 'service',
    price: 0,
    description: "Give your beloved furniture a second life. Our master upholsterers can restore antique chairs or modernize your existing sofa with new fabric.",
    image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=800&auto=format&fit=crop",
    dimensions: "N/A",
    material: "Customer's Choice",
    colors: ["Custom"]
  },
  {
    id: 's3',
    name: "Custom Patio Cushions",
    category: 'service',
    price: 0,
    description: "Weather-resistant cushions made to fit your outdoor furniture perfectly. Durable, fade-resistant fabrics available in various patterns.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
    dimensions: "Made to Measure",
    material: "Outdoor Fabric",
    colors: ["Stripes", "Solids"]
  }
];

export const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'Shop', path: '/shop' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];