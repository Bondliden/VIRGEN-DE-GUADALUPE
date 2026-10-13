import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useLang, type Bi } from "@/lib/lang";
import { Container, Dot, SectionRule } from "@/components/Chrome";

/* ─────────────────────────────────────────────
   Héroe con vídeo — uno por página.

   Una franja, no la pantalla entera: entre 440 y 600 px, para que asome el
   contenido de debajo. El vídeo va a plena luz y un único velo lateral
   oscurece solo la zona del texto; antes eran cuatro capas apiladas
   (vídeo al 45 %, brillo 0,85, degradado del 65–100 % y viñeta de hasta el
   95 %) que dejaban ver un 5–10 % de la imagen. En el móvil el texto ocupa
   todo el ancho y el velo sube desde abajo.

   Un solo control: pausa, redondo, abajo a la derecha (lo que se mueve
   solo más de cinco segundos tiene que poder pararse). Sin botón de
   audio: los vídeos no tienen sonido que aporte y chocaba con la música
   del manto. Con «reducir movimiento» activado no hay reproducción: se ve
   la imagen fija.
   ───────────────────────────────────────────── */

export type VideoHeroProps = {
  id?: string;
  roman: string;
  eyebrow: Bi | string;
  titleMain: Bi | string;
  titleItalic?: Bi | string;
  subtitle: Bi | string;
  quote?: {
    text: Bi | string;
    source: Bi | string;
  };
  videoSrc: string;
  posterSrc?: string;
  pageOf: string;
  badge?: Bi | string;
  ctaPrimary?: { label: Bi | string; href: string };
  ctaSecondary?: { label: Bi | string; href: string };
};

/* Velo de escritorio: oscuro detrás del texto, transparente a la derecha,
   y una caída suave abajo para la regla de sección. */
const SCRIM_WIDE =
  "linear-gradient(0deg, rgba(8,18,31,0.55) 0%, rgba(8,18,31,0) 32%)," +
  "linear-gradient(90deg, rgba(8,18,31,0.84) 0%, rgba(8,18,31,0.62) 38%, rgba(8,18,31,0.14) 70%, rgba(8,18,31,0) 100%)";

