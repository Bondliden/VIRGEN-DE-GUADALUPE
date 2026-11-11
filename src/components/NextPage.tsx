import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { routes, type RouteId } from "@/lib/useRoute";
import { Container, Coord } from "@/components/Chrome";

/* Al final de cada página, a dónde seguir. Las seis páginas forman un
   recorrido (portada → peregrinaciones → acontecimiento → voces → tienda →
   jubileo) y quien llega al pie no tiene que volver a mirar el menú. La
   última lleva de vuelta al principio. */

const nextHint: Record<RouteId, { es: string; en: string }> = {
  portada: {
    es: "Empieza por el camino: ir a verla al Tepeyac.",
    en: "Begin with the road: going to see her at Tepeyac.",
  },
  peregrinaciones: {
    es: "Antes de ir, conoce lo que ocurrió en el cerro.",
    en: "Before you go, learn what happened on the hill.",
  },
  acontecimiento: {
    es: "Escucha a quienes han hecho de Ella su vida entera.",
    en: "Listen to those who have made her their whole life.",
  },
  voces: {
    es: "Llévate a casa la devoción al Tepeyac.",
    en: "Take the devotion of Tepeyac home with you.",
  },
  tienda: {
    es: "El camino hacia los quinientos años.",
    en: "The road towards the five hundredth year.",
  },
  jubileo: {
    es: "Vuelve al principio y empieza tu peregrinación.",
    en: "Return to the beginning and start your pilgrimage.",
  },
};

export function NextPage({ route }: { route: RouteId }) {
  const { t } = useLang();
  const index = routes.findIndex((item) => item.id === route);
  const next = routes[(index + 1) % routes.length];

  return (
    <section className="border-t border-ink/20 py-10 print:hidden" aria-label={t({ es: "Seguir", en: "Continue" })}>
      <Container>
        <a
          href={`#${next.id}`}
          className="group flex flex-wrap items-center justify-between gap-4 border border-ink/25 bg-bone px-6 py-6 transition-colors hover:border-accentRose sm:px-9"
        >
          <span>
            <Coord className="block uppercase">
              {next.id === "portada" ? t({ es: "Volver", en: "Back" }) : t({ es: "Seguir", en: "Next" })}
            </Coord>
            <span className="mt-1 block font-display text-[clamp(22px,2.8vw,34px)] font-extrabold uppercase leading-tight tracking-[-0.01em] text-inkSoft">
              {t(next.label)}
            </span>
            <span className="mt-1 block font-serif text-[19px] italic text-inkMute">{t(nextHint[route])}</span>
          </span>
          <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-accentRose text-[hsl(var(--gd-accent-on))] transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" aria-hidden />
          </span>
        </a>
      </Container>
    </section>
  );
}
