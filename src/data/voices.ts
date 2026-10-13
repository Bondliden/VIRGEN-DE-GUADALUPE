import type { Bi } from "@/lib/lang";
import { links } from "@/data/links";

/* ─────────────────────────────────────────────
   Section III — Voces
   Testimonies, conferences and the Guadalupan rosary.
   ───────────────────────────────────────────── */

export const voicesSection = {
  eyebrow: { es: "Tercera Sección", en: "Section Three" } satisfies Bi,
  title: { es: "Voces del Tepeyac", en: "Voices of Tepeyac" } satisfies Bi,
  intro: {
    es: "Aquí hablan quienes han hecho de la Virgen de Guadalupe su vida entera. Escuchamos su testimonio y sus conferencias, y rezamos con ellos.",
    en: "Here speak those who have made Our Lady of Guadalupe their whole life. We listen to their testimony and their conferences, and we pray with them.",
  } satisfies Bi,
  rosaryEyebrow: { es: "Oración", en: "Prayer" } satisfies Bi,
  rosaryTitle: { es: "El Rosario Guadalupano", en: "The Guadalupan Rosary" } satisfies Bi,
  rosaryLead: {
    es: "El Rosario no cambia: cambia el modo en que se reza. Elige cómo quieres rezarlo hoy.",
    en: "The Rosary does not change: what changes is the way it is prayed. Choose how you want to pray it today.",
  } satisfies Bi,
  openLabel: { es: "Abrir", en: "Open" } satisfies Bi,
};

export type Voice = {
  id: string;
  kind: Bi;
  title: Bi;
  person: string;
  role: Bi;
  body: Bi;
  href: string;
  embed?: string;
  /** Imagen de la persona, en /public, y su texto alternativo. */
  photo?: string;
  photoAlt?: Bi;
};

export const voices: Voice[] = [
  {
    id: "azucena",
    kind: { es: "Testimonio", en: "Testimony" } satisfies Bi,
    title: {
      es: "El día en que la Virgen le cambió la vida",
      en: "The day Our Lady changed her life",
    },
    person: "Azucena Cierco",
    role: {
      es: "Embajadora de Nuestra Señora de Guadalupe",
      en: "Ambassador of Our Lady of Guadalupe",
    },
    body: {
      es: "Azucena Cierco cuenta, en primera persona, el encuentro que la llevó a dedicar su vida a dar a conocer a la Virgen de Guadalupe y a llevar peregrinos al Tepeyac.",
      en: "Azucena Cierco tells, in her own words, of the encounter that led her to dedicate her life to making Our Lady of Guadalupe known and to leading pilgrims to Tepeyac.",
    },
    href: links.azucenaTestimony,
    embed: links.azucenaTestimonyEmbed,
    photo: "/images/azucena/azucena-rezando.jpg",
    photoAlt: {
      es: "Azucena Cierco, de rodillas, ofrece un ramo de rosas ante la imagen de Santa María de Guadalupe",
      en: "Azucena Cierco, kneeling, offers a bouquet of roses before the image of Our Lady of Guadalupe",
    },
  },
  {
    id: "radio-maria",
    kind: { es: "Entrevista", en: "Interview" } satisfies Bi,
    title: {
      es: "«Hagamos radio» · Radio María Colombia",
      en: "“Hagamos radio” · Radio María Colombia",
    },
    person: "Azucena Cierco",
    role: { es: "Entrevista radial", en: "Radio interview" },
    body: {
      es: "Conversación sobre el Acontecimiento Guadalupano, la Tilma y el Jubileo de 2031, del 14 de enero de 2026.",
      en: "A conversation about the Guadalupan Event, the Tilma and the 2031 Jubilee, from 14 January 2026.",
    },
    href: links.radioMaria,
  },
  {
    id: "ojeda",
    kind: { es: "Conferencia", en: "Conference" } satisfies Bi,
    title: { es: "La música y las estrellas del manto", en: "The music and the stars of the mantle" },
    person: "Dr. Fernando Ojeda Llanes",
    role: {
      es: "Centro de Estudios Guadalupanos, Mérida",
      en: "Centro de Estudios Guadalupanos, Mérida",
    },
    body: {
      es: "El matemático que encontró la música en el manto de la Virgen explica cómo llegó a ella y qué significa.",
      en: "The mathematician who found the music in Our Lady's mantle explains how he came to it and what it means.",
    },
    href: links.fernandoOjeda,
  },
  {
    id: "iseg",
    kind: { es: "Estudio", en: "Study" } satisfies Bi,
    title: { es: "El manto leído como un códice", en: "The mantle read as a codex" },
    person: "ISEG",
    role: { es: "Investigación guadalupana", en: "Guadalupan research" },
    body: {
      es: "Los simbolismos de la Tilma explicados como lo que son: un códice escrito con estrellas, flores y rayos, legible para quien sabía leer el mundo náhuatl.",
      en: "The symbolism of the Tilma explained for what it is: a codex written in stars, flowers and rays, legible to anyone who could read the Nahua world.",
    },
    href: links.iseg,
  },
];

