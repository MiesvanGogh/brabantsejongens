// Echte contactgegevens van het bedrijf.
// Het eerste nummer is het hoofdnummer: dat staat in de balk bovenaan en bij de knoppen.
export const contactpersonen = [
  { naam: "Selwin", telefoon: "06 54320184", telefoonHref: "tel:+31654320184" },
  { naam: "Gijs", telefoon: "06 10349148", telefoonHref: "tel:+31610349148" },
] as const;

export const site = {
  naam: "Brabantse Jongens Automotive",
  slogan: "De garage met de zachte G",
  pitch: "Gemoedelijk, gedreven en gespecialiseerd",
  belofte: "Vakmanschap waar we trots op zijn.",
  telefoon: contactpersonen[0].telefoon,
  telefoonHref: contactpersonen[0].telefoonHref,
  email: "info@brabantsejongens.nl",
  kvk: "42174120",
  btw: "NL870036531B01",
  // Openbare Web3Forms-sleutel: contactformulier mailt naar info@brabantsejongens.nl.
  web3formsKey: "0fd9440f-2f45-4e4e-80fd-cc77075fbe35",
  adres: {
    straat: "Dommelstraat 38B",
    postcode: "5347 JL",
    plaats: "Oss",
  },
  mapsRouteHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Dommelstraat 38B, 5347 JL Oss"),
  // Directe link naar de Google-reviews van het bedrijfsprofiel.
  googleReviewsHref: "https://reviewthis.biz/BrabantseJongens",
  openingstijden: [
    { dag: "Maandag t/m vrijdag", tijd: "08:00 – 17:00" },
    { dag: "Avonden", tijd: "Op afspraak" },
    { dag: "Zaterdag en zondag", tijd: "Gesloten" },
  ],
};

export const navItems = [
  { label: "Over ons", href: "#over-ons" },
  { label: "Diensten", href: "#diensten" },
  { label: "Aanbod", href: "#aanbod" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: "Wrench",
    titel: "Onderhoud & reparatie",
    tekst:
      "Groot en klein onderhoud voor elk merk, met behoud van fabrieksgarantie. Bij storingen een eerlijke diagnose en een duidelijke prijs.",
  },
  {
    icon: "ClipboardCheck",
    titel: "APK-keuring",
    tekst:
      "Wij zijn opgeleid en bevoegd om zelf de APK te keuren. Kleine herstellingen doen we direct mee.",
  },
  {
    icon: "Car",
    titel: "In- en verkoop",
    tekst: "Zorgvuldig geselecteerde occasions, compleet nagekeken en met garantie.",
  },
  {
    icon: "CircleDot",
    titel: "Banden & wielen",
    tekst: "Banden vervangen, balanceren of uitlijnen? We helpen u snel weer op weg.",
  },
  {
    icon: "Snowflake",
    titel: "Airco",
    tekst: "Airco-service en bijvullen voor een optimaal werkende airco, het hele jaar door.",
  },
  {
    icon: "Cpu",
    titel: "Elektronica",
    tekst:
      "Van motorstoringen tot elektronische problemen: we kunnen uw auto uitlezen en foutcodes analyseren met moderne diagnoseapparatuur. Zo weet u snel waar u aan toe bent.",
  },
] as const;
