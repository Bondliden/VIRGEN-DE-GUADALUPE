import { useEffect, useState } from "react";
import { Footprints, Mic, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/lib/lang";
import { disclosure, purpose } from "@/data/hero";
import { site } from "@/data/links";
import { Container, Coord, Dot, Eyebrow, SectionRule } from "@/components/Chrome";

/* Why the site exists (two objectives) + the non-profit transparency
   notice. The notice is shown once and can be dismissed; it is never
   hidden permanently without the visitor having read it. */

const purposeIcons: Record<string, LucideIcon> = {
  footprints: Footprints,
  mic: Mic,
};

const DISMISS_KEY = "guadalupe-disclosure-seen";

export function Purpose() {
  const { t } = useLang();

  return (
    <section className="py-16 sm:py-24" data-od-id="proposito">
      <Container>
        <SectionRule
          roman="§"
          label={t({ es: "Propósito", en: "Purpose" })}
          page={t({ es: "Nota del editor", en: "Editor's note" })}
        />

        <div className="mt-8 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <Eyebrow>{t(purpose.eyebrow)}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(32px,4.8vw,56px)] font-extrabold uppercase leading-[1] tracking-[-0.03em] text-inkSoft">
              {t(purpose.title)}
              <Dot />
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-px bg-ink/20 md:grid-cols-2">
          {purpose.items.map((item) => {
            const Icon = purposeIcons[item.icon] ?? Footprints;
            return (
              <article key={item.title.es} className="bg-paper p-6 lg:p-8">
                <Icon className="h-6 w-6 text-accentRose" aria-hidden />
                <h3 className="mt-4 font-display text-2xl font-bold uppercase tracking-[0.02em] text-inkSoft">
                  {t(item.title)}
                </h3>
                <p className="mt-4 text-body leading-relaxed text-inkMute">{t(item.body)}</p>
              </article>
            );
          })}
        </div>

        <blockquote className="mt-12 border-l-2 border-accentRose pl-5">
          <p className="font-serif text-[clamp(18px,2.1vw,25px)] italic leading-relaxed text-inkSoft">
            {t(purpose.closer)}
          </p>
        </blockquote>
      </Container>
    </section>
  );
}

export function Disclosure() {
  const { t } = useLang();
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    try {
      if (window.localStorage.getItem(DISMISS_KEY) === "1") setOpen(false);
    } catch {
      /* storage can be blocked */
    }
  }, []);

  const dismiss = () => {
    setOpen(false);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;

  return (
    <section id="transparencia" className="pb-8" data-od-id="transparencia">
      <Container>
        <div className="border border-ink/25 bg-bone p-6 lg:p-8">
          <div className="flex items-start gap-4">
            <ShieldCheck className="mt-1 h-5 w-5 flex-none text-accentRose" aria-hidden />
            <div className="flex-1">
              <Coord className="block uppercase">{t(disclosure.badge)}</Coord>
              <h2 className="mt-2 font-display text-xl font-semibold uppercase leading-tight tracking-[0.03em] text-inkSoft">
                {t(disclosure.title)}
              </h2>
              <p className="mt-3 max-w-prose text-[15px] leading-relaxed text-inkMute">
                {t(disclosure.short)}
              </p>

              {expanded ? (
                <ul className="mt-4 space-y-2">
                  {disclosure.points.map((point) => (
                    <li key={point.es} className="flex gap-3 text-[15px] text-inkSoft">
                      <span className="mt-2 h-1 w-1 flex-none bg-accentRose" aria-hidden />
                      <span>{t(point)}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              <div className="mt-5 border border-ink/25 bg-paper px-5 py-4">
                <p className="text-eyebrow font-extrabold uppercase tracking-eyebrow text-inkSoft">
                  {t(disclosure.zelle.title)}
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-inkMute">{t(disclosure.zelle.body)}</p>
                <p className="mt-3 text-[16px] text-inkMute">
                  {t(disclosure.zelle.label)}:{" "}
                  <span className="select-all font-semibold text-inkSoft">{site.zelle}</span>
                </p>
              </div>

              <p className="mt-4 font-serif text-[17px] italic text-inkSoft">
                {t(disclosure.promise)}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={dismiss}
                  className="bg-accentRose px-5 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80"
                >
                  {t(disclosure.accept)}
                </button>
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="gd-link-underline text-eyebrow font-semibold uppercase tracking-eyebrow text-inkMute"
                >
                  {t(disclosure.readMore)}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
