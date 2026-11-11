import type { Bi } from "@/lib/lang";

/* ─────────────────────────────────────────────
   Códice Santa María de Guadalupe — «Desde el Tepeyac para el mundo entero».
   Póster del Instituto Superior de Estudios Guadalupanos, del Cango. Dr.
   Eduardo Chávez. El texto va tal cual lo envió el equipo (11-11-2026),
   organizado por secciones; solo se ha corregido una errata evidente
   («vextrañas») y se han pasado las comillas rectas a tipográficas.
   Está en castellano: la web en inglés lo muestra con un aviso.
   ───────────────────────────────────────────── */

export type CodiceSection = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const codice = {
  title: { es: "Códice Santa María de Guadalupe", en: "Codex Saint Mary of Guadalupe" } satisfies Bi,
  subtitle: {
    es: "Desde el Tepeyac para el mundo entero",
    en: "From Tepeyac to the whole world",
  } satisfies Bi,
  institute: {
    es: "Instituto Superior de Estudios Guadalupanos",
    en: "Higher Institute of Guadalupan Studies",
  } satisfies Bi,
  indexLabel: { es: "Las partes del Códice", en: "The parts of the Codex" } satisfies Bi,
  languageNote: {
    es: "",
    en: "This text is published in its original Spanish, as written by Canon Dr. Eduardo Chávez.",
  } satisfies Bi,
  author: "Cango. Dr. Eduardo Chávez",
  email: "guadalupe1531@hotmail.com",
  web: "www.morenita.tv",
  webHref: "https://www.morenita.tv",
};

