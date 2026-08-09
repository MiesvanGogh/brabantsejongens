import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Calendar, ExternalLink, Fuel, Gauge, Phone, Settings2 } from "lucide-react";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { cars, formatKm, formatPrijs, getCarById } from "@/data/cars";
import { site } from "@/data/site";

export const Route = createFileRoute("/occasions/$id")({
  loader: ({ params }) => {
    const car = getCarById(params.id);
    if (!car) throw notFound();
    return { car };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Occasion niet gevonden" }, { name: "robots", content: "noindex" }],
      };
    }
    const { car } = loaderData;
    const title = `${car.merk} ${car.model} (${car.bouwjaar}) | Brabantse Jongens Automotive`;
    const description = `${car.merk} ${car.model} uit ${car.bouwjaar}, ${formatKm(
      car.kilometerstand,
    )}, ${car.brandstof}, ${car.transmissie}. Nu ${formatPrijs(car.prijs)} bij onze garage in ${
      site.adres.plaats
    }.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: OccasionNotFound,
  component: OccasionDetail,
});

function OccasionNotFound() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-40 text-center sm:px-8">
        <h1 className="text-4xl">Deze occasion bestaat niet (meer)</h1>
        <p className="mt-4 text-muted-foreground">
          Mogelijk is de auto verkocht. Bekijk ons actuele aanbod.
        </p>
        <Button asChild className="mt-8">
          <a href="/#aanbod">Terug naar het aanbod</a>
        </Button>
      </main>
      <SiteFooter />
    </div>
  );
}

function OccasionDetail() {
  const { car } = Route.useLoaderData();
  const kern = [
    { icon: Calendar, label: "Bouwjaar", value: String(car.bouwjaar) },
    { icon: Gauge, label: "Kilometerstand", value: formatKm(car.kilometerstand) },
    { icon: Fuel, label: "Brandstof", value: car.brandstof },
    { icon: Settings2, label: "Transmissie", value: car.transmissie },
  ];
  const overige = cars.filter((c) => c.id !== car.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-5 pb-24 pt-40 sm:px-8">
        <a
          href="/#aanbod"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar het aanbod
        </a>

        <div className="mt-8 grid gap-12 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <img
              src={car.afbeelding}
              alt={`${car.merk} ${car.model}`}
              width={1200}
              height={800}
              className="w-full rounded-lg object-cover shadow-[var(--shadow-lift)]"
            />

            {car.omschrijving && (
              <div className="mt-10">
                <h2 className="text-2xl">Omschrijving</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  {car.omschrijving}
                </p>
              </div>
            )}

            {car.specs && (
              <div className="mt-10">
                <h2 className="text-2xl">Specificaties</h2>
                <dl className="mt-4 grid gap-x-10 sm:grid-cols-2">
                  {Object.entries(car.specs).map(([k, v]) => (
                    <div
                      key={k}
                      className="flex justify-between gap-4 border-b border-border py-3 text-sm"
                    >
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="text-right font-medium">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]">
              <p className="eyebrow">{car.merk}</p>
              <h1 className="mt-3 text-3xl leading-tight sm:text-4xl">{car.model}</h1>
              <p className="mt-5 font-display text-4xl text-primary">{formatPrijs(car.prijs)}</p>

              <ul className="mt-6 space-y-3 text-sm">
                {kern.map((s) => (
                  <li key={s.label} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <s.icon className="h-4 w-4 text-primary" />
                      {s.label}
                    </span>
                    <span className="font-medium">{s.value}</span>
                  </li>
                ))}
              </ul>

              {car.highlights && (
                <ul className="mt-6 flex flex-wrap gap-2">
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

              <div className="mt-8 space-y-3">
                <Button asChild size="lg" className="w-full">
                  <a
                    href={`mailto:${site.email}?subject=${encodeURIComponent(
                      `Interesse in ${car.merk} ${car.model} (${car.bouwjaar})`,
                    )}`}
                  >
                    Stel een vraag
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full">
                  <a href={site.telefoonHref}>
                    <Phone className="mr-1 h-4 w-4" />
                    {site.telefoon}
                  </a>
                </Button>
                {car.advertentieUrl && (
                  <a
                    href={car.advertentieUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    Bekijk de advertentie
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </aside>
        </div>

        {overige.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl">Andere occasions</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {overige.map((c) => (
                <Link
                  key={c.id}
                  to="/occasions/$id"
                  params={{ id: c.id }}
                  className="card-lift overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-card)] hover:border-primary/40"
                >
                  <img
                    src={c.afbeelding}
                    alt={`${c.merk} ${c.model}`}
                    loading="lazy"
                    className="aspect-[3/2] w-full object-cover"
                  />
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      {c.merk}
                    </p>
                    <p className="mt-1 font-display text-lg">{c.model}</p>
                    <p className="mt-2 text-primary">{formatPrijs(c.prijs)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <SiteFooter />
    </div>
  );
}
