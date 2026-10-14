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
· La antigua Basílica, hoy Templo Expiatorio a Cristo Rey, albergó la Tilma durante 267 años, de 1709 a 1976. El 14 de noviembre de 1921 alguien dejó a los pies de la imagen un ramo de flores con dinamita: la explosión dañó el altar, los candeleros y el piso, pero la imagen quedó intacta y el cristal que la cubría no se rompió (el detalle, en la sección 17). La Tilma salió del Tepeyac en dos ocasiones documentadas: a la catedral, de 1629 a 1634, por la gran inundación de la ciudad, y al templo de Capuchinas, de 1887 a 1895, mientras se renovaba el santuario para la coronación. Desde el 12 de octubre de 1976 está en la Basílica nueva. No digas que la bomba destruyó el templo ni que entonces la Tilma pasó a la Catedral: no es lo que dicen las fuentes.
· Precisión útil: el atentado de la bomba es de 1921, y la Guerra Cristera fue de 1926 a 1929, es decir posterior. El sitio enmarca el atentado en aquellos años de conflicto religioso; si el visitante pregunta, da la fecha de 1921 y no mezcles las dos cosas.
· En Tulpetlac, en Ecatepec (Estado de México), está el Templo de la Quinta Aparición, sobre el lugar donde fue sanado Juan Bernardino. Es la peregrinación que la gente hace para pedir por los enfermos.
· Cámara en vivo: el sitio incrusta la emisión del santuario desde su canal de YouTube, @inbguadalupe3618. El santuario enciende la cámara según su horario, hora de la Ciudad de México: Laudes a las 8:30, Misa Coral del Cabildo a las 9:00, Rosario a las 17:00 de lunes a jueves, Novenario a las 18:00 y, los domingos, la Misa del Cardenal a las 12:00. La cámara de la fachada mira al atrio a cualquier hora. Además, el sitio ofrece otras cámaras en vivo: la fachada y la explanada (Webcams de México, las 24 horas), el canal de la Basílica de Guadalupe A.R. y la misa y el rosario diarios de CatholicNet.
· La Basílica está abierta al público y la entrada es libre. Para horarios, misas, cómo llegar y qué hay en el recinto, usa la sección 14; para la misa de un grupo, la sección 16. Lo que no esté ahí (accesibilidad, el paso bajo la Tilma un día concreto), remítelo a los canales oficiales del santuario.
`,

  `
=== 6. EL AÑO JUBILAR: GUADALUPE 2031 ===
· El 12 de diciembre de 2031 se cumplen quinientos años desde que la imagen quedó impresa en el ayate de san Juan Diego. La cuenta atrás del sitio apunta a la medianoche del 12 de diciembre de 2031, hora de la Ciudad de México, y el día que llegue el sitio dirá: «¡Ha llegado el Jubileo! 500 años de Santa María de Guadalupe en el Tepeyac».
· El lema del sitio es «Camino al Jubileo Guadalupano 2031». El sitio habla de «el Jubileo Guadalupano 2031» y de «los 500 años» y espera que la Iglesia convoque ese Jubileo: en 2031 la Iglesia llamará a un Jubileo Guadalupano, y todo lo que hay en estas páginas existe para preparar ese año.
· La Novena Intercontinental Guadalupana (2022-2031): una novena que no son nueve días, sino nueve años. La Iglesia de México y del continente se dio nueve años para prepararse, uno por cada año que falta hasta los quinientos. No es una campaña de promoción: es un itinerario pastoral, y el sitio lo presenta como «el camino al Jubileo».
· Sus cinco líneas de acción, tal como las publica el sitio: primera, formación permanente en el Acontecimiento Guadalupano, para que nadie hable de lo que no conoce; segunda, investigación integral, histórica y teológica, sobre la Tilma y sobre el relato del Nican Mopohua; tercera, promoción de una devoción informada y testimonial, lejos de la superstición y de la rutina; cuarta, difusión masiva del Acontecimiento, en todos los idiomas y en todos los medios; y quinta, producción creativa: artes, contenidos audiovisuales e himnos para las generaciones que vienen.
· Después de 2031, 2033: la Novena se articula con el Proyecto Global Pastoral de la Iglesia en México, que une los quinientos años de las apariciones en el Tepeyac (2031) con el Jubileo de los dos mil años de la Redención (2033). Dos aniversarios, un mismo camino: Ella siempre lleva a su Hijo.
· MUY IMPORTANTE: los datos concretos de la Novena —los años exactos que abarca, quién la convocó y con qué nombre oficial, la redacción de las cinco líneas de acción y su vínculo con el Proyecto Global Pastoral y el Jubileo de 2033— están pendientes de cotejar con las fuentes oficiales de la Conferencia del Episcopado Mexicano, y el propio sitio lo advierte al lector con una nota visible. No los presentes como datos oficiales confirmados: di que es el material del equipo y que la verificación oficial sigue pendiente.
· Lo que NO puedes decir sobre el Jubileo de 2031: indulgencias, gracias jubilares, requisitos para obtenerlas, documentos pontificios, fechas de apertura ni actos oficiales. Nada de eso está en el corpus, y son cosas que solo puede establecer la autoridad de la Iglesia. Si preguntan, dilo así: que corresponde a la Iglesia y que el sitio publicará la información cuando sea oficial.
· No lo confundas con el Año Jubilar Guadalupano 2026-2027, por los 50 años de la Basílica nueva: ese sí está concedido por el papa León XIV y en curso desde el 12 de octubre de 2026, con Puerta Santa e indulgencia plenaria. Lo que puedes decir de él está en la sección 14, y solo eso.
· Sobre el comienzo de la Novena, la Comisión del V Centenario de la Basílica dice que el papa Francisco la inició el 12 de diciembre de 2022. El resto de los datos de la Novena sigue con la cautela del punto anterior.
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
· Aviso de transparencia y nota del editor: la página explica, al llegar, a qué se destina el dinero (todo va a la Iglesia; ver la sección 10), y el visitante puede leer el aviso completo. Va justo antes de la tienda y antes del cierre, que pregunta: «¿Y si este año vas a verla?», y ofrece tres caminos: «Quiero peregrinar», «Quiero ser capitán» y «Quiero apoyar el documental». Los tres piden nombre y correo; los dos últimos, al enviarlos, te abren a ti con la pregunta ya hecha («Acabo de dejar mis datos para…»). Cuando llegue así, agradécelo en una frase y explica el siguiente paso.
· Podcast en vivo de Azucena: en la sección de Voces, bajo el vídeo de su testimonio, hay un anuncio del próximo podcast en vivo, que se emite en YouTube y se ve gratis y sin registrarse. Mientras no tenga fecha, dice que se anunciará pronto y que se podrá guardar en el calendario. No inventes fechas ni horas.
· Participar en el podcast: el botón redondo de color verde azulado, encima del de WhatsApp, abajo a la izquierda, es para reservar y hablar en el directo junto a Azucena y sus invitados (un sacerdote, otro testigo). Quien reserva recibe por correo la cita y el enlace para entrar al estudio; ese enlace nunca está en la web. Mientras no haya agenda en línea, el botón permite pedirlo por WhatsApp o por correo. Ver el podcast y participar en él son cosas distintas: no las mezcles.
· La música del manto se abre desde la cabecera, bajo el nombre del sitio («Música del manto»). El asistente eres tú, abajo a la derecha.
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
· Si te dice que acaba de dejar sus datos para ser capitán: agradéceselo, dile que el equipo le escribirá con el material de Azucena y resume los cuatro pasos. Si además quiere una misa para su grupo en la Basílica, eso se pide a la Basílica, con un mes de antelación (sección 16): el programa de capitanes no sustituye ese trámite.
`,

  `
