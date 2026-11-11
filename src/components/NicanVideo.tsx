import { useState } from "react";
import { BookOpen, Download, Headphones } from "lucide-react";
import { useLang, type Bi } from "@/lib/lang";
import { links } from "@/data/links";
import { Coord } from "@/components/Chrome";

/* Dentro de la pestaña «Nican Mopohua» del Acontecimiento: escuchar el
   relato, por partes, y leerlo en seis idiomas.

   Las grabaciones son verticales (9:16): la voz, y encima los cuadros y
   murales de las apariciones, cada uno cuando el relato llega a lo que
   muestra. Por eso se pintan como un retrato estrecho al lado del texto y no
   como un vídeo panorámico. Las partes se eligen con dos botones; cuando
   llegue la tercera, basta con añadirla en data/links.ts y su resumen aquí.

   El PDF es la edición del Instituto Superior de Estudios Guadalupanos. Cada
   idioma abre el documento en su primera página (#page=N). */

const partNames: Bi[] = [
  { es: "Primera parte", en: "Part one" },
  { es: "Segunda parte", en: "Part two" },
  { es: "Tercera parte", en: "Part three" },
  { es: "Cuarta parte", en: "Part four" },
];

const partSummaries: Bi[] = [
  {
    es: "Desde el principio: el amanecer en el Tepeyac, el canto de las aves, el primer encuentro de Juan Diego con la Virgen y su primera visita al obispo fray Juan de Zumárraga, que todavía no le cree.",
    en: "From the beginning: dawn at Tepeyac, the song of the birds, Juan Diego's first meeting with Our Lady and his first visit to Bishop Juan de Zumárraga, who does not yet believe him.",
  },
  {
    es: "Juan Diego le ruega que mande a otro, y ella insiste: tiene que ser él. Vuelve al obispo, que le pide una señal; los criados que lo siguen lo pierden junto al Tepeyac. Su tío Juan Bernardino cae gravemente enfermo, y la Virgen le sale al encuentro en el camino.",
    en: "Juan Diego begs her to send someone else, and she insists it must be him. He returns to the bishop, who asks for a sign; the servants who follow him lose him by Tepeyac. His uncle Juan Bernardino falls gravely ill, and Our Lady comes out to meet him on the road.",
  },
];

/* Página del PDF (la física, no la impresa) donde empieza cada idioma. */
const languages: { label: Bi; page: number; lang: string }[] = [
  { label: { es: "Español", en: "Spanish" }, page: 7, lang: "es" },
  { label: { es: "Inglés", en: "English" }, page: 19, lang: "en" },
  { label: { es: "Italiano", en: "Italian" }, page: 31, lang: "it" },
  { label: { es: "Portugués", en: "Portuguese" }, page: 41, lang: "pt" },
  { label: { es: "Francés", en: "French" }, page: 53, lang: "fr" },
  { label: { es: "Náhuatl", en: "Nahuatl" }, page: 65, lang: "nah" },
];

