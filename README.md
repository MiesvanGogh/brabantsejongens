# Brabantse Jongens Automotive

Website van Brabantse Jongens Automotive (Oss): https://brabantsejongens.nl

Gebouwd met [Lovable](https://lovable.dev/projects/49f9ec71-ce7f-49fc-b744-5264370ca3dd). Wijzigingen in Lovable worden direct naar `main` gecommit; pushes naar `main` synchroniseren terug naar Lovable.

## Techniek

- [TanStack Start](https://tanstack.com/start) (React 19) in SPA-modus, Vite
- Tailwind CSS v4 met een paar [shadcn/ui](https://ui.shadcn.com)-componenten (`src/components/ui`)
- Hosting via GitHub Pages (`.github/workflows/deploy.yml`, domein in `public/CNAME`)

## Inhoud aanpassen

| Wat | Waar |
| --- | --- |
| Bedrijfsnaam, contactgegevens, openingstijden, menu, diensten | `src/data/site.ts` |
| Occasions (aanbod + detailpagina's) | `src/data/cars.ts` |
| Pagina-secties | `src/components/sections/` |
| Afbeeldingen | `src/assets/` |
| Kleuren en lettertypes | `src/styles.css` |

Een nieuwe occasion toevoegen = een item toevoegen aan de lijst in `src/data/cars.ts`; de kaart en detailpagina (`/occasions/<id>`) worden automatisch gemaakt.

## Lokaal draaien

Vereist Node.js 20+.

```sh
npm install
npm run dev
```

`npm run build` maakt de productie-build in `.output/public`.
