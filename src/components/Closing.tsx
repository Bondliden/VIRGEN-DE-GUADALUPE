import { useState } from "react";
import { Instagram, Mail, MessageCircle, Youtube } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { useLang } from "@/lib/lang";
import { closing } from "@/data/hero";
import { novena } from "@/data/jubilee";
import { links, site } from "@/data/links";
import { pilgrimageSection } from "@/data/pilgrimages";
import { Container, Coord, Dot, Eyebrow } from "@/components/Chrome";
import { VideoHero } from "@/components/VideoHero";
import { VirginSacredDisplay } from "@/components/VirginSacredDisplay";

/* Section V — the closing call to action, and the colophon footer with the
   Atelier Zero mega kicker word and the image licence attribution. */

export function Closing() {
  const { t } = useLang();
  const [openForm, setOpenForm] = useState<"capitan" | "documental" | null>(null);

  return (
    <>
      <VideoHero
        id="jubileo-hero"
        roman="V"
        eyebrow={novena.eyebrow}
        titleMain={novena.title}
        titleItalic={{ es: "Hacia el Quinto Centenario", en: "Towards the Fifth Centenary" }}
        subtitle={novena.lead}
        videoSrc="/videos/heroes/jubileo.mp4"
        posterSrc="/videos/heroes/jubileo.jpg"
        pageOf="006 / 006"
        badge={{ es: "1531 · Jubileo Guadalupano · 2031", en: "1531 · Guadalupan Jubilee · 2031" }}
        ctaPrimary={{ label: { es: "Las 5 Líneas de Acción", en: "The 5 Lines of Action" }, href: "#lineas-de-accion" }}
        ctaSecondary={{ label: { es: "Coronación Final", en: "Final Coronation" }, href: "#coronacion-jubileo" }}
      />

      <section id="jubileo" className="py-16 sm:py-24" data-od-id="jubileo">
        <Container>
          {/* ── La novena de años ── */}
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <Eyebrow>{t(novena.eyebrow)}</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(34px,5.2vw,64px)] font-extrabold uppercase leading-[0.98] tracking-[-0.03em] text-inkSoft">
                {t(novena.title)}
                <Dot />
              </h2>
              <p className="mt-4 font-display text-[clamp(24px,3vw,38px)] font-extrabold tracking-[0.04em] text-inkFaint">
                {novena.years}
              </p>
            </div>
            <p className="font-serif text-xl italic leading-relaxed text-inkSoft">
              {t(novena.lead)}
            </p>
          </div>

        {/* ── Las cinco líneas de acción ── */}
        <div id="lineas-de-accion" className="mt-12 scroll-mt-28">
          <Coord className="block uppercase">{t(novena.actionsTitle)}</Coord>
          <div className="mt-4 grid gap-px bg-ink/20 sm:grid-cols-2 lg:grid-cols-5">
            {novena.actions.map((action, index) => (
              <div key={action.es} className="bg-paper p-5">
                <span className="gd-roman">{String(index + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-[15px] leading-relaxed text-inkSoft">{t(action)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Y después de 2031, 2033 ── */}
        <div className="mt-10 border-l-2 border-ink/30 pl-5">
          <Coord className="block uppercase">{t(novena.pgpTitle)}</Coord>
          <p className="mt-2 max-w-prose text-body leading-relaxed text-inkMute">
            {t(novena.pgpBody)}
          </p>
        </div>

        <p className="gd-coord mt-6 uppercase">{t(novena.note)}</p>

        <div className="gd-rule mt-16" aria-hidden />

        {/* ── El remate: la llamada a ir ── */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <Eyebrow>{t(site.tagline)}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(36px,6.4vw,80px)] font-extrabold uppercase leading-[0.94] tracking-[-0.03em] text-inkSoft">
              {t(closing.title)}
              <Dot />
            </h2>
            <p className="mt-6 max-w-prose font-serif text-xl italic leading-relaxed text-inkSoft">
              {t(closing.text)}
            </p>
          </div>

          <div className="grid gap-3">
            <a
              href="#peregrinar"
              className="bg-accentRose px-5 py-3 text-center text-eyebrow font-semibold uppercase tracking-eyebrow text-[hsl(var(--gd-accent-on))] transition-colors hover:bg-accentRose/80"
            >
              {t(closing.ctaJoin)}
            </a>
            {/* Capitán y documental: piden nombre y correo, igual que
                «Quiero peregrinar», y al enviar abren a Lupita con la
                pregunta de cómo seguir. Antes abrían el programa de correo. */}
            <button
              type="button"
              aria-expanded={openForm === "capitan"}
              onClick={() => setOpenForm(openForm === "capitan" ? null : "capitan")}
              className="border border-ink/30 px-5 py-3 text-center text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
            >
              {t(closing.ctaCaptain)}
            </button>
            {openForm === "capitan" ? (
              <LeadForm source="capitan" intro={closing.captainIntro} lupitaQuestion={closing.captainQuestion} />
            ) : null}
            <button
              type="button"
              aria-expanded={openForm === "documental"}
              onClick={() => setOpenForm(openForm === "documental" ? null : "documental")}
              className="border border-ink/30 px-5 py-3 text-center text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
            >
              {t(closing.ctaSupport)}
            </button>
            {openForm === "documental" ? (
              <LeadForm source="documental" intro={closing.supportIntro} lupitaQuestion={closing.supportQuestion} />
            ) : null}
            <Coord className="mt-2 block uppercase">{t(pilgrimageSection.multiplier.lead)}</Coord>
          </div>
        </div>

        {/* ── Cuadro de la Virgen: Coronación Monumental del Jubileo 2031 ── */}
        <div id="coronacion-jubileo">
          <VirginSacredDisplay variant="jubilee-climax" />
        </div>
      </Container>
    </section>
    </>
  );
}

function SocialLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: typeof Mail;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center gap-2 text-[14px] text-inkMute transition-colors hover:text-ink"
    >
      <Icon className="h-4 w-4 flex-none" aria-hidden />
      <span>{label}</span>
    </a>
  );
}

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-ink/25 pt-12">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-lg font-bold uppercase tracking-[0.1em] text-inkSoft">
              {t(site.name)}
            </p>
            <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-inkMute">
              {t({
                es: "Un santuario digital dedicado a Santa María de Guadalupe y al Jubileo Guadalupano de 2031, preparado por Azucena Cierco y Jaime Aguilera.",
                en: "A digital sanctuary dedicated to Saint Mary of Guadalupe and the Guadalupan Jubilee of 2031, prepared by Azucena Cierco and Jaime Aguilera.",
              })}
            </p>

            <div className="mt-5 grid gap-2">
              <SocialLink href={links.youtubeChannel} icon={Youtube} label="@inbguadalupe3618" />
              {site.instagram ? (
                <SocialLink
                  href={`https://instagram.com/${site.instagram}`}
                  icon={Instagram}
                  label={site.instagram}
                />
              ) : null}
              {site.whatsapp ? (
                <SocialLink
                  href={`https://wa.me/${site.whatsapp}`}
                  icon={MessageCircle}
                  label={site.whatsapp}
                />
              ) : null}
              <SocialLink href={`mailto:${site.contactEmail}`} icon={Mail} label={site.contactEmail} />
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            <nav>
              <Coord className="block text-[12px] font-bold uppercase text-inkSoft">
                {t({ es: "El sitio", en: "The site" })}
              </Coord>
              <ul className="mt-3 space-y-2">
                {[
                  { href: "#peregrinaciones", label: { es: "Peregrinaciones", en: "Pilgrimages" } },
                  { href: "#acontecimiento", label: { es: "Acontecimiento", en: "The Event" } },
                  { href: "#voces", label: { es: "Voces y Rosario", en: "Voices and Rosary" } },
                  { href: "#tienda", label: { es: "Tienda", en: "Shop" } },
                  { href: "#transparencia", label: { es: "Transparencia", en: "Transparency" } },
                ].map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="gd-link-underline text-[15px] font-semibold text-inkSoft transition-colors hover:text-ink"
                    >
                      {t(item.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <Coord className="block text-[12px] font-bold uppercase text-inkSoft">
                {t({ es: "Para peregrinar", en: "To go on pilgrimage" })}
              </Coord>
              <ul className="mt-3 space-y-2">
                <li>
                  {/* En plural, al bloque de la página que reúne todas las
                      cámaras, no a una sola emisión de YouTube. */}
                  <a
                    href="#basilica-en-vivo"
                    className="gd-link-underline text-[15px] font-semibold text-inkSoft transition-colors hover:text-ink"
                  >
                    {t({ es: "Cámaras en vivo", en: "Live cameras" })}
                  </a>
                </li>
                <li>
                  <a
                    href={links.azucenaTestimony}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="gd-link-underline text-[15px] font-semibold text-inkSoft transition-colors hover:text-ink"
                  >
                    {t({ es: "Testimonio de Azucena", en: "Azucena's testimony" })}
                  </a>
                </li>
                <li>
                  <a
                    href={links.fernandoOjeda}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="gd-link-underline text-[15px] font-semibold text-inkSoft transition-colors hover:text-ink"
                  >
                    {t({ es: "Música del manto", en: "Music of the mantle" })}
                  </a>
                </li>
              </ul>
            </nav>

            <div>
              <Coord className="block text-[12px] font-bold uppercase text-inkSoft">
                {t({ es: "Imágenes", en: "Images" })}
              </Coord>
              {/* Una lista de créditos, no prosa: sin justificar ni partir
                  palabras ("Ni-can Mopohua"). */}
              <p className="mt-3 text-left text-[13px] leading-relaxed text-inkMute [hyphens:none]">
                {t({
                  es: "Fotografías de Wikimedia Commons: Janothird (Jan Zatko), CC BY-SA 3.0 · ProtoplasmaKid, CC BY / CC BY-SA 4.0 · Ramiro Ortiz Girón, CC BY-SA 4.0 · Nican Mopohua, CC0 (Biblioteca Pública de Nueva York).",
                  en: "Photographs from Wikimedia Commons: Janothird (Jan Zatko), CC BY-SA 3.0 · ProtoplasmaKid, CC BY / CC BY-SA 4.0 · Ramiro Ortiz Girón, CC BY-SA 4.0 · Nican Mopohua, CC0 (New York Public Library).",
                })}
              </p>
            </div>
          </div>
        </div>

        <div className="gd-mega-fit mt-14 overflow-hidden border-t border-ink/20 pt-6">
          <p className="gd-lining-nums gd-mega uppercase text-inkSoft">
            {t(site.short)}
            <span className="text-accentRose">.</span>
          </p>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-4 border-t border-ink/20 py-6">
          <Coord className="uppercase">
            © {new Date().getFullYear()} {t(site.name)} · {site.domain}
          </Coord>
          <Coord className="uppercase">
            {t({ es: "Tepeyac · 1531 — Jubileo · 2031", en: "Tepeyac · 1531 — Jubilee · 2031" })}
          </Coord>
        </div>

        {/* Crédito del estudio, pegado al final de la página. En el móvil
            lleva colchón debajo: allí WhatsApp (abajo a la izquierda) y
            Lupita (abajo a la derecha) ocupan casi todo el ancho y lo
            taparían. En pantallas anchas quedan en las esquinas y el
            crédito, centrado, no choca con ellos. */}
        <div className="border-t border-ink/20 pb-24 pt-5 text-center text-[14px] text-inkMute sm:pb-6">
          Design by <span className="font-semibold text-inkSoft">Cohabia</span>
          {" · "}
          <a
            href="mailto:info@cohabia.com"
            className="gd-link-underline font-semibold text-inkSoft transition-colors hover:text-ink"
          >
            info@cohabia.com
          </a>
        </div>
      </Container>
    </footer>
  );
}
