export const site = {
  naam: "De Brabantse jongens automotive",
  slogan: "De garage met de zachte G",
  pitch: "Gemoedelijk, gedreven en gespecialiseerd",
  belofte: "Vakmanschap waar we trots op zijn.",
  telefoon: "+31 6 12 34 56 78",
  telefoonHref: "tel:+31612345678",
  email: "info@brabantsejongens.nl",
  adres: {
    straat: "Dommelstraat 38B",
    postcode: "5347 JL",
    plaats: "Oss",
  },
  mapsRouteHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Dommelstraat 38B, 5347 JL Oss"),
  // Vervang dit later door de directe Google-reviewlink van het bedrijfsprofiel.
  googleReviewsHref:
    "https://www.google.com/search?q=" +
    encodeURIComponent("De Brabantse jongens automotive Dommelstraat 38B Oss"),
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
    tekst: "Groot en klein onderhoud voor elk merk, met behoud van fabrieksgarantie. Bij storingen een eerlijke diagnose en een duidelijke prijs.",
  },
  {
    icon: "ClipboardCheck",
    titel: "APK-keuring",
    tekst: "Wij zijn opgeleid en bevoegd om zelf de APK te keuren. Kleine herstellingen doen we direct mee.",
  },
  {
    icon: "Car",
    titel: "In- en verkoop",
    tekst: "Zorgvuldig geselecteerde occasions, compleet nagekeken en met garantie.",
  },
  {
    icon: "CircleDot",
    titel: "Banden & wielen",
    tekst: "Banden vervangen, balanceren of uitlijnen? We helpen je snel weer op weg.",
  },
  {
    icon: "Snowflake",
    titel: "Airco",
    tekst: "Airco-service en bijvullen, zodat je ook in de zomer koel rijdt.",
  },
  {
    icon: "Cpu",
    titel: "Elektronica",
    tekst: "Van motorstoringen tot elektronische problemen: we kunnen je auto uitlezen en foutcodes analyseren met moderne diagnoseapparatuur. Zo weet je snel waar je aan toe bent.",
  },
] as const;
