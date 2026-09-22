import { useState } from "react";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/data/site";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success("Bedankt! We nemen zo snel mogelijk contact met je op.");
    }, 600);
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h2 className="accent-rule mt-4 text-4xl leading-tight sm:text-5xl">
          Kom gerust langs
        </h2>
        <p className="mt-8 text-lg text-muted-foreground">
          Even bellen, mailen of het formulier invullen, koffie staat klaar.
        </p>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div className="space-y-8">
          <ul className="space-y-5">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <span>
                {site.adres.straat}
                <br />
                {site.adres.postcode} {site.adres.plaats}
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <a href={site.telefoonHref} className="transition-colors hover:text-primary">
                {site.telefoon}
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                {site.email}
              </a>
            </li>
            <li className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />
              <dl className="w-full max-w-sm space-y-1">
                {site.openingstijden.map((o) => (
                  <div key={o.dag} className="flex justify-between gap-4 text-sm">
                    <dt className="text-muted-foreground">{o.dag}</dt>
                    <dd className="font-medium">{o.tijd}</dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>

          <div className="overflow-hidden rounded-lg border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Locatie Brabantse Jongens Automotive"
              src="https://www.openstreetmap.org/export/embed.html?bbox=5.03%2C51.66%2C5.12%2C51.71&layer=mapnik"
              className="h-72 w-full"
              loading="lazy"
            />
            <div className="flex flex-col gap-3 border-t border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Plan direct je route naar {site.adres.straat}, {site.adres.plaats}.
              </p>
              <Button asChild size="sm" className="shrink-0">
                <a href={site.mapsRouteHref} target="_blank" rel="noopener noreferrer">
                  <Navigation className="mr-1 h-4 w-4" />
                  Route plannen
                </a>
              </Button>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-card)]"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="naam">Naam</Label>
              <Input id="naam" name="naam" required placeholder="Jouw naam" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefoon">Telefoon</Label>
              <Input id="telefoon" name="telefoon" placeholder="06 12345678" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required placeholder="jij@email.nl" />
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="bericht">Bericht</Label>
            <Textarea
              id="bericht"
              name="bericht"
              rows={5}
              required
              placeholder="Waarmee kunnen we je helpen?"
            />
          </div>
          <Button type="submit" size="lg" disabled={sending} className="mt-6 w-full">
            {sending ? "Versturen…" : "Verstuur bericht"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            We reageren doorgaans binnen één werkdag.
          </p>
        </form>
      </div>
    </section>
  );
}
