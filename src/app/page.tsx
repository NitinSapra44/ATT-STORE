import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { newArrivals } from "@/data/products";

export default function Home() {
  return (
    <>
      <Header showBadge mobileVariant="menu" />

      {/* Hero */}
      <section className="relative flex h-115 w-full flex-col items-start justify-end p-6 md:h-225 md:justify-center md:px-20 md:pt-25 md:pb-20">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/images/mobile-hero-home.png"
            alt=""
            fill
            priority
            className="object-cover md:hidden"
          />
          <Image
            src="/images/hero-home.png"
            alt=""
            fill
            priority
            className="hidden object-cover md:block"
          />
          <div
            className="absolute inset-0 md:hidden"
            style={{
              backgroundImage:
                "linear-gradient(230deg, rgba(10,10,10,0) 45%, rgba(10,10,10,0.8) 75%)",
            }}
          />
          <div className="absolute inset-0 hidden bg-black/35 md:block" />
        </div>

        {/* Mobile hero content */}
        <div className="relative z-10 flex flex-col items-start gap-3 md:hidden">
          <p className="font-display text-xs font-semibold uppercase text-gold">
            Collection 04 / Chronicles
          </p>
          <p className="font-display text-5xl font-light leading-[0.95] text-white">
            Graphic Tees Dropping
          </p>
          <Link href="/collection" className="flex items-center gap-2 py-2">
            <span className="font-display text-[13px] font-bold uppercase text-white">
              Explore Lookbook
            </span>
            <Image src="/icons/arrow-right.png" alt="" width={16} height={16} />
          </Link>
        </div>

        {/* Desktop hero content */}
        <div className="relative z-10 hidden w-full items-end justify-between md:flex">
          <div className="flex w-160 flex-col items-start gap-6 font-display font-semibold">
            <p className="text-xs uppercase text-gold">Drop 004 // Heavyweight Tees</p>
            <p className="text-[64px] leading-[1.05] text-paper">
              PREMIUM GRAPHIC TEES DROPPING NOW
            </p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <Link
              href="/collection"
              className="rounded-sm bg-gold px-8 py-4 font-display text-[13px] font-semibold uppercase text-ink"
            >
              View Collection
            </Link>
            <p className="font-display text-[11px] font-light text-mist">
              HEAVYWEIGHT COTTON • LIMITED PRINTS
            </p>
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="flex w-full flex-col items-start gap-4 bg-paper p-8 text-ink md:items-center md:justify-center md:bg-ink md:px-30 md:py-40 md:text-paper">
        <p className="font-display text-3xl font-light leading-[1.1] md:max-w-250 md:text-center md:text-[44px] md:leading-[1.4]">
          &ldquo;We build tees, not basics. Heavyweight cotton, oversized cuts, and
          limited prints — engineered for the streets, worn forever.&rdquo;
        </p>
        <p className="font-display text-[13px] font-light leading-normal text-ink/70 md:hidden">
          ATT is an ongoing investigation into textile density, weight, and
          volume. Each silhouette is drafted in our Vancouver workshop with an
          emphasis on quiet permanence.
        </p>
      </section>

      {/* New Arrivals */}
      <section className="flex w-full flex-col gap-6 px-6 pb-16 md:gap-16 md:px-20 md:pb-30">
        <div className="flex items-baseline justify-between font-display">
          <p className="text-4xl font-light text-paper md:text-[40px] md:font-semibold">
            New Graphic Tees
          </p>
          <Link
            href="/collection"
            className="text-xs uppercase text-gold md:text-[13px]"
          >
            View All Series
          </Link>
        </div>
        <div className="flex w-full flex-col gap-8 md:flex-row md:gap-10">
          {newArrivals.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <Footer
        description="Premium graphic tees for the streets. Heavyweight cotton, oversized cuts, and limited prints — built for everyday wear."
        navLinks={["New Arrivals", "Heavyweight Fleece", "Outerwear", "Hoodies", "Community"]}
        infoLinks={["Heavyweight Cotton", "Oversized Fit Guide", "Print Archive", "Wash & Wear", "Stockists"]}
      />
    </>
  );
}
