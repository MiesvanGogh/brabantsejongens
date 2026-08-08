import car1 from "@/assets/car-1.jpg";
import car2 from "@/assets/car-2.jpg";
import car3 from "@/assets/car-3.jpg";
import car4 from "@/assets/car-4.jpg";

export type Car = {
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
};

/**
 * Nieuwe auto toevoegen? Voeg hieronder simpelweg een nieuw object toe.
 * De kaarten op de pagina worden automatisch gegenereerd.
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
  },
];

export const formatPrijs = (prijs: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(prijs);

export const formatKm = (km: number) =>
  `${new Intl.NumberFormat("nl-NL").format(km)} km`;
