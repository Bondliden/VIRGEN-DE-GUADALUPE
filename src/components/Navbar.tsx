import { useEffect, useRef, useState, type MouseEvent } from "react";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { site } from "@/data/links";
import { Container } from "@/components/Chrome";
import { navRoutes, useRoute, type RouteId } from "@/lib/useRoute";

/* Atelier Zero §4–5: sticky nav carrying the brand mark, up to five nav
   entries and the one accent CTA. Headroom behaviour: hides on scroll
   down, returns on scroll up. */

/* Las cinco entradas de la barra son cinco páginas, no cinco anclajes dentro
   de un mismo documento. La marca abre la portada. */
const navItems = navRoutes.map((route) => ({
  href: `#${route.id}`,
  id: route.id,
  label: route.label,
}));

/** The four-petalled flower of the tilma (Nahui Ollin), used as the mark. */
function TilmaMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden focusable="false">
      <path
        d="M16 2c3.3 4.2 5 7.6 5 10.2 0 2-1.7 3.8-5 3.8s-5-1.8-5-3.8C11 9.6 12.7 6.2 16 2Z"
        fill="currentColor"
      />
      <path
        d="M16 30c-3.3-4.2-5-7.6-5-10.2 0-2 1.7-3.8 5-3.8s5 1.8 5 3.8c0 2.6-1.7 6-5 10.2Z"
        fill="currentColor"
      />
      <path
        d="M2 16c4.2-3.3 7.6-5 10.2-5 2 0 3.8 1.7 3.8 5s-1.8 5-3.8 5C9.6 21 6.2 19.3 2 16Z"
        fill="currentColor"
        opacity="0.72"
      />
      <path
        d="M30 16c-4.2 3.3-7.6 5-10.2 5-2 0-3.8-1.7-3.8-5s1.8-5 3.8-5c2.6 0 6 1.7 10.2 5Z"
        fill="currentColor"
        opacity="0.72"
      />
    </svg>
  );
}

export function Navbar() {
  const { t, lang, toggle } = useLang();
  const route = useRoute();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  /* Un enlace a la página en la que ya estamos no cambia el hash, así que no
     dispara nada: en ese caso subimos al principio a mano. */
  const goTo = (id: RouteId) => (event: MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (id === route) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 40);
      setHidden(y > 420 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 transition-transform duration-300",
        hidden && !open ? "-translate-y-full" : "translate-y-0",
        solid ? "bg-paper/95 shadow-[0_1px_0_0_hsl(var(--gd-ink)/0.14)] backdrop-blur" : "bg-transparent",
      ].join(" ")}
    >
      <Container className="flex items-center justify-between gap-6 py-3">
        <a
          href="#portada"
          onClick={goTo("portada")}
          className="group flex items-center gap-3 text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-accentRose"
        >
          <TilmaMark className="h-8 w-8 text-accentRose transition-transform duration-500 group-hover:rotate-90 sm:h-10 sm:w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[clamp(20px,2.6vw,32px)] font-extrabold uppercase leading-[1.02] tracking-[0.04em]">
              {t(site.short)}
            </span>
            <span className="gd-coord mt-1.5 hidden sm:block">
              19.4845° N · 99.1177° W
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-5 lg:flex xl:gap-9"
          aria-label={t({ es: "Principal", en: "Primary" })}
        >
          {navItems.map((item) => {
            const current = item.id === route;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={goTo(item.id)}
                aria-current={current ? "page" : undefined}
                className={[
                  "gd-link-underline font-display text-[clamp(13px,1.05vw,17px)] font-extrabold uppercase leading-none tracking-[0.08em] transition-colors hover:text-ink",
                  current ? "text-ink" : "text-inkMute",
                ].join(" ")}
              >
                {t(item.label)}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggle}
            aria-label={t({ es: "Cambiar idioma", en: "Switch language" })}
            className="border border-ink/25 px-2.5 py-1.5 text-[13px] font-bold uppercase tracking-[0.08em] text-inkMute transition-colors hover:border-accentRose hover:text-accentRose"
          >
            {lang === "es" ? "ES / EN" : "EN / ES"}
          </button>
          <a
            href="#peregrinar"
            className="hidden bg-accentRose px-4 py-2.5 font-display text-[13px] font-extrabold uppercase tracking-[0.08em] text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/85 sm:inline-block"
          >
            {t({ es: "Peregrinar", en: "Go on pilgrimage" })}
          </a>
          <button
            type="button"
            className="lg:hidden"
            aria-expanded={open}
            aria-label={t({ es: "Abrir menú", en: "Open menu" })}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-ink/15 bg-paper lg:hidden">
          <Container className="flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={goTo(item.id)}
                aria-current={item.id === route ? "page" : undefined}
                className={[
                  "border-b border-ink/10 py-3.5 font-display text-[17px] font-extrabold uppercase tracking-[0.08em]",
                  item.id === route ? "text-ink" : "text-inkMute",
                ].join(" ")}
              >
                {t(item.label)}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
