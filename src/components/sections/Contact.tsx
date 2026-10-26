import { useRef, useState } from "react";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactpersonen, site } from "@/data/site";

export function Contact() {
  const [sending, setSending] = useState(false);
  const berichtRef = useRef<HTMLTextAreaElement>(null);

  // Berichtveld groeit mee met de tekst; boven max-h-80 verschijnt pas een scrollbalk.
  const groeiMee = (veld: HTMLTextAreaElement) => {
    veld.style.height = "auto";
    veld.style.height = `${veld.scrollHeight + veld.offsetHeight - veld.clientHeight}px`;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as {
      naam: string;
      email: string;
      [veld: string]: string;
    };
    setSending(true);
    try {
      // Web3Forms stuurt het bericht door naar het info-adres; geen eigen server nodig.
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        // Niet eindeloos op "Versturen…" blijven hangen als de dienst niet reageert.
        signal: AbortSignal.timeout(15000),
        body: JSON.stringify({
          ...data,
          access_key: site.web3formsKey,
          subject: `Contactformulier website: ${data.naam}`,
          from_name: site.naam,
          replyto: data.email,
        }),
      });
      const result = (await response.json().catch(() => null)) as { success?: boolean } | null;
      if (!response.ok || result?.success !== true) throw new Error("Versturen mislukt");
      form.reset();
      if (berichtRef.current) berichtRef.current.style.height = "";
      toast.success("Bedankt! We nemen zo snel mogelijk contact met u op.");
    } catch {
      toast.error(
        `Het versturen is niet gelukt. Belt u ons op ${site.telefoon} of mailt u naar ${site.email}.`,
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="max-w-2xl">
        <p className="eyebrow">Contact</p>
        <h2 className="accent-rule mt-4 text-4xl leading-tight sm:text-5xl">Kom gerust langs</h2>
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
            {contactpersonen.map((persoon) => (
              <li key={persoon.telefoonHref} className="flex gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>
                  <span className="block text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {persoon.naam}
                  </span>
                  <a
                    href={persoon.telefoonHref}
                    className="font-medium transition-colors hover:text-primary"
                  >
                    {persoon.telefoon}
                  </a>
                </span>
              </li>
            ))}
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
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                `${site.adres.straat}, ${site.adres.postcode} ${site.adres.plaats}`,
              )}&z=14&output=embed`}
              className="block h-72 w-full border-0"
              loading="lazy"
            />
            <div className="flex flex-col gap-3 border-t border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-muted-foreground">
                Plan direct uw route naar {site.adres.straat}, {site.adres.plaats}.
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
          {/* Honeypot tegen spambots: onzichtbaar voor bezoekers, Web3Forms weigert aangevinkte berichten. */}
          <input
            type="checkbox"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="naam">Naam</Label>
              <Input id="naam" name="naam" required placeholder="Uw naam" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="telefoon">Telefoon</Label>
              <Input id="telefoon" name="telefoon" placeholder="06 12345678" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" name="email" type="email" required placeholder="naam@voorbeeld.nl" />
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="bericht">Bericht</Label>
            <Textarea
              id="bericht"
              name="bericht"
              ref={berichtRef}
              rows={5}
              required
              placeholder="Waarmee kunnen we u helpen?"
              onInput={(e) => groeiMee(e.currentTarget)}
              className="max-h-80 resize-none"
            />
          </div>
          <Button type="submit" size="lg" disabled={sending} className="mt-6 w-full">
            {sending ? "Versturen…" : "Verstuur bericht"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            We reageren doorgaans binnen één werkdag.
          </p>
          <p className="mt-1 text-center text-xs text-muted-foreground">
            Uw gegevens gebruiken we alleen om op uw bericht te reageren. Zie onze{" "}
            <a href="/privacy" className="underline transition-colors hover:text-primary">
              privacyverklaring
            </a>
            .
          </p>
        </form>
      </div>
    </section>
  );
}
