import { useState } from "react";
import { Heart, Mail } from "lucide-react";
import { useLang } from "@/lib/lang";
import { shopCategories, shopSection } from "@/data/shop";
import { site } from "@/data/links";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";
import { VirginSacredDisplay } from "@/components/VirginSacredDisplay";

/* Section IV — the shop.
   Nothing is advertised as purchasable: the section is an honest preview
   with categories, a notify-me capture and the donation path. */

function Notify() {
  const { t } = useLang();
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
          body: JSON.stringify({ email, source: "tienda-aviso" }),
        });
      }
    } catch {
      /* never block on a network error */
    } finally {
      setBusy(false);
      setSent(true);
    }
  };

  if (sent) {
    return <p className="font-serif text-xl italic text-inkSoft">{t(shopSection.notifySuccess)}</p>;
  }

  return (
    <form onSubmit={submit} className="mt-5">
      <div className="flex flex-wrap gap-2">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t(shopSection.notifyPlaceholder)}
          className="min-w-[14rem] flex-1 border border-ink/25 bg-paper px-3 py-2.5 text-[15px] text-inkSoft outline-none focus:border-accentRose"
        />
        <button
          type="submit"
          disabled={busy}
          className="bg-accentRose px-5 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80 disabled:opacity-60"
        >
          {busy ? "…" : t(shopSection.notifyCta)}
        </button>
      </div>
      {!site.leadsEndpoint ? (
        <Coord className="mt-3 block uppercase">
          {t(shopSection.notifyNoBackend)} {site.contactEmail}
        </Coord>
      ) : null}
    </form>
  );
}

export function Shop() {
  const { t } = useLang();

  return (
    <>
      <VideoHero
        id="tienda-hero"
        roman="IV"
        eyebrow={shopSection.eyebrow}
        titleMain={shopSection.title}
        titleItalic={{ es: "y Arte Sacro Guadalupano", en: "and Sacred Guadalupan Art" }}
        subtitle={shopSection.intro}
        videoSrc="/videos/heroes/tienda.mp4"
        posterSrc="/videos/heroes/tienda.jpg"
        pageOf="005 / 006"
        badge={shopSection.badge}
        ctaPrimary={{ label: { es: "Ver Colección", en: "View Collection" }, href: "#categorias-tienda" }}
        ctaSecondary={{ label: { es: "Sello de Autenticidad", en: "Authenticity Seal" }, href: "#autenticidad-relicario" }}
      />

      <section id="tienda" className="py-16 sm:py-24" data-od-id="tienda">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <Eyebrow>{t(shopSection.eyebrow)}</Eyebrow>
                <span className="border border-accentRose px-2 py-0.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-accentRose">
                  {t(shopSection.badge)}
                </span>
              </div>
              <h2 className="mt-4 font-display text-[clamp(34px,5.2vw,64px)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-inkSoft">
                {t(shopSection.title)}
                <Dot />
              </h2>
            </div>
            <p className="text-body text-inkMute">{t(shopSection.intro)}</p>
          </div>

          {/* ── Cuadro de la Virgen: Placa y Certificado de Fidelidad Sacra ── */}
          <div id="autenticidad-relicario">
            <VirginSacredDisplay variant="gallery-relic" />
          </div>

          {/* ── Categories ── */}
          <div id="categorias-tienda" className="mt-12 grid gap-px bg-ink/20 lg:grid-cols-3">
          {shopCategories.map((category) => (
            <article key={category.id} className="flex flex-col bg-bone p-6">
              <div className="flex items-baseline gap-3">
                <span className="gd-roman">{category.roman}.</span>
                <h3 className="font-display text-lg font-semibold uppercase leading-tight tracking-[0.04em] text-inkSoft">
                  {t(category.title)}
                </h3>
              </div>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-inkMute">
                {t(category.body)}
              </p>
              <ul className="mt-5 border-t border-ink/20 pt-4">
                {category.items.map((item) => (
                  <li
                    key={item.es}
                    className="flex gap-3 border-b border-ink/10 py-2 text-[15px] text-inkSoft last:border-b-0"
                  >
                    <span className="mt-2 h-1 w-1 flex-none bg-accentRose" aria-hidden />
                    <span>{t(item)}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* ── Notify + donate ── */}
        <div className="mt-12 grid gap-px bg-ink/20 lg:grid-cols-2">
          <div className="bg-paper p-6 lg:p-8">
            <Mail className="h-5 w-5 text-inkFaint" aria-hidden />
            <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-[0.04em] text-inkSoft">
              {t(shopSection.notifyTitle)}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-inkMute">
              {t(shopSection.notifyBody)}
            </p>
            <Notify />
          </div>

          <div className="bg-paper p-6 lg:p-8">
            <Heart className="h-5 w-5 text-inkFaint" aria-hidden />
            <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-[0.04em] text-inkSoft">
              {t(shopSection.donateTitle)}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-inkMute">
              {t(shopSection.donateBody)}
            </p>
            {site.donateUrl ? (
              <a
                href={site.donateUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-5 inline-block border border-ink/30 px-5 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
              >
                {t(shopSection.donateCta)}
              </a>
            ) : null}
            {/* Sin mailto: no abre ningún programa de correo, deja a la
                vista la dirección y el concepto para escribirlos a mano o
                copiarlos. */}
            <div className="mt-5 border border-ink/30 px-5 py-4">
              <p className="text-left text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft">
                {t(shopSection.writeCta)}
              </p>
              <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1.5 text-[16px]">
                <dt className="text-inkMute">{t(shopSection.writeEmailLabel)}</dt>
                <dd className="select-all break-all text-left font-semibold text-inkSoft">
                  {site.contactEmail}
                </dd>
                <dt className="text-inkMute">{t(shopSection.writeSubjectLabel)}</dt>
                <dd className="select-all text-left font-semibold text-inkSoft">
                  {t(shopSection.writeSubject)}
                </dd>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
