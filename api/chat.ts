/* ─────────────────────────────────────────────
   POST /api/chat — Vercel Function adapter.

   Why a proxy exists at all: a Vite bundle is public, so a key placed in a
   VITE_ variable would be readable by anyone. This function holds the keys
   (DEEPSEEK_API_KEY, GLM_API_KEY) server-side and is the only thing that
   talks to the models: DeepSeek first, GLM if it fails.

   The prompt and the GLM call live in ./_chat-core.mjs, shared with the
   local demo server (scripts/serve-with-api.mjs) so the two cannot drift.
   ───────────────────────────────────────────── */

import { configuredProviders, runChat, sanitise } from "./_chat-core.mjs";

type ChatMessage = { role: "system" | "user" | "assistant"; content: string };

type Req = { method?: string; body?: { messages?: ChatMessage[] } };

type Res = {
  status: (code: number) => Res;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

export default async function handler(req: Req, res: Res): Promise<void> {
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (configuredProviders().length === 0) {
    console.error("[chat] no hay ninguna clave de modelo: se devuelve 503");
    res.status(503).json({
      error: "chat_not_configured",
      message: "The assistant is not configured yet.",
    });
    return;
  }

  const incoming = sanitise(req.body?.messages ?? []);
  if (incoming.length === 0) {
    res.status(400).json({ error: "empty_conversation" });
    return;
  }

  const outcome = await runChat(incoming);

  if (outcome.ok) {
    res.status(200).json({ reply: outcome.reply });
    return;
  }

  // 502 tells the widget "reachable but unusable" — it then offers the
  // human fallback (WhatsApp / email) instead of leaving a blank bubble.
  // The upstream detail stays in the server log: naming the provider to the
  // browser is nobody's business.
  console.error(`[chat] ${outcome.kind}`, outcome.detail ?? outcome.status ?? "");
  res.status(502).json({ error: outcome.kind });
}
