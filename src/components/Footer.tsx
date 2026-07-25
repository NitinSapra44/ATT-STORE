const DEFAULT_NAV_LINKS = [
  "New Arrivals",
  "Heavyweight Fleece",
  "Outerwear",
  "Accessories",
  "Lookbooks",
];

const DEFAULT_INFO_LINKS = [
  "Materials Story",
  "Sizing Matrix",
  "Sustainability Pledge",
  "Care Guide",
  "Archives",
];

export default function Footer({
  description = "Elevated uniform structures exploring modern nomadic consciousness. Designed in Tokyo, developed in Portugal, curated globally.",
  navLinks = DEFAULT_NAV_LINKS,
  infoLinks = DEFAULT_INFO_LINKS,
}: {
  description?: string;
  navLinks?: string[];
  infoLinks?: string[];
}) {
  return (
    <footer className="flex w-full flex-col gap-16 px-6 pt-16 pb-10 md:gap-20 md:px-20 md:pt-[120px] md:pb-20">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row md:gap-0">
        <div className="flex max-w-[400px] flex-col items-start gap-6">
          <p className="font-display text-[32px] font-black tracking-[-1.28px] text-paper md:text-[48px] md:tracking-[-1.92px]">
            AGAINST THE TRIBE
          </p>
          <p className="font-display text-sm font-light leading-[1.6] text-mist">
            {description}
          </p>
        </div>

        <div className="flex w-full gap-12 sm:gap-[120px] md:w-auto">
          <div className="flex flex-col items-start gap-5">
            <p className="font-display text-xs font-semibold uppercase text-gold">
              Navigation
            </p>
            {navLinks.map((link) => (
              <p key={link} className="font-display text-sm font-light text-mist">
                {link}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start gap-5">
            <p className="font-display text-xs font-semibold uppercase text-gold">
              Information
            </p>
            {infoLinks.map((link) => (
              <p key={link} className="font-display text-sm font-light text-mist">
                {link}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-3 font-display text-xs font-light md:flex-row md:items-center md:justify-between md:gap-0">
        <p className="text-smoke">© 2026 AGAINST THE TRIBE. ALL RIGHTS RESERVED.</p>
        <div className="flex gap-6 uppercase text-mist">
          <p>Instagram</p>
          <p>Discord</p>
          <p>Journal</p>
        </div>
      </div>
    </footer>
  );
}
