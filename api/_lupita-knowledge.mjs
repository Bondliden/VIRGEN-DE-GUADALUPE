/* ─────────────────────────────────────────────
   El corpus de Lupita — todo lo que el asistente puede afirmar.

   Sale del mismo trabajo documental que ya está publicado en src/data/*.ts:
   los mismos hechos, las mismas fuentes citadas, las mismas cautelas. Se
   completa con un bloque de contexto católico comúnmente aceptado, marcado
   como tal, para que el asistente no tenga que rellenar huecos de memoria.

   Si se cambia un dato en src/data, hay que cambiarlo también aquí. Es el
   precio de que el asistente no diga una cosa y la página diga otra.

   Plain .mjs por la misma razón que _chat-core.mjs: corre igual bajo Node y
   bajo el bundler de Vercel, y queda fuera de tsconfig.
   ───────────────────────────────────────────── */

const PARTES = [
  `
=== 1. QUIÉN ES SANTA MARÍA DE GUADALUPE ===
· Es la Virgen María, la Madre de Dios, que se apareció en el cerro del Tepeyac —hoy Ciudad de México— en diciembre de 1531, a un indio llamado Juan Diego Cuauhtlatoatzin.
· Ella misma se dio a conocer con el nombre de «Santa María de Guadalupe»: se lo dijo a Juan Bernardino, tío de Juan Diego, en Tulpetlac. Y se dio a conocer con estas palabras: «Yo soy la siempre Virgen Santa María, Madre del verdadero Dios por quien se vive» —es decir, Ipalnemohuani, «aquel por quien se vive», el nombre náhuatl de Dios.
· Sus otras palabras clave, que están en el corpus: «¿Acaso no estoy aquí yo, que soy tu madre?», «¿No estás bajo mi sombra?» y el deseo de que le levanten «su casita sagrada» en el Tepeyac.
· La Iglesia la venera como Madre; la devoción guadalupana es la más extendida de México y de América. Su fiesta es el 12 de diciembre.
· La imagen se conserva en la Basílica de Guadalupe, en la Ciudad de México, en el altar mayor, sobre la Tilma original. Es una Virgen morena, de rasgos mestizos.
· Nombres populares: la Virgen de Guadalupe, la Guadalupana, la Virgen morena, la Reina de México, Lupita. «Lupita» es también el nombre de este asistente; si alguien te lo hace notar, contéstale con simpatía.
· Cuidado con una confusión frecuente: Santa María de Guadalupe, del Tepeyac (1531), no es la Virgen de Guadalupe de Extremadura (Guadalupe, Cáceres, España), aunque compartan el nombre. El origen de ese nombre es materia de debate entre los estudiosos: unos lo emparentan con la advocación extremeña y otros con un nombre náhuatl. Si preguntan, di que el debate existe; no lo cierres.
· Dato de contexto católico comúnmente aceptado: el papa Benedicto XIV, en 1754, declaró a la Virgen de Guadalupe patrona de la Nueva España y concedió a México misa y oficio propios para el 12 de diciembre; el papa León XIII autorizó la coronación canónica de la imagen, que se celebró el 12 de octubre de 1895; y el papa Pío X la proclamó patrona de América Latina en 1910.
`,

  `
=== 2. LOS HECHOS, CON FECHA (según el Nican Mopohua) ===
· 13 de agosto de 1521: cae México-Tenochtitlan. Diez años después, en 1531, la ciudad está en ruinas, con la viruela, la esclavitud y una población indígena que se muere; en 1524 habían llegado los primeros doce franciscanos, descalzos, a evangelizar lo que quedaba.
· 9 de diciembre de 1531, de madrugada: Juan Diego, un macehual de Cuautitlán, camina hacia Tlatelolco para aprender la doctrina. Al pasar junto al cerro del Tepeyac oye cantos de pájaros tan hermosos que se detiene, y una voz lo llama desde la cumbre. La que lo llama no lo trata como a un vencido: lo llama «hijo mío el más pequeño». Es la primera aparición, y en ella le pide que vaya al obispo a pedirle un templo.
· 9 de diciembre, más tarde: Juan Diego vuelve con la respuesta del obispo, que lo ha despachado sin creerle. La Señora le pide que insista al día siguiente. Segunda aparición.
· 10 de diciembre: el obispo, fray Juan de Zumárraga, escucha de nuevo a Juan Diego y le pide una señal. Juan Diego se lo cuenta a la Señora, que le promete la señal para el día siguiente. Tercera aparición.
· 11 de diciembre: el tío de Juan Diego, Juan Bernardino, enferma de gravedad; Juan Diego se queda a cuidarlo y no vuelve al cerro.
· 12 de diciembre, de madrugada: Juan Diego sale a buscar un sacerdote para su tío y rodea el cerro para no encontrarse con la Señora. Ella le sale al encuentro, le dice «¿acaso no estoy aquí yo, que soy tu madre?» y que su tío ya está sano. Le manda subir al cerro a cortar rosas de Castilla fuera de temporada. Él las corta, las lleva en su ayate y las abre ante el obispo: caen las rosas y aparece la imagen impresa en la tela. Cuarta aparición.
· Ese mismo 12 de diciembre, la Señora se aparece a Juan Bernardino en Tulpetlac (Ecatepec, Estado de México), lo sana y allí le dice su nombre: Santa María de Guadalupe. Es la quinta aparición, la que casi nunca se cuenta.
· En resumen: cuatro apariciones a Juan Diego, entre el 9 y el 12 de diciembre, y una quinta a Juan Bernardino el día 12 en Tulpetlac.
· Después: se levanta la primera capilla en el cerro. Juan Diego deja su casa y vive diecisiete años en un cuartito junto a ella, custodiando la Tilma (lo cuenta el Nican Motecpana). Murió en 1548. Zumárraga murió el 3 de junio de 1548.
· Juan Diego nació hacia 1474 en Cuautitlán, se casó con María Lucía y no tuvieron hijos; fueron de los primeros en recibir el bautismo, probablemente hacia 1525. Cuando la Señora lo llama es un hombre maduro, viudo, de unos 57 años. Cuauhtlatoatzin significa «el que habla como un águila».
· Fray Juan de Zumárraga (Durango, Vizcaya, 1468): franciscano, humanista, el primer obispo de México (consagrado en 1528) y en 1546 el primer arzobispo. Sus cartas a Carlos V son fuente de primera mano de los primeros años de la colonia, y en ellas denunció los abusos de los encomenderos contra los indios. Dudó, pidió una señal, y ante la imagen mandó levantar la primera capilla.
· Camino a la santidad de Juan Diego (contexto católico comúnmente aceptado): fue beatificado por Juan Pablo II el 6 de mayo de 1990 en la Basílica de Guadalupe, y canonizado por el mismo papa el 31 de julio de 2002. Es el primer santo indígena de América.
`,

  `
=== 3. LAS FUENTES DEL RELATO ===
· El relato principal es el Nican Mopohua, que significa «aquí se cuenta». No es un documento eclesiástico: es literatura náhuatl de la más alta, escrita por un indio que sabía contar.
· Se atribuye a Antonio Valeriano (hacia 1520-1605), noble indígena de Azcapotzalco, alumno y colaborador de fray Bernardino de Sahagún en el Colegio de Santa Cruz de Tlatelolco. Lo escribió en náhuatl clásico, probablemente hacia mediados del siglo XVI.
· Está escrito en tecpilatolli, el habla noble de los señores nahuas: paralelismos, flores y diálogos. Puede leerse como poesía, y se sigue leyendo en voz alta.
· Llegó hasta nosotros dentro del Huei tlamahuiçoltica, el primer libro impreso sobre la Virgen de Guadalupe, publicado en 1649 por Luis Laso de la Vega. El manuscrito que se conserva está hoy en la Biblioteca Pública de Nueva York. No des más detalles del ejemplar (signaturas, folios, estado de conservación) porque no están en el corpus.
· Otras fuentes que cita el sitio: el Nican Motecpana (sobre la vida de Juan Diego en el Tepeyac, donde se cuenta que vivió allí diecisiete años y que allí fue sepultado su tío) y el Códice Escalada (1548).
· El trabajo de referencia del sitio es el de Miguel León Portilla sobre el Nican Mopohua.
· Sinceridad histórica: la datación y la autoría de estos textos son objeto de debate entre historiadores. Miguel León Portilla defendió la antigüedad del relato; otros investigadores —Edmundo O'Gorman entre ellos— lo situaron más tarde, en el siglo XVII. El sitio no esconde ese debate: lo menciona. Si el visitante lo pregunta, contéstale con naturalidad, sin miedo, y no lo presentes como un ataque a la fe: la Iglesia reconoce la devoción guadalupana y su santuario, y el estudio histórico sigue abierto.
`,

  `
=== 4. LA TILMA Y LO QUE SE HA ESTUDIADO EN ELLA ===
· La Tilma es un ayate de fibra de maguey, no algodón: dos piezas cosidas con hilo de algodón, de unos 1,78 por 1,03 metros. Es la clase de tela que un campesino usaba para cargar maíz —y la clase de tela que se deshace en pocos años—. Lleva cinco siglos sin tratamiento de conservación, expuesta al aire, a la humedad, al humo de las velas y al contacto de los fieles.
· Lo que se ve: una Señora de pie, con las manos juntas, la cabeza levemente inclinada y los ojos bajos. Viste túnica rosada sembrada de flores doradas y manto azul con estrellas. La rodean rayos de oro; bajo sus pies hay una luna creciente negra sostenida por un ángel. Lleva un lazo negro a la cintura y, sobre el vientre, una flor de cuatro pétalos.
· El manto lleva cuarenta y seis estrellas: veintitrés y veintitrés, una mitad a cada lado. Fernando Ojeda Llanes, matemático del Centro de Estudios Guadalupanos de Mérida, sostiene que no están puestas al azar: son las doce constelaciones y el planeta Júpiter tal como se veían sobre el Tepeyac a las 6:45 de la mañana del 12 de diciembre de 1531. Sostiene también que ese cielo no está dibujado como lo vería un hombre desde la tierra mirando hacia arriba, sino desde arriba, mirando hacia la tierra: desde Dios hacia el hombre.
· El mismo investigador sostiene que las flores doradas del vestido guardan una disposición geométrica precisa y que, al leer la posición y la distancia de las estrellas como notas, se obtiene una melodía: la música del manto. En el sitio hay vídeos con esa música.
· Los ocho signos de la imagen, cada uno con su doble lectura (la del mundo náhuatl que la recibió y la de la teología cristiana). Son los que publica el sitio:
  I. La flor de cuatro pétalos (Nahui Ollin), justo sobre el vientre: el Quinto Sol, el centro que ordena el cosmos y el punto donde se encuentran los cuatro rumbos del universo / el Dios verdadero, Ipalnemohuani, «aquel por quien se vive», en el vientre materno.
  II. El manto azul verdoso sembrado de estrellas: el color de Xiuhtecuhtli, el señor del turquesa, distintivo de la realeza divina, que nadie más podía vestir / la bóveda celeste, con las constelaciones visibles desde México en el solsticio de invierno de 1531.
  III. El cinto negro: la señal mesoamericana de la mujer encinta / la maternidad divina y la llegada inminente del Salvador. Está atado por delante, donde se anudaba a las embarazadas.
  IV. El cabello suelto y el rostro mestizo: el cabello suelto era signo inequívoco de virginidad en la tradición azteca, porque las casadas lo recogían / la virginidad perpetua de María y, en el rostro, la síntesis de dos razas: ni española ni indígena, sino las dos.
  V. La luna negra en menguante: Metztli, la luna; para muchos estudiosos alude además al propio nombre de México, Metz-xic-co, «en el centro de la luna» / no es una diosa lunar: la pisa. Está sobre el centro del país y sobre las tinieblas vencidas.
  VI. Los rayos solares del fondo: eclipsan a Tonatiuh, el dios del sol; quien se pone delante del sol es mayor que el sol / «la Mujer vestida del Sol» del Apocalipsis (12, 1): Ella no es el sol, está vestida de él.
  VII. Las manos unidas, de dos tonos: el gesto de la súplica y la reverencia ante alguien que es más que uno / reza. Es la clave de toda la imagen: si reza, no es una diosa, es una Madre. Y los dos tonos —claro y moreno— son Europa y América reconciliadas en el mismo gesto.
  VIII. El ángel a sus pies, con alas de quetzal, pelícano y guacamaya: los tres órdenes del mundo alado / el nudo entre los dos mundos: la túnica toca el suelo —lo terrenal— y el manto sube —lo celestial—. El ángel sostiene a la que sostiene a todos.
`,

  `
· Estudios publicados. Cítalos SIEMPRE con el nombre de sus autores y nunca como dogma: la Iglesia no los ha elevado a dogma, y el sitio lo advierte al lector. Son investigaciones notables, discutidas, a la espera de una palabra definitiva.
  · 1929: un fotógrafo descubre que en la pupila del ojo derecho se veía lo que parecía una figura humana —el llamado «efecto sammartín».
  · 1951: el oftalmólogo Carlos Salinas Chávez examina ambos ojos con un oftalmoscopio y sostiene que los reflejos aparecen con las tres imágenes de Purkinje-Sanson, tal como se producen en el ojo de una persona viva y no en una pintura.
  · 1956: el químico alemán Richard Kuhn, premio Nobel de Química, analiza muestras de la tela y concluye que los colorantes no pertenecen a ninguno de los grupos conocidos —ni vegetal, ni animal, ni mineral—, lo que dejó sin explicación natural el origen de los colores. El sitio data el análisis en 1956 y avisa de que hay fuentes que dan otro año, así que no conviertas esa fecha en una afirmación tajante.
  · 1979: el ingeniero peruano José Aste Tönsmann, con procesamiento digital de imágenes, publica el hallazgo de una escena completa reflejada en las dos pupilas: un indígena sentado, un hombre mayor, un intérprete y otros personajes, hasta trece figuras, en las mismas proporciones y la misma disposición en ambos ojos.
  · Siglo XX: la fibra de maguey se deshace en pocos años; que la Tilma siga entera sigue siendo uno de los hechos más difíciles de explicar de todo el conjunto.
`,

  `
=== 5. EL TEPEYAC Y LA BASÍLICA ===
· El Tepeyac es el cerro donde ocurrió todo, al norte de la Ciudad de México (alcaldía Gustavo A. Madero). En su explanada está la Basílica de Guadalupe, uno de los santuarios marianos más visitados del mundo. El sitio recuerda que el Tepeyac sigue siendo el lugar donde más gente se arrodilla en el mundo.
· Dentro del recinto, y en sus alrededores, están: la imagen original en el altar mayor y el paso bajo la Tilma; la Capilla del Cerrito, también llamada capilla de las rosas, en la cima del cerro, donde fue la primera aparición y donde Juan Diego cortó las rosas que llevó al obispo; El Pocito; la Basílica de Indios, donde Juan Diego vivió diecisiete años custodiando la Tilma y donde está enterrado su tío Juan Bernardino y él mismo, a los 74 años; el Museo de la Basílica de Guadalupe y el antiguo convento; y el Templo Expiatorio a Cristo Rey, que es la antigua Basílica.
· La antigua Basílica albergó la Tilma durante 267 años. En 1921, mientras la imagen estaba allí, alguien puso una bomba junto a la imagen: el templo quedó destruido en un 95 % y a Ella no le ocurrió nada. El templo estuvo al borde del colapso, se cerró y después se restauró; en esa época la Tilma se trasladó a la Catedral Metropolitana, y hoy se conserva en el nuevo santuario.
· Precisión útil: el atentado de la bomba es de 1921, y la Guerra Cristera fue de 1926 a 1929, es decir posterior. El sitio enmarca el atentado en aquellos años de conflicto religioso; si el visitante pregunta, da la fecha de 1921 y no mezcles las dos cosas.
· En Tulpetlac, en Ecatepec (Estado de México), está el Templo de la Quinta Aparición, sobre el lugar donde fue sanado Juan Bernardino. Es la peregrinación que la gente hace para pedir por los enfermos.
· Cámara en vivo: el sitio incrusta la emisión del santuario desde su canal de YouTube, @inbguadalupe3618. El santuario enciende la cámara según su horario, hora de la Ciudad de México: Laudes a las 8:30, Misa Coral del Cabildo a las 9:00, Rosario a las 17:00 de lunes a jueves, Novenario a las 18:00 y, los domingos, la Misa del Cardenal a las 12:00. La cámara de la fachada mira al atrio a cualquier hora. Si la emisión no carga, el sitio ofrece abrirla en YouTube y otras cámaras: la fachada y la explanada (Webcams de México · Canal 11), el canal de la Basílica de Guadalupe A.R. y la misa y el rosario diarios de CatholicNet.
· La Basílica está abierta al público y la entrada es libre; si preguntan por horarios de misa distintos de los de la cámara, por grupos, por accesibilidad o por el paso bajo la Tilma en un día concreto, remite al equipo o a los canales oficiales del santuario, porque el corpus no los detalla.
`,

  `
=== 6. EL AÑO JUBILAR: GUADALUPE 2031 ===
· El 12 de diciembre de 2031 se cumplen quinientos años desde que la imagen quedó impresa en el ayate de san Juan Diego. La cuenta atrás del sitio apunta a la medianoche del 12 de diciembre de 2031, hora de la Ciudad de México, y el día que llegue el sitio dirá: «¡Ha llegado el Jubileo! 500 años de Santa María de Guadalupe en el Tepeyac».
· El lema del sitio es «Camino al Jubileo Guadalupano 2031». El sitio habla de «el Jubileo Guadalupano 2031» y de «los 500 años» y espera que la Iglesia convoque ese Jubileo: en 2031 la Iglesia llamará a un Jubileo Guadalupano, y todo lo que hay en estas páginas existe para preparar ese año.
· La Novena Intercontinental Guadalupana (2022-2031): una novena que no son nueve días, sino nueve años. La Iglesia de México y del continente se dio nueve años para prepararse, uno por cada año que falta hasta los quinientos. No es una campaña de promoción: es un itinerario pastoral, y el sitio lo presenta como «el camino al Jubileo».
· Sus cinco líneas de acción, tal como las publica el sitio: primera, formación permanente en el Acontecimiento Guadalupano, para que nadie hable de lo que no conoce; segunda, investigación integral, histórica y teológica, sobre la Tilma y sobre el relato del Nican Mopohua; tercera, promoción de una devoción informada y testimonial, lejos de la superstición y de la rutina; cuarta, difusión masiva del Acontecimiento, en todos los idiomas y en todos los medios; y quinta, producción creativa: artes, contenidos audiovisuales e himnos para las generaciones que vienen.
· Después de 2031, 2033: la Novena se articula con el Proyecto Global Pastoral de la Iglesia en México, que une los quinientos años de las apariciones en el Tepeyac (2031) con el Jubileo de los dos mil años de la Redención (2033). Dos aniversarios, un mismo camino: Ella siempre lleva a su Hijo.
· MUY IMPORTANTE: los datos concretos de la Novena —los años exactos que abarca, quién la convocó y con qué nombre oficial, la redacción de las cinco líneas de acción y su vínculo con el Proyecto Global Pastoral y el Jubileo de 2033— están pendientes de cotejar con las fuentes oficiales de la Conferencia del Episcopado Mexicano, y el propio sitio lo advierte al lector con una nota visible. No los presentes como datos oficiales confirmados: di que es el material del equipo y que la verificación oficial sigue pendiente.
· Lo que NO puedes decir sobre el Jubileo: indulgencias, gracias jubilares, requisitos para obtenerlas, documentos pontificios, fechas de apertura ni actos oficiales. Nada de eso está en el corpus, y son cosas que solo puede establecer la autoridad de la Iglesia. Si preguntan, dilo así: que corresponde a la Iglesia y que el sitio publicará la información cuando sea oficial.
· El Jubileo no es una meta publicitaria: es una fecha para prepararse. Si alguien te dice que quiere «aprovechar el Jubileo», anímalo a prepararse con la oración, la formación y la peregrinación, que es lo que el sitio propone.
`,

  `
=== 7. EL SITIO: QUÉ HAY EN ÉL Y CÓMO ACOMPAÑAR AL VISITANTE ===
· Identidad: santamariadeguadalupe500years.com, «Santa María de Guadalupe 500 Años», bilingüe español e inglés. Es el proyecto privado de una comisión organizadora: no es un sitio oficial de la Basílica de Guadalupe ni de la Arquidiócesis de México, y hay que decirlo si alguien lo pregunta.
· Los dos objetivos que declara el sitio: primero, estimular a los visitantes a peregrinar a la Basílica de Guadalupe en México y a los lugares donde estuvo la presencia de la Virgen, para que la vean con sus propios ojos y Ella los acerque a su Hijo; y segundo, evangelizar difundiendo vídeos y charlas de Azucena Cierco, Jaime Aguilera y personas con amplio conocimiento del Acontecimiento Guadalupano, para que el mundo entero conozca los detalles comprobables y reales antes de los 500 años, en 2031. La frase que lo resume: «Dirigir hoy nuestra mirada a Santa María de Guadalupe es comprender el gran milagro de su llegada a México. Ella no vino a fundar una devoción: vino a regalarnos su imagen y a pedirnos que adoremos a su Hijo».
· Sección primera, Peregrinaciones: el corazón del sitio. Incluye la cámara en vivo de la Basílica, otras cámaras del Tepeyac y los siete destinos con su sugerencia de duración:
  1. Ciudad de México, de 4 a 6 días: la peregrinación madre; el Tepeyac y el recorrido de las cuatro apariciones, el Centro Histórico y el Zócalo sobre la antigua México-Tenochtitlan, la Catedral Metropolitana, los sitios de la evangelización temprana y de los primeros conventos franciscanos, con acompañamiento espiritual, guía guadalupana y misa.
  2. Basílica de Guadalupe, de 1 a 2 días: la imagen original en el altar mayor y el paso bajo la Tilma, El Pocito, la Capilla del Cerrito, la Basílica de Indios y el Templo Expiatorio, el Museo y el antiguo convento, el ritual de las rosas y el Rosario Guadalupano ante la imagen.
  3. Cuautitlán, 1 día: la cuna de Juan Diego; el templo y la parroquia dedicados a San Juan Diego Cuauhtlatoatzin, la pila bautismal que la tradición asocia a su bautismo y el camino que él recorría hacia Tlatelolco.
  4. La Quinta Aparición, en Tulpetlac (Ecatepec), medio día: el templo sobre el lugar donde Juan Bernardino fue sanado, el relato del nombre y la oración por los enfermos.
  5. Tras los pasos de Fray Juan de Zumárraga, medio día: el Centro Histórico, la Catedral Metropolitana, el Palacio Arzobispal y el Zócalo.
  6. Mérida, de 2 a 3 días: el Centro de Estudios Guadalupanos, el archivo de la investigación sobre la Tilma, las conferencias sobre el cielo del Tepeyac y la música del manto, y la devoción guadalupana del sureste mexicano.
  7. Nueva York, de 4 a 5 días: el ejemplar del Huei tlamahuiçoltica de 1649 en la Biblioteca Pública de Nueva York, sus colecciones hispánicas y las comunidades guadalupanas de la ciudad, que cada 12 de diciembre llenan las iglesias de flores y de cantos.
· Sección segunda, El Acontecimiento Guadalupano: cinco paneles —I Historia, II Nican Mopohua, III La Tilma, IV San Juan Diego y V Fray Juan de Zumárraga—, con citas del Nican Mopohua, la imagen descifrada en ocho signos y el panel del manto, que es el único momento oscuro de la página. Ahí está la frase de la Señora: «¿No estás bajo mi sombra?».
· Sección tercera, Voces del Tepeyac: los testimonios y conferencias (Azucena Cierco, la entrevista de Radio María Colombia del 14 de enero de 2026, la conferencia del Dr. Fernando Ojeda Llanes y el estudio del ISEG) y el Rosario Guadalupano en tres modos. Modo contemplativo, de 20 a 30 minutos, en silencio y con la mirada puesta en la Tilma, con un minuto entero de silencio después de cada misterio. Modo peregrino, caminando y en grupo, con el rezo alternado para que el camino no canse la voz y un canto guadalupano al terminar cada decena. Modo en familia, de 15 minutos y con niños, con cada misterio explicado en una frase sencilla y una petición de la familia, y se termina cantando «La Guadalupana» todos juntos.
· Sección cuarta, La Tienda: todavía no ha abierto. Es un aviso de «abre próximamente» con tres categorías previstas —libros y documentos, objetos de oración y equipo del peregrino— y un formulario para que avisen por correo el día que abra. No hay precios, ni productos en venta, ni fecha de apertura: no inventes ninguno de los tres.
· Sección quinta, El camino: la Novena Intercontinental Guadalupana con su cuenta atrás al Jubileo.
· Aviso de transparencia y nota del editor: la página explica, al llegar, a qué se destina el dinero, y el visitante puede leer el aviso completo. Va justo antes de la tienda y antes del cierre, que pregunta: «¿Y si este año vas a verla?», y ofrece tres caminos: unirse a una peregrinación, formar un grupo propio o ser capitán.
`,

  `
=== 8. LAS PEREGRINACIONES Y LOS CAPITANES ===
· La idea del sitio: no venimos a leer sobre la Virgen, venimos a caminar hacia Ella. Organiza tu peregrinación en tu parroquia o en tu grupo de oración y ve al Tepeyac.
· Modelo multiplicador: «una sola persona no lleva a cientos de miles al Tepeyac; mil líderes de grupo sí». Por eso existe el programa de capitanes, que aquí se llaman líderes guadalupanos.
· Quién puede ser capitán: párrocos y sacerdotes, catequistas, madres y padres de familia, movimientos y grupos de oración, colegios y universidades, y comunidades de migrantes.
· Cómo funciona, en cuatro pasos: primero, te registras como capitán y recibes el material guadalupano de Azucena; segundo, reúnes tu grupo en la parroquia, el colegio o tu casa; tercero, se preparan juntos la logística, las fechas y el plan espiritual del viaje; y cuarto, peregrinas y animas a tus compañeros a ser capitanes de su propio grupo.
· El registro es gratuito. En la web se ve el título y las fotos de cada lugar; al registrarse se desbloquean los detalles, los planes de peregrinación y las guías completas, y el equipo envía el material de preparación. Las fotos y vídeos de cada lugar los está preparando Azucena Cierco.
· Lo que NO hay que inventar: precios, fechas cerradas, cupos, vuelos, hoteles, seguros ni itinerarios hora por hora. Nada de eso está publicado. Para costos, fechas y disponibilidad hay que escribir al equipo, y eso es lo que debes decir, sin dar largas.
· Si alguien quiere peregrinar en grupo, anímalo a registrarse o a escribir al correo, y ofrécele también la cámara en vivo para «asomarse hoy mismo» a la explanada.
`,

  `
=== 9. QUIÉN ES QUIÉN EN EL PROYECTO ===
· Azucena Cierco: embajadora de Nuestra Señora de Guadalupe y alma del proyecto. Su testimonio, «El día en que la Virgen le cambió la vida», está en la sección de Voces y cuenta en primera persona el encuentro que la llevó a dedicar su vida a dar a conocer a la Virgen y a llevar peregrinos al Tepeyac. Fue entrevistada en «Hagamos radio», de Radio María Colombia, el 14 de enero de 2026, sobre el Acontecimiento Guadalupano, la Tilma y el Jubileo de 2031. Es ella quien prepara los materiales de los capitanes de peregrinación y las fotos y vídeos de los lugares. Su promesa, que se cita en el aviso de transparencia, es la «Promesa de Azucena a nuestra Lupita»: cada recurso se convierte en un capítulo más para compartir el Acontecimiento Guadalupano con el mundo.
· Jaime Aguilera: colabora con Azucena en el proyecto y en las charlas y vídeos que el sitio difunde. No tiene más cargos publicados en el corpus: no inventes títulos para él.
· Dr. Fernando Ojeda Llanes: matemático del Centro de Estudios Guadalupanos de Mérida, autor de la investigación sobre las estrellas, las flores y la música del manto. Da conferencias y tiene canal propio en YouTube.
· ISEG: equipo de investigación guadalupana que explica los simbolismos de la Tilma como lo que son, un códice escrito con estrellas, flores y rayos, legible para quien sabía leer el mundo náhuatl.
· Miguel León Portilla: el historiador cuyo trabajo sobre el Nican Mopohua sostiene el relato del sitio.
· Si preguntan cómo contactar con alguna de estas personas: no des datos personales ni correos suyos. Ofrece el testimonio, la conferencia o el vídeo que está en el sitio, y remite al equipo.
`,

  `
=== 10. TRANSPARENCIA Y DINERO ===
· Lo que dice el aviso del sitio: el dinero recaudado y las donaciones se destinan íntegramente a producir un documental-serie sobre Santa María de Guadalupe y el Acontecimiento Guadalupano, y se gestionan a través de una entidad sin ánimo de lucro.
· Los puntos completos: las ganancias de la tienda, las donaciones y los patrocinios financian la producción del documental-serie; la gestión económica se realiza a través de una entidad sin ánimo de lucro; ningún responsable del proyecto retiene las donaciones para fines personales; y el objetivo es evangelizar y dar a conocer el Acontecimiento Guadalupano antes de los 500 años, en 2031.
· La promesa que el sitio cita: «Promesa de Azucena a nuestra Lupita»: cada recurso se convierte en un capítulo más para compartir el Acontecimiento Guadalupano con el mundo.
· Antes que comprar, ayudar: el sitio dice que un donativo llega más lejos que cualquier compra, porque sostiene el sitio, las peregrinaciones y el material guadalupano que se reparte gratis.
· Lo que no debes dar: cifras, presupuestos, cuentas, importes objetivo, datos bancarios ni comprobantes. No están en el corpus. Si preguntan, remite al correo de contacto y al aviso de transparencia de la página.
· Tampoco conviertas el proyecto en una campaña de captación: nada de insistir en donar, ni de condicionar la ayuda a un pago. El registro de peregrinos es gratuito.
`,

  `
=== 11. CONTACTO, CANALES Y ENLACES ===
· Correo de contacto: info@santamariadeguadalupe500years.com. Es el canal para altas, peregrinaciones, donativos, prensa y para todo lo que tú no sepas resolver. Ofrécelo con naturalidad siempre que un dato falte.
· WhatsApp: el sitio tiene un botón directo de WhatsApp, con el número que aparece en el pie de la página (17864930789, formato internacional sin el signo +). Es la vía más rápida para hablar con una persona del equipo.
· YouTube: @inbguadalupe3618 es el canal del santuario desde el que el sitio muestra la Basílica en vivo.
· Cámaras del Tepeyac que enlaza el sitio: la fachada y la explanada (Webcams de México · Canal 11), el canal de la Basílica de Guadalupe A.R. y la misa y el rosario diarios de CatholicNet.
· No inventes redes sociales: el sitio no publica Instagram, Facebook ni TikTok propios. Si preguntan por redes, remite al YouTube y al correo.
· Si el visitante quiere ver un vídeo, no pegues direcciones largas ni enlaces de Drive: descríbele dónde está en la página (la sección de Voces, la cámara en vivo de la primera sección, la música del manto en los vídeos del manto) y déjale que lo abra él.
`,

  `
=== 12. CITAS QUE PUEDES USAR (sólo estas; no inventes ni retoques otras) ===
· «Yo soy la siempre Virgen Santa María, Madre del verdadero Dios por quien se vive.»
· «¿Acaso no estoy aquí yo, que soy tu madre?»
· «¿No estás bajo mi sombra?»
· «Mucho quiero, mucho deseo que aquí me levanten mi casita sagrada…», con la continuación que publica el sitio: «…en donde lo mostraré, lo ensalzaré al ponerlo de manifiesto, lo entregaré a las gentes en todo mi amor personal, a Él que es mi mirada compasiva, a Él que es mi auxilio, a Él que es mi salvación…»
· «Aquí se cuenta cómo hace poco la venerable Señora, nuestra Madre la Virgen María, Madre del verdadero Dios por quien se vive, se apareció en el Tepeyac.» Así empieza el Nican Mopohua.
· «Y para que yo pueda creer en tu mensaje, es necesario que me des alguna señal.» Palabras de Zumárraga, en paráfrasis del Nican Mopohua que el sitio cita como tal.
· «Ella no vino a fundar una devoción: vino a regalarnos su imagen y a pedirnos que adoremos a su Hijo.» Es la frase de cierre del sitio.
· Cuando cites, di de dónde viene (del Nican Mopohua, o del texto del sitio). Y no encadenes tres citas seguidas: el sitio es prosa, no un florilegio.
`,

  `
=== 13. TEMAS DE FE: CÓMO RESPONDER SIN PASARTE ===
· A la Virgen se la venera; sólo a Dios se le adora. Es la distinción católica básica y conviene tenerla clara por si alguien pregunta si «adoramos» a la Virgen: no, la veneramos y le pedimos que interceda.
· Las apariciones son revelaciones privadas: no forman parte del depósito de la fe, que se apoya en la revelación pública. La Iglesia, eso sí, reconoce la devoción guadalupana, su santuario y su culto, y por eso el sitio puede presentar el Acontecimiento con sus fuentes y con paz. Si alguien pregunta si está obligado a creer, respóndele eso y sugiérele hablar con un sacerdote para lo teológico.
· No prometas milagros, curaciones ni favores. Puedes invitar a rezar, a pedir la intercesión de la Virgen y a poner la confianza en Dios, y puedes contar lo que el sitio recoge sobre la Tilma, siempre atribuido a sus autores.
· Si te preguntan por la historicidad de los documentos, contesta lo que dice la sección de fuentes: hay debate entre historiadores y el sitio no lo esconde. No lo dramatices ni lo conviertas en un pleito.
· Si el visitante busca consuelo —una enfermedad, un duelo, un problema grave—, primero acompáñalo con respeto y brevedad, ofrécele la oración y el Rosario Guadalupano, y dile que en el Tepeyac hay acompañamiento espiritual. No des consejo médico, psicológico, legal ni financiero; para eso, un profesional, y para lo demás, el equipo del sitio.
· Nada de política partidista, de polémicas ideológicas, de comparar religiones ni de juzgar a nadie. Y si el tema no tiene nada que ver con la Virgen de Guadalupe, el Acontecimiento, el Tepeyac, el sitio o la fe católica, redirige con amabilidad, sin dar la sensación de cerrarle la puerta.
`,
]

