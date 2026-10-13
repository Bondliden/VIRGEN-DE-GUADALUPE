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
    es: "500 Años",
    en: "500 Years",
  } satisfies Bi,
  subtitle: {
    es: "Ella está viva y presente en México, esperando a que vayamos a verla.",
    en: "She is alive and present in Mexico, waiting for us to come and see her.",
  } satisfies Bi,
  scroll: {
    es: "Desliza para entrar",
    en: "Scroll to enter",
  } satisfies Bi,
};

/** The words of Our Lady, as recorded in the Nican Mopohua. */
export const nicanQuote = {
  text: {
    es: "…Mucho quiero, mucho deseo que aquí me levanten mi casita sagrada en donde lo mostraré, lo ensalzaré al ponerlo de manifiesto, lo entregaré a las gentes en todo mi amor personal, a Él que es mi mirada compasiva, a Él que es mi auxilio, a Él que es mi salvación, porque, en verdad, yo me honro en ser tu madre compasiva, tuya y de todos los hombres que vivís juntos en esta tierra…",
    en: "…I greatly desire, I greatly wish that here you raise up my sacred little house, where I will show Him, exalt Him and make Him manifest, where I will give Him to all the people in all my personal love — Him who is my compassionate gaze, Him who is my help, Him who is my salvation. For in truth I honour myself in being your compassionate mother — yours, and of all the men who live together on this earth…",
  } satisfies Bi,
  source: {
    es: "Nican Mopohua · las palabras de Santa María de Guadalupe a San Juan Diego",
    en: "Nican Mopohua · Our Lady's words to Saint Juan Diego",
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
  sub: {
    es: "Tiempo restante hasta el 12 de diciembre de 2031 — los 500 años de la aparición de Santa María de Guadalupe en el Tepeyac.",
    en: "Time remaining until 12 December 2031 — 500 years since Our Lady of Guadalupe appeared at Tepeyac.",
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
 *  Non-profit disclosure
 *  ───────────────────────────────────────────── */
export const disclosure = {
  badge: {
    es: "Aviso de transparencia",
    en: "Transparency notice",
  } satisfies Bi,
  title: {
    es: "Todo lo recaudado se destina al documental-serie",
    en: "Everything raised goes to the documentary series",
  } satisfies Bi,
  short: {
    es: "El dinero recaudado y las donaciones para este proyecto se destinan íntegramente a producir un documental-serie sobre Santa María de Guadalupe y el Acontecimiento Guadalupano, y se gestionan a través de una entidad sin ánimo de lucro (non-profit).",
    en: "The money raised and the donations for this project are used entirely to produce a documentary series on Saint Mary of Guadalupe and the Guadalupan Event, and are managed through a non-profit organisation.",
  } satisfies Bi,
  points: [
    {
      es: "Las ganancias de la tienda, las donaciones y los patrocinios financian la producción del documental-serie.",
      en: "Shop profits, donations and sponsorships fund the production of the documentary series.",
    },
    {
      es: "La gestión económica se realiza a través de una entidad sin ánimo de lucro (non-profit).",
      en: "All funds are administered through a non-profit organisation.",
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
  accept: {
    es: "Entendido, continuar",
    en: "Understood, continue",
  } satisfies Bi,
  readMore: {
    es: "Leer el aviso completo",
    en: "Read the full notice",
  } satisfies Bi,
  promise: {
    es: "“Promesa de Azucena a nuestra Lupita”: cada recurso se convierte en un capítulo más para compartir el Acontecimiento Guadalupano con el mundo.",
    en: "“Azucena's promise to our Lupita”: every resource becomes one more chapter in sharing the Guadalupan Event with the world.",
  } satisfies Bi,
};

/** ─────────────────────────────────────────────
 *  The two objectives
 *  ───────────────────────────────────────────── */
export const purpose = {
  eyebrow: {
    es: "Por qué existe este sitio",
    en: "Why this site exists",
  } satisfies Bi,
  title: {
    es: "Dos caminos, una sola Madre",
    en: "Two paths, one Mother",
  } satisfies Bi,
  items: [
    {
      icon: "footprints",
      title: {
        es: "Peregrinar",
        en: "To go on pilgrimage",
      } satisfies Bi,
      body: {
        es: "Estimular a los visitantes a peregrinar a la Basílica de Guadalupe en México y a los lugares donde estuvo la presencia de la Virgen, para que la vean con sus propios ojos y Ella los acerque a su Hijo.",
        en: "To move every visitor to walk to the Basilica of Guadalupe in Mexico and to the places where Our Lady was present — to see her with their own eyes and let her bring them closer to her Son.",
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
    es: "Déjanos tu nombre y tu correo. Después, Lupita te explica cómo ser capitán y reunir tu grupo.",
    en: "Leave us your name and email. Then Lupita will explain how to become a captain and gather your group.",
  } satisfies Bi,
  captainQuestion: {
    es: "Acabo de dejar mis datos para ser capitán de peregrinación. ¿Cómo lo hago?",
    en: "I have just left my details to become a pilgrimage captain. How do I do it?",
  } satisfies Bi,
  supportIntro: {
    es: "Déjanos tu nombre y tu correo. Después, Lupita te explica cómo apoyar el documental.",
    en: "Leave us your name and email. Then Lupita will explain how to support the documentary.",
  } satisfies Bi,
  supportQuestion: {
    es: "Acabo de dejar mis datos para apoyar el documental sobre Santa María de Guadalupe. ¿Cómo puedo ayudar?",
    en: "I have just left my details to support the documentary on Our Lady of Guadalupe. How can I help?",
  } satisfies Bi,
};