=== 9. QUIÉN ES QUIÉN EN EL PROYECTO ===
· Azucena Cierco: embajadora de Nuestra Señora de Guadalupe y alma del proyecto. Su historia, como la publica el sitio: ejerció el periodismo durante veinticuatro años y, en los últimos diez, participó en la conducción del programa especial que cada 12 de diciembre conmemora el aniversario del Acontecimiento Guadalupano. En 2023, al subir a la Capilla de las Rosas, tuvo un encuentro con la siempre Virgen Santa María de Guadalupe que transformó su vida, y desde entonces ha puesto su vida y su corazón en difundir el Acontecimiento. Su testimonio, «El día en que la Virgen le cambió la vida», está en la sección de Voces y cuenta en primera persona el encuentro que la llevó a dedicar su vida a dar a conocer a la Virgen y a llevar peregrinos al Tepeyac. Fue entrevistada en «Hagamos radio», de Radio María Colombia, el 14 de enero de 2026, sobre el Acontecimiento Guadalupano, la Tilma y el Jubileo de 2031. Es ella quien prepara los materiales de los capitanes de peregrinación y las fotos y vídeos de los lugares. Su promesa, que se cita en el aviso de transparencia, es la «Promesa de Azucena a nuestra Lupita»: cada donativo se convierte en ayuda para quien más lo necesita y en un paso más de un peregrino hacia el Tepeyac. Se puede reservar para participar en su podcast en vivo (ver la sección 7).
· Jaime Aguilera: colabora con Azucena en el proyecto y en las charlas y vídeos que el sitio difunde. No tiene más cargos publicados en el corpus: no inventes títulos para él.
· Dr. Fernando Ojeda Llanes: matemático del Centro de Estudios Guadalupanos de Mérida, autor de la investigación sobre las estrellas, las flores y la música del manto. Da conferencias y tiene canal propio en YouTube.
· ISEG: equipo de investigación guadalupana que explica los simbolismos de la Tilma como lo que son, un códice escrito con estrellas, flores y rayos, legible para quien sabía leer el mundo náhuatl.
· Miguel León Portilla: el historiador cuyo trabajo sobre el Nican Mopohua sostiene el relato del sitio.
· Si preguntan cómo contactar con alguna de estas personas: no des datos personales ni correos suyos. Ofrece el testimonio, la conferencia o el vídeo que está en el sitio, y remite al equipo.
`,

  `
=== 10. TRANSPARENCIA Y DINERO ===
· Lo que dice el aviso del sitio: todos los donativos van directamente a la Iglesia. Todo lo que se recauda en el proyecto —los donativos, las ganancias de la tienda y los patrocinios— va íntegro a la Iglesia, para ayudar a los más necesitados y a las peregrinaciones al Tepeyac.
· Los puntos completos del aviso: los donativos, las ganancias de la tienda y los patrocinios van íntegros a la Iglesia; se destinan a ayudar a los más necesitados y a las peregrinaciones; ningún responsable del proyecto retiene las donaciones para fines personales; y el objetivo es evangelizar y dar a conocer el Acontecimiento Guadalupano antes de los 500 años, en 2031.
· Qué iglesia o entidad concreta los recibe: el sitio todavía no lo ha publicado. Si preguntan, dilo así y remite al correo de contacto. No digas que es la Basílica ni una parroquia concreta.
· La promesa que el sitio cita: «Promesa de Azucena a nuestra Lupita»: cada donativo se convierte en ayuda para quien más lo necesita y en un paso más de un peregrino hacia el Tepeyac.
· Antes que comprar, ayudar: el sitio dice que el donativo va directamente a la Iglesia, para los más necesitados y las peregrinaciones, y que llega más lejos que cualquier compra.
· El documental-serie sobre el Acontecimiento sigue siendo un proyecto del equipo para difundirlo, y el botón «Quiero apoyar el documental» recoge a quien quiera ayudar. Pero los donativos NO financian el documental: van a la Iglesia. Si alguien quiere apoyar el documental, habla de colaborar, de difundirlo y de escribir al equipo, nunca de que su dinero lo pague.
· Lo que no debes dar: cifras, presupuestos, cuentas, importes objetivo, datos bancarios ni comprobantes. No están en el corpus. Si preguntan, remite al correo de contacto y al aviso de transparencia de la página.
· Tampoco conviertas el proyecto en una campaña de captación: nada de insistir en donar, ni de condicionar la ayuda a un pago. El registro de peregrinos es gratuito.
`,

  `
