import { useEffect, useState } from "react";

/** 0 = zondag ... 6 = zaterdag, net als Date#getDay() */
export type DagInterval = { open: string; close: string } | null;

/** Openingstijden per weekdag (index = getDay()). null = gesloten. */
export const weekSchema: DagInterval[] = [
  null, // zondag
  { open: "08:00", close: "17:30" },
  { open: "08:00", close: "17:30" },
  { open: "08:00", close: "17:30" },
  { open: "08:00", close: "17:30" },
  { open: "08:00", close: "17:30" },
  { open: "09:00", close: "14:00" }, // zaterdag
];

const dagNamen = [
  "zondag",
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
];

const toMinutes = (t: string) => {
  const [h = 0, m = 0] = t.split(":").map(Number);
  return h * 60 + m;
};

/** Huidige tijd in Nederland, ongeacht de tijdzone van de bezoeker. */
function nowInNL(date = new Date()) {
  const parts = new Intl.DateTimeFormat("nl-NL", {
    timeZone: "Europe/Amsterdam",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  const weekdayMap: Record<string, number> = {
    zo: 0,
    ma: 1,
    di: 2,
    wo: 3,
    do: 4,
    vr: 5,
    za: 6,
  };
  const key = get("weekday").toLowerCase().slice(0, 2);
  return {
    day: weekdayMap[key] ?? date.getDay(),
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

export type OpenStatus = {
  open: boolean;
  /** Korte toelichting, bijv. "Nu geopend tot 17:30" of "Gesloten · opent maandag 08:00" */
  label: string;
};

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInNL(date);
  const vandaag = weekSchema[day];

  if (vandaag && minutes >= toMinutes(vandaag.open) && minutes < toMinutes(vandaag.close)) {
    return { open: true, label: `Nu geopend tot ${vandaag.close}` };
  }

  if (vandaag && minutes < toMinutes(vandaag.open)) {
    return { open: false, label: `Gesloten · opent vandaag ${vandaag.open}` };
  }

  for (let i = 1; i <= 7; i++) {
    const idx = (day + i) % 7;
    const slot = weekSchema[idx];
    if (slot) {
      const wanneer = i === 1 ? "morgen" : dagNamen[idx];
      return { open: false, label: `Gesloten · opent ${wanneer} ${slot.open}` };
    }
  }

  return { open: false, label: "Gesloten" };
}

/** Live status die elke minuut ververst (client-side, SSR-safe). */
export function useOpenStatus(): OpenStatus {
  const [status, setStatus] = useState<OpenStatus>(() => getOpenStatus());

  useEffect(() => {
    setStatus(getOpenStatus());
    const id = setInterval(() => setStatus(getOpenStatus()), 60_000);
    return () => clearInterval(id);
  }, []);

  return status;
}
