import { Facebook, Instagram, Linkedin } from "lucide-react";

import { Logo } from "@/components/Logo";
import { navItems, overigeNummers, site } from "@/data/site";

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
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Facebook, label: "Facebook" },
                { Icon: Linkedin, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-md border border-ink-foreground/15 text-ink-foreground/70 transition-all duration-300 hover:border-primary hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
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
              {overigeNummers.map((persoon) => (
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
          <p>KvK 12345678 · BTW NL001234567B01</p>
        </div>
      </div>
    </footer>
  );
}
