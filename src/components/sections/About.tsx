import { Check } from "lucide-react";

import { site } from "@/data/site";

const punten = [
  "Gemoedelijk: je bent hier geen nummer, maar een klant met een naam.",
  "Gedreven: we stoppen pas als het écht goed is.",
  "Gespecialiseerd: moderne diagnoseapparatuur voor elk merk.",
];

export function About() {
  return (
    <section id="over-ons" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="max-w-3xl">
        <p className="eyebrow">Over ons</p>
        <h2 className="accent-rule mt-4 text-balance text-4xl leading-tight sm:text-5xl">
          De garage met&nbsp;de <span className="whitespace-nowrap">zachte G</span>
        </h2>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {site.naam} is ontstaan uit een simpele overtuiging: sleutelen doe je met kennis,
          klanten help je met een kop koffie erbij. Wat begon in een kleine loods is uitgegroeid
          tot een moderne werkplaats waar techniek en Brabantse gastvrijheid samenkomen.
        </p>

        <ul className="mt-8 space-y-4">
          {punten.map((p) => (
            <li key={p} className="flex gap-3">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                <Check className="h-3.5 w-3.5" />
              </span>
              <span className="text-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
