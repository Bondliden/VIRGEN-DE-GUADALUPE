import type { Bi } from "@/lib/lang";

/** ─────────────────────────────────────────────
 *  Hero
 *  ───────────────────────────────────────────── */
export const hero = {
  kicker: {
    es: "Tepeyac · 9 al 12 de diciembre de 1531",
    en: "Tepeyac · 9 to 12 December 1531",
  } satisfies Bi,
  titleTop: {
    es: "Santa María de Guadalupe",
    en: "Saint Mary of Guadalupe",
  } satisfies Bi,
  titleBig: {
    es: "Quinientos Años",
    en: "Five Hundred Years",
  } satisfies Bi,
};

/** El mensaje que acompaña a la imagen de la Tilma, justo bajo el reloj. */
export const tilmaStatement = {
  es: "Nuestra morenita del Tepeyac está viva y presente esperándote en el Tepeyac",
  en: "Our beloved Morenita of Tepeyac is alive and present, waiting for you at Tepeyac",
} satisfies Bi;

/** La cita que va bajo el reloj: solo la cita y su fuente. */
export const nicanQuote = {
  text: {
    es: "Mucho quiero, mucho deseo que aquí me levanten mi casita sagrada",
    en: "I greatly desire, I greatly wish that here they raise up my sacred little house",
  } satisfies Bi,
  source: {
    es: "Nican Mopohua",
    en: "Nican Mopohua",
  } satisfies Bi,
};

/** ─────────────────────────────────────────────
 *  Jubilee countdown
 *  ───────────────────────────────────────────── */
export const jubilee = {
  label: {
    es: "Días para el Jubileo Guadalupano 2031",
    en: "Days to the Guadalupan Jubilee 2031",
  } satisfies Bi,
  units: {
    days: { es: "Días", en: "Days" } satisfies Bi,
    hours: { es: "Horas", en: "Hours" } satisfies Bi,
    minutes: { es: "Minutos", en: "Minutes" } satisfies Bi,
    seconds: { es: "Segundos", en: "Seconds" } satisfies Bi,
  },
  done: {
    es: "¡Ha llegado el Jubileo! 500 años de Santa María de Guadalupe en el Tepeyac.",
    en: "The Jubilee has arrived! 500 years of Saint Mary of Guadalupe at Tepeyac.",
  } satisfies Bi,
  cta: {
    es: "Preparar mi peregrinación",
    en: "Prepare my pilgrimage",
  } satisfies Bi,
  cta2: {
    es: "Conocer el Acontecimiento",
    en: "Discover what happened",
  } satisfies Bi,
};

/** ─────────────────────────────────────────────
 *  Aviso de transparencia: adónde va el dinero.
 *  Las ganancias de la tienda y los patrocinios van a la Iglesia. Los
 *  donativos van para los más necesitados y para el documental (11-11-2026:
 *  se quita la mención a las peregrinaciones). La entidad concreta aún no
 *  se nombra.
 *  ───────────────────────────────────────────── */
export const disclosure = {
  badge: {
    es: "Aviso de transparencia",
    en: "Transparency notice",
  } satisfies Bi,
  title: {
    es: "Adónde va tu aportación",
    en: "Where your contribution goes",
  } satisfies Bi,
  short: {
    es: "Las ganancias de la tienda y los patrocinios van directamente a la Iglesia. Los donativos van para los más necesitados y para el documental sobre el Acontecimiento Guadalupano.",
    en: "Shop profits and sponsorships go directly to the Church. Donations go to those most in need and to the documentary about the Guadalupan Event.",
  } satisfies Bi,
  points: [
    {
      es: "Las ganancias de la tienda y los patrocinios van íntegros a la Iglesia.",
      en: "Shop profits and sponsorships go in full to the Church.",
    },
    {
      es: "Los donativos van para los más necesitados y para el documental sobre el Acontecimiento Guadalupano.",
      en: "Donations go to those most in need and to the documentary about the Guadalupan Event.",
    },
    {
      es: "Ningún responsable del proyecto retiene las donaciones para fines personales.",
      en: "No one in this project keeps donations for personal use.",
    },
    {
      es: "El objetivo es evangelizar y dar a conocer el Acontecimiento Guadalupano antes de los 500 años, en 2031.",
      en: "The goal is to evangelise and make the Guadalupan Event known before the 500th anniversary in 2031.",
    },
  ] as Bi[],
  zelle: {
    title: { es: "Donativos por Zelle: necesitados y documental", en: "Donations by Zelle: those in need and the documentary" } satisfies Bi,
    body: {
      es: "Puedes enviar tu donativo por Zelle a este número. Va para los más necesitados y para el documental.",
      en: "You can send your donation by Zelle to this number. It goes to those most in need and to the documentary.",
    } satisfies Bi,
    label: { es: "Zelle", en: "Zelle" } satisfies Bi,
  },
  accept: {
    es: "Entendido, continuar",
    en: "Understood, continue",
  } satisfies Bi,
  readMore: {
    es: "Leer el aviso completo",
    en: "Read the full notice",
  } satisfies Bi,
  promise: {
    es: "“Promesa de Azucena a nuestra Lupita”: cada donativo se convierte en ayuda para quien más lo necesita y en un paso más del documental sobre el Acontecimiento Guadalupano.",
    en: "“Azucena's promise to our Lupita”: every donation becomes help for those most in need and one more step for the documentary about the Guadalupan Event.",
  } satisfies Bi,
};

