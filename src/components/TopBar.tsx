import { Clock, MapPin, Phone, Star } from "lucide-react";

import { site } from "@/data/site";
import { useOpenStatus } from "@/lib/opening-hours";
import { cn } from "@/lib/utils";

export function TopBar() {
  const status = useOpenStatus();

  return (
    <div className="w-full border-b border-ink-foreground/10 bg-[oklch(0.16_0.008_262)] text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-1 px-5 py-2 text-[0.72rem] sm:px-8">
        <span className="flex min-w-0 items-center gap-2 font-semibold">
          <span
            className={cn(
              "h-2 w-2 shrink-0 rounded-full",
              status.open ? "bg-[oklch(0.72_0.17_150)]" : "bg-[oklch(0.65_0.2_25)]",
            )}
          />
          <span className="truncate">{status.label}</span>
        </span>

        <span className="hidden items-center gap-2 text-ink-foreground/70 sm:flex">
          <Clock className="h-3.5 w-3.5 text-primary" />
          Ma - Vr: 08:00 - 17:30, Za: 09:00 - 14:00
        </span>
        <span className="hidden items-center gap-2 text-ink-foreground/70 sm:flex">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {site.adres.straat}, {site.adres.plaats}
        </span>

        <a
          href={site.googleReviewsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-opacity hover:opacity-80"
        >
          <span className="flex items-center gap-0.5 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-current" />
            ))}
          </span>
          <span className="hidden text-ink-foreground/70 sm:inline">Google Reviews</span>
        </a>

        <a
          href={site.telefoonHref}
          className="hidden items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary/80 sm:flex"
        >
          <Phone className="h-3.5 w-3.5" />
          {site.telefoon}
        </a>
      </div>
    </div>
  );
}
