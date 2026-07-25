"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Product } from "@/data/products";

const SIZES = ["S", "M", "L", "XL", "XXL"];

const ACCORDIONS = [
  { title: "Size & Silhouette Guide", value: "Oversized Fit" },
  { title: "Composition & Origin", value: "300gsm Cotton Jersey" },
  { title: "Sustainable Shipping", value: "Plastic-Free" },
];

const STYLE_SHOTS = ["/images/style-shot-1.png", "/images/style-shot-2.png", "/images/style-shot-3.png"];
const COMMUNITY_SHOTS = [
  "/images/community-shot-1.png",
  "/images/community-shot-2.png",
  "/images/community-shot-3.png",
  "/images/community-shot-4.png",
];

export default function ProductDetailClient({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("M");
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  return (
    <>
      <Header mobileVariant="back" />

      <div className="pb-24 md:pb-0">
        {/* Split screen */}
        <div className="flex w-full flex-col items-start md:flex-row">
          {/* Mobile carousel */}
          <div className="relative flex h-105 w-full flex-col items-center justify-end pb-4 md:hidden">
            <Image src="/images/pdp-carousel.png" alt={product.name} fill className="object-cover" />
            <Image
              src="/icons/dots.png"
              alt=""
              width={30}
              height={6}
              className="relative"
            />
          </div>

          {/* Desktop image column */}
          <div className="relative hidden h-240 w-full md:block md:w-1/2">
            <Image src="/images/pdp-images-column.png" alt={product.name} fill className="object-cover" />
          </div>

          {/* Mobile meta */}
          <div className="flex w-full flex-col items-start gap-5 p-6 md:hidden">
            <div className="flex w-full flex-col items-start gap-1.5">
              <p className="font-display text-[11px] font-semibold uppercase text-gold">
                Graphic Tees
              </p>
              <p className="font-display text-4xl font-light leading-[1.05] text-white">
                {product.name}
              </p>
              <p className="font-display text-lg font-semibold text-white">${product.price}</p>
            </div>
            <p className="font-display text-[13px] font-light leading-normal text-mist-dark">
              A premium graphic tee cut from 300gsm cotton jersey. Features an
              oversized fit, ribbed collar, and a bold screen-printed graphic at
              the chest. Designed for everyday wear with a focus on comfort and
              quiet permanence.
            </p>

            <div className="flex w-full flex-col items-start gap-3">
              <p className="font-display text-[11px] font-semibold uppercase text-white">
                Select Size
              </p>
              <div className="flex w-full flex-wrap gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`rounded-sm px-4 py-2.5 font-display text-[11px] font-bold ${
                      selectedSize === size
                        ? "bg-gold text-ink"
                        : "border border-line text-white"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-start pt-3">
              {ACCORDIONS.map((item, i) => (
                <button
                  key={item.title}
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  className="flex w-full flex-col items-start border-b border-line py-4 text-left"
                >
                  <div className="flex w-full items-center justify-between">
                    <p className="font-display text-[13px] font-semibold uppercase text-white">
                      {item.title}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className="font-display text-xs font-light text-mist-dark">
                        {item.value}
                      </p>
                      <Image
                        src="/icons/chevron-down.png"
                        alt=""
                        width={16}
                        height={16}
                        className={openAccordion === i ? "rotate-180" : ""}
                      />
                    </div>
                  </div>
                  {openAccordion === i && (
                    <p className="mt-3 font-display text-xs font-light leading-normal text-mist-dark">
                      300GSM heavyweight cotton jersey. Oversized boxy fit with
                      dropped shoulders and a relaxed body. Graphics are
                      screen-printed with high-density ink for a soft, matte
                      finish that ages well.
                    </p>
                  )}
                </button>
              ))}
            </div>

            <div className="flex w-full flex-col items-start gap-3 pt-4 pb-20">
              <p className="w-full font-display text-2xl font-light text-white">In the Wild</p>
              <p className="font-display text-xs font-light text-mist-dark">
                Tag @againstthetribe to get featured.
              </p>
              <div className="flex w-full gap-3 overflow-x-auto">
                {STYLE_SHOTS.map((src) => (
                  <div key={src} className="relative h-45 w-35 shrink-0 overflow-hidden rounded-sm">
                    <Image src={src} alt="" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop purchase panel */}
          <div className="hidden w-1/2 flex-col items-start gap-12 px-25 pt-40 pb-20 md:flex">
            <div className="flex flex-col items-start gap-4 font-display font-semibold">
              <p className="text-xs uppercase text-gold">Graphic Series // System 004</p>
              <p className="text-[44px] leading-[1.1] text-paper uppercase">{product.name}</p>
              <p className="text-xl text-mist">${product.price} USD</p>
            </div>

            <div className="flex w-full flex-col items-start gap-5">
              <div className="flex w-full items-baseline justify-between font-display text-xs">
                <p className="font-semibold uppercase text-paper">Select Uniform Size</p>
                <p className="cursor-pointer font-medium text-gold underline">Size Guide</p>
              </div>
              <div className="flex flex-wrap items-start gap-3">
                {SIZES.slice(0, 4).map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`flex items-center justify-center rounded-sm border px-5 py-3.5 font-display text-[13px] font-semibold ${
                      selectedSize === size
                        ? "border-gold bg-gold text-ink"
                        : "border-smoke text-paper"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col items-start gap-4">
              <p className="font-display text-xs font-semibold uppercase text-gold">Tee Specs</p>
              <p className="font-display text-[15px] font-light leading-[1.65] text-mist">
                300GSM heavyweight cotton jersey. Oversized boxy fit with dropped
                shoulders and a relaxed body. Graphics are screen-printed with
                high-density ink for a soft, matte finish that ages well.
                Finished with a ribbed collar and clean hem.
              </p>
            </div>

            <div className="flex w-full flex-col items-start gap-4">
              <button className="flex w-full items-center justify-center rounded-sm bg-gold py-4.5 font-display text-sm font-semibold uppercase text-ink">
                Add to Bag
              </button>
              <p className="w-full text-center font-display text-[11px] font-light text-smoke">
                COMPLIMENTARY SHIPPING & ARCHIVAL TOTE PACKAGING INCLUDED.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop community gallery */}
        <div className="hidden w-full flex-col items-start gap-12 px-20 pt-30 pb-20 md:flex">
          <div className="flex flex-col items-start gap-3 font-display">
            <p className="text-4xl font-semibold text-paper">Styled by the Community</p>
            <p className="text-[13px] font-light uppercase text-mist">
              Tag @againstthetribe to be featured
            </p>
          </div>
          <div className="flex w-full gap-6 overflow-hidden">
            {COMMUNITY_SHOTS.map((src) => (
              <div key={src} className="relative h-95 w-full shrink-0 overflow-hidden">
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile sticky action bar */}
      <div className="fixed bottom-0 left-0 z-40 flex w-full flex-col items-start border-t border-line bg-ink md:hidden">
        <div className="flex w-full items-center gap-3 px-4 py-3">
          <button
            aria-label="Save"
            className="flex size-12 shrink-0 items-center justify-center rounded border border-line"
          >
            <Image src="/icons/heart.png" alt="" width={20} height={20} />
          </button>
          <button className="flex h-12 flex-1 items-center justify-center gap-2 rounded bg-gold font-display text-[13px] text-ink">
            <span className="font-bold uppercase">Add to Bag</span>
            <span className="font-light opacity-60">-</span>
            <span className="font-semibold">${product.price}</span>
          </button>
        </div>
      </div>

      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  );
}