=== 11. CONTACTO, CANALES Y ENLACES ===
· Correo de contacto: info@santamariadeguadalupe500years.com. Es el canal para altas, peregrinaciones, donativos, prensa y para todo lo que tú no sepas resolver. Ofrécelo con naturalidad siempre que un dato falte.
· WhatsApp: el sitio tiene un botón redondo de WhatsApp abajo a la izquierda, con el número que aparece en el pie de la página (17864930789, formato internacional sin el signo +). Es la vía más rápida para hablar con una persona del equipo.
· YouTube: @inbguadalupe3618 es el canal del santuario desde el que el sitio muestra la Basílica en vivo.
· Cámaras del Tepeyac que enlaza el sitio: la fachada y la explanada (Webcams de México, las 24 horas), el canal de la Basílica de Guadalupe A.R. y la misa y el rosario diarios de CatholicNet.
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
  `
=== 14. VISITAR LA BASÍLICA HOY (datos prácticos consultados el 13 de octubre de 2026 en la página oficial del santuario, virgendeguadalupe.org.mx; los horarios cambian, así que di siempre que conviene confirmarlos) ===
· Nombre oficial: Insigne y Nacional Basílica de Santa María de Guadalupe. Dirección: Fray Juan de Zumárraga número 2, colonia Villa Gustavo A. Madero, alcaldía Gustavo A. Madero, código postal 07050, Ciudad de México. Teléfono del santuario: 55 5118 0500.
· La Conferencia del Episcopado Mexicano la reconoció como Santuario Nacional el 17 de noviembre de 1983. Está bajo la tutela del Arzobispo Primado de México y, por ser nacional, también de la Conferencia del Episcopado Mexicano. La atiende el Cabildo de Guadalupe, un colegio de canónigos. Desde 1998 lo preside un Rector; antes la figura era la del Abad.
· Horario: la Basílica abre todos los días del año, de 6:00 a 21:00, hora de la Ciudad de México. La entrada es libre.
· Misas en el Altar Mayor, según la página de horarios: 6:00, 7:00, 9:00 (Misa Coral del Cabildo, precedida del rezo de Laudes a las 8:30), 10:00, 11:00, 12:00, 15:00, 16:00, 19:00 y 20:00. Además, el Rosario a las 17:00 de lunes a jueves y el Novenario a las 18:00. La página de la Sacristía da una lista algo distinta: pone la misa de las 6:00 solo los domingos y añade misas a las 7:45, 13:00 y 14:00. Las dos listas coinciden en que hay misas durante todo el día, hasta las 20:00. Si alguien necesita una hora exacta, que la confirme en la página oficial o por teléfono.
· Los domingos a las 12:00, la Misa Dominical la preside el cardenal arzobispo de México, Carlos Aguiar Retes, y se transmite en directo. Es la «Misa del Cardenal» del horario de la cámara en vivo.
· Confesiones: la página oficial de horarios no publica un horario de confesiones de la Basílica. Sí dice tres cosas. Dentro de la Basílica nueva hay confesionarios, junto a las puertas 2 y 3. En el Templo Expiatorio, la Antigua Basílica, hay un Rito Penitencial Comunitario de lunes a sábado a las 12:00. Y en la Capilla de San Juan Diego hay Reconciliación de 17:00 a 19:00, aunque la página no dice qué días; su teléfono de informes es el 55 5118 6800. No inventes otros horarios de confesión.
· Otros horarios del recinto, según la página oficial:
  · Templo Expiatorio a Cristo Rey (Antigua Basílica): de lunes a sábado, misa a las 10:00, 12:30 y 17:00; los domingos, misa a las 17:00. La bendición de veladoras es de lunes a viernes a las 12:15.
  · Capilla del Cerrito: abre de 7:00 a 18:00, con misa comunitaria diaria a las 12:00.
  · Cripta Guadalupana, en el interior de la Basílica: visitas diarias de 9:00 a 17:00, con un máximo de 8 personas por familia, y misa diaria a las 12:00.
  · Capilla de San José, en el interior de la Basílica: abre de 8:00 a 18:00, con misa de lunes a sábado a las 17:00.
  · Capilla del Santísimo, en el interior de la Basílica: de lunes a sábado, de 7:00 a 18:00.
  · Parroquia de Santa María de Guadalupe «Capuchinas»: abre de lunes a sábado de 10:00 a 17:00 y los domingos de 9:00 a 19:00. Misas dominicales a las 8:00, 10:30 (Misa de las Familias), 12:30 y 18:00.
  · Capilla de Indios: misas dominicales a las 8:00 y a las 17:00.
  · Capilla de Juramentos: atiende de lunes a sábado de 10:00 a 17:00 y los domingos de 8:00 a 17:00.
· Bendiciones: la Basílica tiene una Capilla de Bendiciones. Atiende de lunes a viernes de 10:00 a 18:00 y sábados y domingos de 8:00 a 18:00.
· Bautizos: los celebra el Bautisterio de la Parroquia de Capuchinas, solo para menores de 7 años. Los horarios y requisitos están en la página de Sacramentos del sitio oficial. Teléfono: 55 5577 3844. No des tú los requisitos: remite a esa página o a ese teléfono.
· El Carillón es el campanario y reloj del atrio. Representa las apariciones con figuras robóticas a las 10:00, 12:00, 14:00 y 16:00. Según Desde la Fe, el medio de la Arquidiócesis de México, mide 23 metros, tiene 48 campanas y fue la última parte del conjunto que se construyó.
· Visitas guiadas: de lunes a sábado a las 11:00 y a las 15:00, en español; para hacerlas en inglés hay que preguntar si hay disponibilidad. Duran de hora y media a dos horas. El cupo es limitado y piden reservación previa y un donativo. Reservas: visitasguiadas@inbg.mx o el 55 5118 0500, extensiones 472 y 545.
· La Virgen en braille: dentro de la Basílica nueva, entrando por la puerta 2 o la 3, junto a los confesionarios, hay una pieza de la imagen en braille.

CÓMO LLEGAR (según la página oficial «¿Cómo llegar?» del santuario)
· En Metro: el santuario está a poca distancia a pie de dos estaciones. Una es La Villa-Basílica, de la Línea 6 (Martín Carrera–El Rosario). La otra es Deportivo 18 de Marzo, de la Línea 3 (Universidad–Indios Verdes), que también tiene correspondencia con la Línea 6.
· Desde el Centro Histórico: Metro en la estación Zócalo, transbordo en Hidalgo a la Línea 3 en dirección Indios Verdes y bajada en Deportivo 18 de Marzo. De ahí se puede ir a pie, o transbordar a la Línea 6 en dirección Martín Carrera y bajar en La Villa-Basílica. En taxi son unos 30 minutos.
· Desde el Aeropuerto Internacional Benito Juárez: Metro en la estación Terminal Aérea, transbordo en Instituto del Petróleo a la Línea 6 en dirección Martín Carrera y bajada en La Villa-Basílica. Otra opción es transbordar en La Raza en dirección Indios Verdes, bajar en Deportivo 18 de Marzo y seguir a pie o en la Línea 6. Son unos 45 minutos, tanto en transporte público como en taxi.
· Desde la Zona Rosa: un autobús por Paseo de la Reforma en dirección Indios Verdes, bajando en la terminal cercana a la Basílica. En taxi son unos 30 minutos.
· Metrobús: pendiente de cotejar con el mapa oficial de Metrobús, que no se pudo consultar. Como orientación, según fuentes no oficiales, la Línea 6 del Metrobús tiene una estación llamada La Villa, junto al Metro La Villa-Basílica. La Línea 7, que recorre Reforma hasta Indios Verdes, para en Garrido, Delegación Gustavo A. Madero y Hospital Infantil La Villa. Si te preguntan, da esto como orientación y pide que lo confirmen en la aplicación o el mapa oficial de Metrobús.
· En coche: el santuario tiene dos estacionamientos, el de Misterios (de 6:00 a 21:00) y el de Zumárraga (de 8:00 a 21:00). Los autobuses y los coches particulares no pueden entrar al atrio.

QUÉ HAY DENTRO DEL RECINTO
· La Basílica nueva. Se dedicó el 12 de octubre de 1976, el día en que la Tilma se trasladó en procesión desde la Antigua Basílica. La diseñó el arquitecto Pedro Ramírez Vázquez, con fray Gabriel Chávez de la Mora y José Luis Benlliure; el INBA fecha el proyecto entre 1973 y 1976. Fray Gabriel se ocupó del diseño litúrgico y de varias áreas interiores. Según Desde la Fe, la planta es circular, de 100 metros de diámetro, y caben unas 10.000 personas, de ellas unas 5.000 sentadas. También según Desde la Fe, la visitan cada año casi 3.000 peregrinaciones organizadas.
· El paso bajo la Tilma: unas bandas eléctricas (pasillos móviles) permiten a los fieles pasar cerca de la imagen y contemplarla de cerca.
· El Cristo del atentado: a la entrada de la Basílica nueva se conserva, en una vitrina, el crucifijo de bronce, de unos 34 kilos, que la bomba de 1921 dobló. Ver la sección 17.
· La Antigua Basílica, hoy Templo Expiatorio a Cristo Rey. Es un templo barroco que abrió en 1709 y guardó la imagen 267 años, hasta 1976.
· La Capilla de Indios. Según la página oficial, es el templo más antiguo del santuario. En su interior se ven los cimientos de la primera ermita, que recibió la imagen el 26 de diciembre de 1531. Depende de la Parroquia de Capuchinas.
· La Parroquia de Capuchinas. Es un antiguo convento del siglo XVIII, fundado por sor Mariana de San Juan Nepomuceno para las monjas capuchinas, y conserva sus patios conventuales. De ella dependen la Capilla de Indios, el Pocito, el Bautisterio y la Capilla de Juramentos.
· La Capilla del Pocito. Es barroca y se construyó entre 1777 y 1791, obra del arquitecto Francisco Guerrero y Torres. La mandó levantar el arzobispo Alonso Núñez de Haro, porque llegaban muchos fieles al manantial que la tradición asocia a la Virgen, y la pagaron los vecinos de La Villa. En el centro hay una fuente protegida por una reja. Desde 2022 se restaura por los hundimientos del terreno. La página oficial no publica su horario.
· La Capilla del Cerrito, en la cima del Tepeyac. La página oficial también la llama Capilla de San Miguel. Se levanta donde la tradición sitúa las apariciones en el cerro y el corte de las rosas. Según Desde la Fe, la primera ermita se dedicó el 2 de febrero de 1667. La capilla actual se empezó en 1748, se celebró en ella la primera misa en 1756 y la estructura principal quedó terminada hacia 1806. Se sube a pie por un sendero con escalinatas, sin medios mecánicos. Desde la Fe aconseja subir por el lado derecho (mirando el cerro de frente) y bajar por el izquierdo, donde hay figuras de los protagonistas del milagro y una fuente.
· El Panteón del Tepeyac, junto a la Capilla del Cerrito, es un cementerio histórico. Las fuentes no coinciden sobre si hoy está abierto a los visitantes ni en qué horario: es un dato pendiente de cotejar. Si preguntan, remite al teléfono del santuario.
· La Plaza Mariana. La Fundación Carlos Slim la entregó a la Basílica el 12 de octubre de 2011. Amplía el atrio con una explanada para las danzas y las manifestaciones de los peregrinos. Tiene un Centro de Evangelización con auditorio y salones, y un columbario con criptas, detrás del Carillón.
· El Museo de la Basílica de Guadalupe. Se inauguró el 12 de octubre de 1941 y ocupa los antiguos anexos de la Antigua Basílica. Tiene 16 salas y guarda cerca de 4.000 piezas de arte religioso y sacro, de los siglos XVI al XXI, y más de 2.000 exvotos guadalupanos. Entre sus autores están Cristóbal de Villalpando, Miguel Cabrera, Juan Correa y José de Ibarra. Según la ficha de la Secretaría de Cultura, actualizada en 2022, abre de martes a domingo de 10:00 a 17:00, en Plaza de las Américas número 1. Ese horario está pendiente de confirmar. No des precios de entrada.

AÑO JUBILAR 2026-2027 (no confundir con el Jubileo de 2031)
· El papa León XIV, por medio de la Penitenciaría Apostólica, concedió un Año Jubilar Guadalupano por los 50 años de la dedicación de la Basílica nueva y del traslado de la imagen. Lo anunció el cardenal Carlos Aguiar Retes en un comunicado del 9 de septiembre de 2026. El jubileo empezó el 12 de octubre de 2026, con la Misa de las Rosas y la apertura de la Puerta Santa, y termina el 12 de octubre de 2027. Fuentes: Vatican News y Desde la Fe.
· Lo que dice el comunicado del cardenal, tal como lo recoge Vatican News: durante ese año, los fieles que visiten con devoción la Basílica y participen en algún acto litúrgico o dediquen un tiempo de oración en ella pueden obtener la indulgencia plenaria, para sí mismos o por las almas del purgatorio. Hay que cumplir las condiciones habituales: confesión, comunión eucarística, rezo del Credo y oración por las intenciones del Papa. Para cualquier detalle más, remite a la Basílica o a un sacerdote.
· Este jubileo de 2026-2027 es distinto del Jubileo Guadalupano de 2031 (los 500 años). Lo que dice la sección 6 sobre 2031 sigue valiendo: de indulgencias, actos y fechas del Jubileo de 2031 no hay nada oficial en esta base.

RECOMENDACIONES AL PEREGRINO (publicadas por la Basílica)
· Vestimenta: la Basílica recuerda que es un centro religioso con normas de decoro y respeto. No se permite entrar a templos, capillas, museos ni criptas con prendas escotadas, ombligueras, tops, camisetas de tirantes, shorts por encima de la rodilla, minifaldas ni gorras.
· Para el exterior: protector solar, una botella de agua y una sombrilla para el sol o la lluvia. Pide además no dejar a niños ni mascotas dentro del coche y cuidar maletas, carteras y objetos de valor.
· El reglamento interno de la Basílica prohíbe varias cosas:
  · entrar en estado de ebriedad o bajo el efecto de drogas, y beber alcohol;
  · llevar armas, pirotecnia u objetos peligrosos, o tanques de gas;
  · meter globos con gas en la Basílica;
  · clavar o perforar el piso del atrio y de la Plaza Mariana para poner carpas o casas de campaña;
  · vender o prestar servicios dentro del recinto (fotografía, guías de turistas) y repartir propaganda;
  · entrar al atrio con autobuses o coches particulares.
· Para los grupos, la Basílica recomienda:
  · no entrar con veladoras ni cirios encendidos; se pueden prender después de la celebración, en el quemador;
  · que las bandas de música y los danzantes se queden en el atrio, porque dentro se celebran los sacramentos;
  · poner al frente del contingente las banderas, los estandartes, las imágenes y las portadas de flores;
  · seguir las indicaciones del personal de seguridad;
  · recoger la basura antes de irse.
`,
  `
=== 15. EL 12 DE DICIEMBRE Y LAS PEREGRINACIONES DEL AÑO ===
· El 12 de diciembre es la fiesta de Nuestra Señora de Guadalupe, y en la Basílica se celebra como solemnidad. Desde 1999 se celebra en toda América con rango litúrgico de fiesta: lo anunció san Juan Pablo II en la Basílica el 23 de enero de 1999 (ver la sección 17).
· El programa lo publica la Basílica cada año. Como referencia, este fue el de 2025, tal como lo difundió la prensa a partir de la Basílica:
  · 11 de diciembre: a las 9:00, Misa Capitular; a las 17:00, Vísperas solemnes; a las 17:45, homenaje del clero, los agentes de pastoral y los empleados del santuario; a las 18:30, Homenaje y Serenata Guadalupana del Pueblo de México y América; y a las 23:00, el Akathistos Guadalupano con la Capilla de Música.
  · 12 de diciembre: a las 0:00, las Mañanitas a la Virgen y la misa solemne del Cabildo; a las 3:00, la misa de los concheros y de los trabajadores de la construcción; a las 5:00, la misa «muy de mañana»; a las 7:00, la misa de las comunidades de vida consagrada; a las 10:00, el Oficio de lecturas; a las 12:00, la Misa de las Rosas, presidida por el cardenal arzobispo de México; a las 17:00, el Rosario solemne en el Altar Mayor; y a las 19:00, el Rosario del Encuentro Guadalupano en el atrio.
  · Para otro año, di que el programa se publica en diciembre y que estas horas son las de 2025.
· Las Mañanitas se cantan a la Virgen a medianoche, al pasar del 11 al 12 de diciembre. Según la prensa, en 2025 las cantaron artistas conocidos. No digas qué artistas irán un año concreto.
· La Misa de las Rosas es la gran misa del mediodía del 12 de diciembre. Al terminar se bendicen las rosas que llevan los peregrinos. En la de 2025, según Desde la Fe, se colocó la cuarta rosa de plata en la palmatoria conmemorativa de la Novena Intercontinental Guadalupana, como preparación para los 500 años de 2031.
· Cuánta gente llega: según el Gobierno de la Ciudad de México, el Operativo Basílica 2025 registró unos 13 millones de asistentes, contados hasta las 5:00 del 12 de diciembre de 2025. El operativo siguió hasta el 14 de diciembre. Da la cifra con su año y su fuente, y no la conviertas en récord ni la redondees hacia arriba.
· Las peregrinaciones diocesanas: según un subsidio publicado por la Basílica, hoy todas las arquidiócesis, diócesis y prelaturas de México peregrinan una vez al año a la Basílica. La peregrinación culmina en la misa del Altar Mayor, presidida por su obispo. También vienen diócesis de Estados Unidos, Canadá, Polonia, Filipinas y Corea, entre otras.
· El origen, según ese mismo subsidio: en 1837 los obispos de México acordaron que cada día 12 de mes, de enero a octubre, una diócesis organizara una función en la Colegiata de Guadalupe. El 12 de enero le tocaba a la Arquidiócesis de México, el 12 de febrero a Puebla, el 12 de marzo a Michoacán, el 12 de abril a Antequera (Oaxaca), el 12 de mayo a Guadalajara, el 12 de junio a Yucatán, el 12 de julio a Durango, el 12 de agosto a Linares (después Monterrey) y el 12 de octubre a Sonora. Desde principios del siglo XX empezaron a llegar peregrinaciones diocesanas completas.
· El calendario: en su página la Basílica no publica un calendario completo de peregrinaciones del año. Quien lo necesite debe pedirlo a la Coordinación de Peregrinaciones (ver la sección 16).
· Algunas peregrinaciones anuales de 2026, como ejemplo:
  · la Arquidiócesis de México peregrinó el sábado 17 de enero, saliendo de la antigua Glorieta de Peralvillo (Desde la Fe);
  · la Arquidiócesis de Puebla peregrina cada 12 de febrero, la misma fecha que le asignó el acuerdo de 1837;
  · la Diócesis de Querétaro peregrina a pie y en bicicleta cada julio. En 2026 fueron la 136.ª peregrinación de hombres, la 64.ª de mujeres y la 44.ª de ciclistas, que entraron a la Basílica el domingo 26 de julio: las mujeres a las 8:00, los hombres a las 12:00 y los ciclistas a las 16:00, según el vocero de la diócesis.
  · Las fechas de otros años hay que confirmarlas con cada diócesis.
· Los gremios también tienen su lugar. Por ejemplo, la madrugada del 12 de diciembre hay una misa de los concheros y de los trabajadores de la construcción. No hay un calendario público de gremios en la página de la Basílica: no inventes fechas.
`,
  `
=== 16. CÓMO ORGANIZAR UNA PEREGRINACIÓN DE GRUPO A LA BASÍLICA ===
· Primero, una aclaración: el programa de capitanes de este sitio no sustituye el trámite de la Basílica. La misa y la celebración del grupo en la Basílica se piden siempre a la Basílica, por sus canales oficiales.
· La oficina responsable es la Coordinación de Peregrinaciones de la Basílica: correo peregrinaciones@inbg.mx, teléfono 55 5118 0500, extensiones 346 y 446.
· El procedimiento publicado por la Basílica es su «Instructivo de peregrinaciones, misas y celebraciones», fechado en 2019 y enlazado en la página oficial de Peregrinaciones:
  · todo grupo, comunidad o institución que quiera celebrar en la Basílica o en el atrio debe contactar con la Coordinación y enviar su solicitud por escrito un mes antes de la misa, para que la aprueben. Fuera de ese plazo no se aceptan solicitudes.
  · en la solicitud se piden la fecha y la hora, el nombre del grupo, un responsable y sus datos de contacto, el número de peregrinos y cómo llegarán, cuántos coches traen y por dónde entran a la Ciudad de México, la participación litúrgica prevista (coro, estandartes, ofrendas), si habrá algún acto en el atrio, y los datos del sacerdote si es externo.
· Sobre la liturgia, el mismo instructivo dice:
  · si el grupo quiere participar en los ministerios litúrgicos (monitor, lectores, oración universal, ofrendas), necesita la autorización previa de la Comisión de Liturgia de la Basílica. Las lecturas son las del día. Las preces propias se envían un mes antes, y se aceptan seis como máximo.
  · la Basílica pone un cantor en todas sus celebraciones, y el salmo lo canta siempre un cantor de la casa. Si viene un coro o grupo musical externo, tiene que enviar antes su repertorio (letra, autor y partitura) para que lo aprueben.
  · hay que avisar cuántas imágenes, estandartes y banderas traerá el grupo.
  · para las ofrendas, la Basílica sugiere despensa para los necesitados.
· El sacerdote:
  · la Basílica asigna un sacerdote. Si el grupo quiere que celebre su propio sacerdote, este debe acreditarse ante la Sacristía al menos 15 días antes.
  · el sacerdote externo solo puede presidir si se trata de su propia peregrinación o intención, y con autorización de la Basílica. Tiene que llegar 30 minutos antes, con su alba y una identificación sacerdotal vigente.
  · Sacristía: sacristia@inbg.mx, teléfono 55 5118 0500, extensiones 514 y 515, de lunes a viernes de 8:00 a 17:00. No atiende correos los sábados, domingos ni festivos.
  · Para misas de grupos pequeños existen las Capillas Altas. Se solicitan con 7 días de antelación, enviando las licencias ministeriales del sacerdote y el número de peregrinos. Su uso no cuesta nada. Horarios: de 6:00 a 8:00 y de 10:00 a 18:00. La misa debe durar como máximo 50 minutos, con 40 peregrinos como máximo y sin cantos, para no interferir con el Altar Mayor.
· El Módulo de Misas es donde se reservan las misas con fecha, incluidas las de peregrinación:
  · horario: todos los días de 9:00 a 16:30; la atención general es de 8:00 a 18:00;
  · contacto: misas@inbg.mx, teléfono 55 5118 0500, extensiones 405 y 406 (informes generales: 402 y 404);
  · las solicitudes se hacen con los formatos de la oficina, y todo queda sujeto a reservación y a la disponibilidad de la agenda. Hay que revisar en el ticket la fecha y la hora, porque los cambios solo se hacen al reservar.
  · en la Misa Capitular de las 9:00, que se transmite, se aceptan como máximo tres peregrinaciones por misa como intención individual. En la Dominical de las 12:00 también se pueden anotar peregrinaciones, pero la página no fija el máximo.
  · una peregrinación diocesana tiene horario exclusivo. Si la diócesis trae su propio medio de comunicación, este debe acreditarse ante el área de Comunicación Social del santuario.
· Los donativos: la Basílica publica en esa misma página una tabla de donativos por servicio, que puede cambiar. No des cifras: remite a la página del Módulo de Misas y Donativos o al correo misas@inbg.mx.
· El alojamiento: según el instructivo de 2019, un grupo que necesite pasar la noche puede pedir la Casa del Peregrino San Lorenzo a la Coordinación de Peregrinaciones, con 30 días de antelación. Que confirmen si el servicio sigue vigente.
· Consejos publicados por la Basílica para el día de la peregrinación:
  · reunir al grupo frente a la puerta central de la Basílica 15 minutos antes de la misa;
  · no entrar con veladoras encendidas ni con globos;
  · dejar la música y las danzas para el atrio;
  · poner los estandartes y las imágenes al frente;
  · seguir al personal de seguridad;
  · recoger la basura antes de volver.
· La preparación espiritual que propone la Basílica en su subsidio «Preparar nuestra peregrinación diocesana al Tepeyac»: llegar confesado (en la propia parroquia o con un sacerdote del grupo), empezar el camino con una bendición y rezar el Rosario Guadalupano durante el camino o en el atrio. Ese subsidio y otros materiales se pueden descargar en la página de Peregrinaciones Diocesanas del sitio oficial.
· Lo que no hay que inventar: precios de transporte, hoteles, cupos, horarios de misa concretos para un grupo o requisitos que no estén aquí. Para lo de la Basílica, remite a sus correos; para lo del viaje con este sitio, al equipo.
`,
  `
=== 17. HITOS DE LA HISTORIA Y DE LA DEVOCIÓN DESPUÉS DE 1531 ===
· Patronazgos, en resumen. Es patrona de la Ciudad de México desde 1737 y de la Nueva España desde mediados de esa década: la jura del reino fue en 1746 o 1747, según la fuente, y la confirmó Benedicto XIV en 1754. San Pío X la proclamó patrona de América Latina en 1910. Y la oración compuesta para el Sínodo de los Obispos para América (1997) la invoca como Patrona de toda América, título que recoge san Juan Pablo II en Ecclesia in America (1999). San Juan Pablo II confirmó lo de Benedicto XIV y Pío X en su homilía en el santuario del 27 de enero de 1979.
· De 1629 a 1634: por la gran inundación de la Ciudad de México, la Tilma se llevó a la ciudad el 2 de septiembre de 1629 y se colocó en la antigua catedral. Volvió al Tepeyac en mayo de 1634. Fuente: Desde la Fe.
· 1644: según Desde la Fe, el papa Urbano VIII concedió indulgencia plenaria a quienes visitaran el pequeño santuario del Tepeyac.
· 1709: abre el nuevo templo, la actual Antigua Basílica. Según Desde la Fe, el mismo día de su consagración la imagen se trasladó a él desde la antigua Parroquia de Indios. Allí estuvo 267 años.
· 27 de abril de 1737: durante la epidemia de matlazáhuatl, la Ciudad de México juró a la Virgen de Guadalupe como su patrona, ante el arzobispo virrey Juan Antonio de Vizarrón. Así lo recoge el Instituto de Investigaciones Históricas de la UNAM.
· 1746-1747: se jura el patronato de la Virgen sobre toda la Nueva España. Las fuentes secundarias dan el 4 de diciembre de 1746; el texto del archivo de la Basílica habla de 1747. Si preguntan por el día exacto, di que las fuentes no coinciden.
· 1749-1750: el 6 de marzo de 1749, el arzobispo Manuel Rubio Salinas erigió el Cabildo de Guadalupe. Benedicto XIV lo confirmó con la bula Romanus Pontifex el 26 de enero de 1750, y el Cabildo tomó posesión el 22 de octubre de 1750. Según la página oficial, fue la primera colegiata de América; de ahí el título de «Insigne».
· 1754: Benedicto XIV declaró a la Virgen de Guadalupe patrona de la Nueva España y aprobó misa y oficio propios para el 12 de diciembre. Varias fuentes secundarias fechan la bula, llamada Non est equidem, el 25 de mayo de 1754. Esa fecha está pendiente de cotejar con una fuente primaria.
· 8 de febrero de 1887: el papa León XIII concede la coronación pontificia de la imagen. La ceremonia se aplazó para renovar el santuario. Mientras duraron las obras, la Tilma estuvo en el templo de Capuchinas. Fuente: subsidio de la Basílica.
· 12 de octubre de 1895: coronación pontificia de la imagen. La corona era de plata, de estilo imperial, y se hizo en París. Fuente: subsidio de la Basílica.
· 1904: según Desde la Fe, la Colegiata recibe el título de basílica.
· 1910: san Pío X la proclama patrona de América Latina. Fuentes secundarias dan el 24 de agosto de 1910 (pendiente de cotejar el día).
· 14 de noviembre de 1921: atentado con bomba en la Antigua Basílica. Hacia las 10:30 de la mañana, un hombre dejó a los pies de la imagen un ramo de flores con dinamita. Las crónicas de la época atribuyen el atentado a Luciano Pérez Carpio. La explosión dañó el altar de mármol, los candeleros y el piso, y rompió vidrios de casas cercanas. Pero la imagen, a unos cinco metros, no sufrió daño, y el cristal que la cubría no se rompió. Un crucifijo de bronce de unos 34 kilos quedó doblado: es el «Cristo del atentado», que hoy está en una vitrina a la entrada de la Basílica nueva. Fuente: Desde la Fe.
· 12 de octubre de 1941: se inaugura el Museo de la Basílica.
· 12 de octubre de 1945: Pío XII envía un radiomensaje a los fieles mexicanos por el cincuentenario de la coronación. En él recuerda la aclamación de 1895 y llama a la Virgen Emperatriz de América y Reina de México. En el texto oficial dice «de América», en singular; la forma «Emperatriz de las Américas» es la que se popularizó después.
· 1966: san Pablo VI regala una Rosa de Oro al santuario. Las fuentes no coinciden en el día (20 de marzo o 31 de mayo).
· 12 de octubre de 1970: san Pablo VI envía un radiomensaje al pueblo mexicano por los 75 años de la coronación.
· 12 de octubre de 1976: se dedica la Basílica nueva y la Tilma se traslada a ella.
· 27 de enero de 1979: san Juan Pablo II, en su primer viaje a México, celebra en el santuario. Le ofrece a la Virgen una diadema en nombre de los mexicanos y los latinoamericanos, y le dirige la oración que se cita en la sección 18. Según Desde la Fe, fue el primer papa que vio la imagen.
· 17 de noviembre de 1983: la Conferencia del Episcopado Mexicano reconoce a la Basílica como Santuario Nacional.
· 6 de mayo de 1990: san Juan Pablo II beatifica a Juan Diego en el Tepeyac, junto con los tres niños mártires de Tlaxcala (Cristóbal, Antonio y Juan) y con José María de Yermo y Parres.
· 12 de mayo de 1992: san Juan Pablo II inaugura una capilla de la Virgen de Guadalupe en las grutas de la Basílica de San Pedro, en el Vaticano. Fuente: Desde la Fe.
· 1996: el cardenal Joseph Ratzinger, el futuro Benedicto XVI, visita la Basílica. Fuente: Desde la Fe.
· 12 de diciembre de 1998: san Juan Pablo II da al santuario un nuevo ordenamiento jurídico, recogido en el breve Praestantem pietatem. Desaparece la figura del Abad y se crea la del Rector.
· 22 de enero de 1999: san Juan Pablo II firma en la Ciudad de México la exhortación apostólica Ecclesia in America. En su número 11 dice que la Virgen de Guadalupe es venerada como Reina de toda América. Recuerda también que la oración compuesta para el Sínodo la invoca como Patrona de toda América, y acoge la propuesta de celebrar el 12 de diciembre en todo el continente como fiesta de Nuestra Señora de Guadalupe, Madre y Evangelizadora de América.
· 23 de enero de 1999: en la Basílica, san Juan Pablo II pone la exhortación a los pies de la Virgen. Y anuncia que el 12 de diciembre se celebrará en toda América con rango litúrgico de fiesta.
· 31 de julio de 2002: san Juan Pablo II canoniza a Juan Diego Cuauhtlatoatzin en la Basílica de Guadalupe. Es el primer santo indígena de América.
· 1 de agosto de 2002: en la misma Basílica, san Juan Pablo II beatifica a los mártires Juan Bautista y Jacinto de los Ángeles, indígenas de Oaxaca.
· En total, según Desde la Fe, san Juan Pablo II viajó cinco veces a México. Celebró en la Basílica en 1979, 1990, 1999 y 2002.
· 12 de octubre de 2011: se inaugura la Plaza Mariana.
· 12 de diciembre de 2011: Benedicto XVI celebra en la Basílica de San Pedro la solemnidad de Nuestra Señora de Guadalupe, con una misa por América Latina en el bicentenario de su independencia. Según Desde la Fe, él empezó la costumbre de celebrar en San Pedro una misa cada 12 de diciembre.
· 13 de febrero de 2016: el papa Francisco celebra misa en la Basílica de Guadalupe, en su viaje a México. Según el subsidio de la Basílica, ese día le ofreció a la Virgen una diadema.
· 12 de diciembre de 2022: según la Comisión del V Centenario de la Basílica, el papa Francisco inició ese día la Novena Intercontinental Guadalupana, nueve años de preparación hasta el 12 de diciembre de 2031. Lo demás sobre la Novena sigue la cautela de la sección 6.
· 12 de octubre de 2026: comienza el Año Jubilar Guadalupano por los 50 años de la Basílica nueva. Lo concedió León XIV y dura hasta el 12 de octubre de 2027 (ver la sección 14).
`,
  `
=== 18. ORACIONES (solo estas, citadas literalmente; no completes ni inventes oraciones de memoria) ===
· Jaculatoria guadalupana. Es tradicional y se reza en el Rosario Guadalupano, según el subsidio de la Basílica «Preparar nuestra peregrinación diocesana al Tepeyac»:
  «Mi corazón en amarte eternamente se ocupe, y mi lengua en alabarte, Madre mía de Guadalupe.»
  «Santa María de Guadalupe, Reina de México, salva nuestra patria y conserva nuestra fe.»
· Bajo tu amparo (Sub tuum praesidium). Texto del Compendio del Catecismo de la Iglesia Católica, apéndice de oraciones comunes:
  «Bajo tu amparo nos acogemos, Santa Madre de Dios; no deseches las súplicas que te dirigimos en nuestras necesidades; antes bien, líbranos siempre de todo peligro, ¡oh Virgen gloriosa y bendita!»
· Ave María. Mismo texto del Compendio:
  «Dios te salve, María, llena eres de gracia; el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús. Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.»
· Salve. Mismo texto del Compendio:
  «Dios te salve, Reina y Madre de misericordia, vida, dulzura y esperanza nuestra; Dios te salve. A ti llamamos los desterrados hijos de Eva; a ti suspiramos, gimiendo y llorando en este valle de lágrimas. Ea, pues, Señora, abogada nuestra, vuelve a nosotros esos tus ojos misericordiosos; y después de este destierro, muéstranos a Jesús, fruto bendito de tu vientre. ¡Oh, clementísima, oh piadosa, oh dulce Virgen María!»
· La oración de san Juan Pablo II a la Virgen de Guadalupe, de enero de 1979, la pronunció en su primer viaje a México. Empieza: «¡Oh Virgen Inmaculada, Madre del verdadero Dios y Madre de la Iglesia!». El texto completo está publicado en vatican.va y en la sección de Oraciones de la página oficial de la Basílica. No la recites de memoria: si te la piden entera, di dónde está publicada.
· La exhortación Ecclesia in America (1999) termina con una oración a Jesucristo que acaba invocando a Nuestra Señora de Guadalupe, Madre de América. Si alguien la pide, di que está al final del documento, en vatican.va.
· Recuerda que el Rosario Guadalupano del sitio tiene sus propios modos, descritos en la sección 7. Estas oraciones se pueden rezar con él.
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
