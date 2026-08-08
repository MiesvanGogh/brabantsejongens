import { Quote, Star } from "lucide-react";

import { testimonials } from "@/data/site";

export function Testimonials() {
  return (
    <section id="reviews" className="surface-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Reviews</p>
          <h2 className="accent-rule mt-4 text-4xl leading-tight text-ink-foreground sm:text-5xl">
            Wat klanten zeggen
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.naam}
              className="card-lift rounded-lg border border-ink-foreground/12 bg-ink-foreground/[0.04] p-8 backdrop-blur-sm hover:border-primary/40"
            >
              <Quote className="h-7 w-7 text-primary" />
              <blockquote className="mt-5 text-base leading-relaxed text-ink-foreground/85">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-foreground/12 pt-5">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="mt-2 font-display text-lg uppercase text-ink-foreground">{t.naam}</p>
                <p className="text-sm text-ink-foreground/55">{t.plaats}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