export const codiceSections: CodiceSection[] = [
  {
    id: "codice-guadalupano",
    title: "Códice Guadalupano",
    paragraphs: [
      `La imagen de Santa María de Guadalupe manifiesta la inculturación perfecta del Evangelio. Esta portentosa Imagen está plasmada en la humilde tilma de san Juan Diego hecha de fibras vegetales de iczótl, que es una palma agavácea. Santa María de Guadalupe toma lo bueno y verdadero, las “semillas del Verbo”, y las lleva a la plenitud en Jesucristo Nuestro Señor, es una verdadera “inculturación del Evangelio”, es decir, Ella sabe distinguir estas semillas en el corazón de todo ser humano, dentro de toda cultura, más allá de tradiciones y costumbres, y es ahí en donde pone a su amado hijo Jesucristo, Salvador y Redentor. En esta Imagen se ofrece un verdadero mensaje del amor de Dios tanto para los indígenas como para cualquier cultura; cuya fuente iconográfica y teológica es lo que nos proclama el libro del Apocalipsis, en el capítulo 12,1-2 “Una gran señal apareció en el cielo: una Mujer, vestida de sol, con la luna bajo sus pies, (...) está en cinta”. O también en el capítulo 21, 2-4: “Vi la Ciudad Santa, la nueva Jerusalén, que bajaba del cielo, de junto a Dios engalanada como una novia ataviada para su esposo. Y oí una fuerte voz que decía desde el trono: «Esta es la morada de Dios con los hombres. Pondrá su morada entre ellos y ellos serán su pueblo y Él, Dios-con-ellos, será su Dios. Y enjugará toda lágrima de sus ojos, y no habrá ya muerte ni habrá llanto, ni gritos ni fatigas, porque el mundo viejo ha pasado»”.`,
      `Para un debido acercamiento y una auténtica interpretación de lo que nos ofrece esta Imagen se deben eliminar toda imaginación fantasiosa y toda interpretación sin fundamento, pues es necesario tener en cuenta la convergencia y coherencia de diversos aspectos entre los que destacan la mentalidad indígena, especialmente de los grandes sabios tlamatinime y la manera de plasmar sus conceptos en los códices, así como los aspectos de diversas ciencias y, sobre todo, tener muy en cuenta la teología que nos da la Palabra de Dios y el Magisterio de la Iglesia. Cango. Dr. Eduardo Chávez`,
    ],
  },
  {
    id: "codice-nombre",
    title: "El nombre “Santa María de Guadalupe”",
    paragraphs: [
      `Su nombre no es “Tequatlanopeuh” o “Tequantlaxopeuh”, como equivocadamente supuso Luis Becerra Tanco en el año de 1675, quien fue el primero que cometió este error que tantos y tantos han copiado y han continuado en este camino equivocado. No hay un solo documento ni autor que llamara a la Virgen de Guadalupe con este nombre o algo semejante, sustituyendo al de “Guadalupe”; lo que sí se usaba era el ponderarla con el título de “Tonantzin”, que significa “Nuestra madrecita” y lo unían a su nombre “Tonantzin Guadalupe”, que podríamos traducir como: “Nuestra venerable Madre Guadalupe”. No fueron los españoles quienes le pusieron su nombre, sino que la Virgen quiso llamarse Santa María de Guadalupe, nombre compuesto: “María”, de origen judío y “Guadalupe” de origen árabe. “María” significa: “la elegida por Dios”, “la más Hermosa” o la “Iluminadora”; y “Guadalupe” “Wadi al Lub” que puede traducirse como: “Río de grava negra” o “la cama del río” o “el cauce del río”. La Madre de Dios, se presentó con este nombre: “Santa María de Guadalupe”, lo que podríamos traducir como “el santo cauce del río que porta la Luz verdadera y el Agua viva”. Ella no es la Luz, sino quien ilumina por la Luz; Ella no es el Agua, sino quien conduce el Agua. La Luz y el Agua viva es Jesús.`,
      `Además, en el nombre, Santa María de Guadalupe está tomando a las dos más importantes raíces culturales y religiosas del mundo, los judíos y los árabes, que siempre están tratando de matarse, que siempre están en guerra; pero, en Santa María de Guadalupe están en armonía y en unidad, son su identidad y, al mismo tiempo, al entregar su nombre a Juan Bernardino, el tío anciano de Juan Diego, Ella se entrega al pueblo, pues el anciano representaba la raíz, la verdad, la sabiduría y la autoridad del pueblo indígena; y con ello, nos entrega a su Hijo Jesucristo. Ciertamente, es muy importante su nombre exacto: “bien así se le nombrará: LA PERFECTA VIRGEN SANTA MARÍA DE GUADALUPE”, pues en él, está su identidad y su misión.`,
    ],
  },
  {
    id: "codice-ojos",
    title: "Los ojos",
    paragraphs: [
      `Los preciosos ojos de Santa María de Guadalupe manifiestan misericordia y compasión; y también encierran algunos aspectos que, gracias a varias ciencias, podemos ir conociendo más. En sus ojos se descubre que tiene reflejos como en cualquier ojo humano, según las leyes de las ciencias; y lo que hace confirmar que no se trata de adaptaciones fantasiosas es el hecho de que las mismas imágenes se encuentran en los dos ojos, teniendo en cuenta sus distintas posiciones, sus proporciones y su correlación científica. Esto sigue sorprendiendo a tantos científicos quienes, usando el instrumental según su ciencia, han llegado a concluir en los mismos resultados: hay imágenes reflejadas en los ojos de la imagen de la Virgen de Guadalupe en conformidad de su posición, su proporción y leyes que rigen, y dichas figuras empalman en los dos ojos.`,
    ],
  },
  {
    id: "codice-rostro",
    title: "El rostro",
    paragraphs: [
      `El rostro mestizo de Santa María de Guadalupe es de una jovencita de gran belleza, en él se manifiesta ternura, compasión, misericordia, consuelo y amor; está inclinado en signo de humildad, como lo expresan los indígenas: “es importante esta Mujer, porque se para frente al sol, pisa la luna y se viste con las estrellas, pero su rostro nos dice que hay alguien mayor que Ella, porque está inclinada en signo de respeto.” Pero es sorprendente que dicha inclinación coincide con los mismos grados de inclinación de la tierra. Su rostro es mestizo, lo que significa que Ella es madre de todos los seres humanos; como se lo dijo a Juan Diego: “«Porque, en verdad, yo me honro en ser tu madre compasiva, tuya y de todos los hombres que vivís juntos en esta tierra, y también de todas las demás variadas estirpes de hombres, los que me amen»” (Nican Mopohua, vv. 29-31). En Ella se identifican todas las razas y, al mismo tiempo, Ella ha tomado de nosotros su identidad, como dice la tradición indígena de Zozocolco, Veracruz: “Su rostro no es ni de ellos (los españoles) ni de nosotros (indígenas) sino de ambos...” Por ello, se le llama con cariño la “Morenita”, Madre de todos los pueblos. Su nariz recta y perfecta, su boca muy hermosa y bien proporcionada; en su labio inferior, por “casualidad”, cae un nudo de los hilos de la tilma, resaltando su belleza y su gracia.`,
    ],
  },
  {
    id: "codice-broche",
    title: "El broche",
    paragraphs: [
      `El broche en forma de óvalo con una cruz al centro, para los españoles es un broche que manifiesta el amor misericordioso de Jesús expresado en la cruz central que porta, signo de su sacrificio máximo por amor. Hay que tomar en cuenta, que los indígenas hacían una perforación entre el cuello y el pecho en algunos de sus ídolos de piedra, colocando una piedra semipreciosa verde, que para ellos significaba su corazón, la cual pulían hasta convertirla en un espejo a la que denominaban: el corazón de la divinidad; los indígenas se veían reflejados en este “corazón de piedra verde”; así podemos entender que los indígenas al ver a Santa María de Guadalupe y observar este broche con la cruz central, ellos se veían reflejados en el sacrificio máximo del amor de Dios. Una cruz que si bien en sus códices también usaban, pero en esta posición adquiría un valor insospechado, pues contemplaban el verdadero corazón divino que en su amor le daba vida a la Santísima Virgen y, por medio de Ella, a cada uno que la contemplaba como madre, pues fue en el suplicio en esa cruz cuando Jesús nos la entregó precisamente como madre.`,
    ],
  },
  {
    id: "codice-flor-cuatro-petalos",
    title: "La flor de cuatro pétalos",
    paragraphs: [
      `La flor de cuatro pétalos, única en toda la túnica de la Virgen de Guadalupe y que se encuentra a la altura de su inmaculado vientre, representa el Nahui Ollin y que significa: el verdaderísimo Dios por quien se vive. Así que los indígenas captaron que el Ser que se encuentra en el vientre de Santa María de Guadalupe era nada menos que Dios mismo, el Creador del Universo; es Jesucristo el centro, tanto del mensaje como de esta hermosa y portentosa Imagen en la tilma del humilde macehual san Juan Diego; Santa María de Guadalupe es el tabernáculo sagrado de Jesús Eucaristía. Él es el único y eterno sacrificio, quien ofrece su cuerpo, su sangre, su corazón y todo su Ser. Él es quien nos sustenta para la vida eterna en la Resurrección.`,
    ],
  },
  {
    id: "codice-flor-cerro-corazon",
    title: "La flor-cerro-corazón",
    paragraphs: [
      `Todas estas flores extrañas son un cúmulo de mensajes. Mientras que para los españoles simplemente eran “arabescos” o adornos, para los indígenas eran todo un mensaje, tan claro y perceptible que dichos “glifos” no siguen los pliegues de la túnica, sino que están encima de los pliegues, todas las flores tienen su “raíz en el cielo”, representado por el manto azul-verdoso lleno de estrellas, lo que significa que esta flor tiene su fundamento en lo celestial. La flor tiene la figura de cerro, mientras que su tallo tiene la figura de agua; este monte termina en punta, lo que para los indígenas es Tepeyac, pues significa “cerro punta”. Hay que tomar en cuenta que para los indígenas “cerro y agua” significa “civilización”, por lo tanto, representa una civilización enraizada en lo celeste. En la flor-cerro se observan pequeñas flores entorno, lo que significa que es xochitlalpan o tierra de las flores, es decir, la plenitud de la verdad.`,
      `Ahora bien, si ponemos de cabeza esta flor-cerro, como también los indígenas veían los códices desde diferentes ángulos, podemos comprobar por sus mismos códices que esta flor-cerro es también corazón, sangre y arterias; por lo tanto, el sustento de la divinidad. Si volvemos a su posición original, dentro de esta flor-cerro-corazón se observa un rostro que, para los indígenas ser sabio significa “poner un rostro humano en el corazón ajeno”, por lo que se entiende que esta flor-cerro-corazón significa que está llena de la sabiduría divina. De esta manera, podemos concluir que esta flor de la verdad de Dios es una nueva civilización que surge del cielo y está llena de la verdad y la sabiduría divina. Esto concuerda perfectamente con lo que es el centro del mensaje de Santa María de Guadalupe, quien mucho desea se le construya una “casita sagrada” lo que significa una nueva civilización del amor y de la sabiduría de Dios.`,
    ],
  },
  {
    id: "codice-manto",
    title: "El manto",
    paragraphs: [
      `El manto azul-verdoso que cubre de pies a cabeza la figura de Santa María de Guadalupe manifiesta que Ella es una emperatriz, pues para la cultura indígena, sólo el emperador o tlatoani podía portarlo; azul, por el azul del cielo; verde, por la vida. En este manto se encuentran 46 estrellas, que científicamente se ha comprobado que corresponden al orden de las constelaciones en el solsticio de invierno de 1531.`,
    ],
  },
  {
    id: "codice-zapatilla",
    title: "La zapatilla",
    paragraphs: [
      `La Virgen de Guadalupe se apoya en el centro de la luna negra y está en posición de “paso de danza”. Sin embargo, un punto por demás interesante es que su zapatilla no tiene color, sino lo que se observa es el color de la tilma, por lo que se ven claramente las tramas del hilo de la tilma, lo que nos ayuda, comparativamente, a confirmar que la tela de la tilma no tiene una preparación. Una tela semejante, porosa, llena de agujeros, con una costura visible en medio, rasgaduras, nudos por el amarre de los hilos, no es útil para recibir color, sino que se necesitaría una preparación con una pasta que cubriera todas las imperfecciones y, así mismo, hacer que el color se conservara hacia enfrente de la obra. Este es un punto por demás sorprendente pues en esta zapatilla se ve claramente que la tela no tiene ningún tipo de preparación y que tiene varias imperfecciones, pero la Virgen de Guadalupe las ha “aprovechado” para su belleza.`,
    ],
  },
  {
    id: "codice-acido",
    title: "El ácido derramado",
    paragraphs: [
      `La imagen de la Virgen de Guadalupe en la tilma de Juan Diego se ha preservado durante siglos; ha estado expuesta a humedad, salitre, caricias y besos devotos, agua bendita, cera, humo de candelas y se ha preservado durante todos estos años. Recordemos, además, que estuvo 116 años sin ningún tipo de protección, ni madera, ni tela, ni vidrio; sino que permaneció en su ermita pegada a la pared húmeda y salitrosa. Pero además en el año de 1784, por un descuido el platero que limpiaba su marco, derramó accidentalmente hacia el lado derecho de la Imagen el ácido con el que efectuaba su labor. Esto podría haber provocado un ruinoso agujero en toda la zona afectada; sin embargo, la Imagen soportó esto sin ser dañada, salvo una sutil mancha a manera de testimonio del hecho. Además, el 14 de noviembre de 1921, la imagen sufrió un terrible atentado, ya que personas anticatólicas pusieron una bomba a los pies de la Imagen que, al explotar, destruyó varios objetos a su alrededor y, sin embargo, a la sagrada Imagen no le pasó absolutamente nada.`,
    ],
  },
  {
    id: "codice-cabello",
    title: "El cabello",
    paragraphs: [
      `En la sociedad indígena cuando una mujer estaba casada tenía que hacerse un trenzado especial con sus cabellos y subirlo hacia los lados a manera de “cuernitos”. La imagen de la Virgen de Guadalupe tiene su cabello partido a la mitad y bien peinado hacia abajo, lo que significa, para los indígenas, virginidad.`,
    ],
  },
  {
    id: "codice-manos",
    title: "Las manos",
    paragraphs: [
      `Santa María de Guadalupe es una mujer en oración, lo que se puede apreciar perfectamente al ver cómo junta sus manos, semejante a la usanza europea; y, al mismo tiempo, tomando en cuenta que también para los indígenas Ella está en oración a su mismo modo. Pues los indígenas la veían como todo un códice plano, pues ellos nunca dibujaban o pintaban con una tercera dimensión, es decir, ellos no tomaban en cuenta la profundidad, la luz y la sombra; de esta manera podemos perfectamente entender que la flor-cerro-corazón dorada que se encuentra en su vestido a la altura de su pecho, está incluida dentro de estas manos; y si tomamos en cuenta el “paso de danza” de la Virgen de Guadalupe, podemos comprender que los indígenas inmediatamente captaron que Ella está en oración a su usanza. Los indígenas, al contemplar a la Virgen de Guadalupe, decían: “Nuestros mayores ofrecían corazones a Dios, para que hubiera armonía en la vida. Esta Mujer dice que, sin arrancarlos, le pongamos los nuestros entre sus manos, para que Ella los presente al verdadero Dios.”`,
    ],
  },
  {
    id: "codice-tunica",
    title: "La túnica",
    paragraphs: [
      `La túnica es de color rosa salmonado con sombras entre marrón y carmesí y representa la tierra ya que en ella están estos “adornos” o “glifos” que representan flores, montes y agua. Además, su doblez inferior evoca la figura que los indígenas hacían de las mantas en los códices de tributos.`,
    ],
  },
  {
    id: "codice-cinta",
    title: "La cinta oscura",
    paragraphs: [
      `La cinta oscura anudada en la parte superior del vientre anuncia su maternidad; es una mujer “en cinta”, una mujer de “Adviento”. Ella es la madre de Dios, “Arca viviente de la Alianza” como dijo el Papa Benedicto XVI.`,
    ],
  },
  {
    id: "codice-rayos",
    title: "Los rayos solares",
    paragraphs: [
      `Santa María de Guadalupe se para frente al sol y está rodeada por rayos de oro, intercalándose los de forma recta con los serpenteantes, y está integrando una figura de “nimbo” de forma de almendra (mandorla) en toda la figura, lo que significa divinidad; que si bien, recuerda las imágenes de la Inmaculada Concepción europeas, al mismo tiempo manifiesta que Ella porta al verdadero Sol de Justicia que viene a superar y a darle plenitud a todo lo creado. Mensaje que de igual forma los indígenas entendieron; la tradición oral de los pobladores de Zozocolco, Veracruz, nos ayuda a entender lo que los indígenas comprendían, ellos decían: “una Mujer con gran importancia, más que los mismos emperadores, que a pesar de ser mujer, su poderío es tal, que se para frente al sol, nuestro dador de vida, y pisa la luna, que es nuestra guía en la lucha por la luz, y se viste con las estrellas, que son las que rigen nuestra existencia y nos dicen cuándo debemos sembrar, doblar o cosechar”.`,
    ],
  },
  {
    id: "codice-luna",
    title: "La luna",
    paragraphs: [
      `La luna está en cuarto menguante y es negra porque está en contra luz con el sol, su color complementa, con el color de las alas del ángel, los cuatro rumbos del universo. La Virgen de Guadalupe está de pie apoyando su cuerpo en “paso de danza” u “oración”, a la usanza indígena, en el centro de la luna. Si tomamos en cuenta los códices y la mentalidad indígena estamos ante uno de los puntos importantes de su mensaje; ya que la expresión “Mé-xi-co” significa: “en el centro de la luna” o “en el ombligo de la luna” lo que a su vez significa “en el hogar de la divinidad omnipotente”, “en el centro creador del universo”, “en el lugar donde surgen los cuatro rumbos del universo”. Lo que nos ayuda a entender que esta mujer “en cinta” portando al verdaderísimo Dios por quien se vive en su inmaculado vientre, viene en el centro de la luna, es decir, a la casa de Dios Omnipotente, centro de la creación del universo, de donde surgen los cuatro rumbos del universo. Ella viene con el verdadero Sol de Justicia en su inmaculado vientre, eclipsando y superando absolutamente todo. Dios en María es el Ser Supremo por excelencia y viene a su “hogar”, centro de su “casita sagrada”, centro de su Iglesia.`,
    ],
  },
  {
    id: "codice-negro-luna",
    title: "Lo negro de la luna",
    paragraphs: [
      `La Virgen de Guadalupe es una Inmaculada Concepción que, según la iconografía, está aplastando a una serpiente, que simboliza al Mal. En su perfecta inculturación, la Virgen de Guadalupe no pisa una serpiente, pues para los indígenas simboliza algo bueno, ya que es el “líquido precioso”, es decir: “la sangre” o “el agua” que significa fecundidad; así pues, la Virgen no pisa una serpiente pero sí pisa lo negro de la luna que significa “el eclipse”, y éste sí, para los indígenas, representa al Mal que la Virgen aplasta.`,
    ],
  },
  {
    id: "codice-nubes",
    title: "Las nubes",
    paragraphs: [
      `La imagen de esta hermosa Doncella-Madre rodeada de nubes significa la manifestación divina de su figura. Para los europeos Ella es una imagen que viene entre nubes del cielo. Para los indígenas era muy importante la frase: “entre nieblas y nubes” que tiene tres significados; el primero, “venir del lugar a todos desconocido”; así como saludó el emperador Moctezuma a Hernán Cortés; segundo, significa “abrir un cofre de tesoros espirituales”; y tercero, “el ser ojos, oído y boca de aquél ser invisible y espiritual que –en esa persona que venía entre nieblas y nubes– se hacía visible”. Así que la Virgen de Guadalupe entre nubes significaría: «La que viene del lugar a todos desconocido, Ella abre un cofre de las riquezas espirituales y Ella es ojos, oído y boca de aquél invisible y espiritual, en Ella se manifiesta visible».`,
    ],
  },
  {
    id: "codice-angel",
    title: "El ángel",
    paragraphs: [
      `El ángel es una figura muy importante en toda la imagen de la Virgen de Guadalupe pues, de alguna manera, es por quien se identifica claramente a la Virgen del Tepeyac. Este ángel es un Cuauhtlatoatzin, que significa: “Águila que habla cosas divinas o preciosas”, pues tiene alas de águila. Es un ángel que ni está “cargándola” ni está “colgándose” de Ella, sino que la está presentando y, con Ella, a quien es el centro de esta Imagen que es Jesucristo en su inmaculado vientre. El ángel con su mano derecha toma la punta del manto azul–verdoso lleno de estrellas, que significa el universo y con la mano izquierda mantiene sujeta la punta de la túnica rosa, que significa la tierra; él une en armonía el cielo y la tierra; exactamente como eran representadas las águilas en los códices. Las alas del ángel tienen tres colores: azul, blanco y rojo, que se unen en su significado al color negro de la luna; ya que estos son los colores de los cuatro rumbos del universo: el negro simboliza al Norte; el azul, al Sur; el blanco, al Oeste; y el rojo, al Este. El rostro del ángel es muy hermoso, especialmente según las categorías estéticas indígenas, pues tiene una cierta calva, que para los indígenas significaba ancianidad, es decir, sabiduría, autoridad, raíz de la verdad cultural. Él también lleva un medallón de color oro que se relaciona con el medallón que porta la Santísima Virgen de Guadalupe.`,
    ],
  },
];

export const codiceQuote = {
  title: "Cita de San Juan Pablo II",
  text: `Y América, que históricamente ha sido y es crisol de pueblos, ha reconocido «en el rostro mestizo de la Virgen del Tepeyac, [...] en Santa María de Guadalupe, [...] un gran ejemplo de evangelización perfectamente inculturada». Por eso, no sólo en el Centro y en el Sur, sino también en el Norte del Continente, la Virgen de Guadalupe es venerada como Reina de toda América.`,
  source: "PP. San Juan Pablo II, Ecclesia in America, Nº 11",
};
