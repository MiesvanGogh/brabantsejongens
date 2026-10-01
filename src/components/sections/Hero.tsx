import { ArrowRight, Phone } from "lucide-react";

import heroImage from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[100svh] overflow-hidden surface-ink">
      <img
        src={heroImage}
        alt="Moderne werkplaats met auto onder warme verlichting"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.16_0.008_262/0.95)_0%,oklch(0.16_0.008_262/0.72)_45%,oklch(0.16_0.008_262/0.25)_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-32 sm:px-8">
        <p className="eyebrow animate-in fade-in slide-in-from-bottom-2 duration-700">
          <span className="h-px w-8 bg-primary" />
          Automotive · Oss
        </p>

        <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold leading-[0.95] text-ink-foreground sm:text-7xl lg:text-8xl">
          {site.naam}
        </h1>

        <p className="mt-6 font-display text-2xl uppercase tracking-wide text-primary sm:text-3xl">
          {site.slogan}
        </p>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
          {site.pitch}. {site.belofte}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="group shadow-[var(--shadow-glow)]">
            <a href="#aanbod">
              Bekijk ons aanbod
              <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-ink-foreground/30 bg-transparent text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <a href={site.telefoonHref}>
              <Phone className="mr-1 h-4 w-4" />
              {site.telefoon}
            </a>
          </Button>
        </div>

        <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-6 border-t border-ink-foreground/15 pt-8 sm:grid-cols-3">
          <div>
            <dt className="font-display text-3xl text-primary sm:text-4xl">15+</dt>
            <dd className="mt-1 text-sm text-ink-foreground/65">Jaar ervaring</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-primary sm:text-4xl">Alle</dt>
            <dd className="mt-1 text-sm text-ink-foreground/65">Merken welkom</dd>
          </div>
          <div>
            <dt className="font-display text-3xl text-primary sm:text-4xl">APK</dt>
            <dd className="mt-1 text-sm text-ink-foreground/65">Gecertificeerd vakmanschap</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
