import type { Bi } from "@/lib/lang";

/* ─────────────────────────────────────────────
   Section IV — La Tienda
   La tienda y el arte sacro guadalupano. Sin avisos de «próximamente»: la
   página ya se puede compartir.
   ───────────────────────────────────────────── */

export const shopSection = {
  eyebrow: { es: "Cuarta Sección", en: "Section Four" } satisfies Bi,
  title: { es: "La Tienda", en: "The Shop" } satisfies Bi,
  intro: {
    es: "Libros, rosarios, estampas y arte sacro guadalupano para llevarte a casa la devoción al Tepeyac, hechos con cuidado.",
    en: "Books, rosaries, holy cards and sacred Guadalupan art to take the devotion of Tepeyac home with you, made with care.",
  } satisfies Bi,
  donateTitle: {
    es: "Antes que comprar, ayudar",
    en: "Before buying, helping",
  } satisfies Bi,
  donateBody: {
    es: "Tu donativo va para los más necesitados y para el documental. Llega más lejos que cualquier compra. Puedes enviarlo por Zelle con los datos de este bloque.",
    en: "Your donation goes to those most in need and to the documentary. It goes further than any purchase. You can send it by Zelle using the details in this block.",
  } satisfies Bi,
  donateCta: { es: "Hacer un donativo", en: "Make a donation" } satisfies Bi,
  zelleTitle: { es: "Zelle · donativos", en: "Zelle · donations" } satisfies Bi,
  zelleBody: {
    es: "Lo que envíes por Zelle a este número va para los más necesitados y para el documental sobre el Acontecimiento Guadalupano (ver el aviso de transparencia).",
    en: "What you send by Zelle to this number goes to those most in need and to the documentary about the Guadalupan Event (see the transparency notice).",
  } satisfies Bi,
  zelleNumberLabel: { es: "Número", en: "Number" } satisfies Bi,
  writeCta: { es: "Escríbenos", en: "Write to us" } satisfies Bi,
  writeEmailLabel: { es: "Email", en: "Email" } satisfies Bi,
  writeSubjectLabel: { es: "Concepto", en: "Subject" } satisfies Bi,
  writeSubject: {
    es: "Donativo · Guadalupe 500 Años",
    en: "Donation · Guadalupe 500 Years",
  } satisfies Bi,
};

/* Lo que ya se puede encargar. Precios dados por el equipo el 11-11-2026,
   en dólares. Las descripciones se ciñen a lo que se ve en las fotos: no
   añadir materiales ni medidas sin que los confirme el equipo. */
export type ShopProduct = {
  id: string;
  name: Bi;
  body: Bi;
  priceUsd: number;
  image: string;
  alt: Bi;
};

export const shopProductsSection = {
  eyebrow: { es: "Ya disponibles", en: "Available now" } satisfies Bi,
  title: { es: "Rosarios guadalupanos", en: "Guadalupan rosaries" } satisfies Bi,
  order: {
    es: "Para encargarlo, escríbenos indicando el rosario que quieres.",
    en: "To order one, write to us saying which rosary you would like.",
  } satisfies Bi,
};

export const shopProducts: ShopProduct[] = [
  {
    id: "rosario-guadalupano",
    name: { es: "Rosario guadalupano", en: "Guadalupan rosary" },
    body: {
      es: "Cuentas color granate, medallas con imágenes guadalupanas entre los misterios y crucifijo plateado.",
      en: "Garnet-coloured beads, medals with Guadalupan images between the mysteries and a silver-coloured crucifix.",
    },
    priceUsd: 20,
    image: "/images/guadalupe/tienda/rosario-guadalupano.webp",
    alt: {
      es: "Rosario de cuentas granate con medallas guadalupanas, sobre una estampa de la Virgen de Guadalupe",
      en: "Rosary with garnet beads and Guadalupan medals, laid on a print of Our Lady of Guadalupe",
    },
  },
  {
    id: "rosario-petalos-de-rosa",
    name: { es: "Rosario de pétalos de rosa", en: "Rose petal rosary" },
    body: {
      es: "Rosario de pétalos de rosas, con medalla de la Virgen de Guadalupe y crucifijo. Viene en su estuche.",
      en: "Rosary of rose petals, with a medal of Our Lady of Guadalupe and a crucifix. It comes in its own case.",
    },
    priceUsd: 50,
    image: "/images/guadalupe/tienda/rosario-petalos-de-rosa.webp",
    alt: {
      es: "Rosario de pétalos de rosa con medalla de la Virgen de Guadalupe, junto a su estuche, sobre una estampa de la Virgen",
      en: "Rose petal rosary with a medal of Our Lady of Guadalupe, next to its case, on a print of Our Lady",
    },
  },
];

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
      es: "Facilitamos el acceso a los libros del padre Monseñor Eduardo Chávez, el gran estudioso del acontecimiento guadalupano.",
      en: "We make it easy to reach the books of Father Monsignor Eduardo Chávez, the great scholar of the Guadalupan event.",
    },
    items: [
      { es: "Monseñor Eduardo Chávez", en: "Monsignor Eduardo Chávez" },
      { es: "Canónigo", en: "Canon" },
      { es: "Postulador de la causa de Juan Diego", en: "Postulator of the cause of Juan Diego" },
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
