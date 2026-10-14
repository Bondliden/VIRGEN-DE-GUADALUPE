import { useEffect, useState } from "react";
import type { Bi } from "@/lib/lang";

/* ─────────────────────────────────────────────
   Navegación — seis páginas, cada una con su dirección.

   El sitio era un solo documento de nueve mil píxeles: todas las
   secciones apiladas en un scroll sin fin. Ahora son seis páginas y la
   dirección es el estado, así que los enlaces profundos, recargar la
   página y los botones atrás y adelante del navegador caen donde el
   visitante espera.

     #portada          la portada, la nota del editor y el aviso
     #peregrinaciones  las peregrinaciones y los capitanes
     #acontecimiento   las ocho pestañas del Acontecimiento
     #voces            los testimonios y el Rosario
     #tienda           la tienda
     #jubileo          la Novena y la llamada final

   Sin librería de rutas: todo esto es un hash, un escucha y un scroll.
   Meter una dependencia para seis direcciones costaría más que las seis
   direcciones.
   ───────────────────────────────────────────── */

export type RouteId =
  | "portada"
  | "peregrinaciones"
  | "acontecimiento"
  | "voces"
  | "tienda"
  | "jubileo";

export type Route = {
  id: RouteId;
  /** Numeral de la regla de sección, como pide Atelier Zero §5. */
  roman: string;
  label: Bi;
  /** Título del documento: uno por página. */
  title: Bi;
};

export const routes: Route[] = [
  {
    id: "portada",
    roman: "0",
    label: { es: "Portada", en: "Cover" },
    title: {
      es: "Santa María de Guadalupe · 500 Años · Jubileo Guadalupano 2031",
      en: "Saint Mary of Guadalupe · 500 Years · Jubilee 2031",
    },
  },
  {
    id: "peregrinaciones",
    roman: "I",
    label: { es: "Peregrinaciones", en: "Pilgrimages" },
    title: {
      es: "Peregrinaciones al Tepeyac · Santa María de Guadalupe 500 Años",
      en: "Pilgrimages to Tepeyac · Saint Mary of Guadalupe 500 Years",
    },
  },
  {
    id: "acontecimiento",
    roman: "II",
    label: { es: "Acontecimiento", en: "The Event" },
    title: {
      es: "El Acontecimiento Guadalupano · Santa María de Guadalupe 500 Años",
      en: "The Guadalupan Event · Saint Mary of Guadalupe 500 Years",
    },
  },
  {
    id: "voces",
    roman: "III",
    label: { es: "Voces", en: "Voices" },
    title: {
      es: "Voces del Tepeyac y el Rosario Guadalupano · Santa María de Guadalupe 500 Años",
      en: "Voices of Tepeyac and the Guadalupan Rosary · Saint Mary of Guadalupe 500 Years",
    },
  },
  {
    id: "tienda",
    roman: "IV",
    label: { es: "Tienda", en: "Shop" },
    title: {
      es: "La Tienda · Santa María de Guadalupe 500 Años",
      en: "The Shop · Saint Mary of Guadalupe 500 Years",
    },
  },
  {
    id: "jubileo",
    roman: "V",
    label: { es: "Jubileo", en: "Jubilee" },
    title: {
      es: "La Novena Intercontinental Guadalupana · Santa María de Guadalupe 500 Años",
      en: "The Intercontinental Guadalupan Novena · Saint Mary of Guadalupe 500 Years",
    },
  },
];

/** Las cinco entradas de la barra. La marca abre la portada. */
export const navRoutes = routes.filter((route) => route.id !== "portada");

export const DEFAULT_ROUTE: RouteId = "portada";

/* Direcciones que ya existían antes de partir el sitio y que deben seguir
   funcionando: la llamada del héroe, el bloque de capitanes y el aviso de
   transparencia del pie. */
const aliases: Record<string, RouteId> = {
  inicio: "portada",
  proposito: "portada",
  transparencia: "portada",
  peregrinar: "peregrinaciones",
  /* Los bloques a los que saltan los botones de cada héroe y el pie. Sin
     esta lista, una dirección que no es una página caía en la portada: el
     visitante pulsaba «Rezar el Santo Rosario» y volvía al principio. */
  "basilica-en-vivo": "peregrinaciones",
  "rutas-peregrinas": "peregrinaciones",
  "paneles-acontecimiento": "acontecimiento",
  "lienzo-milagroso": "acontecimiento",
  "rosario-guadalupano": "voces",
  "oratorio-veladoras": "voces",
  "categorias-tienda": "tienda",
  "autenticidad-relicario": "tienda",
  "lineas-de-accion": "jubileo",
  "coronacion-jubileo": "jubileo",
};

/** La parte útil de una dirección: "#/voces?x" -> "voces". */
export function anchorFromHash(hash: string): string {
  return hash.replace(/^#\/?/, "").split("?")[0];
}

/** ¿Qué página direcciona este hash? Lo desconocido cae en la portada. */
export function routeFromHash(hash: string): RouteId {
  const anchor = anchorFromHash(hash);
  if (!anchor) return DEFAULT_ROUTE;
  /* #acontecimiento-manto es una pestaña dentro de la página del
     Acontecimiento, no otra página. */
  if (anchor.startsWith("acontecimiento-")) return "acontecimiento";
  const alias = aliases[anchor];
  if (alias) return alias;
  const known = routes.find((route) => route.id === anchor);
  return known ? known.id : DEFAULT_ROUTE;
}

/** La página actual, en paz con la barra de direcciones. */
export function useRoute(): RouteId {
  const [route, setRoute] = useState<RouteId>(() =>
    routeFromHash(window.location.hash)
  );

  useEffect(() => {
    const sync = () => setRoute(routeFromHash(window.location.hash));
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  return route;
}
