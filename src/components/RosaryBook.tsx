import { useCallback, useEffect, useRef, useState, type ReactElement } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Maximize2, X } from "lucide-react";
import { useLang, type Bi } from "@/lib/lang";
import { links } from "@/data/links";
import { Coord } from "@/components/Chrome";

/* El Santo Rosario como un librito que se hojea.

   El PDF de la Basílica viene montado para imprenta (cada hoja trae dos
   páginas en orden de cuadernillo). Se cortó en sus 28 páginas y se ordenó
   del 1 al 28 en /public/images/rosario/pagina-NN.webp.

   En pantalla ancha se ve abierto, a doble página, y la hoja gira sobre el
   lomo; cerrado (portada y contraportada) se ve una sola página centrada,
   como un libro de verdad. En el móvil se ve página a página y la hoja se
   levanta hacia la izquierda. Se pasa con las flechas, tocando la página,
   deslizando el dedo o con el teclado. «Ampliar» abre la página a tamaño de
   lectura, porque el texto del original es pequeño. */

const TOTAL = 28;
const LAST_SPREAD = TOTAL / 2; // 0 = portada sola … 14 = contraportada sola
const src = (n: number) => `/images/rosario/pagina-${String(n).padStart(2, "0")}.webp`;

const chapters: { label: Bi; page: number }[] = [
  { label: { es: "Portada", en: "Cover" }, page: 1 },
  { label: { es: "Oraciones introductorias", en: "Opening prayers" }, page: 2 },
  { label: { es: "Modelo I", en: "Model I" }, page: 3 },
  { label: { es: "Modelo II", en: "Model II" }, page: 10 },
  { label: { es: "Modelo III", en: "Model III" }, page: 17 },
  { label: { es: "Ofrecimiento", en: "Offering" }, page: 26 },
];

/** Páginas [izquierda, derecha] de cada pliego abierto. */
function spreadPages(s: number): [number | null, number | null] {
  if (s <= 0) return [null, 1];
  if (s >= LAST_SPREAD) return [TOTAL, null];
  return [2 * s, 2 * s + 1];
}
const spreadOf = (page: number) => Math.floor(page / 2);

function useWide() {
  const query = "(min-width: 768px)";
  const [wide, setWide] = useState(() => typeof window !== "undefined" && window.matchMedia(query).matches);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const on = () => setWide(mq.matches);
    mq.addEventListener("change", on);
    return () => mq.removeEventListener("change", on);
  }, []);
  return wide;
}

function Page({ n, side, t }: { n: number | null; side: "left" | "right" | "single"; t: (b: Bi) => string }) {
  if (n === null) return <div className="h-full w-full" aria-hidden />;
  /* Sombra suave hacia el lomo: así se nota que es papel doblado. */
  const spine =
    side === "left"
      ? "bg-[linear-gradient(to_left,rgba(60,30,20,0.18),transparent_9%)]"
      : side === "right"
        ? "bg-[linear-gradient(to_right,rgba(60,30,20,0.18),transparent_9%)]"
        : "bg-[linear-gradient(to_right,rgba(60,30,20,0.10),transparent_6%)]";
  return (
    <div className="relative h-full w-full bg-white">
      <img
        src={src(n)}
        alt={t({ es: `Página ${n} de ${TOTAL} del Santo Rosario Guadalupano`, en: `Page ${n} of ${TOTAL} of the Guadalupan Holy Rosary` })}
        className="h-full w-full select-none object-cover"
        draggable={false}
        loading={n <= 3 ? "eager" : "lazy"}
      />
      <div className={`pointer-events-none absolute inset-0 ${spine}`} aria-hidden />
    </div>
  );
}

type Flip = { dir: "next" | "prev"; to: number } | null;

