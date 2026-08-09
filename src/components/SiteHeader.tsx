import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { Logo } from "@/components/Logo";
import { TopBar } from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function SiteHeader({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      const delta = y - lastY.current;
      if (Math.abs(delta) > 6) {
        setHidden(delta > 0 && y > 120);
        lastY.current = y;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,border-color] duration-300 will-change-transform",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        solid || scrolled || open
          ? "border-b border-ink-foreground/10 bg-[oklch(0.16_0.008_262/0.92)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <TopBar />
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-3 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <a href="/#hero" className="min-w-0">
          <Logo />
        </a>

        <nav className="hidden justify-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={`/${item.href}`}
              className={cn(
                "relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
                "text-ink-foreground/85 hover:text-primary",
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden shadow-[var(--shadow-glow)] sm:inline-flex">
            <a href="/#contact">Maak een afspraak</a>
          </Button>
          <a
            href={site.telefoonHref}
            aria-label="Bel ons"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-md border transition-colors sm:hidden",
              "border-ink-foreground/25 text-ink-foreground",
            )}
          >
            <Phone className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            className={cn(
              "grid h-10 w-10 place-items-center rounded-md border transition-colors lg:hidden",
              "border-ink-foreground/25 text-ink-foreground",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-ink-foreground/10 bg-[oklch(0.16_0.008_262)] px-5 py-4 lg:hidden">
          <ul className="flex flex-col">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={`/${item.href}`}
                  onClick={() => setOpen(false)}
                  className="block border-b border-ink-foreground/10 py-3 font-display text-lg uppercase tracking-wide text-ink-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-4 w-full">
            <a href="/#contact" onClick={() => setOpen(false)}>
              Maak een afspraak
            </a>
          </Button>
        </nav>
      )}
    </header>
  );
}
