import type { Bi } from "@/lib/lang";

/* ─────────────────────────────────────────────
   Section II — El Acontecimiento Guadalupano
   Sources: Nican Mopohua (Nahuatl, in the Huei tlamahuiçoltica of Luis
   Laso de la Vega, 1649); Nican Motecpana; Codex Escalada (1548).
   The scientific studies are reported as published findings, attributed
   to their authors — they are not articles of faith.
   ───────────────────────────────────────────── */

export type PanelBlock = { title: Bi; body: Bi };

export type Panel = {
  id: string;
  roman: string;
  label: Bi;
  title: Bi;
  lead: Bi;
  blocks: PanelBlock[];
  quote?: { text: Bi; source: Bi };
};

export const acontecimientoSection = {
  eyebrow: { es: "Segunda Sección", en: "Section Two" } satisfies Bi,
  title: {
    es: "El Acontecimiento Guadalupano",
    en: "The Guadalupan Event",
  } satisfies Bi,
  intro: {
    es: "Entre el 9 y el 12 de diciembre de 1531, en el cerro del Tepeyac, ocurrió algo que cambió para siempre la historia de México y de América. No fue una leyenda: fue un acontecimiento con fecha, lugar, testigos y consecuencias. Aquí lo contamos como lo narra el Nican Mopohua, y también como lo han estudiado quienes han mirado la Tilma con los instrumentos de la ciencia.",
    en: "Between 9 and 12 December 1531, on the hill of Tepeyac, something happened that changed the history of Mexico and of the Americas forever. It was not a legend: it was an event with a date, a place, witnesses and consequences. Here we tell it as the Nican Mopohua narrates it, and also as it has been studied by those who have examined the Tilma with the instruments of science.",
  } satisfies Bi,
  tabsLabel: { es: "Explorar el acontecimiento", en: "Explore the event" } satisfies Bi,
  sourceNote: {
    es: "Las citas del Nican Mopohua provienen de la narración en náhuatl conservada en el Huei tlamahuiçoltica (1649). Los estudios científicos se citan con el nombre de sus autores: la Iglesia no los ha elevado a dogma.",
    en: "The Nican Mopohua quotations come from the Nahuatl narrative preserved in the Huei tlamahuiçoltica (1649). The scientific studies are cited with their authors' names: the Church has not raised them to the level of dogma.",
  } satisfies Bi,
  discoveriesTitle: {
    es: "Lo que se ha descubierto en la Tilma",
    en: "What has been discovered in the Tilma",
  } satisfies Bi,
  discoveriesNote: {
    es: "Publicados por sus autores en distintos momentos desde 1929. Los presentamos como lo que son: investigaciones notables, discutidas, a la espera de una palabra definitiva de la Iglesia.",
    en: "Published by their authors at different moments since 1929. We present them for what they are: remarkable investigations, discussed, awaiting a definitive word from the Church.",
  } satisfies Bi,
};

export type Discovery = {
  id: string;
  year: string;
  whose: string;
  title: Bi;
  body: Bi;
};

