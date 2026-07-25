export type Product = {
  slug: string;
  name: string;
  price: number;
  style: string;
  image: string;
  desktopHeight?: number;
};

export const newArrivals: Product[] = [
  {
    slug: "fractured-logo-heavy-tee",
    name: "Fractured Logo Heavy Tee",
    price: 65,
    style: "Style 04-T1 // Black",
    image: "/images/home-product-1.png",
  },
  {
    slug: "rebellion-graphic-oversized",
    name: "Rebellion Graphic Oversized",
    price: 68,
    style: "Style 04-T2 // Bone",
    image: "/images/home-product-2.png",
  },
  {
    slug: "midnight-static-print-tee",
    name: "Midnight Static Print Tee",
    price: 72,
    style: "Style 04-T3 // Midnight",
    image: "/images/home-product-3.png",
  },
];

export const collectionProducts: Product[] = [
  {
    slug: "abstract-shape-tee",
    name: "Signal Disruption Tee — Abstract",
    price: 65,
    style: "Style 04-T1 // Heavyweight 300gsm",
    image: "/images/collection-product-1.png",
    desktopHeight: 600,
  },
  {
    slug: "distressed-logo-tee",
    name: "Signal Disruption Tee — Distressed",
    price: 65,
    style: "Style 04-T2 // Heavyweight 300gsm",
    image: "/images/collection-product-2.png",
    desktopHeight: 480,
  },
  {
    slug: "geometric-pattern-tee",
    name: "Signal Disruption Tee — Typographic",
    price: 65,
    style: "Style 04-T3 // Heavyweight 300gsm",
    image: "/images/collection-product-3.png",
    desktopHeight: 560,
  },
  {
    slug: "oversized-typography-tee",
    name: "Signal Disruption Tee — Abstract",
    price: 65,
    style: "Style 04-T4 // Heavyweight 300gsm",
    image: "/images/collection-product-4.png",
    desktopHeight: 480,
  },
  {
    slug: "signal-disruption-tee",
    name: "Signal Disruption Tee — Typographic",
    price: 65,
    style: "Style 04-T5 // Heavyweight 300gsm",
    image: "/images/collection-product-5.png",
    desktopHeight: 600,
  },
  {
    slug: "tribe-logo-tee",
    name: "Signal Disruption Tee — Distressed",
    price: 65,
    style: "Style 04-T6 // Heavyweight 300gsm",
    image: "/images/collection-product-6.png",
    desktopHeight: 520,
  },
];

export const allProducts: Product[] = [...newArrivals, ...collectionProducts];

export function getProductBySlug(slug: string): Product | undefined {
  return allProducts.find((p) => p.slug === slug);
}
