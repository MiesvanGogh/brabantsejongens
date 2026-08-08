import { Clock, MapPin, Phone, Star } from "lucide-react";

import { site } from "@/data/site";

export function TopBar() {
  return (
    <div className="w-full border-b border-ink-foreground/10 bg-[oklch(0.16_0.008_262)] text-ink-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-6 gap-y-2 px-5 py-2 text-[0.72rem] sm:px-8">
        <span className="flex items-center gap-2 font-semibold">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.72_0.17_150)]" />
          Nu geopend
        </span>
        <span className="hidden text-ink-foreground/25 sm:inline">|</span>
        <span className="flex items-center gap-2 text-ink-foreground/70">
          <Clock className="h-3.5 w-3.5 text-primary" />
          Ma - Vr: 08:00 - 17:30 | Za: 09:00 - 14:00
        </span>
        <span className="flex items-center gap-2 text-ink-foreground/70">
          <MapPin className="h-3.5 w-3.5 text-primary" />
          {site.adres.straat}, {site.adres.plaats}
        </span>

        <div className="ml-auto flex items-center gap-4">
          <span className="hidden items-center gap-1.5 rounded-sm border border-primary/50 px-2.5 py-1 text-primary sm:flex">
            <Star className="h-3.5 w-3.5 fill-primary" />
            <em className="font-semibold not-italic">4.9 op Google Reviews</em>
          </span>
          <a
            href={site.telefoonHref}
            className="flex items-center gap-1.5 font-semibold text-primary transition-colors hover:text-primary/80"
          >
            <Phone className="h-3.5 w-3.5" />
            {site.telefoon}
          </a>
        </div>
      </div>
    </div>
  );
}
