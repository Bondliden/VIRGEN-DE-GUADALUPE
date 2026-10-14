import { useEffect, useState } from "react";
import { CalendarPlus, Youtube } from "lucide-react";
import { useLang } from "@/lib/lang";
import type { LiveEvent } from "@/data/voices";
import { site } from "@/data/links";

/* Anuncio del próximo podcast en vivo de Azucena.

   La fecha se enseña en la hora de quien la mira (Intl, con el nombre de la
   zona), porque el público está repartido entre México, Estados Unidos y
   España. El estado cambia solo con el reloj: antes, «Próximo podcast en
   vivo»; durante, «En vivo ahora» con el punto que late; después, «Ver la
   grabación», con el mismo enlace de YouTube. */

type Phase = "tba" | "upcoming" | "live" | "ended";

function phaseAt(now: number, start: number, end: number): Phase {
  if (now < start) return "upcoming";
  if (now < end) return "live";
  return "ended";
}

/** Fecha en el formato que pide Google Calendar: 20261022T020000Z. */
function gcalDate(ms: number) {
  return new Date(ms).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function LiveAnnouncement({ live }: { live: LiveEvent }) {
  const { t, lang } = useLang();
  const start = live.startsAt ? new Date(live.startsAt).getTime() : NaN;
  const end = start + (live.durationMin ?? 60) * 60_000;
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 30_000);
    return () => window.clearInterval(id);
  }, []);

  /* Sin fecha todavía: «se anunciará pronto». */
  const phase: Phase = Number.isNaN(start) ? "tba" : phaseAt(now, start, end);
  /* Sin enlace propio, el directo del canal: …/@canal/live. Sin ninguno de
     los dos, no hay botón a YouTube. */
  const href = live.url || site.youtubeLive;
  const title = t(live.title);

  const when =
    phase === "tba"
      ? ""
      : new Intl.DateTimeFormat(lang === "es" ? "es" : "en", {
          weekday: "long",
          day: "numeric",
          month: "long",
          hour: "2-digit",
          minute: "2-digit",
          timeZoneName: "short",
        }).format(new Date(start));

  const calendarUrl =
    phase === "upcoming"
      ? "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        `&text=${encodeURIComponent(title)}` +
        `&dates=${gcalDate(start)}/${gcalDate(end)}` +
        `&details=${encodeURIComponent(href)}`
      : "";

  const badge =
    phase === "live"
      ? t({ es: "En vivo ahora", en: "Live now" })
      : phase === "upcoming" || phase === "tba"
        ? t({ es: "Próximo podcast en vivo", en: "Next live podcast" })
        : t({ es: "Podcast · grabación", en: "Podcast · recording" });

  return (
    <div className="border border-ink/20 bg-paper p-5 sm:p-6">
      <span className="inline-flex items-center gap-3 font-display text-[18px] font-extrabold uppercase leading-none tracking-[0.12em] text-accentRose sm:text-[20px]">
        <span className="relative flex h-3 w-3" aria-hidden>
          {phase === "live" ? (
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accentRose opacity-60" />
          ) : null}
          <span className="relative inline-flex h-3 w-3 rounded-full bg-accentRose" />
        </span>
        {badge}
      </span>

      <h3 className="mt-3 font-serif text-2xl italic leading-snug text-inkSoft">{title}</h3>

      {phase === "tba" ? (
        <p className="mt-2 text-left text-[17px] font-semibold text-inkSoft">
          {t({
            es: "Se anunciará pronto y podrás guardarlo en tu calendario.",
            en: "It will be announced soon, and you will be able to save it to your calendar.",
          })}
        </p>
      ) : phase !== "ended" ? (
        <p className="mt-2 text-left text-[17px] font-semibold text-inkSoft first-letter:uppercase">{when}</p>
      ) : null}
      {phase === "tba" ? (
        <p className="mt-1 text-left text-[14px] text-inkMute">
          {t({ es: "En YouTube, gratis y sin registrarte.", en: "On YouTube, free and with no sign-up." })}
        </p>
      ) : null}
      {phase === "upcoming" ? (
        <p className="mt-1 text-left text-[14px] text-inkMute">
          {t({ es: "En tu hora local. En YouTube, gratis y sin registrarte.", en: "In your local time. On YouTube, free and with no sign-up." })}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-3 empty:hidden">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 bg-accentRose px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80"
          >
            <Youtube className="h-4 w-4" aria-hidden />
            {phase === "ended"
              ? t({ es: "Ver la grabación", en: "Watch the recording" })
              : t({ es: "Entrar a verlo en YouTube", en: "Watch it on YouTube" })}
          </a>
        ) : null}
        {phase === "upcoming" ? (
          <a
            href={calendarUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 border border-ink/30 px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
          >
            <CalendarPlus className="h-4 w-4" aria-hidden />
            {t({ es: "Añadir a mi calendario", en: "Add to my calendar" })}
          </a>
        ) : null}
      </div>
    </div>
  );
}