/** ─────────────────────────────────────────────
 *  The two objectives
 *  ───────────────────────────────────────────── */
export const purpose = {
  statement: {
    es: "El propósito de este sitio es invitarte a que te dejes ver por nuestra santa madre, a sus pies en el Tepeyac, y así realizar lo que pretende su compasiva mirada misericordiosa.",
    en: "The purpose of this site is to invite you to let our holy mother see you, at her feet at Tepeyac, and so fulfil what her compassionate, merciful gaze intends.",
  } satisfies Bi,
  title: {
    es: "Dos caminos hacia nuestra madre",
    en: "Two paths to our mother",
  } satisfies Bi,
  items: [
    {
      icon: "footprints",
      title: {
        es: "Peregrinar",
        en: "To go on pilgrimage",
      } satisfies Bi,
      body: {
        es: "Estimular a los visitantes a peregrinar a la Basílica de Guadalupe en México y a los lugares donde estuvo la presencia de la Santa Virgen, para que la veas con tus propios ojos y Ella te acerque a su Hijo.",
        en: "To encourage visitors to make a pilgrimage to the Basilica of Guadalupe in Mexico and to the places where the presence of the Holy Virgin has been, so that you may see her with your own eyes and she may bring you closer to her Son.",
      } satisfies Bi,
    },
    {
      icon: "mic",
      title: {
        es: "Evangelizar",
        en: "To evangelise",
      } satisfies Bi,
      body: {
        es: "Difundir videos y charlas de Azucena Cierco, Jaime Aguilera y personas con amplio conocimiento del Acontecimiento Guadalupano, para que el mundo entero conozca los detalles comprobables y reales antes de los 500 años, en 2031.",
        en: "To spread videos and talks by Azucena Cierco, Jaime Aguilera and people with deep knowledge of the Guadalupan Event, so the whole world comes to know its verifiable, real details before the 500th anniversary in 2031.",
      } satisfies Bi,
    },
  ],
  question: {
    es: "¿Te has dado cuenta que la Tilma de nuestra Guadalupana es la única fotografía que la misma Virgen María nos ha dejado en la historia de sus visitas?",
    en: "Have you realised that the Tilma of our Guadalupana is the only photograph that the Virgin Mary herself has left us in the history of her visits?",
  } satisfies Bi,
  closer: {
    es: "Dirigir hoy nuestra mirada a Santa María de Guadalupe es comprender el gran milagro de su llegada a México. Ella no vino a fundar una devoción: vino a regalarnos su imagen y a pedirnos que adoremos a su Hijo.",
    en: "To turn our gaze to Saint Mary of Guadalupe today is to grasp the great miracle of her arrival in Mexico. She did not come to start a devotion: she came to give us her image and to ask us to adore her Son.",
  } satisfies Bi,
};

/** ─────────────────────────────────────────────
 *  Closing call to action
 *  ───────────────────────────────────────────── */
export const closing = {
  title: {
    es: "¿Y si este año vas a verla?",
    en: "And what if you go to see her this year?",
  } satisfies Bi,
  text: {
    es: "No tienes que organizarlo todo tú. Únete a una peregrinación, forma tu propio grupo, o conviértete en capitán y multiplica el camino hacia el Tepeyac. Ella espera.",
    en: "You don't have to organise everything alone. Join a pilgrimage, gather your own group, or become a captain and multiply the road to Tepeyac. She is waiting.",
  } satisfies Bi,
  ctaJoin: {
    es: "Quiero peregrinar",
    en: "I want to go on pilgrimage",
  } satisfies Bi,
  ctaCaptain: {
    es: "Quiero ser capitán",
    en: "I want to be a captain",
  } satisfies Bi,
  ctaSupport: {
    es: "Quiero apoyar el documental",
    en: "I want to support the documentary",
  } satisfies Bi,
  captainIntro: {
    es: "Lupita te explica cómo ser capitán y reunir tu grupo. Mientras, déjanos tu nombre y tu correo.",
    en: "Lupita will explain how to become a captain and gather your group. Meanwhile, leave us your name and email.",
  } satisfies Bi,
  captainQuestion: {
    es: "Quiero ser capitán de peregrinación. ¿Cómo lo hago?",
    en: "I want to become a pilgrimage captain. How do I do it?",
  } satisfies Bi,
  supportIntro: {
    es: "Lupita te explica cómo apoyar el documental. Mientras, déjanos tu nombre y tu correo.",
    en: "Lupita will explain how to support the documentary. Meanwhile, leave us your name and email.",
  } satisfies Bi,
  supportQuestion: {
    es: "Quiero apoyar el documental sobre Santa María de Guadalupe. ¿Cómo puedo ayudar?",
    en: "I want to support the documentary on Our Lady of Guadalupe. How can I help?",
  } satisfies Bi,
};