export const discoveries: Discovery[] = [
  {
    id: "ojos",
    year: "1929 · 1951",
    whose: "Alfonso Marcué · Carlos Salinas Chávez",
    title: { es: "Los ojos de la Virgen", en: "Our Lady's eyes" },
    body: {
      es: "Un fotógrafo descubrió en 1929 que en la pupila del ojo derecho se veía lo que parecía una figura humana —el llamado «efecto sammartín». En 1951 el oftalmólogo Carlos Salinas Chávez examinó ambos ojos con un oftalmoscopio y sostuvo que los reflejos aparecían con las tres imágenes de Purkinje-Sanson, tal como se producen en el ojo de una persona viva y no en una pintura.",
      en: "A photographer discovered in 1929 that a figure resembling a human being could be seen in the pupil of the right eye — the so-called “sammartín effect”. In 1951 the ophthalmologist Carlos Salinas Chávez examined both eyes with an ophthalmoscope and held that the reflections appear with the three Purkinje-Sanson images, as they are produced in the eye of a living person and not in a painting.",
    },
  },
  {
    id: "aste-tonsmann",
    year: "1979",
    whose: "José Aste Tönsmann (IBM)",
    title: { es: "Trece figuras en las pupilas", en: "Thirteen figures in the pupils" },
    body: {
      es: "El ingeniero peruano José Aste Tönsmann, con procesamiento digital de imágenes, publicó el hallazgo de una escena completa reflejada en las dos pupilas: un indígena sentado, un hombre mayor, un intérprete y otros personajes, hasta trece figuras, en las mismas proporciones y la misma disposición en ambos ojos.",
      en: "The Peruvian engineer José Aste Tönsmann, using digital image processing, published the finding of a complete scene reflected in both pupils: a seated indigenous man, an older man, an interpreter and other figures — thirteen in all — in the same proportions and the same arrangement in both eyes.",
    },
  },
  {
    id: "pigmentos",
    year: "1956",
    whose: "Richard Kuhn · Premio Nobel de Química",
    title: { es: "Los pigmentos", en: "The pigments" },
    body: {
      es: "El químico alemán Richard Kuhn analizó muestras de la tela y concluyó que los colorantes no pertenecen a ninguno de los grupos conocidos —ni vegetal, ni animal, ni mineral—, lo que dejó sin explicación natural el origen de los colores de la imagen.",
      en: "The German chemist Richard Kuhn analysed samples of the cloth and concluded that the colouring agents belong to none of the known groups — neither vegetable, nor animal, nor mineral — which left the origin of the image's colours without a natural explanation.",
    },
  },
  {
    id: "ayate",
    year: "Estudios del siglo XX",
    whose: "Investigaciones sobre la fibra de maguey",
    title: { es: "Una tela imposible", en: "An impossible cloth" },
    body: {
      es: "El ayate de maguey es una fibra que se deshace en pocos años. La Tilma lleva cinco siglos sin tratamiento de conservación, expuesta al aire, a la humedad, al humo de las velas y al contacto de los fieles. Su supervivencia sigue siendo uno de los hechos más difíciles de explicar de todo el conjunto.",
      en: "Maguey ayate is a fibre that falls apart within a few years. The Tilma has stood five centuries without conservation treatment, exposed to air, damp, candle smoke and the touch of the faithful. Its survival remains one of the hardest facts of the whole case to explain.",
    },
  },
  {
    id: "estrellas",
    year: "Investigación guadalupana · Mérida",
    whose: "Fernando Ojeda Llanes · Centro de Estudios Guadalupanos",
    title: {
      es: "El cielo, las flores y la música del manto",
      en: "The sky, the flowers and the music of the mantle",
    },
    body: {
      es: "El matemático Fernando Ojeda Llanes, desde el Centro de Estudios Guadalupanos de Mérida, sostuvo que las estrellas del manto reproducen las constelaciones del cielo sobre el Tepeyac en diciembre de 1531, que las flores doradas del vestido guardan una disposición geométrica precisa, y que al leer la posición y la distancia de las estrellas como notas se obtiene una melodía: la música del manto.",
      en: "The mathematician Fernando Ojeda Llanes, from the Centro de Estudios Guadalupanos in Mérida, held that the stars of the mantle reproduce the constellations of the sky over Tepeyac in December 1531, that the golden flowers of the dress keep a precise geometric arrangement, and that reading the position and distance of the stars as musical notes yields a melody: the music of the mantle.",
    },
  },
];

