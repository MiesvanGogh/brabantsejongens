import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/data/site";

const title = "Privacyverklaring | Brabantse Jongens Automotive";
const description = `Hoe ${site.naam} omgaat met uw persoonsgegevens.`;

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Privacy,
});

function Sectie({ titel, children }: { titel: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl">{titel}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader solid />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 sm:px-8">
        <p className="eyebrow">Privacy</p>
        <h1 className="accent-rule mt-4 text-4xl leading-tight sm:text-5xl">Privacyverklaring</h1>
        <p className="mt-8 text-lg text-muted-foreground">
          {site.naam} gaat zorgvuldig om met uw persoonsgegevens. In deze verklaring leest u welke
          gegevens wij via deze website verwerken, waarom we dat doen en welke rechten u heeft.
        </p>

        <Sectie titel="Wie zijn wij">
          <p>
            {site.naam}
            <br />
            {site.adres.straat}, {site.adres.postcode} {site.adres.plaats}
            <br />
            KvK {site.kvk}
            <br />
            <a href={`mailto:${site.email}`} className="underline hover:text-primary">
              {site.email}
            </a>
          </p>
        </Sectie>

        <Sectie titel="Welke gegevens verwerken wij">
          <p>
            Als u het contactformulier invult, ontvangen wij uw naam, e-mailadres, eventueel uw
            telefoonnummer en uw bericht. Belt of mailt u ons rechtstreeks, dan ontvangen wij de
            gegevens die u daarbij zelf deelt.
          </p>
        </Sectie>

        <Sectie titel="Waarvoor gebruiken wij uw gegevens">
          <p>
            Wij gebruiken uw gegevens uitsluitend om uw vraag te beantwoorden, een afspraak met u te
            maken of u een offerte te sturen. Wij gebruiken uw gegevens niet voor nieuwsbrieven of
            reclame en verkopen ze nooit aan anderen.
          </p>
        </Sectie>

        <Sectie titel="Wie verwerken uw gegevens nog meer">
          <p>
            Berichten uit het contactformulier worden via een externe dienst naar ons e-mailadres
            doorgestuurd. De website wordt gehost door een externe hostingpartij; zoals bij elke
            website wordt daarbij uw IP-adres verwerkt om de pagina's te kunnen tonen.
          </p>
        </Sectie>

        <Sectie titel="Hoe lang bewaren wij uw gegevens">
          <p>
            Wij bewaren uw bericht niet langer dan nodig is om uw vraag af te handelen, en uiterlijk
            één jaar na ons laatste contact. Wordt u klant, dan bewaren wij de gegevens die wij
            wettelijk moeten bewaren, zoals facturen, gedurende de wettelijke termijn van zeven
            jaar.
          </p>
        </Sectie>

        <Sectie titel="Cookies">
          <p>
            De Google Maps-kaart wordt niet geladen voordat u op ‘Google-cookies accepteren en kaart
            tonen’ klikt. Tot dat moment maakt de kaart geen verbinding met Google. Na uw toestemming
            kan Google cookies plaatsen en gegevens verwerken. Hoe Google daarmee omgaat, leest u in de{" "}
            <a
              href="https://policies.google.com/privacy?hl=nl"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-primary"
            >
              privacyverklaring van Google
            </a>
            .
          </p>
          <p>
            U kunt de kaart verborgen laten en de website gewoon gebruiken. Onder de zichtbare kaart
            kunt u uw toestemming intrekken. De kaart wordt dan verwijderd en maakt geen nieuwe
            verbindingen met Google. Al geplaatste Google-cookies kunt u verwijderen via uw browser.
            Uw toestemming wordt niet bewaard: bij een volgend bezoek of na het vernieuwen van de
            pagina vragen wij opnieuw toestemming.
          </p>
        </Sectie>

        <Sectie titel="Uw rechten">
          <p>
            U heeft het recht om uw gegevens in te zien, te laten corrigeren of te laten
            verwijderen. Ook kunt u bezwaar maken tegen het gebruik van uw gegevens. Stuur hiervoor
            een e-mail naar{" "}
            <a href={`mailto:${site.email}`} className="underline hover:text-primary">
              {site.email}
            </a>
            . Wij reageren binnen vier weken.
          </p>
        </Sectie>

        <p className="mt-12 text-sm text-muted-foreground">Laatst bijgewerkt: oktober 2026</p>
      </main>
      <SiteFooter />
    </div>
  );
}
