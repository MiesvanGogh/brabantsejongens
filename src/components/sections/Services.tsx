import {
  BatteryCharging,
  Car,
  CircleDot,
  ClipboardCheck,
  Cog,
  Cpu,
  Snowflake,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { services } from "@/data/site";

const icons: Record<string, LucideIcon> = {
  Wrench,
  Cog,
  Cpu,
  ClipboardCheck,
  Car,
  CircleDot,
  BatteryCharging,
  Snowflake,
};

export function Services() {
  return (
    <section id="diensten" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Diensten</p>
          <h2 className="accent-rule mt-4 text-4xl leading-tight sm:text-5xl">
            Alles onder één dak
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Van APK tot complete revisie, bij ons weet je vooraf wat er gebeurt en wat het kost.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Wrench;
            return (
              <article
                key={service.titel}
                className="card-lift group rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)] hover:border-primary/40"
              >
                <span className="grid h-12 w-12 place-items-center rounded-md bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-6 text-xl">{service.titel}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.tekst}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-12">
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Neem contact op</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
