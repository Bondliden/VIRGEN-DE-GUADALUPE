/* Browser-side client for the GLM assistant.
   It never sees an API key: it only posts to the same-origin proxy
   (see /api/chat.ts), which adds the credentials server-side. */

export type ChatRole = "user" | "assistant";

export type ChatTurn = { role: ChatRole; content: string };

export const CHAT_ENDPOINT: string =
  import.meta.env.VITE_CHAT_ENDPOINT || "/api/chat";

export type ChatOutcome =
  | { ok: true; reply: string }
  | { ok: false; reason: "not_configured" | "network" | "upstream" };

export async function askAssistant(
  turns: ChatTurn[],
  signal?: AbortSignal
): Promise<ChatOutcome> {
  try {
    const response = await fetch(CHAT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: turns }),
      signal,
    });

    // 404 = the function is not deployed; 503 = no GLM_API_KEY set.
    if (response.status === 404 || response.status === 503) {
      return { ok: false, reason: "not_configured" };
    }
    if (!response.ok) {
      return { ok: false, reason: "upstream" };
    }

    const data = (await response.json()) as { reply?: string };
    if (!data.reply) return { ok: false, reason: "upstream" };
    return { ok: true, reply: data.reply };
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw error;
    }
    return { ok: false, reason: "network" };
  }
}
