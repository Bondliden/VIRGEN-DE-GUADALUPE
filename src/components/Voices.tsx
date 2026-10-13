import { ExternalLink } from "lucide-react";
import { useLang } from "@/lib/lang";
import { rosaryModes, voices, voicesSection } from "@/data/voices";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";
import { VirginSacredDisplay } from "@/components/VirginSacredDisplay";

/* Section III — voices, testimonies and the Guadalupan rosary. */

export function Voices() {
  const { t } = useLang();
  const [featured, ...rest] = voices;

  return (
    <>
      <VideoHero
        id="voces-hero"
        roman="III"
        eyebrow={voicesSection.eyebrow}
        titleMain={voicesSection.title}
        titleItalic={{ es: "y el Santo Rosario Guadalupano", en: "and the Holy Guadalupan Rosary" }}
        subtitle={voicesSection.intro}
        videoSrc="/videos/heroes/voces.mp4"
        posterSrc="/videos/heroes/voces.jpg"
        pageOf="004 / 006"
        badge={{ es: "Oración Continua y Testimonios", en: "Perpetual Prayer & Testimonies" }}
        ctaPrimary={{ label: { es: "Rezar el Santo Rosario", en: "Pray the Holy Rosary" }, href: "#rosario-guadalupano" }}
        ctaSecondary={{ label: { es: "Ofrenda de Veladoras", en: "Light a Candle" }, href: "#oratorio-veladoras" }}
      />

      <section id="voces" className="py-16 sm:py-24" data-od-id="voces">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
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
        <div className="mt-12 grid gap-8 border border-ink/20 bg-bone p-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:p-6">
          <div className="aspect-video w-full self-start bg-ink/20">
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
          <div className="flex flex-col">
            <div>
              <Eyebrow>{t(featured.kind)}</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl italic leading-snug text-inkSoft">
                {t(featured.title)}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-inkMute">{t(featured.body)}</p>
            </div>
            {/* La imagen ocupa el hueco que quedaba entre el texto y el
                nombre y crece con la tarjeta. El encuadre sube hasta el
                rostro de la Virgen y deja dentro a Azucena con las rosas.
                Va en absoluto para que su alto natural no empuje la fila:
                si lo hiciera, el vídeo 16:9 de al lado se ensancharía con
                ella y la tarjeta se saldría de la página. */}
            {featured.photo ? (
              <figure className="relative mt-6 min-h-[360px] flex-1 overflow-hidden border border-ink/15">
                <img
                  src={featured.photo}
                  alt={featured.photoAlt ? t(featured.photoAlt) : featured.person}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_18%]"
                />
              </figure>
            ) : (
              <div className="flex-1" />
            )}
            {/* Bajo la foto, quién es y su historia. Sin enlace «Abrir»:
                llevaba al mismo vídeo que se ve a la izquierda. */}
            <div className="mt-6 border-t border-ink/20 pt-4">
              <p className="font-display text-base font-semibold uppercase tracking-[0.06em] text-inkSoft">
                {featured.person}
              </p>
              <Coord className="mt-1 block uppercase">{t(featured.role)}</Coord>
              {featured.bio ? (
                <p className="mt-4 text-[15px] leading-relaxed text-inkMute">{t(featured.bio)}</p>
              ) : null}
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

        {/* ── Cuadro de la Virgen: Capilla de Oración y Veladoras Votivas ── */}
        <div id="oratorio-veladoras">
          <VirginSacredDisplay variant="devotional-chapel" />
        </div>

        {/* ── The Guadalupan rosary ── */}
        <div id="rosario-guadalupano" className="mt-20 border-t border-ink/20 pt-10">
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
    </>
  );
}