export const panels: Panel[] = [
  {
    id: "historia",
    roman: "I",
    label: { es: "Historia", en: "History" },
    title: {
      es: "De un mundo que caía al Tepeyac",
      en: "From a world in collapse to Tepeyac",
    },
    lead: {
      es: "Diez años separan la caída de México-Tenochtitlan de la mañana en que una Señora detuvo a un indio en el camino. Para entender el Acontecimiento hay que entender ese hueco.",
      en: "Ten years separate the fall of México-Tenochtitlan from the morning when a Lady stopped an Indian on the road. To understand the Event you have to understand that gap.",
    },
    blocks: [
      {
        title: { es: "13 de agosto de 1521", en: "13 August 1521" },
        body: {
          es: "Cuauhtémoc se entrega. Cae México-Tenochtitlan y con ella todo un orden: los templos, los calendarios, la manera de nombrar el mundo. La conquista trae hierro, viruela y esclavitud; mueren tantos que los cronistas hablan de ciudades vacías. En 1524 llegan los primeros doce franciscanos, descalzos, a evangelizar lo que quedó.",
          en: "Cuauhtémoc surrenders. México-Tenochtitlan falls, and with it a whole order: the temples, the calendars, the very way of naming the world. The conquest brings iron, smallpox and slavery; so many die that chroniclers speak of emptied cities. In 1524 the first twelve Franciscans arrive, barefoot, to evangelise what is left.",
        },
      },
      {
        title: { es: "9 de diciembre de 1531", en: "9 December 1531" },
        body: {
          es: "Juan Diego, un macehual de Cuautitlán, camina de madrugada hacia Tlatelolco para aprender la doctrina. Al pasar junto al cerro del Tepeyac oye cantos de pájaros tan hermosos que se detiene, y una voz lo llama desde la cumbre. La que lo llama no lo trata como a un vencido: lo llama «hijo mío el más pequeño».",
          en: "Juan Diego, a macehual from Cuautitlán, walks at dawn toward Tlatelolco to learn the doctrine. As he passes the hill of Tepeyac he hears birdsong so beautiful that he stops, and a voice calls him from the summit. The one who calls him does not treat him as a defeated man: she calls him “my youngest son”.",
        },
      },
      {
        title: { es: "Del 10 al 12 de diciembre", en: "10 to 12 December" },
        body: {
          es: "El obispo pide una señal. Juan Diego vuelve al cerro, corre a buscar un sacerdote porque su tío Juan Bernardino está muriendo, y trata de esquivar a la Señora. Ella sale a su encuentro, le dice que su tío ya sanó y le manda cortar rosas. Él las corta, las lleva en su ayate y las abre ante el obispo. Es entonces cuando aparece la imagen.",
          en: "The bishop asks for a sign. Juan Diego returns to the hill, rushes to fetch a priest because his uncle Juan Bernardino is dying, and tries to avoid the Lady. She comes out to meet him, tells him his uncle is already healed and sends him to cut roses. He cuts them, carries them in his ayate and opens it before the bishop. That is when the image appears.",
        },
      },
      {
        title: { es: "2031", en: "2031" },
        body: {
          es: "Quinientos años después, el Tepeyac sigue siendo el lugar donde más gente se arrodilla en el mundo. En 2031 la Iglesia llamará a un Jubileo Guadalupano. Todo lo que hay en estas páginas existe para preparar ese año.",
          en: "Five hundred years later, Tepeyac is still the place where more people kneel than anywhere else on earth. In 2031 the Church will call a Guadalupan Jubilee. Everything on these pages exists to prepare for that year.",
        },
      },
    ],
    quote: {
      text: {
        es: "¿Acaso no estoy aquí yo, que soy tu madre?",
        en: "Am I not here, I who am your mother?",
      },
      source: { es: "Nican Mopohua", en: "Nican Mopohua" },
    },
  },
  {
    id: "nican",
    roman: "II",
    label: { es: "Nican Mopohua", en: "Nican Mopohua" },
    title: {
      es: "El relato más antiguo, escrito en náhuatl",
      en: "The oldest account, written in Nahuatl",
    },
    lead: {
      es: "«Nican Mopohua» significa «aquí se cuenta». No es un documento eclesiástico: es literatura náhuatl de la más alta, escrita por un indio que sabía contar.",
      en: "“Nican Mopohua” means “here it is recounted”. It is not an ecclesiastical document: it is Nahuatl literature of the highest order, by an Indian who knew how to tell a story.",
    },
    blocks: [
      {
        title: { es: "Quién lo escribió", en: "Who wrote it" },
        body: {
          es: "Se atribuye a Antonio Valeriano (h. 1520-1605), noble indígena de Azcapotzalco, alumno y colaborador de fray Bernardino de Sahagún en el Colegio de Santa Cruz de Tlatelolco. Lo escribió en náhuatl clásico, probablemente hacia mediados del siglo XVI.",
          en: "It is attributed to Antonio Valeriano (c. 1520-1605), an indigenous nobleman from Azcapotzalco, pupil and collaborator of Fray Bernardino de Sahagún at the College of Santa Cruz de Tlatelolco. He wrote it in classical Nahuatl, probably toward the middle of the 16th century.",
        },
      },
      {
        title: { es: "Cómo llegó hasta nosotros", en: "How it reached us" },
        body: {
          es: "En 1649 Luis Laso de la Vega lo publicó dentro del Huei tlamahuiçoltica, el primer libro impreso sobre la Virgen de Guadalupe. El manuscrito que se conserva está hoy en la Biblioteca Pública de Nueva York.",
          en: "In 1649 Luis Laso de la Vega published it within the Huei tlamahuiçoltica, the first printed book on Our Lady of Guadalupe. The surviving manuscript is today in the New York Public Library.",
        },
      },
      {
        title: { es: "No es un acta: es poesía", en: "Not a record: poetry" },
        body: {
          es: "El texto usa el tecpilatolli, el habla noble de los señores nahuas. Los paralelismos, las flores y los diálogos lo convierten en una obra que puede leerse como poesía, y que se sigue leyendo en voz alta.",
          en: "The text uses tecpilatolli, the noble speech of Nahua lords. Its parallelisms, flowers and dialogue make it a work that can be read as poetry, and that is still read aloud.",
        },
      },
    ],
    quote: {
      text: {
        es: "Aquí se cuenta cómo hace poco la venerable Señora, nuestra Madre la Virgen María, Madre del verdadero Dios por quien se vive, se apareció en el Tepeyac.",
        en: "Here it is recounted how a little while ago the venerable Lady, our Mother the Virgin Mary, Mother of the true God for whom we live, appeared at Tepeyac.",
      },
      source: { es: "Nican Mopohua", en: "Nican Mopohua" },
    },
  },
  {
    id: "tilma",
    roman: "III",
    label: { es: "La Tilma", en: "The Tilma" },
    title: { es: "La imagen", en: "The image" },
    lead: {
      es: "Un ayate de fibra de maguey con una imagen que nadie ha logrado explicar del todo, conservada sin tratamiento durante cinco siglos.",
      en: "An ayate of maguey fibre bearing an image no one has fully explained, kept without treatment for five centuries.",
    },
    blocks: [
      {
        title: { es: "El lienzo", en: "The cloth" },
        body: {
          es: "Es un ayate: fibra de maguey, no algodón. Dos piezas cosidas con hilo de algodón, de unos 1,78 por 1,03 metros. Es la clase de tela que un campesino usaba para cargar maíz, y la clase de tela que se deshace en pocos años.",
          en: "It is an ayate: maguey fibre, not cotton. Two pieces sewn with cotton thread, roughly 1.78 by 1.03 metres. It is the kind of cloth a peasant used to carry maize — and the kind that falls apart within a few years.",
        },
      },
      {
        title: { es: "Lo que se ve", en: "What is seen" },
        body: {
          es: "Una Señora de pie, con las manos juntas, la cabeza levemente inclinada y los ojos bajos. Viste túnica rosada sembrada de flores doradas y manto azul con estrellas. La rodean rayos de oro; bajo sus pies hay una luna creciente sostenida por un ángel. Lleva un lazo negro a la cintura y, sobre el vientre, una flor de cuatro pétalos.",
          en: "A Lady standing, hands joined, head gently bowed, eyes cast down. She wears a rose tunic sown with golden flowers and an azure mantle with stars. Golden rays surround her; beneath her feet a crescent moon is borne by an angel. She wears a black ribbon at the waist and, over her womb, a four-petalled flower.",
        },
      },
    ],
    quote: {
      text: {
        es: "Yo soy la siempre Virgen Santa María, Madre del verdadero Dios por quien se vive.",
        en: "I am the ever Virgin Holy Mary, Mother of the true God for whom we live.",
      },
      source: { es: "Nican Mopohua", en: "Nican Mopohua" },
    },
  },
  {
    id: "juandiego",
    roman: "IV",
    label: { es: "San Juan Diego", en: "Saint Juan Diego" },
    title: { es: "El indio que habló con la Señora", en: "The Indian who spoke with the Lady" },
    lead: {
      es: "Cuauhtlatoatzin significa «el que habla como un águila». Un hombre del pueblo, de los que no dejan rastro en los archivos, y hoy el primer santo indígena de América.",
      en: "Cuauhtlatoatzin means “the one who speaks like an eagle”. A man of the people, of those who leave no trace in the archives — and today the first indigenous saint of the Americas.",
    },
    blocks: [
      {
        title: { es: "Cuauhtlatoatzin", en: "Cuauhtlatoatzin" },
        body: {
          es: "Nació hacia 1474 en Cuautitlán. Se casó con María Lucía y no tuvieron hijos. Fueron de los primeros en recibir el bautismo, probablemente hacia 1525. Cuando la Señora lo llama en el Tepeyac, Juan Diego es un hombre maduro, viudo, de unos 57 años, que va de madrugada a aprender la doctrina.",
          en: "He was born around 1474 in Cuautitlán. He married María Lucía and they had no children. They were among the first to receive baptism, probably around 1525. When the Lady calls him at Tepeyac, Juan Diego is a mature, widowed man of about 57, walking at dawn to learn the doctrine.",
        },
      },
      {
        title: { es: "Los diecisiete años del Tepeyac", en: "The seventeen years at Tepeyac" },
        body: {
          es: "Después de las apariciones dejó su casa y vivió en un cuartito junto a la primera capilla, sobre el cerro, custodiando la Tilma. El Nican Motecpana dice que vivía en contemplación y que hablaba con la Virgen. Murió, según la tradición, el 30 de mayo de 1548, a los 74 años, y fue sepultado en la capilla de Indios.",
          en: "After the apparitions he left his home and lived in a small room beside the first chapel, on the hill, guarding the Tilma. The Nican Motecpana says he lived in contemplation and spoke with the Virgin. He died, by tradition, on 30 May 1548, aged 74, and was buried in the Indians' chapel.",
        },
      },
      {
        title: { es: "Primer santo indígena de América", en: "First indigenous saint of the Americas" },
        body: {
          es: "Juan Pablo II lo beatificó el 6 de mayo de 1990 en Roma y lo canonizó el 31 de julio de 2002 en la Ciudad de México. Su fiesta es el 9 de diciembre, el día en que la Señora lo detuvo en el camino.",
          en: "John Paul II beatified him on 6 May 1990 in Rome and canonised him on 31 July 2002 in Mexico City. His feast day is 9 December — the day the Lady stopped him on the road.",
        },
      },
    ],
    quote: {
      text: {
        es: "Señora mía: ya voy a cumplir tu mandato; me despido de ti, yo, tu humilde siervo.",
        en: "My Lady: I am going now to carry out your command; I take leave of you, I, your humble servant.",
      },
      source: { es: "Nican Mopohua", en: "Nican Mopohua" },
    },
  },
  {
    id: "zumarraga",
    roman: "V",
    label: { es: "Fray Juan de Zumárraga", en: "Fray Juan de Zumárraga" },
    title: { es: "El obispo que pidió una señal", en: "The bishop who asked for a sign" },
    lead: {
      es: "Sin su duda no habría rosas. El hombre que gobernaba la Iglesia naciente de México fue también quien exigió una prueba antes de creer.",
      en: "Without his doubt there would have been no roses. The man who governed the newborn Church of Mexico was also the one who demanded a proof before believing.",
    },
    blocks: [
      {
        title: { es: "De Durango a la Nueva España", en: "From Durango to New Spain" },
        body: {
          es: "Nació en 1468 en Durango, Vizcaya. Franciscano, humanista y hombre de biblioteca. Fue el primer obispo de México, consagrado en 1528, y en 1546 el primer arzobispo. Le tocó organizar una Iglesia en un territorio en ruinas, con poquísimos sacerdotes y una población indígena que se moría.",
          en: "He was born in 1468 in Durango, Biscay. A Franciscan, a humanist and a man of the library. He was the first bishop of Mexico, consecrated in 1528, and in 1546 the first archbishop. It fell to him to organise a Church in a ruined territory, with very few priests and an indigenous population that was dying.",
        },
      },
      {
        title: { es: "El que escribió al rey", en: "The one who wrote to the king" },
        body: {
          es: "Sus cartas a Carlos V son una de las fuentes de primera mano sobre los primeros años de la colonia. En ellas denunció los abusos de los encomenderos contra los indios: defendió a los vencidos ante la Corona cuando eso no era lo cómodo.",
          en: "His letters to Charles V are one of the first-hand sources on the early colony. In them he denounced the encomenderos' abuses against the Indians: he defended the defeated before the Crown when that was not the comfortable thing to do.",
        },
      },
      {
        title: { es: "La señal", en: "The sign" },
        body: {
          es: "Dudó, pidió una prueba, y la prueba llegó en forma de rosas fuera de temporada y de una imagen impresa en un ayate. Ante la imagen ya no dudó: mandó levantar la primera capilla en el cerro. Murió el 3 de junio de 1548, el mismo año que Juan Diego.",
          en: "He doubted, he asked for a proof, and the proof arrived as out-of-season roses and an image imprinted on an ayate. Before the image he doubted no longer: he ordered the first chapel built on the hill. He died on 3 June 1548, the same year as Juan Diego.",
        },
      },
    ],
    quote: {
      text: {
        es: "Y para que yo pueda creer en tu mensaje, es necesario que me des alguna señal.",
        en: "And so that I may believe your message, it is necessary that you give me some sign.",
      },
      source: { es: "Nican Mopohua · paráfrasis", en: "Nican Mopohua · paraphrase" },
    },
  },
];

