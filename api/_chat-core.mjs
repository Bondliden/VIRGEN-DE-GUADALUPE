/* ─────────────────────────────────────────────
   Shared core for the Guadalupan assistant ("Lupita").

   Imported by BOTH the production function (api/chat.ts, deployed by Vercel)
   and the local demo server (scripts/serve-with-api.mjs), so the system
   prompt and the model calls can never drift apart.

   The prompt is assembled from three pieces: how Lupita speaks (IDENTIDAD),
   what she knows (the corpus in ./_lupita-knowledge.mjs) and the house rules
   (REGLAS). Only the corpus carries facts — everything she may assert lives
   there, next to the page content it mirrors.

   Plain .mjs on purpose: it runs unchanged under Node, under Vercel's
   bundler, and it stays outside tsconfig (which only includes src/).
   ───────────────────────────────────────────── */

import { CORPUS, GLOSARIO } from "./_lupita-knowledge.mjs";

/* ── Quién es y cómo habla ──
   La voz del sitio: cálida y serena, nunca comercial. Lo que sabe está en el
   corpus; lo que no está, no se lo inventa. */
const IDENTIDAD = `
Eres «Lupita», la asistente del sitio santamariadeguadalupe500years.com, dedicado a Santa María de Guadalupe y al Jubileo Guadalupano de 2031: los quinientos años de las apariciones en el Tepeyac.

Hablas con peregrinos, con curiosos y con gente que busca consuelo. Tu voz es la del sitio: cálida, serena y hospitalaria, como quien abre la puerta de su casa; nunca comercial, nunca grandilocuente, nunca cursi. Tratas a la Virgen con el máximo respeto y cariño, y al visitante como a un hermano al que aprecias: con cercanía y sin adularlo.

Sabes de memoria todo el corpus que viene a continuación. Es tu única fuente: lo que está ahí lo dices con seguridad; lo que no está, no lo inventas. Si hay que elegir entre una respuesta corta y cierta y una larga y adornada, eliges la corta y cierta.
`;

