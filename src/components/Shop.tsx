import { Heart } from "lucide-react";
import { useLang } from "@/lib/lang";
import { shopCategories, shopSection } from "@/data/shop";
import { site } from "@/data/links";
import { Container, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";
import { VirginSacredDisplay } from "@/components/VirginSacredDisplay";

/* Sección IV — la tienda y el arte sacro guadalupano, y el camino del donativo. */

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
        ctaPrimary={{ label: { es: "Ver Colección", en: "View Collection" }, href: "#categorias-tienda" }}
        ctaSecondary={{ label: { es: "Sello de Autenticidad", en: "Authenticity Seal" }, href: "#autenticidad-relicario" }}
      />

      <section id="tienda" className="py-16 sm:py-24" data-od-id="tienda">
        <Container>
          <div>
            <Eyebrow>{t(shopSection.eyebrow)}</Eyebrow>
            <h2 className="mt-4 font-display text-[clamp(34px,5.2vw,64px)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-inkSoft">
              {t(shopSection.title)}
              <Dot />
            </h2>
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

        {/* ── Donativos ── */}
        <div className="mt-12 grid gap-8 border border-ink/20 bg-paper p-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:p-10">
          <div>
            <Heart className="h-6 w-6 text-accentRose" aria-hidden />
            <h3 className="mt-4 font-display text-2xl font-semibold uppercase tracking-[0.04em] text-inkSoft">
              {t(shopSection.donateTitle)}
            </h3>
            <p className="mt-3 text-body leading-relaxed text-inkMute">
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
          </div>
          <div className="grid content-start gap-4">
            {/* Sin mailto: no abre ningún programa de correo, deja a la
                vista la dirección y el concepto para escribirlos a mano o
                copiarlos. */}
            <div className="border border-ink/30 px-5 py-4">
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
            <div className="border border-ink/30 px-5 py-4">
              <p className="text-left text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft">
                {t(shopSection.zelleTitle)}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-inkMute">{t(shopSection.zelleBody)}</p>
              <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-4 text-[16px]">
                <dt className="text-inkMute">{t(shopSection.zelleNumberLabel)}</dt>
                <dd className="select-all text-left font-semibold text-inkSoft">{site.zelle}</dd>
              </dl>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
