import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { codice, codiceQuote, codiceSections } from "@/data/codice";
import { Coord, Dot } from "@/components/Chrome";

/* Códice Santa María de Guadalupe (póster del Cango. Dr. Eduardo Chávez),
   dentro de «La Tilma».

   No es un texto largo que se desplaza: es un códice de páginas. Cada parte
   (el nombre, los ojos, el rostro, el broche…) ocupa su propia página, con
   la Tilma al lado, el número de página y, en las partes largas, el texto en
   dos columnas como en una página impresa. Arriba, todas las páginas a la
   vista para saltar a la que se quiera; abajo, anterior y siguiente. La
   última página es la cita de san Juan Pablo II. */

type Page = {
  id: string;
  title: string;
  paragraphs: string[];
  quote?: { text: string; source: string };
};

const pages: Page[] = [
  ...codiceSections,
  {
    id: "codice-cita",
    title: codiceQuote.title,
    paragraphs: [],
    quote: { text: codiceQuote.text, source: codiceQuote.source },
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function Codice() {
  const { t, isEs } = useLang();
  const [index, setIndex] = useState(0);
  const readerRef = useRef<HTMLDivElement | null>(null);
  const page = pages[index];
  const total = pages.length;

  const go = (next: number) => {
    const clamped = Math.max(0, Math.min(total - 1, next));
    setIndex(clamped);
    /* Al cambiar de página, la página nueva se ve desde su principio. */
    window.requestAnimationFrame(() => {
      const top = readerRef.current?.getBoundingClientRect().top ?? 0;
      if (top < 80 || top > window.innerHeight * 0.6) {
        readerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  };

  const chars = page.paragraphs.join("").length;
  const twoColumns = chars > 1000;

  return (
    <section
      id="codice"
      className="mt-20 scroll-mt-28 border-t-2 border-guadalupe-gold/70 pt-12"
      aria-labelledby="codice-titulo"
    >
      <header className="max-w-3xl">
        <Coord className="block uppercase">{t(codice.institute)}</Coord>
        <h3
          id="codice-titulo"
          className="mt-4 font-display text-[clamp(30px,4.2vw,54px)] font-extrabold uppercase leading-[1.02] tracking-[-0.025em] text-inkSoft"
        >
          {t(codice.title)}
          <Dot />
        </h3>
        <p className="mt-3 font-serif text-[clamp(20px,2.2vw,28px)] italic text-accentRoseInk">
          {t(codice.subtitle)}
        </p>
        {!isEs ? (
          <p className="mt-4 border-l-2 border-accentRose pl-4 text-[15px] text-inkMute">
            {t(codice.languageNote)}
          </p>
        ) : null}
      </header>

      {/* ── Todas las páginas a la vista ── */}
      <nav aria-label={t(codice.indexLabel)} className="mt-10">
        <Coord className="mb-3 block uppercase">{t(codice.indexLabel)}</Coord>
        <ol className="flex flex-wrap gap-2">
          {pages.map((item, i) => {
            const on = i === index;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={on ? "page" : undefined}
                  className={[
                    "flex items-baseline gap-2 border px-3 py-2 text-left text-[14px] leading-snug transition-colors",
                    on
                      ? "border-accentRose bg-accentRose text-[hsl(var(--gd-accent-on))]"
                      : "border-ink/25 bg-bone text-inkMute hover:border-accentRose hover:text-inkSoft",
                  ].join(" ")}
                >
                  <span className={`font-display text-[12px] font-bold tabular-nums ${on ? "" : "text-accentRoseInk"}`}>
                    {pad(i + 1)}
                  </span>
                  <span>{item.title.replace("Cita de San Juan Pablo II", "San Juan Pablo II")}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </nav>

      {/* ── La página abierta ── */}
      <div ref={readerRef} className="mt-8 grid scroll-mt-28 gap-8 lg:grid-cols-[17rem_minmax(0,1fr)] lg:gap-10">
        <figure className="hidden lg:block">
          <div className="gd-glow relative sticky top-28">
            <img
              src="/images/guadalupe/tilma-hero.jpg"
              alt={t({
                es: "La Tilma de Santa María de Guadalupe, a cuyo lado se lee el Códice",
                en: "The Tilma of Saint Mary of Guadalupe, beside which the Codex is read",
              })}
              width={1536}
              height={2048}
              loading="lazy"
              className="gd-frame relative z-10 w-full"
            />
          </div>
        </figure>

        <article
          key={page.id}
          aria-live="polite"
          className="animate-fade-up border border-ink/25 bg-bone p-6 shadow-[0_1px_0_hsl(var(--gd-gold)/0.6)] sm:p-10"
        >
          <div className="flex items-end justify-between gap-4 border-b border-guadalupe-gold/60 pb-5">
            <h4 className="font-display text-[clamp(26px,3.2vw,42px)] font-extrabold uppercase leading-[1.05] tracking-[-0.015em] text-inkSoft">
              {page.title}
            </h4>
            <p className="flex-none font-display text-[clamp(30px,4vw,52px)] font-semibold leading-none tabular-nums text-accentRose">
              {pad(index + 1)}
              <span className="ml-1 text-[0.4em] font-medium text-inkFaint">/ {pad(total)}</span>
            </p>
          </div>

          {page.quote ? (
            <blockquote className="gd-stars mt-8 border border-guadalupe-gold/70 p-6 sm:p-10">
              <p className="font-serif text-[clamp(21px,2.4vw,29px)] italic leading-[1.5] text-[hsl(var(--gd-on-dark))]">
                “{page.quote.text}”
              </p>
              <footer className="mt-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-guadalupe-goldSoft">
                — {page.quote.source}
              </footer>
            </blockquote>
          ) : (
            <div className={`mt-7 ${twoColumns ? "lg:columns-2 lg:gap-10" : ""}`}>
              {page.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  className={[
                    "font-serif text-[19px] leading-[1.7] text-inkSoft sm:text-[20px]",
                    i > 0 ? "mt-5" : "",
                    i === 0
                      ? "first-letter:float-left first-letter:mr-2 first-letter:mt-1 first-letter:font-display first-letter:text-[3.4rem] first-letter:font-bold first-letter:leading-[0.8] first-letter:text-accentRose"
                      : "",
                  ].join(" ")}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          )}

          {/* ── Anterior · siguiente ── */}
          <div className="mt-10 flex items-center justify-between gap-3 border-t border-ink/20 pt-5">
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              className="inline-flex items-center gap-2 border border-ink/30 px-4 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-accentRose hover:text-accentRoseInk disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {t({ es: "Anterior", en: "Previous" })}
            </button>
            <Coord className="hidden uppercase sm:block">
              {t({ es: "Página", en: "Page" })} {pad(index + 1)} / {pad(total)}
            </Coord>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index === total - 1}
              className="inline-flex items-center gap-2 bg-accentRose px-4 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80 disabled:pointer-events-none disabled:opacity-35"
            >
              {t({ es: "Siguiente", en: "Next" })}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
          </div>
        </article>
      </div>

      <p className="mt-8 text-[15px] text-inkMute">
        <span className="font-semibold text-inkSoft">{codice.author}</span> ·{" "}
        <a className="gd-link-underline" href={`mailto:${codice.email}`}>
          {codice.email}
        </a>{" "}
        ·{" "}
        <a className="gd-link-underline" href={codice.webHref} target="_blank" rel="noreferrer noopener">
          {codice.web}
        </a>
      </p>
    </section>
  );
}