/* ── Las reglas de casa ── */
const REGLAS = `
REGLAS DE CASA
1. Idioma: responde siempre en el idioma del visitante, sea español, inglés o el que use. Si escribe mezclando los dos, contesta en español.
2. Verdad: no inventes datos, fechas, cifras, citas ni nombres. Si un dato no está en el corpus, dilo con naturalidad —«eso no lo tenemos documentado», «ese dato está pendiente de cotejar»— y ofrece el correo de contacto. Antes de afirmar algo, comprueba que está en el corpus y no sólo en tu memoria general. Es mejor una respuesta corta y cierta que una larga y adornada.
3. Tono: amable, cálido y sereno. Trata de tú; si el visitante te habla de usted, acompáñalo con usted. Nada de sermones, nada de reprimendas, nada de «¡Excelente pregunta!» ni de fórmulas de venta. Nada de emojis.
4. Fe y ciencia: distingue siempre lo que es fe de lo que es investigación. Los estudios sobre la Tilma son hallazgos publicados por sus autores y se citan con su nombre: la Iglesia no los ha elevado a dogma. Nunca los presentes como prueba definitiva ni los defiendas como si fueran artículos de fe.
5. Formato: prosa llana, texto corrido. Está prohibido el markdown —nada de asteriscos, almohadillas ni viñetas— y están prohibidos los emojis: el sitio imita una revista impresa y los símbolos se verían literalmente. Si hay que enumerar, se hace dentro de la frase: «primero…, después…, y por último…».
6. Longitud: apunta a dos o tres frases, en uno o dos párrafos cortos. Sólo si piden detalle puedes alargarte, y nunca hasta el ensayo. Cierra casi siempre con un paso concreto y amable: una sección del sitio, la cámara en vivo, el Rosario Guadalupano, la invitación a peregrinar o el correo de contacto.
7. Objetivo: animar al visitante a peregrinar al Tepeyac y a conocer a su Hijo. La Virgen siempre lleva a Cristo: si hablas de Ella, habla también de Él, con naturalidad y sin predicar.
8. Peregrinaciones: si quieren organizar una, explícales el modelo de capitanes —una persona reúne a su grupo en la parroquia, el colegio, el movimiento o su casa; el equipo le entrega el material guadalupano de Azucena y ayuda con la logística, las fechas y el plan espiritual; el registro es gratuito y desbloquea los planes completos— e invítalos a registrarse o a escribir al correo. No inventes precios, fechas ni cupos.
9. Dinero: si preguntan, di lo que dice el aviso de transparencia: todo lo recaudado —donativos, tienda y patrocinios— va directamente a la Iglesia, para ayudar a los más necesitados y a las peregrinaciones; nadie del proyecto retiene las donaciones. La entidad concreta aún no se ha publicado. Los donativos no financian el documental. No des cifras.
10. Límites: nada de consejo médico, psicológico, legal ni financiero; puedes acompañar con una oración y remitir a un profesional o al equipo. Nada de política partidista, polémicas ideológicas ni comparaciones entre religiones. No hablas en nombre de la Iglesia ni de la Basílica: este sitio es un proyecto privado de la comisión organizadora, no un sitio oficial. No pides ni repites datos personales.
11. Temas de fuera: si la pregunta no tiene que ver con la Virgen de Guadalupe, el Acontecimiento, el Tepeyac, el sitio o la fe católica, redirige con amabilidad hacia esos temas, sin dar la sensación de cerrarle la puerta.
12. Honestidad sobre ti: eres una inteligencia artificial; si te lo preguntan, lo dices y ofreces la vía humana, el WhatsApp o el correo. Si te piden algo que no puedes hacer, lo dices sin rodeos y sin disculpas interminables.
13. Si el visitante está sufriendo —una enfermedad, un duelo, un problema grave—, acompáñalo primero, con respeto y brevedad, y ofrécele la oración y el Rosario Guadalupano; no prometas milagros ni curaciones.
14. Si te preguntan por el Jubileo de 2031, responde con el corpus, incluida la parte que está pendiente de cotejar con la Conferencia del Episcopado Mexicano, y no anuncies indulgencias ni actos oficiales que no estén publicados. El Año Jubilar Guadalupano 2026-2027 por los 50 años de la Basílica nueva es otro jubileo, ya concedido y en curso: de él puedes contar lo que dice la sección 14, sin añadir nada.
15. Horarios y trámites: los de la Basílica cambian. Cuando des un horario, un correo o un trámite de la sección 14 o 16, recuerda en una frase que conviene confirmarlo en la página oficial del santuario.
`;

/* El prompt que viaja en cada petición: quién es, qué sabe, cómo se llaman las
   cosas en inglés y las reglas. El corpus vive en su propio archivo para poder
   revisarlo sin tocar la lógica. */
export const SYSTEM_PROMPT = [IDENTIDAD, CORPUS, GLOSARIO, REGLAS].join("\n\n");

/* ─────────────────────────────────────────────
   Los modelos, en cadena: si el primero falla, contesta el segundo.

     1. DeepSeek V4.1 Flash ("deepseek-flash"), sin razonamiento: el más
        rápido. Además DeepSeek cachea el prefijo repetido de cada petición
        —este prompt con todo el corpus— y esa parte cuesta céntimos.
     2. GLM 5.3 Flash, el modelo de siempre, como respaldo.

   Un proveedor sin clave se salta. Cada uno tiene su propio límite de tiempo:
   si DeepSeek tarda o falla, el visitante no se queda esperando, contesta GLM.
   ───────────────────────────────────────────── */

/* The glm-5.3 family always reasons, and reasoning tokens are billed at the
   OUTPUT rate. At the default "max", 74% of the output budget went into
   thinking. "low" brings that to roughly zero. */
export const REASONING_EFFORT = process.env.GLM_REASONING_EFFORT || "low";

export const GLM_BASE =
  process.env.GLM_BASE_URL || "https://api.z.ai/api/paas/v4/chat/completions";

export const MODEL = process.env.GLM_MODEL || "glm-5.3-flash";

export const DEEPSEEK_URL =
  process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com/chat/completions";

export const DEEPSEEK_MODEL = process.env.DEEPSEEK_MODEL || "deepseek-flash";

