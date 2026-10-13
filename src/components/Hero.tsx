import { useLang } from "@/lib/lang";
import { useCountdown } from "@/lib/useCountdown";
import { hero, jubilee, nicanQuote } from "@/data/hero";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";

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
    <>
      {/* ── 1. Video Hero Temático de Portada ── */}
      <VideoHero
        id="inicio"
        roman="0"
        eyebrow={hero.kicker}
        titleMain={hero.titleTop}
        titleItalic={hero.titleBig}
        subtitle={hero.subtitle}
        quote={nicanQuote}
        videoSrc="https://videos.pexels.com/video-files/855019/855019-hd_1920_1080_30fps.mp4"
        posterSrc="/images/guadalupe/basilica.jpg"
        pageOf="001 / 006"
        badge={{ es: "Jubileo Guadalupano 2031", en: "Guadalupan Jubilee 2031" }}
        ctaPrimary={{ label: jubilee.cta, href: "#peregrinaciones" }}
        ctaSecondary={{ label: jubilee.cta2, href: "#acontecimiento" }}
      />

      {/* ── 2. Sección Editorial y Cuadro de la Virgen (Fig. 01) ── */}
      <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24" data-od-id="hero-editorial">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div className="animate-fade-up">
              <Eyebrow>{t({ es: "La Sagrada Aparición", en: "The Sacred Apparition" })}</Eyebrow>

              <h2 className="mt-6 font-display text-[clamp(34px,5.4vw,68px)] font-extrabold uppercase leading-[0.96] tracking-[-0.025em] text-inkSoft">
                {t(hero.titleTop)}{" "}
                <span className="gd-lining-nums font-serif text-[1.06em] font-medium normal-case italic text-accentRose">
                  {t(hero.titleBig)}
                </span>
                <Dot />
              </h2>

              <p className="mt-6 max-w-prose font-serif text-xl leading-relaxed text-inkMute sm:text-2xl">
                {t(hero.subtitle)}
              </p>

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
                {t({ es: "Desliza para entrar al santuario", en: "Scroll to enter the shrine" })}
              </p>
            </div>

            {/* ── Cuadro de la Virgen en Portada: Fig. 01 con Resplandor Áureo ── */}
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
                  className="gd-frame relative z-10 mx-auto w-full max-w-[30rem] shadow-[0_16px_50px_rgba(0,0,0,0.3)] transition-transform duration-700 hover:scale-[1.02]"
                />
              </div>
              <figcaption className="mt-6 text-center lg:text-left">
                <Coord className="block uppercase">
                  {t({
                    es: "Fig. 01 · Ayate de fibra de maguey, Tepeyac, 1531 · Basílica de Guadalupe, Ciudad de México",
                    en: "Fig. 01 · Ayate of maguey fibre, Tepeyac, 1531 · Basilica of Guadalupe, Mexico City",
                  })}
                </Coord>
              </figcaption>
            </figure>
          </div>

          {/* ── Cita Sagrada del Nican Mopohua ── */}
          <blockquote className="mt-20 border-t border-ink/20 pt-8">
            <p className="font-serif text-[clamp(19px,2.2vw,26px)] italic leading-relaxed text-inkSoft">
              {t(nicanQuote.text)}
            </p>
            <footer className="gd-coord mt-4 uppercase">{t(nicanQuote.source)}</footer>
          </blockquote>

          {/* ── Cuenta Regresiva al 2031 ── */}
          <div className="mt-16 grid gap-8 border-t border-ink/20 pt-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <Eyebrow>{t(jubilee.label)}</Eyebrow>
              <p className="mt-3 max-w-prose text-body text-inkMute">{t(jubilee.sub)}</p>
            </div>
            <Countdown />
          </div>
        </Container>
      </section>
    </>
  );
}
