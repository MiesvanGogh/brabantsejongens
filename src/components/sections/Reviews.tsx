import { Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
        <p className="eyebrow">Reviews</p>
        <h2 className="mt-4 text-4xl leading-tight text-balance sm:text-5xl">
          Wat klanten van ons vinden
        </h2>

        <div className="mt-8 flex items-center justify-center gap-1.5 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-6 w-6 fill-current" />
          ))}
        </div>

        <p className="mt-8 text-lg text-muted-foreground">
          We zijn net gestart met ons Google-profiel, dus hier verschijnen binnenkort de echte
          beoordelingen van onze klanten. Ben je bij ons geweest? Dan stellen we een eerlijke review
          enorm op prijs.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg">
            <a href={site.googleReviewsHref} target="_blank" rel="noopener noreferrer">
              Laat een review achter
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Neem contact op</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