/* Velo de móvil: el texto va abajo y a todo el ancho. */
const SCRIM_NARROW =
  "linear-gradient(0deg, rgba(8,18,31,0.9) 0%, rgba(8,18,31,0.62) 55%, rgba(8,18,31,0.3) 100%)";

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function VideoHero({
  id,
  roman,
  eyebrow,
  titleMain,
  titleItalic,
  subtitle,
  quote,
  videoSrc,
  posterSrc = "/images/guadalupe/tilma-hero.jpg",
  pageOf,
  badge,
  ctaPrimary,
  ctaSecondary,
}: VideoHeroProps) {
  const { t } = useLang();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [reduced] = useState(prefersReducedMotion);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  /* El estado del botón sale de los eventos del propio vídeo (onPlay /
     onPause), no de lo que creemos haber pedido: antes decía «Pausado»
     mientras el vídeo corría. */
  useEffect(() => {
    if (reduced || !videoRef.current) return;
    videoRef.current.play().catch(() => {
      /* El navegador puede bloquear el autoplay: queda la imagen fija. */
    });
  }, [videoSrc, reduced]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) video.play().catch(() => {});
    else video.pause();
  };

  const resolveText = (val: Bi | string | undefined): string => {
    if (!val) return "";
    return typeof val === "string" ? val : t(val);
  };

  return (
    <header
      id={id}
      className="relative w-full overflow-hidden border-b border-ink/20 bg-[#08121f] text-bone"
      data-od-id={`video-hero-${roman}`}
    >
      {/* ── Fondo: póster siempre, vídeo encima en cuanto puede ── */}
      <div className="absolute inset-0 z-0" aria-hidden>
        <img src={posterSrc} alt="" className="h-full w-full object-cover" />
        {reduced ? null : (
          <video
            ref={videoRef}
            src={videoSrc}
            poster={posterSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onLoadedData={() => setIsLoaded(true)}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
        <div className="absolute inset-0 sm:hidden" style={{ background: SCRIM_NARROW }} />
        <div className="absolute inset-0 hidden sm:block" style={{ background: SCRIM_WIDE }} />
      </div>

      {/* ── Texto ── */}
      <div className="relative z-10 flex min-h-[560px] flex-col pb-8 pt-6 sm:min-h-[clamp(440px,62vh,600px)] sm:pb-10">
        <Container className="w-full">
          <div className="border-b border-white/15 pb-4 pt-2">
            <SectionRule
              roman={roman}
              label={resolveText(eyebrow)}
              page={pageOf}
              className="text-white/85 [&_.gd-roman]:text-guadalupe-gold [&_.gd-label]:text-white/90 [&_.gd-leader]:border-white/20 [&_.gd-pageofpages]:text-white/70"
            />
          </div>
        </Container>

        <Container className="mt-auto w-full pt-10 sm:my-auto sm:pt-8">
          <div className="max-w-3xl">
            {badge ? (
              <span className="inline-flex items-center gap-2 border border-guadalupe-gold/55 bg-guadalupe-gold/15 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft backdrop-blur-sm">
                <span className="text-guadalupe-gold" aria-hidden>✦</span>
                {resolveText(badge)}
              </span>
            ) : null}

            <h1 className="mt-5 font-display text-[clamp(32px,5.2vw,68px)] font-extrabold uppercase leading-[0.98] tracking-[-0.025em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.55)]">
              {resolveText(titleMain)}{" "}
              {titleItalic ? (
                <span className="font-serif font-normal normal-case italic text-guadalupe-goldSoft">
                  {resolveText(titleItalic)}
                </span>
              ) : null}
              <Dot className="text-guadalupe-gold" />
            </h1>

            <p className="mt-4 max-w-2xl font-serif text-[19px] leading-snug text-bone/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.6)] sm:text-[22px]">
              {resolveText(subtitle)}
            </p>

            {quote ? (
              <blockquote className="mt-6 max-w-2xl border-l-2 border-guadalupe-gold/60 pl-5 text-white/95">
                <p className="font-serif text-base italic leading-relaxed sm:text-lg">
                  “{resolveText(quote.text)}”
                </p>
                <footer className="mt-2 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft">
                  — {resolveText(quote.source)}
                </footer>
              </blockquote>
            ) : null}

            {ctaPrimary || ctaSecondary ? (
              <div className="mt-7 flex flex-wrap items-center gap-3 sm:gap-4">
                {ctaPrimary ? (
                  <a
                    href={ctaPrimary.href}
                    className="group inline-flex items-center gap-2 bg-guadalupe-gold px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#08121f] shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-colors hover:bg-guadalupe-goldSoft"
                  >
                    <span>{resolveText(ctaPrimary.label)}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden>→</span>
                  </a>
                ) : null}
                {ctaSecondary ? (
                  <a
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 border border-white/55 bg-white/10 px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/20"
                  >
                    {resolveText(ctaSecondary.label)}
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </Container>
      </div>

      {reduced ? null : (
        <button
          type="button"
          onClick={togglePlay}
          aria-label={
            isPlaying
              ? t({ es: "Pausar el vídeo de fondo", en: "Pause the background video" })
              : t({ es: "Reproducir el vídeo de fondo", en: "Play the background video" })
          }
          className="absolute bottom-4 right-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-[#08121f]/45 text-white backdrop-blur-sm transition-colors hover:border-guadalupe-gold hover:text-guadalupe-gold sm:bottom-5 sm:right-5"
        >
          {isPlaying ? <Pause className="h-4 w-4" aria-hidden /> : <Play className="h-4 w-4" aria-hidden />}
        </button>
      )}
    </header>
  );
}