/* ─────────────────────────────────────────────
   La imagen, descifrada — la Tilma leída como códice.

   Cada elemento lleva dos lecturas: lo que significaba para el mundo
   náhuatl que la recibió y lo que significa en la teología cristiana.
   Ahí está la inculturación de la que hablan los teólogos: no fue una
   imagen traducida, fue una imagen escrita en los dos idiomas a la vez.
   ───────────────────────────────────────────── */
export const tilmaSection = {
  eyebrow: { es: "Lectura de la imagen", en: "Reading the image" } satisfies Bi,
  title: { es: "La imagen, descifrada", en: "The image, decoded" } satisfies Bi,
  lead: {
    es: "La Virgen no se apareció con un catecismo en la mano. Dejó una imagen que un sabio náhuatl podía leer como se lee un códice, y que un fraile español podía leer como se lee un retablo. Ocho signos, dos lecturas, un solo mensaje.",
    en: "Our Lady did not appear holding a catechism. She left an image that a Nahua sage could read the way a codex is read, and that a Spanish friar could read the way an altarpiece is read. Eight signs, two readings, one single message.",
  } satisfies Bi,
  colElement: { es: "Elemento", en: "Element" } satisfies Bi,
  colNahuatl: { es: "Lo que leía el mundo náhuatl", en: "What the Nahua world read" } satisfies Bi,
  colChristian: { es: "Lo que dice la teología cristiana", en: "What Christian theology says" } satisfies Bi,
  note: {
    es: "Fuente: lectura simbólica comúnmente aceptada entre los estudiosos del Acontecimiento Guadalupano, a partir del Nican Mopohua y de la iconografía náhuatl del siglo XVI.",
    en: "Source: the symbolic reading commonly accepted among scholars of the Guadalupan Event, drawn from the Nican Mopohua and 16th-century Nahua iconography.",
  } satisfies Bi,
};