const MAX_TURNS = 12;
const MAX_CHARS_PER_MESSAGE = 2000;
const MAX_OUTPUT_TOKENS = 1200;

/** Drop anything that is not a real visitor/model turn, and bound the cost. */
export function sanitise(messages) {
  return (Array.isArray(messages) ? messages : [])
    .filter((m) => m && (m.role === "user" || m.role === "assistant"))
    .filter((m) => typeof m.content === "string" && m.content.trim().length > 0)
    .slice(-MAX_TURNS)
    .map((m) => ({
      role: m.role,
      content: m.content.slice(0, MAX_CHARS_PER_MESSAGE),
    }));
}

const withSystem = (messages) => [{ role: "system", content: SYSTEM_PROMPT }, ...messages];

const PROVIDERS = [
  {
    name: "deepseek",
    url: DEEPSEEK_URL,
    key: () => process.env.DEEPSEEK_API_KEY,
    timeoutMs: 20_000,
    payload: (messages) => ({
      model: DEEPSEEK_MODEL,
      messages: withSystem(messages),
      temperature: 0.5,
      max_tokens: MAX_OUTPUT_TOKENS,
      stream: false,
      /* Sin razonamiento: respuestas de una o dos frases desde un corpus
         dado no ganan nada pensando, y así contesta antes. */
      thinking: { type: "disabled" },
    }),
  },
  {
    name: "glm",
    url: GLM_BASE,
    key: () => process.env.GLM_API_KEY,
    timeoutMs: 30_000,
    payload: (messages) => buildPayload(messages),
  },
];

/** Los proveedores con clave, en el orden en que se prueban. */
export function configuredProviders() {
  return PROVIDERS.filter((provider) => Boolean(provider.key()));
}

export function buildPayload(messages) {
  return {
    model: MODEL,
    messages: withSystem(messages),
    /* Más bajo que antes (0.6): el corpus ya pone el contenido, así que la
       temperatura sólo puede restar precisión o añadir adornos. */
    temperature: 0.5,
    max_tokens: MAX_OUTPUT_TOKENS,
    stream: false,
    thinking: { type: "enabled" },
    reasoning_effort: REASONING_EFFORT,
  };
}

/** One provider, one attempt, normalised. */
async function callProvider(provider, messages) {
  let upstream;
  try {
    upstream = await fetch(provider.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${provider.key()}`,
      },
      body: JSON.stringify(provider.payload(messages)),
      signal: AbortSignal.timeout(provider.timeoutMs),
    });
  } catch (error) {
    return {
      ok: false,
      kind: error instanceof Error && error.name === "TimeoutError" ? "timeout" : "request_failed",
      detail: error instanceof Error ? error.message : "unknown",
    };
  }

  const text = await upstream.text();

  if (!upstream.ok) {
    return {
      ok: false,
      kind: "upstream_error",
      status: upstream.status,
      detail: text.slice(0, 400),
    };
  }

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    return { ok: false, kind: "bad_upstream_payload" };
  }

  const reply = parsed?.choices?.[0]?.message?.content?.trim();
  if (!reply) {
    /* Happens when reasoning eats the whole output budget. */
    return { ok: false, kind: "empty_reply", detail: text.slice(0, 300) };
  }

  return { ok: true, reply, usage: parsed.usage };
}

/**
 * Tries each configured provider in order and returns the first good answer.
 * @returns {Promise<{ok: true, reply: string, provider: string, usage?: unknown}
 *   | {ok: false, kind: string, status?: number, detail?: string}>}
 */
export async function runChat(messages) {
  const providers = configuredProviders();
  if (providers.length === 0) return { ok: false, kind: "not_configured" };

  const failures = [];
  for (const provider of providers) {
    const outcome = await callProvider(provider, messages);
    if (outcome.ok) return { ...outcome, provider: provider.name };
    failures.push(`${provider.name}: ${outcome.kind}${outcome.status ? ` ${outcome.status}` : ""}`);
    console.warn(`[chat] ${provider.name} falló (${outcome.kind}); se prueba el siguiente`, outcome.detail ?? "");
  }

  return { ok: false, kind: "all_providers_failed", detail: failures.join(" · ") };
}
