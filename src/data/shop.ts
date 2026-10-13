import type { Bi } from "@/lib/lang";

/* ─────────────────────────────────────────────
   Section IV — La Tienda
   Opening soon. No inventory is invented: the section is a preview with
   categories and a notify-me CTA, so nothing false is advertised.
   ───────────────────────────────────────────── */

export const shopSection = {
  eyebrow: { es: "Cuarta Sección", en: "Section Four" } satisfies Bi,
  title: { es: "La Tienda", en: "The Shop" } satisfies Bi,
  intro: {
    es: "Estamos preparando un pequeño comercio para que puedas llevarte a casa la devoción al Tepeyac: libros, rosarios, estampas y objetos hechos con cuidado. No hemos querido abrirlo antes de tenerlo todo bien hecho.",
    en: "We are preparing a small shop so that you can take devotion to Tepeyac home with you: books, rosaries, prints and objects made with care. We did not want to open it before having it done properly.",
  } satisfies Bi,
  badge: { es: "Abre próximamente", en: "Opening soon" } satisfies Bi,
  notifyTitle: {
    es: "Avísame cuando abra",
    en: "Tell me when it opens",
  } satisfies Bi,
  notifyBody: {
    es: "Déjanos tu correo y te escribimos el día que la tienda abra sus puertas. Sin ruido, sin publicidad, solo ese aviso.",
    en: "Leave us your email and we will write to you the day the shop opens. No noise, no advertising, just that one notice.",
  } satisfies Bi,
  notifyCta: { es: "Quiero el aviso", en: "Notify me" } satisfies Bi,
  notifyPlaceholder: { es: "tu@correo.com", en: "you@email.com" } satisfies Bi,
  notifySuccess: {
    es: "Gracias. Te escribiremos el día que abra.",
    en: "Thank you. We will write to you the day it opens.",
  } satisfies Bi,
  notifyNoBackend: {
    es: "Escríbenos a",
    en: "Write to us at",
  } satisfies Bi,
  donateTitle: {
    es: "Antes que comprar, ayudar",
    en: "Before buying, helping",
  } satisfies Bi,
  donateBody: {
    es: "Tu donativo va directamente a la Iglesia, para ayudar a los más necesitados y a las peregrinaciones. Llega más lejos que cualquier compra.",
    en: "Your donation goes directly to the Church, to help those most in need and to support pilgrimages. It goes further than any purchase.",
  } satisfies Bi,
  donateCta: { es: "Hacer un donativo", en: "Make a donation" } satisfies Bi,
  writeCta: { es: "Escríbenos", en: "Write to us" } satisfies Bi,
  writeEmailLabel: { es: "Email", en: "Email" } satisfies Bi,
  writeSubjectLabel: { es: "Concepto", en: "Subject" } satisfies Bi,
  writeSubject: {
    es: "Donativo · Guadalupe 500 Años",
    en: "Donation · Guadalupe 500 Years",
  } satisfies Bi,
};

export type ShopCategory = {
  id: string;
  roman: string;
  title: Bi;
  body: Bi;
  items: Bi[];
};

export const shopCategories: ShopCategory[] = [
  {
    id: "libros",
    roman: "I",
    title: { es: "Libros y documentos", en: "Books and documents" } satisfies Bi,
    body: {
      es: "El Nican Mopohua, la historia del Acontecimiento y los estudios sobre la Tilma, en ediciones cuidadas.",
      en: "The Nican Mopohua, the history of the Event and the studies on the Tilma, in well-made editions.",
    },
    items: [
      { es: "Nican Mopohua en náhuatl y castellano", en: "Nican Mopohua in Nahuatl and Spanish" },
      { es: "Guías de peregrinación al Tepeyac", en: "Guides to pilgrimage at Tepeyac" },
      { es: "Los estudios de la Tilma, para todos", en: "The studies of the Tilma, for everyone" },
    ] as Bi[],
  },
  {
    id: "oracion",
    roman: "II",
    title: { es: "Objetos de oración", en: "Objects of prayer" } satisfies Bi,
    body: {
      es: "Lo que se usa para rezar, hecho para durar y para acompañarte de camino.",
      en: "What is used for praying, made to last and to accompany you on the road.",
    },
    items: [
      { es: "Rosario guadalupano", en: "Guadalupan rosary" },
      { es: "Estampas y novenas", en: "Holy cards and novenas" },
      { es: "Velas y ayates", en: "Candles and ayates" },
    ] as Bi[],
  },
  {
    id: "peregrino",
    roman: "III",
    title: { es: "Equipo del peregrino", en: "Pilgrim's kit" } satisfies Bi,
    body: {
      es: "Lo que de verdad hace falta cuando uno camina hacia la Basílica.",
      en: "What you actually need when walking toward the Basilica.",
    },
    items: [
      { es: "Mochila y cantimplora", en: "Backpack and water bottle" },
      { es: "Bastón de peregrino", en: "Pilgrim's staff" },
      { es: "Bandera y estandarte de la Virgen", en: "Flag and banner of Our Lady" },
    ] as Bi[],
  },
];
