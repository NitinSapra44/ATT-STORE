import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  const height = product.desktopHeight ?? 540;

  return (
    <Link href={`/product/${product.slug}`} className="flex w-full flex-col gap-5">
      <div
        className="relative aspect-4/5 w-full overflow-hidden rounded-sm md:aspect-auto md:rounded-none"
        style={{ "--desktop-h": `${height}px` } as React.CSSProperties}
      >
        <div className="absolute inset-0 md:relative md:h-(--desktop-h)">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 md:gap-1.5">
        <div className="flex items-baseline justify-between gap-2">
          <p className="truncate font-display text-[13px] font-semibold text-paper md:text-[22px] md:font-medium">
            {product.name}
          </p>
          <p className="shrink-0 font-display text-xs font-semibold text-gold md:text-sm">
            ${product.price} <span className="hidden md:inline">USD</span>
          </p>
        </div>
        <p className="font-display text-[11px] font-light uppercase text-mist md:text-xs">
          {product.style}
        </p>
      </div>
    </Link>
  );
}
