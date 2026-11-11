import { useLang } from "@/lib/lang";
import { useCountdown } from "@/lib/useCountdown";
import { hero, jubilee, nicanQuote, tilmaStatement } from "@/data/hero";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";

const stats = [
  { value: "1531", label: { es: "El Tepeyac", en: "Tepeyac" } },
  { value: "500", label: { es: "Años", en: "Years" } },
  { value: "2031", label: { es: "El Jubileo", en: "The Jubilee" } },
] as const;

/* El reloj vive sobre el cielo del manto: azul verdoso muy hondo, estrellas
   y oro. Es el único momento oscuro de la portada y por eso se ve: lo que
   queda de tiempo es lo que hay que mirar. */
function Countdown() {
  const { t } = useLang();
  const left = useCountdown();

  if (left.past) {
    return (
      <p className="font-serif text-2xl italic text-[hsl(var(--gd-on-dark))]">{t(jubilee.done)}</p>
    );
  }

  const cells = [
    { value: left.days, label: jubilee.units.days, wide: true },
    { value: left.hours, label: jubilee.units.hours, wide: false },
    { value: left.minutes, label: jubilee.units.minutes, wide: false },
    { value: left.seconds, label: jubilee.units.seconds, wide: false },
  ];

  return (
    <div
      className="grid grid-cols-4 gap-px border border-guadalupe-gold/60 bg-guadalupe-gold/40"
      role="timer"
      aria-label={t(jubilee.label)}
    >
      {cells.map((cell) => (
        <div key={cell.label.es} className="bg-[hsl(var(--gd-mantle-deep))] px-2 py-5 text-center sm:px-5 sm:py-6">
          <div
            className={`font-display font-semibold tabular-nums text-guadalupe-goldSoft ${
              cell.wide ? "text-[clamp(34px,5vw,64px)]" : "text-[clamp(28px,3.6vw,46px)]"
            }`}
          >
            {cell.wide ? String(cell.value) : String(cell.value).padStart(2, "0")}
          </div>
          <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-bone/80 sm:text-[11px] sm:tracking-[0.2em]">
            {t(cell.label)}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Hero() {
  const { t } = useLang();

  return (
    <>
      {/* ── 1. La Basílica: el título y nada más ── */}
      <VideoHero
        id="inicio"
        roman="0"
        eyebrow={hero.kicker}
        titleMain={hero.titleTop}
        titleItalic={hero.titleBig}
        videoSrc="/videos/heroes/portada.mp4"
        posterSrc="/videos/heroes/portada.jpg"
        pageOf="001 / 006"
        badge={{ es: "Jubileo Guadalupano 2031", en: "Guadalupan Jubilee 2031" }}
        ctaPrimary={{ label: jubilee.cta, href: "#peregrinaciones" }}
        ctaSecondary={{ label: jubilee.cta2, href: "#acontecimiento" }}
      />

      {/* ── 2. El reloj y la cita ── */}
      <section
        id="reloj"
        className="gd-stars relative overflow-hidden border-b border-guadalupe-gold/50 py-14 text-bone sm:py-20"
        data-od-id="hero-countdown"
      >
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <h2 className="font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase leading-[1.05] tracking-[-0.01em] text-white">
              {t(jubilee.label)}
              <Dot className="text-guadalupe-gold" />
            </h2>
            <Countdown />
          </div>

          <div className="gd-rule mx-auto mt-12 max-w-xs sm:mt-16" aria-hidden />

          <blockquote className="mx-auto mt-10 max-w-4xl text-center sm:mt-12">
            <p className="gd-quote-fit font-serif text-[clamp(26px,4vw,50px)] italic leading-[1.18] text-[hsl(var(--gd-on-dark))]">
              <span className="text-guadalupe-gold" aria-hidden>“</span>
              {t(nicanQuote.text)}
              <span className="text-guadalupe-gold" aria-hidden>”</span>
            </p>
            <footer className="mt-5 text-[12px] font-semibold uppercase tracking-[0.22em] text-guadalupe-goldSoft">
              — {t(nicanQuote.source)}
            </footer>
          </blockquote>
        </Container>
      </section>

      {/* ── 3. La Tilma y su mensaje ── */}
      <section className="relative overflow-hidden pb-16 pt-14 sm:pb-24 sm:pt-20" data-od-id="hero-editorial">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="animate-fade-up">
              <Eyebrow>{t({ es: "La Sagrada Aparición", en: "The Sacred Apparition" })}</Eyebrow>

              <h2 className="mt-6 font-display text-[clamp(28px,3.9vw,50px)] font-extrabold uppercase leading-[1.06] tracking-[-0.02em] text-inkSoft">
                {t(tilmaStatement)}
                <Dot />
              </h2>

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
            </div>

            {/* ── Fig. 01 con resplandor áureo ── */}
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
                  className="gd-frame relative z-10 mx-auto w-full max-w-[28rem] shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-6 text-center">
                <Coord className="block uppercase">
                  {t({
                    es: "Fig. 01 · Ayate de fibra de maguey, Tepeyac, 1531 · Basílica de Guadalupe, Ciudad de México",
                    en: "Fig. 01 · Ayate of maguey fibre, Tepeyac, 1531 · Basilica of Guadalupe, Mexico City",
                  })}
                </Coord>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>
    </>
  );
}
