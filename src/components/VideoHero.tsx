import { useEffect, useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX, Sparkles } from "lucide-react";
import { useLang, type Bi } from "@/lib/lang";
import { Container, Dot, SectionRule } from "@/components/Chrome";

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
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted in some browsers
        setIsPlaying(false);
      });
    }
  }, [videoSrc]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const resolveText = (val: Bi | string | undefined): string => {
    if (!val) return "";
    return typeof val === "string" ? val : t(val);
  };

  return (
    <header
      id={id}
      className="relative min-h-[78vh] w-full overflow-hidden border-b border-ink/20 bg-[#08121f] text-bone transition-all duration-700 sm:min-h-[84vh]"
      data-od-id={`video-hero-${roman}`}
    >
      {/* ── Background Video Layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          onLoadedData={() => setIsLoaded(true)}
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isLoaded ? "opacity-45 scale-100" : "opacity-25 scale-105"
          }`}
          style={{ filter: "brightness(0.85) contrast(1.1) saturate(1.15)" }}
        />

        {/* Liturgical Marian & Gold atmospheric overlays */}
        <div
          className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#08121f] via-[#08121f]/65 to-[#08121f]/80"
          aria-hidden
        />
        <div
          className="absolute inset-0 pointer-events-none bg-radial-vignette opacity-80"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(212, 175, 55, 0.08) 0%, rgba(8, 18, 31, 0.7) 70%, rgba(5, 11, 20, 0.95) 100%)",
          }}
          aria-hidden
        />
        {/* Subtle celestial starlight grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255, 223, 115, 0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden
        />
      </div>

      {/* ── Foreground Sacred Typography & Content ── */}
      <div className="relative z-10 flex min-h-[78vh] flex-col justify-between pb-10 pt-6 sm:min-h-[84vh] sm:pb-14">
        <Container className="w-full">
          {/* Top section rule / breadcrumb */}
          <div className="border-b border-white/15 pb-4 pt-2">
            <SectionRule
              roman={roman}
              label={resolveText(eyebrow)}
              page={pageOf}
              className="text-white/80 [&_.gd-roman]:text-guadalupe-gold [&_.gd-label]:text-white/90 [&_.gd-leader]:border-white/20 [&_.gd-pageofpages]:text-white/60"
            />
          </div>
        </Container>

        <Container className="my-auto py-10">
          <div className="max-w-4xl">
            {/* Kicker badge */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 border border-guadalupe-gold/50 bg-guadalupe-gold/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-widest text-guadalupe-goldSoft backdrop-blur-sm">
                <span className="text-[11px] text-guadalupe-gold">✦</span>
                {resolveText(eyebrow)}
              </span>
              {badge ? (
                <span className="border border-white/20 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/80">
                  {resolveText(badge)}
                </span>
              ) : null}
            </div>

            {/* Monumental Headline */}
            <h1 className="mt-6 font-display text-[clamp(36px,5.8vw,78px)] font-extrabold uppercase leading-[0.96] tracking-[-0.025em] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              {resolveText(titleMain)}{" "}
              {titleItalic ? (
                <span className="font-serif font-normal normal-case italic text-guadalupe-goldSoft drop-shadow-sm">
                  {resolveText(titleItalic)}
                </span>
              ) : null}
              <Dot className="text-guadalupe-gold" />
            </h1>

            {/* Poetic Subtitle */}
            <p className="mt-5 max-w-2xl font-serif text-lg leading-relaxed text-bone/90 drop-shadow sm:text-2xl sm:leading-relaxed">
              {resolveText(subtitle)}
            </p>

            {/* Sacred Quote (if provided) */}
            {quote ? (
              <blockquote className="mt-7 border-l-2 border-guadalupe-gold/60 pl-5 pt-1 text-white/95">
                <p className="font-serif text-base italic leading-relaxed sm:text-lg">
                  "{resolveText(quote.text)}"
                </p>
                <footer className="mt-2 font-mono text-[10.5px] uppercase tracking-widest text-guadalupe-goldSoft">
                  — {resolveText(quote.source)}
                </footer>
              </blockquote>
            ) : null}

            {/* Calls to Action */}
            {(ctaPrimary || ctaSecondary) && (
              <div className="mt-9 flex flex-wrap items-center gap-4">
                {ctaPrimary ? (
                  <a
                    href={ctaPrimary.href}
                    className="group inline-flex items-center gap-2 border border-guadalupe-gold bg-guadalupe-gold px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#08121f] shadow-[0_4px_20px_rgba(212,175,55,0.35)] transition-all hover:bg-guadalupe-goldSoft hover:shadow-[0_6px_28px_rgba(212,175,55,0.5)]"
                  >
                    <span>{resolveText(ctaPrimary.label)}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                ) : null}

                {ctaSecondary ? (
                  <a
                    href={ctaSecondary.href}
                    className="inline-flex items-center gap-2 border border-white/40 bg-white/10 px-6 py-3.5 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm transition-all hover:border-white hover:bg-white/20"
                  >
                    {resolveText(ctaSecondary.label)}
                  </a>
                ) : null}
              </div>
            )}
          </div>
        </Container>

        {/* Bottom Bar: Video controls & scroll invitation */}
        <Container className="w-full">
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/15 pt-4 text-xs text-white/70">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pausar video de fondo" : "Reproducir video de fondo"}
                className="flex items-center gap-2 rounded border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-wider text-white/90 backdrop-blur-md transition-colors hover:border-guadalupe-gold hover:text-guadalupe-gold"
              >
                {isPlaying ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                <span>{isPlaying ? "Video Activo" : "Pausado"}</span>
              </button>

              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Activar audio" : "Silenciar audio"}
                className="flex items-center gap-2 rounded border border-white/20 bg-white/10 px-3 py-1.5 font-mono text-[10.5px] uppercase tracking-wider text-white/90 backdrop-blur-md transition-colors hover:border-guadalupe-gold hover:text-guadalupe-gold"
              >
                {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
                <span>{isMuted ? "Silencio" : "Audio"}</span>
              </button>
            </div>

            <div className="flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-widest text-guadalupe-goldSoft">
              <Sparkles className="h-3.5 w-3.5 text-guadalupe-gold animate-pulse" />
              <span>Santuario Digital Tepeyac 1531 · 2031</span>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
