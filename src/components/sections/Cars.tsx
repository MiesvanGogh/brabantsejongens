import { CarCard } from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { cars } from "@/data/cars";

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

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}
