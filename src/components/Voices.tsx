import { ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang";
import { rosaryModes, voices, voicesSection } from "@/data/voices";
import { Container, Coord, Dot, Eyebrow, SectionRule } from "@/components/Chrome";

/* Section III — voices, testimonies and the Guadalupan rosary. */

export function Voices() {
  const { t } = useLang();
  const [featured, ...rest] = voices;

  return (
    <section id="voces" className="py-16 sm:py-24" data-od-id="voces">
      <Container>
        <SectionRule roman="III" label={t(voicesSection.eyebrow)} page="004 / 005" />

        <div className="mt-8 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
          <div>
            <Eyebrow>{t(voicesSection.eyebrow)}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(34px,5.2vw,64px)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-inkSoft">
              {t(voicesSection.title)}
              <Dot />
            </h2>
          </div>
          <p className="text-body text-inkMute">{t(voicesSection.intro)}</p>
        </div>

        {/* ── Featured testimony ── */}
        <div className="mt-12 grid gap-8 border border-ink/20 bg-bone p-4 lg:grid-cols-[1.3fr_0.7fr] lg:p-6">
          <div className="aspect-video w-full bg-ink/20">
            {featured.embed ? (
              <iframe
                src={featured.embed}
                title={t(featured.title)}
                allow="autoplay"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
              />
            ) : null}
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Eyebrow>{t(featured.kind)}</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl italic leading-snug text-inkSoft">
                {t(featured.title)}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-inkMute">{t(featured.body)}</p>
            </div>
            <div className="mt-6 border-t border-ink/20 pt-4">
              <p className="font-display text-base font-semibold uppercase tracking-[0.06em] text-inkSoft">
                {featured.person}
              </p>
              <Coord className="mt-1 block uppercase">{t(featured.role)}</Coord>
              <a
                href={featured.href}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-eyebrow text-accentRose"
              >
                {t(voicesSection.openLabel)}
                <ExternalLink className="h-3.5 w-3.5" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        {/* ── The rest ── */}
        <div className="mt-8 grid gap-px bg-ink/20 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item) => (
            <article key={item.id} className="flex flex-col bg-bone p-6">
              <Coord className="uppercase">{t(item.kind)}</Coord>
              <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-inkSoft">
                {t(item.title)}
              </h3>
              <p className="mt-3 flex-1 text-[15px] leading-relaxed text-inkMute">{t(item.body)}</p>
              <div className="mt-5 border-t border-ink/20 pt-3">
                <p className="text-[13px] font-semibold text-inkSoft">{item.person}</p>
                <Coord className="mt-1 block uppercase">{t(item.role)}</Coord>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="mt-3 inline-flex items-center gap-2 text-eyebrow font-semibold uppercase tracking-eyebrow text-accentRose"
                >
                  {t(voicesSection.openLabel)}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* ── The Guadalupan rosary ── */}
        <div className="mt-20 border-t border-ink/20 pt-10">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <Eyebrow>{t(voicesSection.rosaryEyebrow)}</Eyebrow>
              <h3 className="mt-4 font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-inkSoft">
                {t(voicesSection.rosaryTitle)}
                <Dot />
              </h3>
            </div>
            <p className="font-serif text-xl italic leading-relaxed text-inkSoft">
              {t(voicesSection.rosaryLead)}
            </p>
          </div>

          <div className="mt-10 grid gap-px bg-ink/20 lg:grid-cols-3">
            {rosaryModes.map((mode) => (
              <article key={mode.id} className="flex flex-col bg-paper p-6">
                <div className="flex items-baseline gap-3">
                  <span className="gd-roman">{mode.roman}.</span>
                  <h4 className="font-display text-lg font-semibold uppercase leading-tight tracking-[0.04em] text-inkSoft">
                    {t(mode.label)}
                  </h4>
                </div>
                <Coord className="mt-2 block uppercase">{t(mode.when)}</Coord>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-inkMute">
                  {t(mode.body)}
                </p>
                <ol className="mt-5 space-y-2 border-t border-ink/20 pt-4">
                  {mode.steps.map((step, i) => (
                    <li key={step.es} className="flex gap-3 text-[15px] leading-relaxed text-inkSoft">
                      <span className="gd-coord flex-none pt-1">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{t(step)}</span>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
