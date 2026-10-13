import { useEffect, useState } from "react";
import {
  BookOpen,
  Church,
  Compass,
  Cross,
  Globe,
  Home,
  Landmark,
  Lock,
  Mountain,
  Star,
  Unlock,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLang } from "@/lib/lang";
import { site, links, cameras } from "@/data/links";
import { pilgrimageSection, pilgrimages, type IconKey } from "@/data/pilgrimages";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";
import { VirginSacredDisplay } from "@/components/VirginSacredDisplay";

/* ─────────────────────────────────────────────
   Section I — Peregrinaciones
   Card titles and plates are public; the itinerary detail is unlocked by
   registering. The gate is client-side only and degrades gracefully when
   no leads endpoint is configured.
   ───────────────────────────────────────────── */

const icons: Record<IconKey, LucideIcon> = {
  church: Church,
  landmark: Landmark,
  mountain: Mountain,
  home: Home,
  book: BookOpen,
  globe: Globe,
  cross: Cross,
  star: Star,
  compass: Compass,
};

export function Pilgrimages() {
  const { t } = useLang();
  const { unlocked, unlock } = usePilgrimAccess();

  return (
    <>
      <VideoHero
        id="peregrinaciones-hero"
        roman="I"
        eyebrow={pilgrimageSection.eyebrow}
        titleMain={pilgrimageSection.title}
        titleItalic={{ es: "Caminar con Fe al Tepeyac", en: "Walking in Faith to Tepeyac" }}
        subtitle={pilgrimageSection.intro}
        videoSrc="/videos/heroes/peregrinaciones.mp4"
        posterSrc="/videos/heroes/peregrinaciones.jpg"
        pageOf="002 / 006"
        badge={{ es: "Más de 12 Millones de Almas", en: "Over 12 Million Pilgrims" }}
        ctaPrimary={{ label: { es: "Ver la Basílica en Vivo", en: "Watch Basilica Live" }, href: "#basilica-en-vivo" }}
        ctaSecondary={{ label: { es: "Explorar las 10 Rutas", en: "Explore 10 Routes" }, href: "#rutas-peregrinas" }}
      />

      <section id="peregrinaciones" className="py-16 sm:py-24" data-od-id="peregrinaciones">
        <Container>
          <div id="basilica-en-vivo" className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <Eyebrow>{t(pilgrimageSection.eyebrow)}</Eyebrow>
              <h2 className="mt-4 font-display text-[clamp(34px,5.2vw,64px)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-inkSoft">
                {t(pilgrimageSection.title)}
                <Dot />
              </h2>
            </div>
            <p className="text-body text-inkMute">{t(pilgrimageSection.intro)}</p>
          </div>

        {/* ── Live from the Basilica ── */}
        <div className="mt-12 grid gap-6 border border-ink/20 bg-bone p-4 lg:grid-cols-[1.45fr_0.55fr] lg:p-6">
          <div className="aspect-video w-full bg-ink/20">
            <iframe
              src={links.basilicaLiveEmbed}
              title={t(pilgrimageSection.liveTitle)}
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-between">
            <div>
              <Eyebrow>{t({ es: "En vivo", en: "Live" })}</Eyebrow>
              <h3 className="mt-3 font-serif text-2xl italic text-inkSoft">
                {t(pilgrimageSection.liveTitle)}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-inkMute">
                {t(pilgrimageSection.liveNote)}
              </p>
            </div>
          </div>
        </div>

        {/* ── Other live cameras around the Tepeyac ──
            Letra de lectura, no de anotación: quien entra aquí busca una
            cámara, y el rótulo de 10px no se distinguía. A la izquierda y sin
            justificar: en una columna tan estrecha la justificación abría
            huecos entre palabras. */}
        <div className="mt-4 grid gap-6 border border-ink/20 bg-bone p-5 lg:grid-cols-[0.55fr_1.45fr] lg:p-6">
          <div>
            <Eyebrow>{t({ es: "En vivo", en: "Live" })}</Eyebrow>
            <h3 className="mt-3 font-serif text-2xl italic text-inkSoft">
              {t(pilgrimageSection.camerasTitle)}
            </h3>
            <p className="mt-3 text-left text-body text-inkMute">
              {t(pilgrimageSection.camerasNote)}
            </p>
          </div>
          <ul className="grid gap-px self-start border border-ink/20 bg-ink/20 sm:grid-cols-3">
            {cameras.map((camera) => (
              <li key={camera.href} className="bg-bone p-5 text-left">
                <a
                  href={camera.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="gd-link-underline text-lg font-semibold leading-snug text-inkSoft transition-colors hover:text-ink sm:text-xl"
                >
                  {t(camera.label)}
                  <span aria-hidden> ↗</span>
                </a>
                <span className="mt-2 block text-[15px] text-inkMute">{camera.source}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Cuadro de la Virgen: Altar Mayor del Tepeyac (Meta del Peregrino) ── */}
        <VirginSacredDisplay variant="sanctuary-altar" />

        {/* ── The places ── */}
        <div id="rutas-peregrinas" className="mt-16 grid gap-px border border-ink/20 bg-ink/20 sm:grid-cols-2">
          {pilgrimages.map((place, index) => {
            const Icon = icons[place.icon];
            const lastOdd =
              index === pilgrimages.length - 1 && pilgrimages.length % 2 === 1;
            return (
              <article
                key={place.id}
                className={`bg-paper p-6${lastOdd ? " sm:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="gd-roman">{place.n}.</span>
                  <Icon className="h-5 w-5 text-inkFaint" aria-hidden />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold leading-tight text-inkSoft">
                  {t(place.title)}
                </h3>
                <Coord className="mt-2 block uppercase">{t(place.place)}</Coord>
                <p className="mt-4 text-[15px] leading-relaxed text-inkMute">{t(place.summary)}</p>
                <Coord className="mt-4 block uppercase">
                  {t(pilgrimageSection.gate.durationLabel)} · {t(place.duration)}
                </Coord>

                {unlocked ? (
                  <div className="mt-6 border-t border-ink/20 pt-4">
                    <Coord className="block uppercase">
                      {t(pilgrimageSection.gate.placesLabel)}
                    </Coord>
                    <ul className="mt-3 space-y-3">
                      {place.highlights.map((item) => (
                        <li
                          key={item.es}
                          className="flex gap-3 text-[15px] leading-relaxed text-inkSoft"
                        >
                          <span className="mt-2 h-1 w-1 flex-none bg-accentRose" aria-hidden />
                          <span>{t(item)}</span>
                        </li>
                      ))}
                    </ul>

                    {place.stops ? (
                      <ol className="mt-6 space-y-5 border-l border-ink/20 pl-5">
                        {place.stops.map((stop) => (
                          <li key={stop.n}>
                            <span className="gd-roman">{stop.n}</span>
                            <h4 className="mt-1 font-display text-base font-semibold text-inkSoft">
                              {t(stop.title)}
                            </h4>
                            <p className="mt-2 text-[15px] leading-relaxed text-inkMute">
                              {t(stop.body)}
                            </p>
                          </li>
                        ))}
                      </ol>
                    ) : null}
                  </div>
                ) : (
                  <p className="gd-coord mt-6 border-t border-ink/20 pt-4 uppercase">
                    {t(place.region)} · {t(pilgrimageSection.gate.lockedCta)}
                  </p>
                )}
              </article>
            );
          })}
        </div>

        {/* ── The gate ── */}
        <div id="peregrinar" className="mt-12 scroll-mt-28">
          {unlocked ? (
            <p className="gd-coord uppercase">{t(pilgrimageSection.gate.photosSoon)}</p>
          ) : (
            <Gate onUnlock={unlock} />
          )}
        </div>

        {/* ── The multiplying model ── */}
        <div className="mt-20 grid gap-10 border-t border-ink/20 pt-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Eyebrow>{t(pilgrimageSection.multiplier.eyebrow)}</Eyebrow>
            <h3 className="mt-4 font-display text-[clamp(26px,3.4vw,44px)] font-extrabold uppercase leading-[1.02] tracking-[-0.03em] text-inkSoft">
              {t(pilgrimageSection.multiplier.title)}
              <Dot />
            </h3>
            <p className="mt-5 font-serif text-xl italic text-inkSoft">
              {t(pilgrimageSection.multiplier.lead)}
            </p>
            <p className="mt-4 text-body text-inkMute">{t(pilgrimageSection.multiplier.body)}</p>

            <a
              href={`mailto:${site.contactEmail}?subject=${encodeURIComponent(
                t({ es: "Quiero ser capitán de peregrinación", en: "I want to be a pilgrimage captain" })
              )}`}
              className="mt-6 inline-block bg-accentRose px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80"
            >
              {t(pilgrimageSection.multiplier.cta)}
            </a>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <Coord className="block uppercase">
                {t(pilgrimageSection.multiplier.rolesTitle)}
              </Coord>
              <ul className="mt-3">
                {pilgrimageSection.multiplier.roles.map((role) => (
                  <li
                    key={role.es}
                    className="border-b border-ink/10 py-2 text-[15px] text-inkSoft"
                  >
                    {t(role)}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Coord className="block uppercase">
                {t(pilgrimageSection.multiplier.stepsTitle)}
              </Coord>
              <ol className="mt-3 space-y-3">
                {pilgrimageSection.multiplier.steps.map((step, i) => (
                  <li
                    key={step.es}
                    className="flex gap-3 text-[15px] leading-relaxed text-inkMute"
                  >
                    <span className="gd-roman flex-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{t(step)}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}

const STORAGE_KEY = "guadalupe-pilgrim-access";

function usePilgrimAccess() {
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    try {
      setUnlocked(window.localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* storage can be blocked */
    }
  }, []);

  const unlock = () => {
    setUnlocked(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return { unlocked, unlock };
}

function Gate({ onUnlock }: { onUnlock: () => void }) {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      if (site.leadsEndpoint) {
        await fetch(site.leadsEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, source: "peregrinaciones" }),
        });
      }
    } catch {
      /* never block the pilgrim on a network error */
    } finally {
      setBusy(false);
      setSent(true);
      onUnlock();
    }
  };

  if (sent) {
    return (
      <div className="border border-ink/20 bg-bone p-6">
        <Unlock className="h-5 w-5 text-accentRose" />
        <p className="mt-3 font-serif text-xl italic text-inkSoft">
          {t(pilgrimageSection.gate.unlocked)}
        </p>
        <Coord className="mt-2 block uppercase">{t(pilgrimageSection.gate.unlockedBadge)}</Coord>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="border border-ink/20 bg-bone p-6">
      <Lock className="h-5 w-5 text-accentRose" />
      <h3 className="mt-3 font-display text-lg font-semibold uppercase tracking-[0.06em] text-inkSoft">
        {t(pilgrimageSection.gate.lockedTitle)}
      </h3>
      <p className="mt-2 text-[15px] leading-relaxed text-inkMute">
        {t(pilgrimageSection.gate.lockedBody)}
      </p>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="gd-coord uppercase">
            {t({ es: "Nombre", en: "Name" })}
          </span>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 w-full border border-ink/25 bg-paper px-3 py-2 text-[15px] text-inkSoft outline-none focus:border-accentRose"
          />
        </label>
        <label className="block">
          <span className="gd-coord uppercase">
            {t({ es: "Correo", en: "Email" })}
          </span>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full border border-ink/25 bg-paper px-3 py-2 text-[15px] text-inkSoft outline-none focus:border-accentRose"
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={busy}
        className="mt-4 bg-accentRose px-5 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80 disabled:opacity-60"
      >
        {busy ? "…" : t(pilgrimageSection.gate.lockedCta)}
      </button>

      {!site.leadsEndpoint ? (
        <p className="gd-coord mt-3 uppercase">
          {t({ es: "También puedes escribirnos a", en: "You can also write to us at" })}{" "}
          {site.contactEmail}
        </p>
      ) : null}
    </form>
  );
}
