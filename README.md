# Santa María de Guadalupe · 500 Años

Sitio bilingüe español/inglés dedicado al Acontecimiento Guadalupano y a las
peregrinaciones al Tepeyac, con cuenta atrás al **12 de diciembre de 2031** —
medianoche, hora de Ciudad de México: los quinientos años desde que la imagen
quedó impresa en el ayate de san Juan Diego.

Bilingual Spanish/English site devoted to the Guadalupan Event and the
pilgrimages to Tepeyac, counting down to **12 December 2031**, midnight,
Mexico City time.

---

## Estado

El proyecto compila limpio (`tsc --noEmit` sin errores) y está funcionalmente
completo: portada con cuenta atrás, peregrinaciones, los ocho enunciados del
Acontecimiento Guadalupano, voces del Tepeyac, tienda, novena del jubileo y
asistente conversacional.

El contenido es **fiel al encargo documental de la comisión**: cada dato
histórico lleva su fuente, y las lecturas nahua y cristiana de los símbolos del
ayate van separadas y atribuidas.

## Stack

    React 19 · TypeScript 5.6 · Vite 5 · Tailwind CSS 3.4 · framer-motion · lucide-react

Sin framework de servidor. La única pieza de servidor es la ruta del asistente
en `api/chat.ts`, que funciona igual en Vercel, Netlify, Cloudflare o en el
servidor de demostración incluido.

## Puesta en marcha

    npm install

    npm run dev        # Vite en modo desarrollo
    npm run demo       # servidor con la API del asistente → http://localhost:5002
    npm run preview    # sirve dist/ → http://localhost:5001  (sin asistente)
    npm run check      # tsc --noEmit
    npm run build      # tsc --noEmit && vite build

`npm run dev` y `npm run preview` **no** ejecutan el asistente: para probar el
chat hay que usar `npm run demo`, que levanta Vite y la ruta `/api/chat` en el
mismo puerto y así evita el problema de CORS.

## Variables de entorno

Copiar `.env.example` a `.env`. Todas las variables con prefijo `VITE_` viajan
al navegador; las que no lo llevan se quedan en el servidor.

| Variable | Para qué |
| --- | --- |
| `VITE_SITE_URL` | URL pública, para la canónica y Open Graph |
| `VITE_LEADS_ENDPOINT` | Endpoint que recibe las altas de peregrinación (POST JSON) |
| `VITE_WHATSAPP_NUMBER` | Botón directo de WhatsApp, formato internacional sin `+` |
| `VITE_CONTACT_EMAIL` | Correo de contacto |
| `VITE_YOUTUBE_HANDLE` / `VITE_INSTAGRAM_HANDLE` | Redes |
| `VITE_NONPROFIT_NAME` / `VITE_DONATE_URL` | Datos de la entidad y donativos |
| `VITE_CHAT_ENDPOINT` | Ruta del asistente; por defecto `/api/chat` |
| `GLM_API_KEY` | **Solo servidor.** Clave del asistente |
| `GLM_MODEL` | Modelo; por defecto `glm-5.3-flash` |
| `GLM_REASONING_EFFORT` | `low` mantiene el gasto de razonamiento casi a cero |

Si `VITE_WHATSAPP_NUMBER` va vacío, el botón no aparece. Si `VITE_LEADS_ENDPOINT`
va vacío, el sitio cae a WhatsApp y correo. Nada se rompe por dejar variables
sin rellenar.

## El asistente

El navegador llama a `/api/chat` en el mismo dominio; la clave nunca entra en el
paquete del navegador. Ese único archivo se apoya en `api/_chat-core.mjs`, donde
vive el prompt del sistema y la llamada a GLM, de modo que la misma ruta funciona
en Vercel, Netlify, Cloudflare o en el servidor de demostración sin tocar nada.

El prompt está escrito para que el asistente **responda en prosa, sin markdown** y
**tenga prohibido inventar datos**: cuando un dato no está en el corpus del sitio,
lo dice y remite al correo de contacto. El razonamiento va en `low` porque la
familia `glm-5.3` factura los tokens de pensamiento a precio de salida.

> **Antes de dar el sitio por publicado, hay que rotar `GLM_API_KEY`.** La clave
> que se usó durante el desarrollo circuló en texto plano por un archivo local y
> debe considerarse comprometida.

## Sistema de diseño

La interfaz sigue **Atelier Zero**, un sistema de diseño editorial. Sus reglas se
respetan literalmente, y las que más mandan son:

- Un solo acento —coral— y como mucho dos usos por pantalla.
- Ni un negro puro: la escala de tintas arranca por debajo de `#000`.
- **Un solo panel oscuro en toda la página**, y el blanco puro solo dentro de él.
- Titulares fuera de la justificación; el texto corrido se justifica con guionado
  activo, porque sin partición de palabras la justificación abre ríos de blanco.
- Los numerales romanos, las anotaciones monoespaciadas y las líneas de pelo
  hacen el trabajo que en otros sitios haría una tarjeta con sombra.

## Estructura

    api/               ruta del asistente (chat.ts + _chat-core.mjs)
    scripts/           servidor de demostración que sirve Vite y /api/chat
    public/            favicon, robots e imágenes del santuario
    src/components/    una pieza por sección
    src/data/          todo el contenido, separado por idioma y tipado
    src/lib/           idioma, cuenta atrás y cliente del chat

El contenido vive entero en `src/data/*.ts`, tipado y en pares `{ es, en }`. Añadir
texto no obliga a tocar ningún componente.

## Contenido y fuentes

El relato histórico se apoya en el *Nican Mopohua* y en el trabajo de Miguel León
Portilla, y las lecturas simbólicas del ayate distinguen siempre la lectura nahua
de la cristiana, con su autoría al lado. Los datos astronómicos del manto
proceden del estudio de Fernando Ojeda Llanes.

Las imágenes provienen de Wikimedia Commons; el detalle de cada una, con su
licencia y autoría, está en `public/images/guadalupe/CREDITS.md`.

## En curso

- La portada debe llevar el titular **sobre** la imagen de la Tilma como fondo,
  tal como pide el primer punto del encargo.
- Ampliar los paneles «Historia» y «Nican Mopohua» con el eclipse como presagio
  pagano, la persecución de Zumárraga por la Primera Audiencia, el viaje a
  Veracruz y la caída de población de 25 a 17 millones.
- Añadir el santuario de Santo Stefano d'Aveto (Génova) y su vínculo con Lepanto
  y la fiesta de Nuestra Señora del Rosario.
- Revisar el año del análisis de Richard Kuhn: el encargo dice 1936, las fuentes
  consultadas dicen 1956.
- Sustituir `VITE_LEADS_ENDPOINT` y `VITE_DONATE_URL` por los destinos reales.

## Aviso

Proyecto privado de la comisión organizadora. No es un sitio oficial de la
Basílica de Guadalupe ni de la Arquidiócesis de México.
