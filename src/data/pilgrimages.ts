import type { Bi } from "@/lib/lang";

export type IconKey =
  | "church"
  | "landmark"
  | "mountain"
  | "home"
  | "book"
  | "globe"
  | "cross"
  | "star"
  | "compass";

export type Pilgrimage = {
  id: string;
  /** Display number, e.g. "1", "2.a" */
  n: string;
  icon: IconKey;
  accent: "mantle" | "salmon" | "gold" | "rose";
  title: Bi;
  place: Bi;
  region: Bi;
  duration: Bi;
  /** Always visible */
  summary: Bi;
  /** Unlocked after registration */
  highlights: Bi[];
  /** Optional numbered stops inside a pilgrimage */
  stops?: { n: string; title: Bi; body: Bi }[];
};

/** ─────────────────────────────────────────────
 *  Section I — Peregrinaciones
 *  ───────────────────────────────────────────── */
export const pilgrimageSection = {
  eyebrow: { es: "Primera Sección", en: "Section One" } satisfies Bi,
  title: { es: "Peregrinaciones", en: "Pilgrimages" } satisfies Bi,
  intro: {
    es: "El corazón de este sitio. Aquí no venimos a leer sobre la Virgen: venimos a caminar hacia Ella. Organiza tu peregrinación en tu parroquia o en tu grupo de oración, y ve al Tepeyac, donde Ella está viva y presente.",
    en: "The heart of this site. We do not come here merely to read about Our Lady: we come to walk toward her. Organise your pilgrimage in your parish or prayer group, and go to Tepeyac, where she is alive and present.",
  } satisfies Bi,
  liveTitle: {
    es: "Cámara en vivo de la Basílica",
    en: "Basilica live camera",
  } satisfies Bi,
  liveNote: {
    es: "Asómate ahora mismo a la explanada de la Basílica de Guadalupe en la Ciudad de México, con la imagen de Nuestra Virgencita.",
    en: "Look right now at the esplanade of the Basilica of Guadalupe in Mexico City, with the image of Our Lady.",
  } satisfies Bi,
  liveError: {
    es: "La emisión no está disponible ahora mismo.",
    en: "The broadcast is not available right now.",
  } satisfies Bi,
  camerasTitle: { es: "Otras cámaras en vivo", en: "Other live cameras" } satisfies Bi,
  camerasNote: {
    es: "El santuario enciende su cámara según su horario: Laudes a las 8:30, Misa Coral del Cabildo a las 9:00, Rosario a las 17:00, Novenario a las 18:00, hora de la Ciudad de México. La de la fachada no descansa y mira al atrio a cualquier hora.",
    en: "The sanctuary switches its camera on according to its schedule: Lauds at 8:30, the Chapter's choral Mass at 9:00, the Rosary at 17:00, the Novena at 18:00, Mexico City time. The one on the façade never rests and watches the atrium at any hour.",
  } satisfies Bi,

  multiplier: {
    eyebrow: { es: "Modelo multiplicador", en: "A multiplying model" } satisfies Bi,
    title: { es: "Capitanes de peregrinación", en: "Pilgrimage captains" } satisfies Bi,
    lead: {
      es: "Una sola persona no lleva a cientos de miles al Tepeyac; mil líderes de grupo sí.",
      en: "One person cannot bring hundreds of thousands to Tepeyac; a thousand group leaders can.",
    } satisfies Bi,
    body: {
      es: "Por eso creamos el programa de «líderes guadalupanos»: párrocos, catequistas, madres de familia y movimientos que organizan su propio grupo con los materiales de Azucena. Así Ella pasa de guiar peregrinaciones a multiplicarlas.",
      en: "That is why we created the “Guadalupan leaders” programme: parish priests, catechists, mothers and movements who gather their own group using Azucena's materials. In this way she moves from leading pilgrimages to multiplying them.",
    } satisfies Bi,
    rolesTitle: {
      es: "¿Quién puede ser capitán?",
      en: "Who can be a captain?",
    } satisfies Bi,
    roles: [
      { es: "Párrocos y sacerdotes", en: "Parish priests and clergy" },
      { es: "Catequistas", en: "Catechists" },
      { es: "Madres y padres de familia", en: "Mothers and fathers" },
      { es: "Movimientos y grupos de oración", en: "Movements and prayer groups" },
      { es: "Colegios y universidades", en: "Schools and universities" },
      { es: "Comunidades de migrantes", en: "Migrant communities" },
    ] as Bi[],
    stepsTitle: { es: "Cómo funciona", en: "How it works" } satisfies Bi,
    steps: [
      {
        es: "Te registras como capitán y recibes el material guadalupano de Azucena.",
        en: "You register as a captain and receive Azucena's Guadalupan material.",
      },
      {
        es: "Reúnes tu grupo en la parroquia, el colegio o tu casa.",
        en: "You gather your group in the parish, the school or your home.",
      },
      {
        es: "Preparamos juntos la logística, las fechas y el plan espiritual del viaje.",
        en: "Together we prepare the logistics, the dates and the spiritual plan of the journey.",
      },
      {
        es: "Peregrinas y animas a tus compañeros a ser capitanes de su propio grupo.",
        en: "You go on pilgrimage and encourage your companions to captain their own group.",
      },
    ] as Bi[],
    cta: { es: "Quiero ser capitán", en: "I want to be a captain" } satisfies Bi,
  },

  gate: {
    lockedTitle: {
      es: "Contenido para peregrinos",
      en: "Content for pilgrims",
    } satisfies Bi,
    lockedBody: {
      es: "Puedes ver el título y las fotos de cada lugar. Para acceder a los detalles, los planes de peregrinación y las guías completas, regístrate: es gratuito y te enviaremos el material de preparación.",
      en: "You can see the title and photos of every place. To access the details, the pilgrimage plans and the complete guides, simply register: it is free and we will send you the preparation material.",
    } satisfies Bi,
    lockedCta: {
      es: "Registrarme para ver los detalles",
      en: "Register to see the details",
    } satisfies Bi,
    unlocked: {
      es: "¡Bienvenido, peregrino! Ya puedes ver los planes completos.",
      en: "Welcome, pilgrim! You can now see the complete plans.",
    } satisfies Bi,
    unlockedBadge: { es: "Acceso desbloqueado", en: "Access unlocked" } satisfies Bi,
    photosSoon: {
      es: "Fotos y videos de cada lugar: en preparación por Azucena Cierco.",
      en: "Photos and videos of every place: in preparation by Azucena Cierco.",
    } satisfies Bi,
    durationLabel: {
      es: "Sugerencia de duración",
      en: "Suggested duration",
    } satisfies Bi,
    placesLabel: { es: "Lugares a visitar", en: "Places to visit" } satisfies Bi,
  },
};

