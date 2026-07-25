import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { collectionProducts } from "@/data/products";

const CATEGORIES = ["Graphic Tees", "Oversized", "Distressed", "Typographic", "Abstract"];
const MOBILE_FILTERS = ["All Apparel", "Outerwear", "Knits"];

export default function CollectionPage() {
  return (
    <>
      <Header mobileVariant="menu" />

      {/* Lookbook header */}
      <section className="relative flex h-55 w-full flex-col items-start justify-end p-5 md:h-120 md:justify-end md:px-20 md:pb-16">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/mobile-collection-header.png"
            alt=""
            fill
            priority
            className="object-cover md:hidden"
          />
          <Image
            src="/images/collection-lookbook-header.png"
            alt=""
            fill
            priority
            className="hidden object-cover md:block"
          />
          <div className="absolute inset-0 bg-ink/40 md:bg-black/25" />
        </div>

        {/* Mobile */}
        <div className="relative z-10 flex w-full flex-col items-start gap-1 font-display md:hidden">
          <p className="w-full text-4xl leading-none font-light text-white">
            Signal Disruption Tees
          </p>
          <p className="w-full text-xs uppercase text-gold">Drop 01 / Graphic Tees</p>
        </div>

        {/* Desktop */}
        <div className="relative z-10 hidden w-150 flex-col items-start gap-4 font-display font-semibold md:flex">
          <p className="text-xs uppercase text-gold">Drop 004: Signal Disruption Tees</p>
          <p className="text-[56px] text-paper">Premium Graphic Tee Capsule</p>
        </div>
      </section>

      {/* Filter bar - mobile */}
      <div className="flex w-full items-center justify-between border-b border-line px-4 py-3.5 font-display md:hidden">
        <div className="flex items-center gap-4 text-xs uppercase">
          {MOBILE_FILTERS.map((filter, i) => (
            <p
              key={filter}
              className={i === 0 ? "font-bold text-white" : "font-medium text-mist-dark"}
            >
              {filter}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-1.5">
          <Image src="/icons/sliders-vertical.png" alt="" width={16} height={16} />
          <p className="font-semibold text-xs uppercase text-white">Sort & Filter</p>
        </div>
      </div>

      {/* Filter bar - desktop */}
      <div className="hidden w-full items-center justify-between px-20 py-10 font-display text-[13px] uppercase md:flex">
        <div className="flex gap-8 font-semibold">
          {CATEGORIES.map((cat, i) => (
            <p key={cat} className={i === 0 ? "text-gold" : "text-mist"}>
              {cat}
            </p>
          ))}
        </div>
        <div className="flex items-center gap-6">
          <p className="font-light text-mist">SORT BY:</p>
          <p className="font-semibold text-paper">Drop 004 Featured</p>
        </div>
      </div>

      {/* Product grid */}
      <section className="grid w-full grid-cols-2 gap-x-3 gap-y-4 px-3 py-4 md:grid-cols-3 md:gap-x-10 md:gap-y-16 md:px-20 md:py-0 md:pb-30">
        {collectionProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </section>

      <Footer description="A limited-run graphic tee capsule. Each design is printed on heavyweight 300gsm cotton in an oversized silhouette. Limited to 50 pieces per style." />
    </>
  );
}
