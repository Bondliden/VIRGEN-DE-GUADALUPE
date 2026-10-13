import { useLang } from "@/lib/lang";
import { useCountdown } from "@/lib/useCountdown";
import { hero, jubilee, nicanQuote } from "@/data/hero";
import { Container, Coord, Dot, Eyebrow, SectionRule } from "@/components/Chrome";

/* Atelier Zero §5 hero: 0.78fr / 1.22fr, warm paper canvas, oversized
   display type mixing bold sans with italic serif emotional nouns, and a
   single accent terminating dot. §11 imagery: the collage plate is the
   sacred image itself, framed like a museum plate. */

const stats = [
  { value: "1531", label: { es: "El Tepeyac", en: "Tepeyac" } },
  { value: "500", label: { es: "Años", en: "Years" } },
  { value: "2031", label: { es: "El Jubileo", en: "The Jubilee" } },
] as const;

function Countdown() {
  const { t } = useLang();
  const left = useCountdown();

  if (left.past) {
    return (
      <p className="gd-lining-nums font-serif text-2xl italic text-inkSoft">{t(jubilee.done)}</p>
    );
  }

  const cells = [
    { value: left.days, label: jubilee.units.days },
    { value: left.hours, label: jubilee.units.hours },
    { value: left.minutes, label: jubilee.units.minutes },
    { value: left.seconds, label: jubilee.units.seconds },
  ];

  return (
    <div className="grid grid-cols-4 gap-px border border-ink/20 bg-ink/20">
      {cells.map((cell) => (
        <div key={cell.label.es} className="bg-bone px-3 py-4 text-center">
          <div className="font-display text-3xl font-semibold tabular-nums text-inkSoft sm:text-4xl">
            {String(cell.value).padStart(2, "0")}
          </div>
          <div className="gd-coord mt-1 uppercase">{t(cell.label)}</div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useLang();

  return (
    <section id="inicio" className="relative overflow-hidden pb-16 pt-10 sm:pb-24" data-od-id="hero">
      <Container>
        <SectionRule roman="0" label={t({ es: "Portada", en: "Cover" })} page="001 / 005" />

        <div className="mt-10 grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="animate-fade-up">
            <Eyebrow>{t(hero.kicker)}</Eyebrow>

            <h1 className="mt-6 font-display text-[clamp(40px,6.8vw,86px)] font-extrabold uppercase leading-[0.94] tracking-[-0.025em] text-inkSoft">
              {t(hero.titleTop)}{" "}
              <span className="gd-lining-nums font-serif text-[1.06em] font-medium normal-case italic text-accentRose">
                {t(hero.titleBig)}
              </span>
              <Dot />
            </h1>

            <p className="mt-6 max-w-prose font-serif text-xl leading-relaxed text-inkMute sm:text-2xl">
              {t(hero.subtitle)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#peregrinar"
                className="bg-accentRose px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80"
              >
                {t(jubilee.cta)}
              </a>
              <a
                href="#acontecimiento"
                className="border border-ink/30 px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
              >
                {t(jubilee.cta2)}
              </a>
            </div>

            <dl className="mt-12 border-t border-ink/20">
              {stats.map((stat) => (
                <div
                  key={stat.value}
                  className="flex items-baseline justify-between border-b border-ink/10 py-3"
                >
                  <dd className="font-display text-2xl font-semibold tabular-nums text-inkSoft">
                    {stat.value}
                  </dd>
                  <dt className="gd-coord uppercase">{t(stat.label)}</dt>
                </div>
              ))}
            </dl>

            <p className="gd-coord mt-6 uppercase">
              {t({ es: "Desliza para entrar", en: "Scroll to enter" })}
            </p>
          </div>

          {/* ── Plate column ── */}
          <figure className="relative">
            <div className="gd-rays absolute inset-x-0 -top-8 h-[120%]" aria-hidden />
            <div className="gd-glow relative">
              <img
                src="/images/guadalupe/tilma-hero.jpg"
                alt={t({
                  es: "Imagen de Santa María de Guadalupe venerada en la Basílica del Tepeyac",
                  en: "The image of Our Lady of Guadalupe venerated at the Basilica of Tepeyac",
                })}
                width={1536}
                height={2048}
                loading="eager"
                className="gd-frame relative z-10 mx-auto w-full max-w-[30rem]"
              />
            </div>
            <figcaption className="mt-6">
              <Coord className="block uppercase">
                {t({
                  es: "Fig. 01 · Ayate de fibra de maguey, Tepeyac, 1531 · Basílica de Guadalupe, Ciudad de México",
                  en: "Fig. 01 · Ayate of maguey fibre, Tepeyac, 1531 · Basilica of Guadalupe, Mexico City",
                })}
              </Coord>
            </figcaption>
          </figure>
        </div>

        {/* ── The words of Our Lady ── */}
        <blockquote className="mt-20 border-t border-ink/20 pt-8">
          <p className="font-serif text-[clamp(19px,2.2vw,26px)] italic leading-relaxed text-inkSoft">
            {t(nicanQuote.text)}
          </p>
          <footer className="gd-coord mt-4 uppercase">{t(nicanQuote.source)}</footer>
        </blockquote>

        {/* ── Countdown ── */}
        <div className="mt-16 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>{t(jubilee.label)}</Eyebrow>
            <p className="mt-3 max-w-prose text-body text-inkMute">{t(jubilee.sub)}</p>
          </div>
          <Countdown />
        </div>
      </Container>
    </section>
  );
}