export const pilgrimages: Pilgrimage[] = [
  {
    id: "cdmx",
    n: "1",
    icon: "landmark",
    accent: "mantle",
    title: {
      es: "Peregrinación a la Ciudad de México",
      en: "Pilgrimage to Mexico City",
    },
    place: { es: "Ciudad de México, México", en: "Mexico City, Mexico" },
    region: { es: "México", en: "Mexico" },
    duration: { es: "4 a 6 días", en: "4 to 6 days" },
    summary: {
      es: "La peregrinación madre: la ciudad a la que Ella llegó en 1531. El Tepeyac, el centro histórico, la Catedral Metropolitana y los rincones donde el Acontecimiento Guadalupano sigue vivo.",
      en: "The mother pilgrimage: the city to which she came in 1531. Tepeyac, the historic centre, the Metropolitan Cathedral and the corners where the Guadalupan Event is still alive.",
    },
    highlights: [
      {
        es: "Cerro del Tepeyac y la gran explanada de la Basílica, con el recorrido completo de las cuatro apariciones.",
        en: "The hill of Tepeyac and the great esplanade of the Basilica, following the full route of the four apparitions.",
      },
      {
        es: "Centro Histórico y Zócalo, levantados sobre la antigua México-Tenochtitlan.",
        en: "The Historic Centre and the Zócalo, raised over ancient México-Tenochtitlan.",
      },
      {
        es: "Catedral Metropolitana, donde la Tilma estuvo resguardada mientras se restauraba el Templo Expiatorio.",
        en: "The Metropolitan Cathedral, where the Tilma was safeguarded while the Expiatory Temple was restored.",
      },
      {
        es: "Sitios de la evangelización temprana y de los primeros conventos franciscanos.",
        en: "Sites of the early evangelisation and of the first Franciscan convents.",
      },
      {
        es: "Acompañamiento espiritual, guía guadalupana y celebración de la Santa Misa.",
        en: "Spiritual accompaniment, a Guadalupan guide and the celebration of Holy Mass.",
      },
    ],
  },
  {
    id: "basilica",
    n: "2",
    icon: "church",
    accent: "gold",
    title: {
      es: "Peregrinación a la Basílica de Guadalupe",
      en: "Pilgrimage to the Basilica of Guadalupe",
    },
    place: {
      es: "Tepeyac · Gustavo A. Madero, CDMX",
      en: "Tepeyac · Gustavo A. Madero, Mexico City",
    },
    region: { es: "México", en: "Mexico" },
    duration: { es: "1 a 2 días", en: "1 to 2 days" },
    summary: {
      es: "El centro de todo. Conoceremos cada espacio dentro de la gran explanada de la Basílica y sus alrededores: los lugares donde la Virgen de Guadalupe estuvo presente en sus cuatro revelaciones a Juan Diego.",
      en: "The centre of everything. We will come to know every space within the great esplanade of the Basilica and its surroundings: the places where Our Lady of Guadalupe was present in her four revelations to Juan Diego.",
    },
    highlights: [
      {
        es: "Visita a la imagen original en el altar mayor y paso bajo la Tilma.",
        en: "A visit to the original image at the high altar, and the pass beneath the Tilma.",
      },
      {
        es: "El Pocito, la Capilla del Cerrito, la Basílica de Indios y el Templo Expiatorio.",
        en: "El Pocito, the Chapel on the Hill, the Indians' Basilica and the Expiatory Temple.",
      },
      {
        es: "El Museo de la Basílica de Guadalupe y el antiguo convento.",
        en: "The Museum of the Basilica of Guadalupe and the old convent.",
      },
      {
        es: "Ritual de las rosas y oración del Rosario Guadalupano ante la imagen.",
        en: "The ritual of the roses and the prayer of the Guadalupan Rosary before the image.",
      },
    ],
    stops: [
      {
        n: "1.a",
        title: {
          es: "La Capilla del Cerrito (capilla de las rosas)",
          en: "The Chapel on the Hill (Chapel of the Roses)",
        },
        body: {
          es: "Está en la cima del cerro del Tepeyac y se la conoce también como la capilla de las rosas. Es de suma importancia porque aquí fue la primera aparición a Juan Diego y porque en esa zona fue donde Juan Diego encontró las rosas de Castilla y de otras especies que, como narra el Nican Mopohua, la Virgen le mandó cortar para llevarlas al señor obispo Fray Juan de Zumárraga. Es muy hermosa porque, antes de llegar a ella, nos reciben cuatro arcángeles.",
          en: "It stands on the summit of the hill of Tepeyac and is also known as the Chapel of the Roses. It is of the greatest importance because this is where Our Lady first appeared to Juan Diego, and because it was in this area that Juan Diego found the Castilian roses — and roses of other kinds — which, as the Nican Mopohua recounts, the Virgin told him to gather and carry to Bishop Fray Juan de Zumárraga. It is especially beautiful because, before reaching it, four archangels welcome us.",
        },
      },
      {
        n: "2.a",
        title: { es: "La Basílica de Indios", en: "The Indians' Basilica" },
        body: {
          es: "Esta capilla albergó la santa Tilma de la Virgen por muchos años. Aquí vivió San Juan Diego durante 17 años custodiando la Tilma, y según cuenta el Nican Motecpana, Juan Dieguito vivía en contemplación y hablaba con la Virgen. Ahí también fue enterrado Juan Bernardino, tío de Juan Diego, y el propio Juan Diego a los 74 años. De este templo se trasladó la santa Tilma al ahora conocido Templo Expiatorio de Cristo Rey.",
          en: "This chapel housed the holy Tilma of Our Lady for many years. Here Saint Juan Diego lived for seventeen years, guarding the Tilma, and according to the Nican Motecpana, Juan Dieguito lived in contemplation and spoke with the Virgin. There, too, Juan Bernardino — Juan Diego's uncle — was buried, and Juan Diego himself at the age of 74. From this temple the holy Tilma was moved to what is now known as the Expiatory Temple of Christ the King.",
        },
      },
      {
        n: "3.a",
        title: {
          es: "Antigua Basílica, hoy Templo Expiatorio a Cristo Rey",
          en: "The Old Basilica, now the Expiatory Temple of Christ the King",
        },
        body: {
          es: "Lugar que albergó la Tilma durante 267 años. Este fue el templo donde en 1921 se encontraba la Tilma cuando, durante la Guerra Cristera, alguien puso una bomba a la santa imagen: la iglesia fue destruida al 95 %, pero milagrosamente a Ella no le ocurrió nada. El templo estuvo al borde del colapso, fue cerrado y posteriormente restaurado. La Tilma fue trasladada en esa época a la Catedral Metropolitana.",
          en: "The place that housed the Tilma for 267 years. This was the temple where the Tilma stood in 1921 when, during the Cristero War, someone placed a bomb beside the holy image: the church was 95 % destroyed, yet miraculously nothing happened to her. The temple came to the brink of collapse, was closed and later restored. At that time the Tilma was moved to the Metropolitan Cathedral.",
        },
      },
    ],
  },
  {
    id: "cuautitlan",
    n: "3",
    icon: "home",
    accent: "rose",
    title: {
      es: "Peregrinación a Cuautitlán",
      en: "Pilgrimage to Cuautitlán",
    },
    place: {
      es: "Cuautitlán, Estado de México",
      en: "Cuautitlán, State of Mexico",
    },
    region: { es: "México", en: "Mexico" },
    duration: { es: "1 día", en: "1 day" },
    summary: {
      es: "La cuna de San Juan Diego. Aquí nació Cuauhtlatoatzin hacia 1474, aquí vivió con María Lucía, y desde aquí salía de madrugada el 9 de diciembre de 1531 cuando la Señora lo detuvo en el Tepeyac. Peregrinar a Cuautitlán es empezar la historia por el principio.",
      en: "The cradle of Saint Juan Diego. Here Cuauhtlatoatzin was born around 1474, here he lived with María Lucía, and from here he set out at dawn on 9 December 1531 when the Lady stopped him at Tepeyac. To go on pilgrimage to Cuautitlán is to begin the story at its beginning.",
    },
    highlights: [
      {
        es: "El templo y la parroquia dedicados a San Juan Diego Cuauhtlatoatzin.",
        en: "The church and parish dedicated to Saint Juan Diego Cuauhtlatoatzin.",
      },
      {
        es: "La pila bautismal que la tradición asocia a su bautismo, hacia 1525.",
        en: "The baptismal font that tradition links to his baptism, around 1525.",
      },
      {
        es: "El camino que él recorría hacia Tlatelolco para aprender la doctrina: el mismo que hizo la mañana de la primera aparición.",
        en: "The road he walked to Tlatelolco to learn the doctrine — the same one he took on the morning of the first apparition.",
      },
      {
        es: "Visita al centro histórico de Cuautitlán y a la memoria viva del macehual que se convirtió en el primer santo indígena de América.",
        en: "A visit to the historic centre of Cuautitlán and to the living memory of the macehual who became the first indigenous saint of the Americas.",
      },
    ],
  },
  {
    id: "quinta-aparicion",
    n: "4",
    icon: "cross",
    accent: "salmon",
    title: {
      es: "Peregrinación a la Quinta Aparición",
      en: "Pilgrimage to the Fifth Apparition",
    },
    place: {
      es: "Tulpetlac, Ecatepec, Estado de México",
      en: "Tulpetlac, Ecatepec, State of Mexico",
    },
    region: { es: "México", en: "Mexico" },
    duration: { es: "Medio día", en: "Half a day" },
    summary: {
      es: "El lugar donde la Virgen sanó a Juan Bernardino y donde le dijo su nombre. Es la aparición que casi nunca se cuenta y sin la cual no sabríamos cómo se llama: aquí Ella se dio a conocer como Santa María de Guadalupe.",
      en: "The place where Our Lady healed Juan Bernardino and where she told him her name. It is the apparition that is hardly ever told, and without it we would not know what she is called: here she made herself known as Saint Mary of Guadalupe.",
    },
    highlights: [
      {
        es: "Templo de la Quinta Aparición, en Tulpetlac, sobre el lugar donde Juan Bernardino fue sanado.",
        en: "The church of the Fifth Apparition, in Tulpetlac, on the place where Juan Bernardino was healed.",
      },
      {
        es: "El relato del nombre: Ella se llamó a sí misma Santa María de Guadalupe ante el tío de Juan Diego.",
        en: "The account of the name: she called herself Saint Mary of Guadalupe before Juan Diego's uncle.",
      },
      {
        es: "La conexión con la Basílica de Indios, donde Juan Bernardino fue sepultado años después.",
        en: "The link with the Indians' Basilica, where Juan Bernardino was buried years later.",
      },
      {
        es: "Oración por los enfermos: esta es la peregrinación que la gente hace para pedir salud.",
        en: "Prayer for the sick: this is the pilgrimage people make to ask for health.",
      },
    ],
  },
  {
    id: "zumarraga",
    n: "5",
    icon: "landmark",
    accent: "gold",
    title: {
      es: "Tras los pasos de Fray Juan de Zumárraga",
      en: "In the footsteps of Fray Juan de Zumárraga",
    },
    place: {
      es: "Centro Histórico, Ciudad de México",
      en: "Historic Centre, Mexico City",
    },
    region: { es: "México", en: "Mexico" },
    duration: { es: "Medio día", en: "Half a day" },
    summary: {
      es: "La casa del obispo que pidió una señal. Aquí Juan Diego fue recibido, aquí volvió con las rosas, y aquí cayó la imagen sobre el ayate. Recorremos el centro histórico siguiendo los pasos del franciscano que dudó antes de creer.",
      en: "The house of the bishop who asked for a sign. Here Juan Diego was received, here he returned with the roses, and here the image fell upon the ayate. We walk the historic centre following the footsteps of the Franciscan who doubted before he believed.",
    },
    highlights: [
      {
        es: "Catedral Metropolitana, primera sede episcopal de México y refugio de la Tilma mientras se restauraba el Templo Expiatorio.",
        en: "The Metropolitan Cathedral, first episcopal see of Mexico and refuge of the Tilma while the Expiatory Temple was restored.",
      },
      {
        es: "El Palacio Arzobispal y la memoria del primer obispado, junto al Zócalo.",
        en: "The Archiepiscopal Palace and the memory of the first bishopric, beside the Zócalo.",
      },
      {
        es: "El Zócalo y el centro, levantados sobre la antigua México-Tenochtitlan que Zumárraga conoció en ruinas.",
        en: "The Zócalo and the centre, raised over the ancient México-Tenochtitlan that Zumárraga knew in ruins.",
      },
    ],
  },
  {
    id: "merida",
    n: "6",
    icon: "book",
    accent: "mantle",
    title: {
      es: "Peregrinación a Mérida",
      en: "Pilgrimage to Mérida",
    },
    place: { es: "Mérida, Yucatán", en: "Mérida, Yucatán" },
    region: { es: "México", en: "Mexico" },
    duration: { es: "2 a 3 días", en: "2 to 3 days" },
    summary: {
      es: "La peregrinación del estudio. En Mérida está el Centro de Estudios Guadalupanos donde el matemático Fernando Ojeda Llanes desarrolló su investigación sobre las estrellas, las flores y la música del manto. Peregrinar aquí es mirar la Tilma con otros ojos.",
      en: "The pilgrimage of study. In Mérida stands the Centro de Estudios Guadalupanos, where the mathematician Fernando Ojeda Llanes developed his research into the stars, the flowers and the music of the mantle. To go on pilgrimage here is to look at the Tilma with different eyes.",
    },
    highlights: [
      {
        es: "El Centro de Estudios Guadalupanos y el archivo de la investigación sobre la Tilma.",
        en: "The Centro de Estudios Guadalupanos and the archive of the research on the Tilma.",
      },
      {
        es: "Conferencias sobre el cielo del Tepeyac en diciembre de 1531 y sobre la melodía del manto.",
        en: "Conferences on the sky over Tepeyac in December 1531 and on the melody of the mantle.",
      },
      {
        es: "La devoción guadalupana del sureste mexicano, con sus propias fiestas y sus propios cantos.",
        en: "The Guadalupan devotion of south-eastern Mexico, with its own feasts and its own songs.",
      },
    ],
  },
  {
    id: "nueva-york",
    n: "7",
    icon: "globe",
    accent: "rose",
    title: {
      es: "Peregrinación a Nueva York",
      en: "Pilgrimage to New York",
    },
    place: {
      es: "Nueva York, Estados Unidos",
      en: "New York, United States",
    },
    region: { es: "Internacional", en: "International" },
    duration: { es: "4 a 5 días", en: "4 to 5 days" },
    summary: {
      es: "La peregrinación a la fuente escrita. La Biblioteca Pública de Nueva York conserva un ejemplar del Huei tlamahuiçoltica, impreso en 1649, el testimonio impreso más antiguo del Nican Mopohua: el relato que da fundamento a todo lo demás. Verlo con los propios ojos es otra forma de peregrinar.",
      en: "The pilgrimage to the written source. The New York Public Library keeps a copy of the Huei tlamahuiçoltica, printed in 1649 — the oldest printed witness of the Nican Mopohua, the account on which everything else rests. To see it with your own eyes is another way of going on pilgrimage.",
    },
    highlights: [
      {
        es: "El ejemplar del Huei tlamahuiçoltica (1649) en la Biblioteca Pública de Nueva York, con el texto del Nican Mopohua en náhuatl.",
        en: "The copy of the Huei tlamahuiçoltica (1649) in the New York Public Library, with the Nican Mopohua text in Nahuatl.",
      },
      {
        es: "Las colecciones hispánicas de la biblioteca y el trabajo de conservación del documento.",
        en: "The library's Hispanic collections and the conservation work on the document.",
      },
      {
        es: "Las comunidades guadalupanas de la ciudad, que cada 12 de diciembre llenan las iglesias de Nueva York de flores y de cantos.",
        en: "The city's Guadalupan communities, which every 12 December fill the churches of New York with flowers and songs.",
      },
    ],
  },
];