export type TilmaSymbol = {
  n: string;
  element: Bi;
  nahuatl: Bi;
  christian: Bi;
};

export const tilmaSymbols: TilmaSymbol[] = [
  {
    n: "I",
    element: {
      es: "La flor de cuatro pétalos (Nahui Ollin)",
      en: "The four-petalled flower (Nahui Ollin)",
    },
    nahuatl: {
      es: "El Quinto Sol: el centro que ordena el cosmos y el punto donde se encuentran los cuatro rumbos del universo.",
      en: "The Fifth Sun: the centre that orders the cosmos and the point where the four directions of the universe meet.",
    },
    christian: {
      es: "El Dios verdadero, Ipalnemohuani, «aquel por quien se vive», en el vientre materno. Está justo sobre el vientre.",
      en: "The true God, Ipalnemohuani, “the one by whom we live”, in the maternal womb. It sits directly over her womb.",
    },
  },
  {
    n: "II",
    element: {
      es: "El manto azul verdoso, sembrado de estrellas",
      en: "The blue-green mantle, sown with stars",
    },
    nahuatl: {
      es: "El color de Xiuhtecuhtli, el señor del turquesa: distintivo de la realeza divina. Nadie más podía vestirlo.",
      en: "The colour of Xiuhtecuhtli, the turquoise lord: the mark of divine royalty. No one else could wear it.",
    },
    christian: {
      es: "La bóveda celeste, con las constelaciones visibles desde México en el solsticio de invierno de 1531.",
      en: "The celestial vault, with the constellations visible from Mexico at the winter solstice of 1531.",
    },
  },
  {
    n: "III",
    element: { es: "El cinto negro", en: "The black girdle" },
    nahuatl: {
      es: "La señal mesoamericana de la mujer encinta: el lazo que se ataba sobre el vientre para anunciarlo.",
      en: "The Mesoamerican sign of a pregnant woman: the band tied over the womb to announce it.",
    },
    christian: {
      es: "La maternidad divina y la llegada inminente del Salvador. Está atado por delante, donde se anudaba a las embarazadas.",
      en: "Divine motherhood and the imminent coming of the Saviour. It is tied at the front, where it was knotted for pregnant women.",
    },
  },
  {
    n: "IV",
    element: {
      es: "El cabello suelto y el rostro mestizo",
      en: "Loose hair and a mestizo face",
    },
    nahuatl: {
      es: "El cabello suelto era signo inequívoco de virginidad en la tradición azteca; las mujeres casadas lo recogían.",
      en: "Loose hair was an unequivocal sign of virginity in Aztec tradition; married women wore it gathered.",
    },
    christian: {
      es: "La virginidad perpetua de María y, en el rostro, la síntesis de dos razas: ni española ni indígena, sino las dos.",
      en: "The perpetual virginity of Mary and, in her face, the synthesis of two races: neither Spanish nor indigenous, but both.",
    },
  },
  {
    n: "V",
    element: { es: "La luna negra en menguante", en: "The black waning moon" },
    nahuatl: {
      es: "Simboliza a Metztli, la luna. Para muchos estudiosos alude además al propio nombre de México, Metz-xic-co, «en el centro de la luna».",
      en: "It symbolises Metztli, the moon. Many scholars also read in it the very name of Mexico, Metz-xic-co, “at the centre of the moon”.",
    },
    christian: {
      es: "No es una diosa lunar: la pisa. Está sobre el centro del país y sobre las tinieblas vencidas.",
      en: "She is not a moon goddess: she stands on her. She is over the centre of the country and over the darkness defeated.",
    },
  },
  {
    n: "VI",
    element: { es: "Los rayos solares del fondo", en: "The solar rays behind her" },
    nahuatl: {
      es: "Eclipsan a Tonatiuh, el dios del sol. Quien se pone delante del sol es mayor que el sol.",
      en: "They eclipse Tonatiuh, the sun god. Whoever stands in front of the sun is greater than the sun.",
    },
    christian: {
      es: "La «Mujer vestida del Sol» del Apocalipsis (12, 1). Ella no es el sol: está vestida de él.",
      en: "The “Woman clothed with the sun” of Revelation (12:1). She is not the sun: she is clothed with it.",
    },
  },
  {
    n: "VII",
    element: {
      es: "Las manos unidas, de dos tonos",
      en: "Joined hands, in two skin tones",
    },
    nahuatl: {
      es: "El gesto de la súplica y la reverencia: las manos juntas ante alguien que es más que uno.",
      en: "The gesture of petition and reverence: hands joined before someone greater than oneself.",
    },
    christian: {
      es: "Reza. Es la clave de toda la imagen: si reza, no es diosa, es Madre. Y los dos tonos —claro y moreno— son Europa y América reconciliadas en el mismo gesto.",
      en: "She prays. That is the key to the whole image: if she prays, she is not a goddess, she is a Mother. And the two tones — light and brown — are Europe and America reconciled in the same gesture.",
    },
  },
  {
    n: "VIII",
    element: { es: "El ángel a sus pies", en: "The angel at her feet" },
    nahuatl: {
      es: "Un mensajero celestial con alas de quetzal, pelícano y guacamaya: los tres órdenes del mundo alado.",
      en: "A heavenly messenger with the wings of quetzal, pelican and macaw: the three orders of the winged world.",
    },
    christian: {
      es: "El nudo entre los dos mundos: la túnica toca el suelo —lo terrenal— y el manto sube —lo celestial—. El ángel sostiene a la que sostiene a todos.",
      en: "The knot between the two worlds: the tunic touches the ground — the earthly — and the mantle rises — the heavenly. The angel holds up the one who holds up everyone.",
    },
  },
];

