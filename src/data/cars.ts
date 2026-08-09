import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

export type Car = {
  /** wordt ook gebruikt als URL: /occasions/{id} */
  id: string;
  merk: string;
  model: string;
  bouwjaar: number;
  kilometerstand: number;
  prijs: number;
  brandstof: string;
  transmissie: string;
  afbeelding: string;
  highlights?: string[];
  /** Vrije omschrijving op de detailpagina */
  omschrijving?: string;
  /** Volledige specificaties, vrij uitbreidbaar */
  specs?: Record<string, string>;
  /** Link naar de advertentie (bijv. Marktplaats) */
  advertentieUrl?: string;
};

/**
 * Nieuwe auto toevoegen? Voeg hieronder simpelweg een nieuw object toe.
 * De kaarten én de detailpagina (/occasions/{id}) worden automatisch gegenereerd.
 */
export const cars: Car[] = [
  {
    id: "vw-up",
    merk: "Volkswagen",
    model: "Up! 1.0 Move",
    bouwjaar: 2019,
    kilometerstand: 62000,
    prijs: 9950,
    brandstof: "Benzine",
    transmissie: "Handgeschakeld",
    afbeelding: car1,
    highlights: ["Airco", "Cruise control", "1e eigenaar"],
    omschrijving:
      "Zuinige en wendbare stadsauto met complete onderhoudshistorie. Volledig nagekeken, nieuwe APK en beurt bij aflevering.",
    specs: {
      Carrosserie: "Hatchback, 5 deuren",
      Motorinhoud: "999 cc",
      Vermogen: "75 pk",
      Verbruik: "1 op 21 (4,8 l/100 km)",
      Energielabel: "A",
      Kleur: "Wit",
      "Aantal zitplaatsen": "4",
      APK: "Nieuw bij aflevering",
      Garantie: "12 maanden",
      BTW: "Marge",
    },
  },
  {
    id: "sedan-executive",
    merk: "Mazda",
    model: "6 Sedan Skyactiv",
    bouwjaar: 2021,
    kilometerstand: 48500,
    prijs: 24950,
    brandstof: "Benzine",
    transmissie: "Automaat",
    afbeelding: car2,
    highlights: ["Leder", "Navigatie", "Head-up display"],
    omschrijving:
      "Zeer complete executive sedan met luxe uitrusting en dealeronderhoud. Rijdt strak en stil, ideaal voor de langere afstand.",
    specs: {
      Carrosserie: "Sedan, 4 deuren",
      Motorinhoud: "2.0 Skyactiv-G",
      Vermogen: "165 pk",
      Verbruik: "1 op 15 (6,7 l/100 km)",
      Energielabel: "B",
      Kleur: "Machine Grey",
      "Aantal zitplaatsen": "5",
      APK: "Nieuw bij aflevering",
      Garantie: "12 maanden",
      BTW: "Marge",
    },
  },
  {
    id: "toyota-chr",
    merk: "Toyota",
    model: "C-HR Hybrid",
    bouwjaar: 2022,
    kilometerstand: 31200,
    prijs: 27450,
    brandstof: "Hybride",
    transmissie: "Automaat",
    afbeelding: car3,
    highlights: ["Camera", "Adaptive cruise", "Dealeronderhouden"],
    omschrijving:
      "Jonge hybride crossover met lage kilometerstand en volledige dealerhistorie. Zuinig in de stad en rijk uitgerust met veiligheidssystemen.",
    specs: {
      Carrosserie: "SUV / Crossover, 5 deuren",
      Motorinhoud: "1.8 Hybrid",
      Vermogen: "122 pk",
      Verbruik: "1 op 23 (4,4 l/100 km)",
      Energielabel: "A",
      Kleur: "Zwart metallic",
      "Aantal zitplaatsen": "5",
      APK: "Nieuw bij aflevering",
      Garantie: "12 maanden",
      BTW: "Marge",
    },
  },
  {
    id: "estate-black",
    merk: "Peugeot",
    model: "308 SW Allure",
    bouwjaar: 2020,
    kilometerstand: 74800,
    prijs: 17900,
    brandstof: "Diesel",
    transmissie: "Handgeschakeld",
    afbeelding: car4,
    highlights: ["Trekhaak", "Panoramadak", "Nieuwe APK"],
    omschrijving:
      "Ruime en zuinige stationwagon met trekhaak en panoramadak. Perfect als gezinsauto of zakelijke kilometervreter.",
    specs: {
      Carrosserie: "Stationwagon, 5 deuren",
      Motorinhoud: "1.5 BlueHDi",
      Vermogen: "130 pk",
      Verbruik: "1 op 24 (4,2 l/100 km)",
      Energielabel: "A",
      Kleur: "Zwart",
      "Aantal zitplaatsen": "5",
      Trekgewicht: "1.400 kg geremd",
      APK: "Nieuw bij aflevering",
      Garantie: "12 maanden",
      BTW: "Marge",
    },
  },
];

export const getCarById = (id: string) => cars.find((c) => c.id === id);

export const formatPrijs = (prijs: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(prijs);

export const formatKm = (km: number) =>
  `${new Intl.NumberFormat("nl-NL").format(km)} km`;
