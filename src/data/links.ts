import type { Bi } from "@/lib/lang";

/** ─────────────────────────────────────────────
 *  Site identity
 *  ───────────────────────────────────────────── */
export const site = {
  domain: "santamariadeguadalupe500years.com",
  url: "https://santamariadeguadalupe500years.com",
  name: {
    es: "Santa María de Guadalupe 500 Años",
    en: "Saint Mary of Guadalupe · 500 Years",
  } satisfies Bi,
  short: {
    es: "Guadalupe 500 Años",
    en: "Guadalupe 500 Years",
  } satisfies Bi,
  tagline: {
    es: "Camino al Jubileo Guadalupano 2031",
    en: "The road to the Guadalupan Jubilee 2031",
  } satisfies Bi,
  contactEmail:
    import.meta.env.VITE_CONTACT_EMAIL ||
    "info@santamariadeguadalupe500years.com",
  whatsapp: import.meta.env.VITE_WHATSAPP_NUMBER || "",
  instagram: import.meta.env.VITE_INSTAGRAM_HANDLE || "",
  youtube: import.meta.env.VITE_YOUTUBE_HANDLE || "@inbguadalupe3618",
  nonprofitName: import.meta.env.VITE_NONPROFIT_NAME || "",
  nonprofitUrl: import.meta.env.VITE_NONPROFIT_URL || "",
  donateUrl: import.meta.env.VITE_DONATE_URL || "",
  leadsEndpoint: import.meta.env.VITE_LEADS_ENDPOINT || "",
};

/** ─────────────────────────────────────────────
 *  External links — everything verified with the authors
 *  ───────────────────────────────────────────── */
export const links = {
  /* Cámara en vivo de la Basílica. Verificado el 13 de octubre de 2026
     contra la web oficial del santuario, que incrusta h31bMiHuFcs en su
     bloque "Contempla a la Virgen en vivo": ese es el identificador bueno,
     no c-v1cM9XqyE, que es una emisión anterior del mismo canal y ya
     terminó. El enlace de apertura apunta al canal, no a un vídeo suelto,
     porque la Basílica abre una emisión distinta cada vez: su /live siempre
     resuelve a la que esté al aire. El santuario enciende la cámara según
     su horario (hora de la Ciudad de México): Laudes 8:30, Misa Coral del
     Cabildo 9:00, Rosario 17:00 de lunes a jueves, Novenario 18:00 y, los
     domingos, la Misa del Cardenal a las 12:00. */
  basilicaLive: "https://www.youtube.com/@inbguadalupe3618/live",
  basilicaLiveEmbed:
    "https://www.youtube.com/embed/h31bMiHuFcs?rel=0&playsinline=1",

  /** Official Guadalupan YouTube channel used for the live broadcast */
  youtubeChannel: "https://www.youtube.com/@inbguadalupe3618",

  /** Azucena Cierco's testimony */
  azucenaTestimony:
    "https://drive.google.com/file/d/1nmGfMAeA2JkVetZ7HS1QJ9fozAByqWEH/view?usp=sharing",
  azucenaTestimonyEmbed:
    "https://drive.google.com/file/d/1nmGfMAeA2JkVetZ7HS1QJ9fozAByqWEH/preview",

  /** EWTN Español — rebroadcast stream */
  ewtnEs: "https://i.watch.ewtn.com/es/PRC/PRC23141/PRC23141.m3u8",

  /** Radio María Colombia — "Hagamos radio" con Azucena Cierco */
  radioMaria:
    "https://music.amazon.com/podcasts/b3cc94b4-dd4f-4889-a367-2a6801caadd4/episodes/4028b78b-a58b-49b0-abb3-359d0cd5a487/radio-maria-colombia-hagamos-radio-%E2%80%93-con-azucena-cierco-embajadora-de-nuestra-se%C3%B1ora-de-guadalupe-%E2%80%93-14-de-enero-de-2026",

  /** Dr. Fernando Ojeda Llanes — Centro de Estudios Guadalupanos, Mérida */
  fernandoOjeda: "https://www.youtube.com/@FernandoOjedaLlanes",
  iseg: "https://www.youtube.com/@guadalupecodice",
};

/** ─────────────────────────────────────────────
 *  Music found in the tilma (background harmony)
 *  ───────────────────────────────────────────── */
export type Track = {
  id: string;
  title: Bi;
  author: string;
};

export const tracks: Track[] = [
  {
    id: "dVW2_MMgNCE",
    author: "Fernando Ojeda",
    title: {
      es: "Música del manto de la Virgen de Guadalupe",
      en: "Music of the mantle of Our Lady of Guadalupe",
    },
  },
  {
    id: "aA25dJojhyg",
    author: "Grisy Nava",
    title: {
      es: "Melodía celestial descubierta en el manto",
      en: "Celestial melody discovered in the mantle",
    },
  },
  {
    id: "lNhIpdWUf70",
    author: "Ruth Bennett",
    title: {
      es: "La música de la tilma, interpretada al arpa (1 hora)",
      en: "The music of the tilma, played on the harp (1 hour)",
    },
  },
  {
    id: "2VYPYYFHvEk",
    author: "ISEG",
    title: {
      es: "Música en el manto de la Virgen · Fernando Ojeda Llanes",
      en: "Music in the mantle of Our Lady · Fernando Ojeda Llanes",
    },
  },
];

/** Default background track: the harmony discovered in the mantle. */
export const backgroundTrack = tracks[0];

export const youtubeEmbed = (id: string, autoplay = false) =>
  `https://www.youtube.com/embed/${id}?rel=0&playsinline=1${
    autoplay ? "&autoplay=1" : ""
  }`;

export const youtubeWatch = (id: string) => `https://youtu.be/${id}`;
