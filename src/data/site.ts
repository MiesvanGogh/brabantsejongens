export const site = {
  naam: "De Brabantse jongens automotive",
  slogan: "De garage met de zacht G",
  pitch: "Gemoedelijk, gedreven en gespecialiseerd",
  belofte: "Vakmanschap waar we trots op zijn.",
  telefoon: "+31 6 12 34 56 78",
  telefoonHref: "tel:+31612345678",
  email: "info@brabantsejongens.nl",
  adres: {
    straat: "Industrieweg 12",
    postcode: "5342 LP",
    plaats: "Oss",
  },
  rating: { score: 4.9, aantal: 128, maxSterren: 5 },
  mapsRouteHref:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("Industrieweg 12, 5342 LP Oss"),
  openingstijden: [
    { dag: "Maandag t/m vrijdag", tijd: "08:00 – 17:30" },
    { dag: "Zaterdag", tijd: "09:00 – 14:00" },
    { dag: "Zondag", tijd: "Gesloten" },
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
    titel: "Onderhoud",
    tekst: "Groot en klein onderhoud voor elk merk, met behoud van fabrieksgarantie.",
  },
  {
    icon: "Cog",
    titel: "Reparatie",
    tekst: "Van motorstoring tot koppeling — eerlijke diagnose en een duidelijke prijs.",
  },
  {
    icon: "ClipboardCheck",
    titel: "APK-keuring",
    tekst: "Snel geregeld, meestal binnen een dag. Kleine herstellingen doen we direct mee.",
  },
  {
    icon: "Car",
    titel: "In- en verkoop",
    tekst: "Zorgvuldig geselecteerde occasions, compleet nagekeken en met garantie.",
  },
  {
    icon: "CircleDot",
    titel: "Banden & wielen",
    tekst: "Nieuwe banden, uitlijnen, balanceren en gratis seizoensopslag.",
  },
  {
    icon: "BatteryCharging",
    titel: "Airco & elektronica",
    tekst: "Airco-service, uitlezen van foutcodes en elektronische diagnose.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Eerlijk advies, netjes op tijd klaar en geen verrassingen op de rekening. Precies wat je wil van een garage.",
    naam: "Sanne de Wit",
    plaats: "Oss",
  },
  {
    quote:
      "Mijn auto hier gekocht en het onderhoud loopt er nog steeds. Gemoedelijke mannen die weten waar ze mee bezig zijn.",
    naam: "Rick van Gorp",
    plaats: "Tilburg",
  },
  {
    quote:
      "APK, banden en een reparatie in één keer geregeld. Duidelijke communicatie en scherp geprijsd.",
    naam: "Meryem Yildiz",
    plaats: "'s-Hertogenbosch",
  },
];