export type RosaryMode = {
  id: string;
  roman: string;
  label: Bi;
  when: Bi;
  body: Bi;
  steps: Bi[];
};

export const rosaryModes: RosaryMode[] = [
  {
    id: "contemplativo",
    roman: "I",
    label: { es: "Modo contemplativo", en: "Contemplative mode" },
    when: { es: "20 a 30 minutos · en silencio", en: "20 to 30 minutes · in silence" },
    body: {
      es: "Se reza sin prisa, con la mirada puesta en la Tilma. Después de cada misterio, un minuto entero de silencio ante lo que se ha contemplado.",
      en: "Prayed unhurriedly, with the gaze resting on the Tilma. After each mystery, a full minute of silence before what has been contemplated.",
    },
    steps: [
      { es: "Señal de la cruz y ofrecimiento: «Señora mía, Madre mía».", en: "Sign of the cross and offering: “My Lady, my Mother”." },
      { es: "El misterio guadalupano, con la primera parte del Avemaría.", en: "The Guadalupan mystery, with the first half of the Hail Mary." },
      { es: "Un minuto de silencio: mira la imagen y quédate ahí.", en: "One minute of silence: look at the image and stay there." },
    ] as Bi[],
  },
  {
    id: "peregrino",
    roman: "II",
    label: { es: "Modo peregrino", en: "Pilgrim mode" },
    when: { es: "Caminando · en grupo", en: "Walking · in a group" },
    body: {
      es: "El rezo del camino. Se dice en voz alta, se camina al ritmo de la oración y se alternan los grupos: unos rezan, otros responden.",
      en: "The prayer of the road. Said aloud, walking to the rhythm of the prayer, with the groups alternating: some pray, the others respond.",
    },
    steps: [
      { es: "Un guía anuncia el misterio y todos responden.", en: "A leader announces the mystery and everyone responds." },
      { es: "Rezo alternado por grupos, para que el camino no canse la voz.", en: "Prayer alternating by groups, so the road does not tire the voice." },
      { es: "Un canto guadalupano al terminar cada decena.", en: "A Guadalupan hymn at the end of each decade." },
    ] as Bi[],
  },
  {
    id: "familia",
    roman: "III",
    label: { es: "Modo en familia", en: "Family mode" },
    when: { es: "15 minutos · con niños", en: "15 minutes · with children" },
    body: {
      es: "Pensado para rezarlo en casa, con los más pequeños. Cada misterio se explica en una frase sencilla y se termina con una petición de la familia.",
      en: "Designed to be prayed at home with the smallest ones. Each mystery is explained in one simple sentence and closes with a petition from the family.",
    },
    steps: [
      { es: "Alguien enciende una vela y dice el misterio con palabras llanas.", en: "Someone lights a candle and says the mystery in plain words." },
      { es: "Cada uno pide en voz alta una cosa para su familia.", en: "Each person asks aloud for one thing for their family." },
      { es: "Se termina cantando «La Guadalupana» todos juntos.", en: "It ends by singing “La Guadalupana” all together." },
    ] as Bi[],
  },
];