export function RosaryBook() {
  const { t } = useLang();
  const wide = useWide();
  /* Página «de referencia»: la de la izquierda del pliego, o la única. */
  const [page, setPage] = useState(1);
  const [flip, setFlip] = useState<Flip>(null);
  const [zoom, setZoom] = useState(false);
  const startX = useRef<number | null>(null);

  const index = wide ? spreadOf(page) : page;
  const max = wide ? LAST_SPREAD : TOTAL;
  const min = wide ? 0 : 1;
  const toPage = useCallback((i: number) => (wide ? Math.max(1, 2 * i) : i), [wide]);

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (flip) return;
      const to = dir === "next" ? index + 1 : index - 1;
      if (to < min || to > max) return;
      setFlip({ dir, to });
    },
    [flip, index, min, max],
  );

  const jump = (target: number) => {
    if (flip) return;
    const to = wide ? spreadOf(target) : target;
    if (to === index) return;
    setFlip({ dir: to > index ? "next" : "prev", to });
  };

  /* En la vista ampliada no hay hoja que gire: se cambia de página al momento
     y la vista vuelve arriba, al principio de la página nueva. */
  const zoomRef = useRef<HTMLDivElement | null>(null);
  const zoomStart = useRef<{ x: number; y: number } | null>(null);
  const step = useCallback(
    (dir: "next" | "prev") => {
      const to = dir === "next" ? index + 1 : index - 1;
      if (to < min || to > max) return;
      setFlip(null);
      setPage(toPage(to));
      zoomRef.current?.scrollTo({ top: 0 });
    },
    [index, min, max, toPage],
  );

  const done = () => {
    if (!flip) return;
    setPage(toPage(flip.to));
    setFlip(null);
  };

  /* Las páginas de al lado, ya cargadas para que la hoja no gire en blanco. */
  useEffect(() => {
    const around = wide ? [...spreadPages(index - 1), ...spreadPages(index + 1)] : [page - 1, page + 1];
    around.forEach((n) => {
      if (n && n >= 1 && n <= TOTAL) new Image().src = src(n);
    });
  }, [index, page, wide]);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoom(false);
      if (e.key === "ArrowRight") step("next");
      if (e.key === "ArrowLeft") step("prev");
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [zoom, step]);

  const ease = [0.645, 0.045, 0.355, 1] as const;
  const duration = wide ? 0.85 : 0.6;

  /* ── Qué se ve debajo y qué gira ── */
  let book: ReactElement;
  if (wide) {
    const [curL, curR] = spreadPages(index);
    const target = flip ? spreadPages(flip.to) : null;
    const underL = flip?.dir === "prev" ? target![0] : curL;
    const underR = flip?.dir === "next" ? target![1] : curR;
    /* Cerrado, el libro se centra sobre la página que se ve. */
    const showing = flip ? flip.to : index;
    const shift = showing === 0 ? "-25%" : showing === LAST_SPREAD ? "25%" : "0%";

    book = (
      <motion.div
        className="relative mx-auto grid aspect-[2400/1855] w-[min(100%,calc((100svh_-_15rem)*1.294),62rem)] grid-cols-2 [perspective:2600px]"
        animate={{ x: shift }}
        transition={{ duration, ease }}
      >
        <div
          className={`relative ${underL ? "shadow-[-14px_18px_40px_-18px_rgba(90,40,40,0.45)]" : ""}`}
          onClick={() => go("prev")}
        >
          <Page n={underL} side="left" t={t} />
        </div>
        <div
          className={`relative ${underR ? "shadow-[14px_18px_40px_-18px_rgba(90,40,40,0.45)]" : ""}`}
          onClick={() => go("next")}
        >
          <Page n={underR} side="right" t={t} />
        </div>

        {flip ? (
          <motion.div
            key={`${flip.dir}-${flip.to}`}
            className={`absolute top-0 h-full w-1/2 [transform-style:preserve-3d] ${
              flip.dir === "next" ? "left-1/2 origin-left" : "left-0 origin-right"
            }`}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: flip.dir === "next" ? -180 : 180 }}
            transition={{ duration, ease }}
            onAnimationComplete={done}
          >
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <Page n={flip.dir === "next" ? curR : curL} side={flip.dir === "next" ? "right" : "left"} t={t} />
            </div>
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Page n={flip.dir === "next" ? target![0] : target![1]} side={flip.dir === "next" ? "left" : "right"} t={t} />
            </div>
            {/* La luz cambia mientras la hoja está en el aire. */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-[rgba(90,40,40,0.25)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.6, 0] }}
              transition={{ duration, ease: "easeInOut" }}
              aria-hidden
            />
          </motion.div>
        ) : null}
      </motion.div>
    );
  } else {
    const under = flip ? (flip.dir === "next" ? flip.to : page) : page;
    const leaf = flip ? (flip.dir === "next" ? page : flip.to) : null;
    book = (
      <div className="relative mx-auto aspect-[1200/1855] w-[min(100%,24rem,calc((100svh_-_14rem)*0.647))] [perspective:1800px]">
        <div className="absolute inset-0 shadow-[0_18px_40px_-16px_rgba(90,40,40,0.45)]">
          <Page n={under} side="single" t={t} />
        </div>
        {flip && leaf ? (
          <motion.div
            key={`${flip.dir}-${flip.to}`}
            className="absolute inset-0 origin-left [backface-visibility:hidden]"
            initial={flip.dir === "next" ? { rotateY: 0, opacity: 1 } : { rotateY: -110, opacity: 0 }}
            animate={flip.dir === "next" ? { rotateY: -110, opacity: 0 } : { rotateY: 0, opacity: 1 }}
            transition={{ duration, ease }}
            onAnimationComplete={done}
          >
            <Page n={leaf} side="single" t={t} />
          </motion.div>
        ) : null}
      </div>
    );
  }

  const [visL, visR] = wide ? spreadPages(index) : [page, null];
  const visible = [visL, visR].filter((n): n is number => n !== null);
  const label =
    visible.length === 2
      ? t({ es: `Páginas ${visible[0]} y ${visible[1]} de ${TOTAL}`, en: `Pages ${visible[0]} and ${visible[1]} of ${TOTAL}` })
      : t({ es: `Página ${visible[0]} de ${TOTAL}`, en: `Page ${visible[0]} of ${TOTAL}` });
  const current = [...chapters].reverse().find((c) => c.page <= (visR ?? visL ?? 1));

  return (
    <div id="librito-rosario" className="mt-10 scroll-mt-28 overflow-hidden border border-guadalupe-gold/50 bg-[radial-gradient(ellipse_at_center,hsl(var(--gd-paper))_0%,hsl(var(--gd-bone))_70%)] px-4 py-8 sm:px-8 sm:py-10">
      {/* ── Cabecera ── */}
      <div className="mx-auto max-w-3xl text-center">
        <Coord className="block uppercase">
          {t({ es: "Semana de Oración Guadalupana por la Paz", en: "Guadalupan Week of Prayer for Peace" })}
        </Coord>
        <h4 className="mt-3 font-serif text-[clamp(26px,3.2vw,40px)] font-medium italic leading-tight text-inkSoft">
          {t({ es: "Tres modelos del Rosario guadalupano", en: "Three models of the Guadalupan Rosary" })}
        </h4>
        <p className="mt-3 text-[16px] leading-relaxed text-inkMute" style={{ textAlign: "center", textAlignLast: "center" }}>
          {t({
            es: "Hojéalo como un librito: toca la página, desliza el dedo o usa las flechas.",
            en: "Leaf through it like a little book: tap the page, swipe, or use the arrows.",
          })}
        </p>
      </div>

      {/* ── El libro ── */}
      <div
        className="mt-8 touch-pan-y outline-none"
        role="region"
        aria-roledescription={t({ es: "librito", en: "booklet" })}
        aria-label={t({ es: "Santo Rosario Guadalupano", en: "Guadalupan Holy Rosary" })}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go("next");
          if (e.key === "ArrowLeft") go("prev");
        }}
        onPointerDown={(e) => (startX.current = e.clientX)}
        onPointerUp={(e) => {
          if (startX.current === null) return;
          const dx = e.clientX - startX.current;
          startX.current = null;
          if (Math.abs(dx) > 45) go(dx < 0 ? "next" : "prev");
          else if (!wide) {
            const box = (e.currentTarget as HTMLElement).getBoundingClientRect();
            go(e.clientX - box.left < box.width / 3 ? "prev" : "next");
          }
        }}
      >
        {book}
      </div>

      {/* ── Mandos ── */}
      <div className="mt-7 flex items-center justify-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => go("prev")}
          disabled={index <= min}
          aria-label={t({ es: "Página anterior", en: "Previous page" })}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-accentRose/60 bg-bone text-accentRoseInk transition-colors hover:bg-accentRose hover:text-[hsl(var(--gd-accent-on))] disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden />
        </button>
        <p className="min-w-[11rem] font-serif text-[18px] italic text-inkSoft" style={{ textAlign: "center", textAlignLast: "center" }} aria-live="polite">
          {label}
          {current ? <span className="block text-[13px] not-italic text-inkMute">{t(current.label)}</span> : null}
        </p>
        <button
          type="button"
          onClick={() => go("next")}
          disabled={index >= max}
          aria-label={t({ es: "Página siguiente", en: "Next page" })}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-accentRose text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80 disabled:pointer-events-none disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" aria-hidden />
        </button>
      </div>

      {/* ── Ampliar: lo más visible después del libro, porque la letra del
           original es pequeña ── */}
      <div className="mt-6 flex justify-center">
        <button
          type="button"
          onClick={() => setZoom(true)}
          className="inline-flex items-center gap-3 rounded-full bg-accentRose px-7 py-3.5 text-[14px] font-semibold uppercase tracking-[0.14em] text-[hsl(var(--gd-accent-on))] shadow-[0_10px_24px_-10px_rgba(120,30,50,0.7)] transition-transform hover:-translate-y-0.5 hover:bg-accentRose/90"
        >
          <Maximize2 className="h-5 w-5" aria-hidden />
          {t({ es: "Ampliar para leer", en: "Enlarge to read" })}
        </button>
      </div>

      {/* ── Ir a una parte ── */}
      <nav aria-label={t({ es: "Partes del Rosario", en: "Parts of the Rosary" })} className="mt-6">
        <ul className="flex flex-wrap justify-center gap-2">
          {chapters.map((c) => {
            const on = current?.page === c.page;
            return (
              <li key={c.page}>
                <button
                  type="button"
                  onClick={() => jump(c.page)}
                  aria-current={on ? "true" : undefined}
                  className={`rounded-full border px-3.5 py-1.5 text-[13px] transition-colors ${
                    on
                      ? "border-accentRose bg-accentRose/10 text-accentRoseInk"
                      : "border-ink/20 text-inkMute hover:border-accentRose hover:text-inkSoft"
                  }`}
                >
                  {t(c.label)}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-eyebrow font-semibold uppercase tracking-eyebrow">
        {links.rosarioPdf ? (
          <a href={links.rosarioPdf} target="_blank" rel="noreferrer noopener" className="inline-flex items-center gap-2 text-inkMute hover:text-inkSoft hover:underline">
            <Download className="h-4 w-4" aria-hidden />
            {t({ es: "PDF original para imprimir", en: "Original PDF to print" })}
          </a>
        ) : null}
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-[13px] leading-relaxed text-inkFaint" style={{ textAlign: "center", textAlignLast: "center" }}>
        {t({
          es: "Subsidio 5 de la Insigne y Nacional Basílica de Guadalupe. Recopilación doctrinal y catequética guadalupana del Siervo de Dios Luis María Martínez, arzobispo de México.",
          en: "Booklet no. 5 of the Insigne y Nacional Basílica de Guadalupe. A doctrinal and catechetical Guadalupan compilation by the Servant of God Luis María Martínez, Archbishop of Mexico.",
        })}
      </p>

      {/* ── A tamaño de lectura, pasando páginas ── */}
      {zoom ? (
        <div
          ref={zoomRef}
          className="fixed inset-0 z-[80] overflow-y-auto bg-[rgba(24,16,18,0.97)] px-3 pb-28 pt-20 sm:px-20"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setZoom(false)}
          onPointerDown={(e) => (zoomStart.current = { x: e.clientX, y: e.clientY })}
          onPointerUp={(e) => {
            const s0 = zoomStart.current;
            zoomStart.current = null;
            if (!s0) return;
            const dx = e.clientX - s0.x;
            const dy = e.clientY - s0.y;
            if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? "next" : "prev");
          }}
        >
          {/* Arriba: dónde estás y cerrar */}
          <div
            className="fixed inset-x-0 top-0 z-10 flex items-center justify-between gap-3 bg-[rgba(30,20,20,0.85)] px-4 py-3 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="font-serif text-[18px] italic text-white/90" style={{ textAlign: "left", textAlignLast: "left" }}>
              {label}
            </p>
            <button
              type="button"
              onClick={() => setZoom(false)}
              aria-label={t({ es: "Cerrar", en: "Close" })}
              className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-bone text-inkSoft shadow-lg"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div
            className="mx-auto grid max-w-[1800px] gap-4 md:grid-cols-[repeat(auto-fit,minmax(0,1fr))]"
            onClick={(e) => e.stopPropagation()}
          >
            {visible.map((n) => (
              <img
                key={n}
                src={src(n)}
                alt={t({ es: `Página ${n}`, en: `Page ${n}` })}
                className="mx-auto w-full max-w-[900px] select-none bg-white shadow-2xl"
                draggable={false}
              />
            ))}
          </div>

          {/* A los lados (pantalla ancha) */}
          {(["prev", "next"] as const).map((dir) => {
            const off = dir === "prev" ? index <= min : index >= max;
            return (
              <button
                key={dir}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(dir);
                }}
                disabled={off}
                aria-label={dir === "prev" ? t({ es: "Página anterior", en: "Previous page" }) : t({ es: "Página siguiente", en: "Next page" })}
                className={`fixed top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-accentRose text-[hsl(var(--gd-accent-on))] shadow-xl transition-opacity hover:bg-accentRose/90 disabled:pointer-events-none disabled:opacity-25 sm:flex ${
                  dir === "prev" ? "left-3" : "right-3"
                }`}
              >
                {dir === "prev" ? <ChevronLeft className="h-7 w-7" aria-hidden /> : <ChevronRight className="h-7 w-7" aria-hidden />}
              </button>
            );
          })}

          {/* Abajo (sobre todo en el móvil) */}
          <div
            className="fixed inset-x-0 bottom-0 z-10 flex items-center justify-center gap-5 bg-[rgba(30,20,20,0.85)] px-4 py-3 backdrop-blur-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => step("prev")}
              disabled={index <= min}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-white/10 disabled:pointer-events-none disabled:opacity-30"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
              {t({ es: "Anterior", en: "Previous" })}
            </button>
            <button
              type="button"
              onClick={() => step("next")}
              disabled={index >= max}
              className="inline-flex items-center gap-2 rounded-full bg-accentRose px-5 py-2.5 text-[14px] font-semibold text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/90 disabled:pointer-events-none disabled:opacity-30"
            >
              {t({ es: "Siguiente", en: "Next" })}
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
