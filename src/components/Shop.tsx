import { useState } from "react";
import { Heart, Mail } from "lucide-react";
import { useLang } from "@/lib/lang";
import { shopCategories, shopSection } from "@/data/shop";
import { site } from "@/data/links";
import { Container, Coord, Dot, Eyebrow, SectionRule } from "@/components/Chrome";
import { VirginPlate } from "@/components/VirginPlate";

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
    <section id="tienda" className="py-16 sm:py-24" data-od-id="tienda">
      <Container>
        <SectionRule roman="IV" label={t(shopSection.eyebrow)} page="005 / 005" />

        <div className="mt-8 grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-end">
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

        <VirginPlate
          fig="05"
          caption={{
            es: "La imagen que da nombre a este santuario digital.",
            en: "The image this digital shrine takes its name from.",
          }}
        />

        {/* ── Categories ── */}
        <div className="mt-12 grid gap-px bg-ink/20 lg:grid-cols-3">
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
            <div className="mt-5 flex flex-wrap gap-3">
              {site.donateUrl ? (
                <a
                  href={site.donateUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="border border-ink/30 px-5 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
                >
                  {t(shopSection.donateCta)}
                </a>
              ) : null}
              <a
                href={`mailto:${site.contactEmail}`}
                className="border border-ink/30 px-5 py-2.5 text-eyebrow font-semibold uppercase tracking-eyebrow text-inkSoft transition-colors hover:border-ink hover:bg-ink/5"
              >
                {t(shopSection.writeCta)}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