export function NicanVideo() {
  const { t, isEs } = useLang();
  const parts = links.nicanMopohuaPartes;
  const pdf = links.nicanMopohuaPdf;
  const [active, setActive] = useState(0);
  if (!parts.length && !pdf) return null;
  const part = parts[active];
  /* El idioma de la página va primero entre los botones. */
  const ordered = isEs ? languages : [languages[1], languages[0], ...languages.slice(2)];

  return (
    <div className="mt-12 border border-ink/20 bg-bone p-5 sm:p-8">
      <div className={`grid gap-8 ${part ? "lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-12" : ""}`}>
        {part ? (
          <figure className="mx-auto w-full max-w-[19rem]">
            <div className="gd-frame aspect-[9/16] w-full overflow-hidden bg-ink">
              <video
                key={part.src}
                src={part.src}
                poster={part.poster}
                controls
                preload="none"
                playsInline
                className="h-full w-full object-cover"
                title={`${t({ es: "Nican Mopohua", en: "Nican Mopohua" })} · ${t(partNames[active])}`}
              />
            </div>
            <figcaption>
              <Coord className="mt-3 block text-center uppercase">
                {t(partNames[active])} · {part.minutes} · {t({ es: "en español", en: "in Spanish" })}
              </Coord>
            </figcaption>
          </figure>
        ) : null}

        <div className="flex flex-col">
          {part ? (
            <>
              <div className="flex items-center gap-3">
                <Headphones className="h-6 w-6 flex-none text-accentRose" aria-hidden />
                <h4 className="font-serif text-[clamp(24px,2.8vw,34px)] font-medium italic leading-tight text-inkSoft">
                  {t({ es: "¿Quieres escuchar el Nican Mopohua?", en: "Would you like to listen to the Nican Mopohua?" })}
                </h4>
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-inkMute">
                {t({
                  es: "El relato en voz alta, por partes, con los cuadros y murales de las apariciones que acompañan cada momento.",
                  en: "The account read aloud, in parts, with the paintings and murals of the apparitions accompanying each moment.",
                })}
              </p>

              {parts.length > 1 ? (
                <div className="mt-5 flex flex-wrap gap-2" role="tablist" aria-label={t({ es: "Partes de la grabación", en: "Parts of the recording" })}>
                  {parts.map((p, i) => {
                    const on = i === active;
                    return (
                      <button
                        key={p.src}
                        type="button"
                        role="tab"
                        aria-selected={on}
                        onClick={() => setActive(i)}
                        className={`rounded-full border px-4 py-2 text-[15px] font-semibold transition-colors ${
                          on
                            ? "border-accentRose bg-accentRose text-[hsl(var(--gd-accent-on))]"
                            : "border-ink/25 text-inkSoft hover:border-accentRose hover:text-accentRoseInk"
                        }`}
                      >
                        {t(partNames[i])}
                        <span className={`ml-2 text-[13px] font-normal ${on ? "" : "text-inkMute"}`}>{p.minutes}</span>
                      </button>
                    );
                  })}
                </div>
              ) : null}

              {partSummaries[active] ? (
                <p className="mt-4 text-body leading-relaxed text-inkMute">{t(partSummaries[active])}</p>
              ) : null}
            </>
          ) : null}

          {pdf ? (
            <div className={part ? "mt-8 border-t border-guadalupe-gold/60 pt-7" : ""}>
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 flex-none text-accentRose" aria-hidden />
                <h4 className="font-serif text-[clamp(22px,2.4vw,30px)] font-medium italic leading-tight text-inkSoft">
                  {t({ es: "Léelo en seis idiomas", en: "Read it in six languages" })}
                </h4>
              </div>
              <p className="mt-3 text-[16px] leading-relaxed text-inkMute">
                {t({
                  es: "El texto completo, en la edición del Instituto Superior de Estudios Guadalupanos. Elige el idioma y el documento se abre en su primera página.",
                  en: "The complete text, in the edition of the Instituto Superior de Estudios Guadalupanos. Choose the language and the document opens at its first page.",
                })}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
                {ordered.map((item) => (
                  <li key={item.lang}>
                    <a
                      href={`${pdf}#page=${item.page}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      hrefLang={item.lang}
                      className="flex items-center justify-between gap-2 border border-ink/25 bg-paper px-4 py-3 text-[15px] font-semibold text-inkSoft transition-colors hover:border-accentRose hover:text-accentRoseInk"
                    >
                      {t(item.label)}
                      <span aria-hidden className="text-accentRose">
                        →
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={pdf}
                download
                className="mt-5 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-eyebrow text-accentRoseInk hover:underline"
              >
                <Download className="h-4 w-4" aria-hidden />
                {t({ es: "Descargar el PDF (3,4 MB)", en: "Download the PDF (3.4 MB)" })}
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
