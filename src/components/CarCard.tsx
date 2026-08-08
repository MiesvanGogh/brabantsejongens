import { ArrowRight, Calendar, Fuel, Gauge, Settings2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { formatKm, formatPrijs, type Car } from "@/data/cars";
import { site } from "@/data/site";

export function CarCard({ car }: { car: Car }) {
  const specs = [
    { icon: Calendar, label: String(car.bouwjaar) },
    { icon: Gauge, label: formatKm(car.kilometerstand) },
    { icon: Fuel, label: car.brandstof },
    { icon: Settings2, label: car.transmissie },
  ];

  return (
    <article className="card-lift group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:border-primary/40">
      <div className="relative overflow-hidden bg-secondary">
        <img
          src={car.afbeelding}
          alt={`${car.merk} ${car.model}`}
          loading="lazy"
          width={1200}
          height={800}
          className="aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-md bg-primary px-3 py-1 font-display text-sm font-bold uppercase tracking-wide text-primary-foreground">
          {formatPrijs(car.prijs)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {car.merk}
        </p>
        <h3 className="mt-1 text-xl leading-tight">{car.model}</h3>

        <ul className="mt-5 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
          {specs.map((spec) => (
            <li key={spec.label} className="flex min-w-0 items-center gap-2">
              <spec.icon className="h-4 w-4 shrink-0 text-primary" />
              <span className="truncate">{spec.label}</span>
            </li>
          ))}
        </ul>

        {car.highlights && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {car.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
              >
                {h}
              </li>
            ))}
          </ul>
        )}

        <Button asChild variant="outline" className="group/btn mt-6 w-full">
          <a
            href={`mailto:${site.email}?subject=${encodeURIComponent(
              `Meer info over ${car.merk} ${car.model}`,
            )}`}
          >
            Meer info
            <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </a>
        </Button>
      </div>
    </article>
  );
}
