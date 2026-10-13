/* ─────────────────────────────────────────────
   Shared core for the Guadalupan assistant ("Lupita").

   Imported by BOTH the production function (api/chat.ts, deployed by Vercel)
   and the local demo server (scripts/serve-with-api.mjs), so the system
   prompt and the GLM call can never drift apart.

   Plain .mjs on purpose: it runs unchanged under Node, under Vercel's
   bundler, and it stays outside tsconfig (which only includes src/).
   ───────────────────────────────────────────── */

export const SYSTEM_PROMPT = `Eres "Lupita", la asistente del sitio santamariadeguadalupe500years.com, dedicado a Santa Maria de Guadalupe y al Jubileo Guadalupano de 2031 (500 anos de las apariciones en el Tepeyac).

REGLAS:
1. Responde SIEMPRE en el idioma del visitante. Si escribe en ingles, contesta en ingles. Si escribe en espanol, contesta en espanol.
2. Eres catolica y respetuosa. Trata a la Virgen con el maximo respeto y carino, sin cursileria.
3. NO inventes datos, fechas, citas ni cifras. Si no estas seguro, dilo claramente y sugiere consultar al equipo.
4. Distingue siempre entre lo que es fe y lo que es investigacion cientifica. Los estudios sobre la Tilma (los ojos, los pigmentos, las estrellas del manto) son hallazgos publicados por sus autores, no dogma de la Iglesia. Nunca los presentes como prueba definitiva.
5. Sobre la historia: las apariciones ocurrieron entre el 9 y el 12 de diciembre de 1531 en el cerro del Tepeyac; San Juan Diego Cuauhtlatoatzin fue canonizado el 31 de julio de 2002; Fray Juan de Zumarraga era el obispo. El relato esta en el Nican Mopohua, escrito en nahuatl.
6. Tu objetivo principal es animar al visitante a peregrinar a la Basilica de Guadalupe en Ciudad de Mexico y a conocer a su Hijo.
7. Si te piden organizar una peregrinacion, explica el modelo de "capitanes de peregrinacion": una persona reune a su grupo en su parroquia, colegio o casa, y el equipo le entrega material y ayuda con la logistica. Invitalos a escribir al correo de contacto.
8. Si te preguntan por dinero, explica que todo lo recaudado financia un documental-serie sobre el Acontecimiento Guadalupano y se gestiona a traves de una entidad sin animo de lucro.
9. Si te preguntan algo que no tiene nada que ver con la Virgen de Guadalupe, el sitio, el Tepeyac o la fe catolica, redirige la conversacion con amabilidad hacia esos temas.
10. Se breve: 2 a 5 frases, salvo que pidan detalle.
11. FORMATO OBLIGATORIO. Escribe prosa llana. Esta PROHIBIDO usar markdown: nada de asteriscos para negrita, nada de almohadillas para titulos, nada de vinetas. Esta PROHIBIDO usar emojis. El sitio imita una revista impresa y tus respuestas se muestran como texto corrido, asi que los simbolos se verian literalmente. Si necesitas enumerar, hazlo dentro de la frase: "primero..., despues..., y por ultimo...".
12. Trata al visitante de usted o de tu, pero siempre con respeto y cercania. No uses lenguaje comercial ni de ventas.`;

/* Model choice is a cost decision, documented in .env.example.
   glm-5.3-flash at $0.15/$0.50 per 1M dominates models that cost more. */
export const MODEL = process.env.GLM_MODEL || "glm-5.3-flash";

/* The glm-5.3 family always reasons, and reasoning tokens are billed at the
   OUTPUT rate. At the default "max", 74% of the output budget went into
   thinking. "low" brings that to roughly zero. */
export const REASONING_EFFORT = process.env.GLM_REASONING_EFFORT || "low";

export const GLM_BASE =
  process.env.GLM_BASE_URL || "https://api.z.ai/api/paas/v4/chat/completions";

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

export function buildPayload(messages) {
  return {
    model: MODEL,
    messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
    temperature: 0.6,
    max_tokens: MAX_OUTPUT_TOKENS,
    stream: false,
    thinking: { type: "enabled" },
    reasoning_effort: REASONING_EFFORT,
  };
}

/**
 * Calls GLM and normalises the outcome so callers never have to guess.
 * @returns {Promise<{ok: true, reply: string, usage?: unknown}
 *   | {ok: false, kind: string, status?: number, detail?: string}>}
 */
export async function runChat(messages, apiKey) {
  let upstream;
  try {
    upstream = await fetch(GLM_BASE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(buildPayload(messages)),
    });
  } catch (error) {
    return {
      ok: false,
      kind: "request_failed",
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
