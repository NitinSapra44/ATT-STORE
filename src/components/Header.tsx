import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Collection", href: "/collection" },
  { label: "Campaigns", href: "#" },
  { label: "Archives", href: "#" },
  { label: "Tees", href: "/collection" },
];

export default function Header({
  showBadge = false,
  mobileVariant = "menu",
}: {
  showBadge?: boolean;
  mobileVariant?: "menu" | "back";
}) {
  return (
    <header className="sticky top-0 z-50 w-full bg-ink">
      {/* Desktop header */}
      <div className="hidden h-[100px] w-full items-center justify-between px-20 md:flex">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <span className="font-display text-[32px] font-black tracking-[-1.28px] text-paper">
            ATT
          </span>
          <span className="font-display text-xs font-medium uppercase tracking-[-0.24px] text-paper">
            Against the Tribe
          </span>
          {showBadge && (
            <span className="rounded-sm bg-gold px-[10px] py-[6px] font-display text-[11px] font-bold uppercase text-ink">
              Streetwear
            </span>
          )}
        </Link>

        <nav className="flex shrink-0 items-center gap-10">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex flex-col items-start gap-1"
            >
              <span
                className={`font-display text-[13px] font-medium uppercase ${
                  item.label === "Collection" ? "text-gold" : "text-paper"
                }`}
              >
                {item.label}
              </span>
              {item.label === "Collection" && (
                <span className="size-1 rounded-sm bg-gold" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-8">
          <button className="font-display text-[13px] font-medium uppercase text-paper">
            Search
          </button>
          <button className="flex items-center gap-2">
            <span className="font-display text-[13px] font-medium uppercase text-paper">
              Bag
            </span>
            <span className="font-display text-xs font-semibold text-gold">
              (0)
            </span>
          </button>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex h-14 w-full items-center justify-between px-4 md:hidden">
        <div className="flex size-8 items-center">
          {mobileVariant === "back" ? (
            <Link href="/collection" className="relative size-6">
              <Image src="/icons/arrow-left.png" alt="Back" fill />
            </Link>
          ) : (
            <button className="relative size-6" aria-label="Menu">
              <Image src="/icons/menu.png" alt="" fill />
            </button>
          )}
        </div>
        <Link href="/" className="font-display text-[28px] font-light text-white">
          ATT
        </Link>
        <div className="flex items-center gap-4">
          <button className="relative size-6" aria-label="Search">
            <Image src="/icons/search.png" alt="" fill />
          </button>
          <button className="relative size-6" aria-label="Shopping bag">
            <Image src="/icons/shopping-bag.png" alt="" fill />
          </button>
        </div>
      </div>
    </header>
  );
}