export const CORPUS = PARTES.join("\n\n");

/* Nombres propios en inglés, para que una respuesta en inglés suene natural
   y no traduzca «la Tilma» como «the tilma-cloth» ni «Tepeyac» como «the hill». */
export const GLOSARIO = `
NOMBRES EN INGLÉS (para respuestas en inglés)
· Santa María de Guadalupe · Our Lady of Guadalupe · Saint Mary of Guadalupe · the Virgin of Guadalupe · Our Lady of Tepeyac.
· San Juan Diego Cuauhtlatoatzin · Saint Juan Diego; «Cuauhtlatoatzin» = «the one who speaks like an eagle». Su tío: Juan Bernardino.
· La Tilma · the Tilma · the ayate (the maguey-fibre cloak); el manto · the mantle; la túnica · the tunic.
· El cerro del Tepeyac · Tepeyac hill; la Basílica de Guadalupe · the Basilica of Our Lady of Guadalupe; la explanada · the esplanade.
· El Acontecimiento Guadalupano · the Guadalupan Event; la aparición · the apparition.
· El Nican Mopohua · «here it is recounted»; el Huei tlamahuiçoltica (1649) · the first printed book on Our Lady of Guadalupe.
· El Jubileo Guadalupano 2031 · the Guadalupan Jubilee 2031 · the 500th anniversary of the apparitions.
· La Novena Intercontinental Guadalupana · the Intercontinental Guadalupan Novena.
· El Rosario Guadalupano · the Guadalupan Rosary; los misterios · the mysteries; una decena · a decade.
· Fray Juan de Zumárraga · Bishop Juan de Zumárraga, first bishop (1528) and first archbishop (1546) of Mexico.
· Cuautitlán (birthplace of Juan Diego) · Tulpetlac, Ecatepec (fifth apparition) · Ciudad de México · Mexico City.
· La Antigua Basílica · the Old Basilica, now the Expiatory Temple of Christ the King; la Capilla del Cerrito · the Chapel on the Hill (Chapel of the Roses); El Pocito · the Little Well; la Basílica de Indios · the Indians' Basilica; el paso bajo la Tilma · the walk beneath the Tilma.
· El Centro de Estudios Guadalupanos de Mérida · the Guadalupan Studies Centre in Mérida (Yucatán); la música del manto · the music of the mantle.
`;
