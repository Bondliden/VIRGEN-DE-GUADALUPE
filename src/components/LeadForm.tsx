import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { useLang, type Bi } from "@/lib/lang";
import { site } from "@/data/links";
import { askLupita } from "@/lib/chat";
import { leadsConfigured, submitLead, type LeadSource } from "@/lib/leads";

/* Alta con nombre y correo — la misma que «Quiero peregrinar» — y después
   Lupita. Al enviar, se abre el asistente con la pregunta ya hecha («¿cómo
   puedo ser capitán?», «¿cómo puedo apoyar el documental?») y responde con
   lo que sabe del sitio: los pasos del capitán, a qué se destina el dinero
   y el correo del equipo. */

export function LeadForm({
  source,
  intro,
  lupitaQuestion,
}: {
  source: LeadSource;
  intro: Bi;
  lupitaQuestion: Bi;
}) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);

  const question = t(lupitaQuestion);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      await submitLead({ name, email, source });
    } catch {
      /* un fallo de red no puede dejar al visitante a medias */
    } finally {
      setBusy(false);
      setSent(true);
      askLupita(question);
    }
  };

  if (sent) {
    return (
      <div className="border border-ink/20 bg-bone p-5 text-left">
        <p className="font-serif text-xl italic text-inkSoft">
          {t({ es: "Gracias, ya tenemos tus datos.", en: "Thank you, we have your details." })}
        </p>
        <p className="mt-2 text-[15px] leading-relaxed text-inkMute">
          {t({
            es: "Lupita te está explicando cómo seguir. Si se cerró, vuelve a preguntarle:",
            en: "Lupita is explaining how to continue. If it closed, ask her again:",
          })}
        </p>
        <button
          type="button"
          onClick={() => askLupita(question)}
          className="mt-4 inline-flex items-center gap-2 bg-accentRose px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80"
        >
          <MessageCircle className="h-4 w-4" aria-hidden />
          {t({ es: "Pregúntale a Lupita cómo", en: "Ask Lupita how" })}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-ink/20 bg-bone p-5 text-left">
      <p className="text-[15px] leading-relaxed text-inkMute">{t(intro)}</p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-[13px] font-semibold text-inkSoft">{t({ es: "Nombre", en: "Name" })}</span>
          <input
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-ink/25 bg-paper px-3 py-2.5 text-[16px] text-inkSoft outline-none focus:border-accentRose"
          />
        </label>
        <label className="block">
          <span className="text-[13px] font-semibold text-inkSoft">{t({ es: "Correo", en: "Email" })}</span>
          <input
            required
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-ink/25 bg-paper px-3 py-2.5 text-[16px] text-inkSoft outline-none focus:border-accentRose"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="mt-4 w-full bg-accentRose px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80 disabled:opacity-60 sm:w-auto"
      >
        {busy ? "…" : t({ es: "Enviar mis datos", en: "Send my details" })}
      </button>

      {!leadsConfigured ? (
        <p className="mt-3 text-[13px] text-inkMute">
          {t({ es: "También puedes escribirnos a", en: "You can also write to us at" })}{" "}
          <span className="select-all font-semibold text-inkSoft">{site.contactEmail}</span>
        </p>
      ) : null}
    </form>
  );
}
