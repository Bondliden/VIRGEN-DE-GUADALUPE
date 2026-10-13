import type { Bi } from "@/lib/lang";

/* ─────────────────────────────────────────────
   La Novena Intercontinental Guadalupana.

   ⚠️ PENDIENTE DE VERIFICAR. Intenté cotejar estos datos por búsqueda web
   y no lo conseguí (los buscadores me bloquearon). El contenido se ha
   redactado a partir del material aportado por el equipo, pero ANTES DE
   PUBLICAR hay que confirmar con la Conferencia del Episcopado Mexicano:
     · los años exactos que abarca (¿2022–2031?)
     · quién la convocó y con qué nombre oficial
     · la redacción de las cinco líneas de acción
     · la vinculación con el Proyecto Global Pastoral y el Jubileo de 2033
   La nota visible en la página avisa de esto al lector.
   ───────────────────────────────────────────── */
export const novena = {
  ruleLabel: {
    es: "El camino al Jubileo",
    en: "The road to the Jubilee",
  } satisfies Bi,
  eyebrow: { es: "Quinta Sección · El camino", en: "Section Five · The road" } satisfies Bi,
  title: {
    es: "La Novena Intercontinental Guadalupana",
    en: "The Intercontinental Guadalupan Novena",
  } satisfies Bi,
  years: "2022 — 2031",
  lead: {
    es: "Una novena no es nueve días: es nueve años. La Iglesia de México y del continente se dio nueve años para prepararse, uno por cada año que falta hasta los quinientos. No es una campaña de promoción: es un itinerario pastoral.",
    en: "A novena is not nine days: it is nine years. The Church in Mexico and across the continent gave itself nine years to prepare — one for each year left until the quincentenary. It is not a publicity campaign: it is a pastoral itinerary.",
  } satisfies Bi,
  actionsTitle: {
    es: "Las cinco líneas de acción",
    en: "The five lines of action",
  } satisfies Bi,
  actions: [
    {
      es: "Formación permanente en el Acontecimiento Guadalupano: que nadie hable de lo que no conoce.",
      en: "Ongoing formation in the Guadalupan Event: so that no one speaks of what they do not know.",
    },
    {
      es: "Investigación integral, histórica y teológica, sobre la Tilma y sobre el relato del Nican Mopohua.",
      en: "Integral historical and theological research into the Tilma and the account of the Nican Mopohua.",
    },
    {
      es: "Promoción de una devoción informada y testimonial, lejos de la superstición y de la rutina.",
      en: "The promotion of an informed, testimonial devotion — far from superstition and far from habit.",
    },
    {
      es: "Difusión masiva del Acontecimiento, en todos los idiomas y en todos los medios.",
      en: "Mass dissemination of the Event, in every language and through every medium.",
    },
    {
      es: "Producción creativa: artes, contenidos audiovisuales e himnos para las generaciones que vienen.",
      en: "Creative production: art, audiovisual work and hymns for the generations to come.",
    },
  ] as Bi[],
  pgpTitle: {
    es: "Y después de 2031, 2033",
    en: "And after 2031, 2033",
  } satisfies Bi,
  pgpBody: {
    es: "La Novena se articula con el Proyecto Global Pastoral de la Iglesia en México, que une los quinientos años de las apariciones en el Tepeyac (2031) con el Jubileo de los dos mil años de la Redención (2033). Dos aniversarios, un mismo camino: Ella siempre lleva a su Hijo.",
    en: "The Novena is articulated with the Proyecto Global Pastoral of the Church in Mexico, which joins the five hundred years of the apparitions at Tepeyac (2031) with the Jubilee of the two thousand years of the Redemption (2033). Two anniversaries, one single road: she always leads to her Son.",
  } satisfies Bi,
  ctaLabel: {
    es: "Sumarme al camino",
    en: "Join the road",
  } satisfies Bi,
  note: {
    es: "Nota del equipo: los datos de esta sección están pendientes de cotejar con las fuentes oficiales de la Conferencia del Episcopado Mexicano.",
    en: "Editor's note: the details in this section are pending verification against the official sources of the Mexican Bishops' Conference.",
  } satisfies Bi,
};
