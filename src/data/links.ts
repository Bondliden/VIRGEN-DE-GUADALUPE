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
  /** Enlace de Calendly para reservar una videollamada con Azucena. Vacío:
      no se muestra el botón. */
  calendly: import.meta.env.VITE_CALENDLY_URL || "",
  /** El directo del canal de YouTube de Azucena (…/@canal/live: siempre abre
      la emisión que esté en el aire). Vacío: no se muestra el botón. */
  youtubeLive: import.meta.env.VITE_YOUTUBE_LIVE_URL || "",
  instagram: import.meta.env.VITE_INSTAGRAM_HANDLE || "",
  youtube: import.meta.env.VITE_YOUTUBE_HANDLE || "@inbguadalupe3618",
  nonprofitName: import.meta.env.VITE_NONPROFIT_NAME || "",
  nonprofitUrl: import.meta.env.VITE_NONPROFIT_URL || "",
  donateUrl: import.meta.env.VITE_DONATE_URL || "",
  /** Número de Zelle para los donativos que van al documental. */
  zelle: import.meta.env.VITE_ZELLE_NUMBER || "+1 (305) 873-3904",
  leadsEndpoint: import.meta.env.VITE_LEADS_ENDPOINT || "",
  /** Clave de web3forms.com: cada alta llega como correo. Ver src/lib/leads.ts. */
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY || "",
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
 *  Cámaras alrededor del Tepeyac
 *  ───────────────────────────────────────────── */

/* Las que emiten de verdad y no hay que pedirle permiso a nadie: son vídeos
   y canales públicos de YouTube, que se enlazan sin más y, si algún día los
   retiran, el enlace cae solo en lugar de romper la página.
   Verificadas el 13 de octubre de 2026, a las 03:00 de la Ciudad de México.
   De todas las cámaras de la capital, solo estas miran a la Basílica: las
   demás (Zócalo, Bellas Artes, Monumento a la Revolución, Torre
   Latinoamericana) están en el centro y no alcanzan la Villa. La de dentro,
   que es la que sostiene el reproductor de esta sección, no se repite aquí. */
export type Camera = {
  /** Qué se ve. */
  label: Bi;
  /** Quién la publica: el visitante tiene derecho a saber a quién mira. */
  source: string;
  href: string;
};

export const cameras: Camera[] = [
  {
    label: {
      es: "La fachada y la explanada",
      en: "The façade and the esplanade",
    },
    source: "Webcams de México · 24 horas",
    /* La página oficial de la cámara y no un vídeo de YouTube: Webcams de
       México cambia el ID cada vez que reinicia la emisión. */
    href: "https://webcamsdemexico.com/webcam/basilica-de-guadalupe/",
  },
  {
    label: {
      es: "El canal del santuario",
      en: "The sanctuary's own channel",
    },
    source: "Basílica de Guadalupe A.R",
    href: "https://www.youtube.com/@BasilicadeGuadalupe",
  },
  {
    label: {
      es: "Misa y Rosario diarios desde la Basílica",
      en: "Daily Mass and Rosary from the Basilica",
    },
    source: "CatholicNet",
    href: "https://www.youtube.com/@CatholicNet",
  },
];


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
