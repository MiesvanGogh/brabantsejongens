import { useState } from "react";
import { MapPin, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/data/site";

export function GoogleMap() {
  const [accepted, setAccepted] = useState(false);

  return (
    <div>
      {accepted ? (
        <>
          <iframe
            title="Locatie Brabantse Jongens Automotive"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              `${site.adres.straat}, ${site.adres.postcode} ${site.adres.plaats}`,
            )}&z=14&output=embed`}
            className="block h-72 w-full border-0"
            loading="lazy"
          />
          <div className="border-t border-border bg-card px-4 py-2">
            <Button variant="ghost" size="sm" onClick={() => setAccepted(false)}>
              Google-toestemming intrekken
            </Button>
          </div>
        </>
      ) : (
        <div className="flex min-h-72 flex-col items-center justify-center gap-4 bg-muted px-5 py-6 text-center">
          <MapPin className="h-7 w-7 text-primary" aria-hidden="true" />
          <p className="font-semibold">{site.adres.straat}, {site.adres.plaats}</p>
          <p className="max-w-sm text-sm text-muted-foreground">
            Google Maps kan cookies plaatsen en gegevens verwerken. De kaart wordt pas geladen
            nadat u toestemming geeft. Lees de{" "}
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
          <Button onClick={() => setAccepted(true)} className="h-auto max-w-full whitespace-normal py-3">
            <ShieldCheck className="h-4 w-4 shrink-0" aria-hidden="true" />
            Google-cookies accepteren en kaart tonen
          </Button>
        </div>
      )}
    </div>
  );
}