/* ─────────────────────────────────────────────
   El manto — el único panel oscuro de todo el sitio.

   Atelier Zero §2 autoriza exactamente un momento oscuro por página, y el
   blanco puro solo dentro de él. Es este. El papel se vuelve noche durante
   el ancho del manto y vuelve: la página sigue siendo una revista, con una
   página negra en medio.

   El campo de estrellas es la clase .gd-stars, que dibuja el mismo cielo
   que está bordado en el ayate.
   ───────────────────────────────────────────── */
export const mantle = {
  eyebrow: { es: "El manto", en: "The mantle" } satisfies Bi,
  quote: {
    es: "¿No estás bajo mi sombra?",
    en: "Are you not under my shadow?",
  } satisfies Bi,
  source: {
    es: "Nican Mopohua · las palabras de la Virgen a San Juan Diego",
    en: "Nican Mopohua · Our Lady's words to Saint Juan Diego",
  } satisfies Bi,
  stars: "46",
  starsLabel: {
    es: "estrellas en el manto · veintitrés y veintitrés, una mitad a cada lado",
    en: "stars on the mantle · twenty-three and twenty-three, one half to each side",
  } satisfies Bi,
  body: {
    es: "No dijo «no estés triste». Dijo algo más grande: que estamos bajo su sombra. Y esa sombra está tejida de estrellas. El manto lleva cuarenta y seis, y quienes lo han estudiado sostienen que no están puestas al azar: son las doce constelaciones y el planeta Júpiter tal como se veían sobre el Tepeyac a las seis y cuarenta y cinco de la mañana de aquel 12 de diciembre de 1531.",
    en: "She did not say “do not be sad”. She said something greater: that we are under her shadow. And that shadow is woven of stars. The mantle carries forty-six, and those who have studied it hold that they were not set down at random: they are the twelve constellations and the planet Jupiter as they stood over Tepeyac at a quarter to seven in the morning on that 12 December 1531.",
  } satisfies Bi,
  perspectiveLabel: {
    es: "Y un detalle que cambia todo",
    en: "And one detail that changes everything",
  } satisfies Bi,
  perspective: {
    es: "Ese cielo no está dibujado como lo vería un hombre desde la tierra mirando hacia arriba. Está dibujado desde arriba, mirando hacia la tierra: desde Dios hacia el hombre. Porque Ella está entre Dios y nosotros.",
    en: "That sky is not drawn as a man on earth would see it looking upward. It is drawn from above, looking down at the earth: from God toward man. Because she stands between God and us.",
  } satisfies Bi,
  attribution: {
    es: "Investigación de Fernando Ojeda Llanes · Centro de Estudios Guadalupanos, Mérida",
    en: "Research by Fernando Ojeda Llanes · Centro de Estudios Guadalupanos, Mérida",
  } satisfies Bi,
};
