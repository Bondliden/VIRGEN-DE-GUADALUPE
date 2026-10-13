import { useLang, type Bi } from "@/lib/lang";
import { Coord } from "@/components/Chrome";

/* ─────────────────────────────────────────────
   Atelier Zero §11 — la placa de la Virgen.

   La portada abre con el ayate a tamaño de héroe (Fig. 01, en Hero.tsx).
   Las cinco páginas restantes llevan la misma imagen como placa, con la
   etiqueta al lado: una sola pieza reutilizada, así el rostro de la Virgen
   está en las seis direcciones sin repetir el héroe. El archivo es un
   recorte del ayate completo hecho sobre tilma-hero.jpg — autoría y
   licencia en public/images/guadalupe/CREDITS.md.
   ───────────────────────────────────────────── */

export function VirginPlate({
  fig,
  caption,
  className = "",
}: {
  /** Lámina de la serie: la de la portada es la 01. */
  fig: string;
  /** Pie de la etiqueta, en los dos idiomas. */
  caption: Bi;
  className?: string;
}) {
  const { t } = useLang();

  return (
    <figure
      className={`mt-12 flex flex-col items-center gap-6 border border-ink/20 bg-bone p-5 sm:flex-row sm:items-center sm:gap-8 sm:p-6 ${className}`}
    >
      <div className="gd-glow relative w-[9.5rem] flex-none sm:w-[11rem] lg:w-[15rem]">
        <img
          src="/images/guadalupe/tilma-plate.jpg"
          alt={t({
            es: "La imagen de Santa María de Guadalupe venerada en la Basílica del Tepeyac: recorte del ayate de fibra de maguey de 1531",
            en: "The image of Our Lady of Guadalupe venerated at the Basilica of Tepeyac: a crop of the 1531 maguey-fibre ayate",
          })}
          width={640}
          height={773}
          loading="lazy"
          decoding="async"
          className="gd-frame relative z-10 w-full"
        />
      </div>
      <figcaption className="text-center sm:border-l sm:border-ink/20 sm:pl-8 sm:text-left">
        <Coord className="block uppercase">
          {`Fig. ${fig} · Ayate de fibra de maguey · Tepeyac, 1531`}
        </Coord>
        <p className="mt-3 max-w-prose font-serif text-[19px] italic leading-relaxed text-inkSoft">
          {t(caption)}
        </p>
      </figcaption>
    </figure>
  );
}
