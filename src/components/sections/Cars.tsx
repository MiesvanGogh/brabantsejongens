import { ArrowRight, CalendarClock, Phone } from "lucide-react";

import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";
import { site } from "@/data/site";

export function Cars() {
  return (
    <section id="aanbod" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">Aanbod</p>
          <h2 className="accent-rule mt-4 text-4xl leading-tight sm:text-5xl">
            Auto&apos;s in de verkoop
          </h2>
          <p className="mt-8 text-lg text-muted-foreground">
            Elke occasion wordt volledig nagekeken, voorzien van nieuwe APK en beurt, en geleverd
            met garantie.
          </p>
        </div>
        <Button asChild size="lg" className="justify-self-start lg:justify-self-end">
          <a href="#contact">Auto inruilen of verkopen</a>
        </Button>
      </div>

      {cars.length === 0 ? <BinnenKort /> : <Voorraad />}
    </section>
  );
}

function Voorraad() {
  return (
    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  );
}

function BinnenKort() {
  return (
    <div className="card-lift relative mt-14 overflow-hidden rounded-lg border border-border bg-card px-6 py-14 text-center shadow-[var(--shadow-card)] sm:px-12 lg:py-20">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[38rem] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute -left-3 -top-3 hidden h-20 w-20 border-l-2 border-t-2 border-primary/60 sm:block" />
      <div className="absolute -bottom-3 -right-3 hidden h-20 w-20 border-b-2 border-r-2 border-primary/60 sm:block" />

      <div className="relative mx-auto max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <CalendarClock className="h-3.5 w-3.5" />
          Binnenkort
        </span>

        <h3 className="mt-7 text-3xl leading-tight text-balance sm:text-4xl">
          De showroom vult&nbsp;zich weer
        </h3>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Op dit moment staan er geen auto&apos;s in de verkoop. We zijn druk met de volgende
          selectie, want elke auto gaat pas de showroom in als-ie volledig nagekeken is en verse
          APK en beurt heeft. Daardoor duurt het soms iets langer, maar heb je wel direct goede
          auto&apos;s om uit te kiezen.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="group">
            <a href="#contact">
              Bel me als er een binnenkomt
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={site.telefoonHref}>
              <Phone className="mr-1 h-4 w-4" />
              {site.telefoon}
            </a>
          </Button>
        </div>

      </div>
    </div>
  );
}
