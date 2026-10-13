import { useEffect, useRef, useState } from "react";
import { MessageCircle, Send, Sparkles, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { site } from "@/data/links";
import { askAssistant, type ChatTurn } from "@/lib/chat";
import { Coord } from "@/components/Chrome";

/* Floating assistant powered by GLM.
   It posts only to the same-origin proxy; the API key never reaches the
   browser. The panel is honest about being an AI and always offers the
   human fallback (WhatsApp / email). */

const suggestions = [
  { es: "¿Quién es la Virgen de Guadalupe?", en: "Who is Our Lady of Guadalupe?" },
  { es: "¿Qué pasó entre el 9 y el 12 de diciembre de 1531?", en: "What happened between 9 and 12 December 1531?" },
  { es: "¿Qué se descubrió en la Tilma?", en: "What was found in the Tilma?" },
  { es: "¿Qué es el Jubileo Guadalupano de 2031?", en: "What is the Guadalupan Jubilee of 2031?" },
  { es: "Quiero organizar una peregrinación", en: "I want to organise a pilgrimage" },
  { es: "¿Cómo rezo el Rosario Guadalupano?", en: "How do I pray the Guadalupan Rosary?" },
] as const;

const intro = {
  es: "¡Bendiciones! Soy Lupita, la asistente de este sitio. Pregúntame por Santa María de Guadalupe, la Tilma, el Nican Mopohua, el Jubileo de 2031 o las peregrinaciones al Tepeyac.",
  en: "Blessings! I am Lupita, the assistant of this site. Ask me about Saint Mary of Guadalupe, the Tilma, the Nican Mopohua, the 2031 Jubilee or the pilgrimages to Tepeyac.",
};

type Msg = { id: number; role: "user" | "assistant"; content: string };

const notes = {
  not_configured: {
    es: "El asistente todavía no está activado en este sitio.",
    en: "The assistant is not switched on for this site yet.",
  },
  network: {
    es: "No pude conectar en este momento.",
    en: "I could not connect just now.",
  },
  upstream: {
    es: "No pude responder a eso ahora mismo.",
    en: "I could not answer that right now.",
  },
} as const;

const fallback = {
  es: "Escríbenos y te responde una persona del equipo.",
  en: "Write to us and a member of the team will reply.",
};

export function ChatBox() {
  const { t, lang } = useLang();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [problem, setProblem] = useState<keyof typeof notes | null>(null);
  const counter = useRef(0);
  const anchor = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (open && anchor.current) {
      anchor.current.scrollIntoView({ block: "end", behavior: "smooth" });
    }
  }, [msgs, open, busy, problem]);

  const greeting = lang === "es" ? intro.es : intro.en;

  const send = async (raw: string) => {
    const content = raw.trim();
    if (!content || busy) return;

    setProblem(null);
    setInput("");

    const userMsg: Msg = { id: ++counter.current, role: "user", content };
    const turns: ChatTurn[] = [
      { role: "assistant", content: greeting },
      ...msgs.map((m) => ({ role: m.role, content: m.content })),
      { role: "user" as const, content },
    ];

    setMsgs((prev) => [...prev, userMsg]);
    setBusy(true);

    try {
      const outcome = await askAssistant(turns);
      if (outcome.ok) {
        setMsgs((prev) => [
          ...prev,
          { id: ++counter.current, role: "assistant", content: outcome.reply },
        ]);
      } else {
        setProblem(outcome.reason);
      }
    } catch {
      /* request aborted by the visitor */
    } finally {
      setBusy(false);
    }
  };

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="pointer-events-auto flex items-center gap-2 border border-ink/20 bg-bone/95 px-4 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft shadow-[0_12px_30px_-18px_hsl(var(--gd-ink)/0.7)] backdrop-blur transition-colors hover:border-accentRose"
        aria-label={t({ es: "Abrir el asistente", en: "Open the assistant" })}
      >
        <MessageCircle className="h-4 w-4 text-accentRose" />
        <span>{t({ es: "Pregúntale a Lupita", en: "Ask Lupita" })}</span>
      </button>
    );
  }

  return (
    <section
      className="pointer-events-auto flex w-[min(23rem,calc(100vw-2.5rem))] flex-col border border-ink/25 bg-paper shadow-[0_30px_70px_-30px_hsl(var(--gd-ink)/0.65)]"
      aria-label={t({ es: "Asistente del sitio", en: "Site assistant" })}
    >
      <header className="flex items-start justify-between gap-3 border-b border-ink/20 px-4 py-3">
        <div>
          <p className="flex items-center gap-2 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-inkSoft">
            <Sparkles className="h-3.5 w-3.5 text-accentRose" aria-hidden />
            {t({ es: "Lupita · asistente", en: "Lupita · assistant" })}
          </p>
          <Coord className="mt-1 block uppercase">
            {t({
              es: "Respuestas con IA (GLM) · puede equivocarse",
              en: "AI answers (GLM) · can be wrong",
            })}
          </Coord>
        </div>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t({ es: "Cerrar el asistente", en: "Close the assistant" })}
          className="text-inkMute transition-colors hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
      </header>

      <div className="flex max-h-[52vh] flex-col gap-3 overflow-y-auto px-4 py-4" aria-live="polite">
        <Bubble role="assistant">{greeting}</Bubble>

        {msgs.map((m) => (
          <Bubble key={m.id} role={m.role}>
            {m.content}
          </Bubble>
        ))}

        {busy ? (
          <div className="flex gap-1.5 px-1" aria-label={t({ es: "Escribiendo", en: "Typing" })}>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accentRose"
                style={{ animationDelay: `${i * 180}ms` }}
              />
            ))}
          </div>
        ) : null}

        {problem ? (
          <div className="border border-ink/20 bg-bone p-3">
            <p className="text-[13px] leading-relaxed text-inkSoft">{t(notes[problem])}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-inkMute">{t(fallback)}</p>
            <div className="mt-2 flex flex-wrap gap-3">
              {site.whatsapp ? (
                <a
                  href={`https://wa.me/${site.whatsapp}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gd-coord uppercase hover:text-ink"
                >
                  WhatsApp
                </a>
              ) : null}
              <a href={`mailto:${site.contactEmail}`} className="gd-coord uppercase hover:text-ink">
                {site.contactEmail}
              </a>
            </div>
          </div>
        ) : null}

        {msgs.length === 0 ? (
          <div className="mt-1 grid gap-1.5">
            {suggestions.map((s) => (
              <button
                key={s.es}
                type="button"
                onClick={() => void send(t(s))}
                className="border border-ink/20 px-3 py-2 text-left text-[13px] text-inkMute transition-colors hover:border-accentRose hover:text-inkSoft"
              >
                {t(s)}
              </button>
            ))}
          </div>
        ) : null}

        <div ref={anchor} />
      </div>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          void send(input);
        }}
        className="flex items-center gap-2 border-t border-ink/20 px-3 py-3"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t({ es: "Escribe tu pregunta…", en: "Type your question…" })}
          className="min-w-0 flex-1 border border-ink/25 bg-bone px-3 py-2 text-[14px] text-inkSoft outline-none focus:border-accentRose"
        />
        <button
          type="submit"
          disabled={busy || input.trim().length === 0}
          aria-label={t({ es: "Enviar", en: "Send" })}
          className="bg-accentRose p-2.5 text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80 disabled:opacity-40"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}

/* The assistant is told to write plain prose, but models slip. The site is
   meant to read like printed matter, so strip the common markdown markers
   before they reach the page as literal asterisks and hashes. */
function plain(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^\s*[-*]\s+/gm, "· ")
    .replace(/^\s*\d+\.\s+/gm, "");
}

function Bubble({ role, children }: { role: Msg["role"]; children: string }) {
  const mine = role === "user";
  return (
    <div className={mine ? "flex justify-end" : "flex justify-start"}>
      <p
        className={[
          "max-w-[85%] whitespace-pre-wrap px-3.5 py-2.5 text-[14px] leading-relaxed",
          mine
            ? "bg-accentRose text-[hsl(var(--gd-accent-on))]"
            : "border border-ink/20 bg-bone text-inkSoft",
        ].join(" ")}
      >
        {mine ? children : plain(children)}
      </p>
    </div>
  );
}
