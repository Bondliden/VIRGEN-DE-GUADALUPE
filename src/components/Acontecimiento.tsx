import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/lang";
import {
  acontecimientoSection,
  discoveries,
  mantle,
  panels,
  tilmaSection,
  tilmaSymbols,
} from "@/data/acontecimiento";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";
import { VirginSacredDisplay } from "@/components/VirginSacredDisplay";

/* Section II — the five panels of the Guadalupan Event.
   §5: tabs are a printed contents list, not a web widget — roman numeral,
   label, hairline. Authority order keeps the accent to a single use. */

const panelImages: Record<string, { src: string; caption: string }> = {
  historia: {
    src: "/images/guadalupe/tepeyac.jpg",
    caption: "El cerro del Tepeyac hoy",
  },
  nican: {
    src: "/images/guadalupe/nican-mopohua.jpg",
    caption: "Nican Mopohua · Biblioteca Pública de Nueva York",
  },
  tilma: {
    src: "/images/guadalupe/tilma-detail.jpg",
    caption: "Detalle del ayate · rostro y manto",
  },
  juandiego: {
    src: "/images/guadalupe/basilica.jpg",
    caption: "Acceso poniente de la Basílica de Guadalupe",
  },
  zumarraga: {
    src: "/images/guadalupe/basilica-air.jpg",
    caption: "La Basílica y el Tepeyac desde el aire",
  },
};

/* The three editorial pieces that used to sit loose below the tab row are now
   enunciados like the five sourced panels: eight headings in the contents
   list, and each one carries only its own content. */
const extraTabs = [
  {
    id: "descifrada",
    roman: "VI",
    label: { es: "La imagen, descifrada", en: "The image, decoded" },
  },
  { id: "manto", roman: "VII", label: { es: "El manto", en: "The mantle" } },
  {
    id: "hallazgos",
    roman: "VIII",
    label: { es: "Lo que se ha descubierto", en: "What has been found" },
  },
];

const tabs = [
  ...panels.map((item) => ({ id: item.id, roman: item.roman, label: item.label })),
  ...extraTabs,
];

