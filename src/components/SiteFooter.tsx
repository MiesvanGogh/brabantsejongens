import { Logo } from "@/components/Logo";
import { site } from "@/data/site";

// Monochrome Google-"G" in de stijl van de andere pictogrammen.
function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M21.35 11.1h-9.17v2.96h5.3c-.23 1.39-1.6 4.07-5.3 4.07-3.19 0-5.8-2.65-5.8-5.9s2.61-5.9 5.8-5.9c1.82 0 3.03.77 3.73 1.43l2.54-2.45C16.77 3.66 14.78 2.75 12.18 2.75c-5.09 0-9.22 4.13-9.22 9.23s4.13 9.22 9.22 9.22c5.32 0 8.85-3.74 8.85-9 0-.6-.06-1.05-.15-1.52z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="surface-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
              {site.slogan}. {site.pitch}. {site.belofte}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.googleBusinessHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google-bedrijfsprofiel"
                className="grid h-10 w-10 place-items-center rounded-md border border-ink-foreground/15 text-ink-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary"
              >
                <GoogleIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-sm tracking-[0.2em] text-primary">Snelle links</h3>
            <ul className="mt-5 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm text-ink-foreground/70 transition-colors hover:text-primary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm tracking-[0.2em] text-primary">Contact</h3>
            <address className="mt-5 space-y-3 text-sm not-italic text-ink-foreground/70">
              <p>
                {site.adres.straat}
                <br />
                {site.adres.postcode} {site.adres.plaats}
              </p>
              {contactpersonen.map((persoon) => (
                <p key={persoon.telefoonHref}>
                  <span className="text-ink-foreground/45">{persoon.naam}</span>{" "}
                  <a href={persoon.telefoonHref} className="transition-colors hover:text-primary">
                    {persoon.telefoon}
                  </a>
                </p>
              ))}
              <p>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                  {site.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ink-foreground/12 pt-6 text-xs text-ink-foreground/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.naam}. Alle rechten voorbehouden.
          </p>
          <p>
            KvK {site.kvk} · BTW {site.btw} ·{" "}
            <a href="/privacy" className="transition-colors hover:text-primary">
              Privacyverklaring
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
