/* ─────────────────────────────────────────────
   POST /api/chat — Vercel Function adapter.

   Why a proxy exists at all: a Vite bundle is public, so a key placed in a
   VITE_ variable would be readable by anyone. This function holds
   GLM_API_KEY server-side and is the only thing that talks to Z.ai.

   The prompt and the GLM call live in ./_chat-core.mjs, shared with the
   local demo server (scripts/serve-with-api.mjs) so the two cannot drift.
   ───────────────────────────────────────────── */

import { runChat, sanitise } from "./_chat-core.mjs";

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

  const apiKey = process.env.GLM_API_KEY;
  if (!apiKey) {
    res.status(503).json({
      error: "chat_not_configured",
      message: "The assistant is not configured yet. Set GLM_API_KEY.",
    });
    return;
  }

  const incoming = sanitise(req.body?.messages ?? []);
  if (incoming.length === 0) {
    res.status(400).json({ error: "empty_conversation" });
    return;
  }

  const outcome = await runChat(incoming, apiKey);

  if (outcome.ok) {
    res.status(200).json({ reply: outcome.reply });
    return;
  }

  // 502 tells the widget "reachable but unusable" — it then offers the
  // human fallback (WhatsApp / email) instead of leaving a blank bubble.
  res.status(502).json({ error: outcome.kind, detail: outcome.detail });
}