export function Acontecimiento() {
  const { t } = useLang();
  const [active, setActive] = useState(panels[0].id);
  const isExtra = extraTabs.some((item) => item.id === active);
  const panel = isExtra ? null : panels.find((item) => item.id === active) ?? panels[0];
  const plate = panel ? panelImages[panel.id] : panelImages[panels[0].id];

  const panelRef = useRef<HTMLDivElement | null>(null);
  const painted = useRef(false);

  /* Every tab is a real URL: #acontecimiento-<id>. Deep links, the browser
     back/forward buttons and a reload all land on the right panel. */
  useEffect(() => {
    const fromHash = () => {
      const slug = window.location.hash.replace("#acontecimiento-", "");
      if (tabs.some((item) => item.id === slug)) setActive(slug);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const openTab = (id: string) => {
    setActive(id);
    if (window.location.hash !== `#acontecimiento-${id}`) {
      window.history.replaceState(null, "", `#acontecimiento-${id}`);
    }
  };

  /* Scroll the freshly opened panel into view — but not on the first paint,
     where that would yank the visitor down the page. */
  useEffect(() => {
    if (!painted.current) {
      painted.current = true;
      return;
    }
    panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [active]);

  return (
    <>
      <VideoHero
        id="acontecimiento-hero"
        roman="II"
        eyebrow={acontecimientoSection.eyebrow}
        titleMain={acontecimientoSection.title}
        titleItalic={{ es: "Las Apariciones y la Tilma", en: "The Apparitions and the Tilma" }}
        subtitle={acontecimientoSection.intro}
        videoSrc="/videos/heroes/acontecimiento.mp4"
        posterSrc="/videos/heroes/acontecimiento.jpg"
        pageOf="003 / 006"
        badge={{ es: "Diciembre de 1531 · Cerro del Tepeyac", en: "December 1531 · Tepeyac Hill" }}
        ctaPrimary={{ label: { es: "Explorar los Paneles", en: "Explore the Panels" }, href: "#paneles-acontecimiento" }}
        ctaSecondary={{ label: { es: "El Lienzo Milagroso", en: "The Miraculous Canvas" }, href: "#lienzo-milagroso" }}
      />

      <section id="acontecimiento" className="py-16 sm:py-24" data-od-id="acontecimiento">
        <Container>
          <div id="paneles-acontecimiento" className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>{t(acontecimientoSection.eyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(34px,5.2vw,64px)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-inkSoft">
                {t(acontecimientoSection.title)}
                <Dot />
              </h2>
            </div>
            <p className="text-body text-inkMute">{t(acontecimientoSection.intro)}</p>
          </div>

        {/* ── Contents list ── */}
        <nav
          className="mt-12 border-t border-ink/20"
          aria-label={t(acontecimientoSection.tabsLabel)}
        >
          <ul className="flex flex-wrap">
            {tabs.map((item) => {
              const on = item.id === active;
              return (
                <li key={item.id}>
                  <a
                    href={`#acontecimiento-${item.id}`}
                    onClick={(event) => {
                      event.preventDefault();
                      openTab(item.id);
                    }}
                    aria-current={on ? "true" : undefined}
                    className={[
                      "flex items-baseline gap-2 border-b-2 px-4 py-3 text-left transition-colors",
                      on
                        ? "border-accentRose text-inkSoft"
                        : "border-transparent text-inkFaint hover:text-inkMute",
                    ].join(" ")}
                  >
                    <span className={`gd-roman ${on ? "" : "text-inkFaint"}`}>{item.roman}.</span>
                    <span className="text-eyebrow font-semibold uppercase tracking-eyebrow">
                      {t(item.label)}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* ── Active enunciado ──
            Eight headings, and each one carries only its own content. The five
            sourced panels read as a two-column page; the three editorial pieces
            take the layout their own material asks for. The wrapper keeps the
            anchor and the scroll target in one place whichever tab is open. */}
        <div ref={panelRef} id={`acontecimiento-${active}`} className="mt-12 scroll-mt-28">
          {panel ? (
        <article className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h3 className="font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-inkSoft">
              {t(panel.title)}
            </h3>
            <p className="mt-5 font-serif text-xl italic leading-relaxed text-inkSoft">
              {t(panel.lead)}
            </p>

            <div className="mt-8 space-y-6">
              {panel.blocks.map((block) => (
                <div key={block.title.es} className="border-t border-ink/20 pt-4">
                  <h4 className="gd-eyebrow">{t(block.title)}</h4>
                  <p className="mt-3 text-body leading-relaxed text-inkMute">{t(block.body)}</p>
                </div>
              ))}
            </div>

            {panel.quote ? (
              <blockquote className="mt-10 border-l-2 border-accentRose pl-5">
                <p className="font-serif text-[clamp(18px,2vw,24px)] italic leading-relaxed text-inkSoft">
                  {t(panel.quote.text)}
                </p>
                <footer className="gd-coord mt-3 uppercase">{t(panel.quote.source)}</footer>
              </blockquote>
            ) : null}
          </div>

          <figure className="lg:sticky lg:top-28 lg:self-start">
            <img
              src={plate.src}
              alt={t({ es: plate.caption, en: plate.caption })}
              loading="lazy"
              className="w-full border border-ink/20"
            />
            <figcaption className="mt-3">
              <Coord className="block uppercase">{plate.caption}</Coord>
            </figcaption>
          </figure>
          </article>
          ) : null}

          {/* ── VI · La imagen, descifrada ──
              The two readings are set in two typefaces on purpose: the Nahua
              reading in the serif italic (a primary-source voice), the
              Christian reading in the sans. Two worlds, one image. */}
          {active === "descifrada" ? (
        <div>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Eyebrow>{t(tilmaSection.eyebrow)}</Eyebrow>
              <h3 className="mt-4 font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-inkSoft">
                {t(tilmaSection.title)}
                <Dot />
              </h3>
            </div>
            <p className="font-serif text-xl italic leading-relaxed text-inkSoft">
              {t(tilmaSection.lead)}
            </p>
          </div>

          <div className="mt-10 hidden border-b border-ink/25 pb-2 lg:grid lg:grid-cols-[2.5rem_1.05fr_1.3fr_1.3fr] lg:gap-6">
            <span aria-hidden />
            <Coord className="uppercase">{t(tilmaSection.colElement)}</Coord>
            <Coord className="uppercase">{t(tilmaSection.colNahuatl)}</Coord>
            <Coord className="uppercase">{t(tilmaSection.colChristian)}</Coord>
          </div>

          <ol className="lg:border-b-0">
            {tilmaSymbols.map((symbol) => (
              <li
                key={symbol.n}
                className="grid gap-x-6 gap-y-3 border-b border-ink/10 py-6 lg:grid-cols-[2.5rem_1.05fr_1.3fr_1.3fr]"
              >
                <span className="gd-roman">{symbol.n}.</span>

                <h4 className="font-display text-lg font-extrabold uppercase leading-tight tracking-[0.02em] text-inkSoft">
                  {t(symbol.element)}
                </h4>

                <p className="font-serif text-[17px] italic leading-relaxed text-inkMute">
                  <span className="gd-coord mr-2 uppercase not-italic lg:hidden">
                    {t({ es: "Náhuatl", en: "Nahuatl" })}:{" "}
                  </span>
                  {t(symbol.nahuatl)}
                </p>

                <p className="text-[15px] leading-relaxed text-inkSoft">
                  <span className="gd-coord mr-2 uppercase lg:hidden">
                    {t({ es: "Cristiano", en: "Christian" })}:{" "}
                  </span>
                  {t(symbol.christian)}
                </p>
              </li>
            ))}
          </ol>

          <p className="gd-coord mt-6 uppercase">{t(tilmaSection.note)}</p>
        </div>
          ) : null}

          {/* ── VII · El manto ──
              The single dark panel of the entire site. Atelier Zero §2 allows
              exactly one, and allows pure white only inside it. The plate is
              container-width rather than full-bleed on purpose: the page keeps
              reading as printed matter with one black page in the middle.
              .gd-stars draws the very sky embroidered on the ayate. */}
          {active === "manto" ? (
        <figure className="gd-stars relative border border-[hsl(var(--gd-gold))] p-1.5">
          <div className="border border-[hsl(var(--gd-gold-soft))] px-6 py-14 sm:px-12 sm:py-20">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <span className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-gold-soft))]">
                  <span
                    className="h-px w-[18px] bg-[hsl(var(--gd-gold-soft))]"
                    aria-hidden
                  />
                  {t(mantle.eyebrow)}
                </span>

                <blockquote className="mt-7">
                  <p className="font-serif text-[clamp(30px,4.8vw,60px)] italic leading-[1.12] text-[hsl(var(--gd-on-dark))]">
                    {t(mantle.quote)}
                  </p>
                  <footer className="gd-coord mt-7 uppercase text-[hsl(var(--gd-gold-soft))]">
                    {t(mantle.source)}
                  </footer>
                </blockquote>
              </div>

              <div className="border-t border-[hsl(var(--gd-gold-soft))] pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
                <p className="font-display text-[clamp(58px,8.5vw,116px)] font-extrabold leading-none tracking-[-0.02em] text-[hsl(var(--gd-gold-soft))]">
                  {mantle.stars}
                </p>
                <p className="gd-coord mt-3 uppercase text-[hsl(var(--gd-gold-soft))]">
                  {t(mantle.starsLabel)}
                </p>
                <p className="mt-7 text-[16px] leading-relaxed text-[hsl(var(--gd-on-dark-soft))]">
                  {t(mantle.body)}
                </p>

                {/* El detalle que cambia todo: el cielo está visto desde arriba. */}
                <div className="mt-8 border-t border-[hsl(var(--gd-gold-soft))] pt-6">
                  <p className="gd-coord uppercase text-[hsl(var(--gd-gold-soft))]">
                    {t(mantle.perspectiveLabel)}
                  </p>
                  <p className="mt-3 font-serif text-[19px] italic leading-relaxed text-[hsl(var(--gd-on-dark))]">
                    {t(mantle.perspective)}
                  </p>
                </div>

                <p className="gd-coord mt-7 uppercase text-[hsl(var(--gd-gold-soft))]">
                  {t(mantle.attribution)}
                </p>
              </div>
            </div>
          </div>
        </figure>
          ) : null}

          {/* ── VIII · What has been found in the Tilma ── */}
          {active === "hallazgos" ? (
        <div>
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <h3 className="font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-inkSoft">
              {t(acontecimientoSection.discoveriesTitle)}
              <Dot />
            </h3>
            <p className="text-[15px] leading-relaxed text-inkMute">
              {t(acontecimientoSection.discoveriesNote)}
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-ink/20 sm:grid-cols-2 lg:grid-cols-3">
            {discoveries.map((item) => (
              <article key={item.id} className="flex flex-col bg-bone p-6">
                <Coord className="uppercase">{item.year}</Coord>
                <h4 className="mt-3 font-display text-lg font-semibold leading-tight text-inkSoft">
                  {t(item.title)}
                </h4>
                <Coord className="mt-2 block uppercase">{item.whose}</Coord>
                <p className="mt-4 text-[15px] leading-relaxed text-inkMute">{t(item.body)}</p>
              </article>
            ))}
          </div>

          <p className="gd-coord mt-6 uppercase">{t(acontecimientoSection.sourceNote)}</p>
        </div>
          ) : null}
        </div>

        {/* ── Cuadro de la Virgen: El Milagro del Ayate ante el Obispo Zumárraga ── */}
        <div id="lienzo-milagroso">
          <VirginSacredDisplay variant="miracle-relic" />
        </div>
      </Container>
    </section>
    </>
  );
}
