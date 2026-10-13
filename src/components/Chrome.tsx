import type { ReactNode } from "react";
import { useLang } from "@/lib/lang";
import { site } from "@/data/links";

/* ─────────────────────────────────────────────
   Atelier Zero — mandatory shared chrome
   Authority: design-systems/atelier-zero/DESIGN.md
   §3 microcopy · §4 side rails · §5 metadata strip + section rule
   ───────────────────────────────────────────── */

/** Centred container: 1360px max, 64px desktop gutters (Atelier Zero §4). */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-container px-6 sm:px-11 ${className}`}>
      {children}
    </div>
  );
}

/**
 * §5 Mandatory top metadata strip — volume/issue, a "Filed under …" badge
 * and a live-status pulse carrying the domain + active locale.
 */
export function MetadataStrip() {
  const { t, lang } = useLang();
  return (
    <div className="gd-meta-strip relative z-30 bg-paper">
      <Container className="flex items-center justify-between gap-4 py-2">
        <span>
          {t({
            es: "Vol. I · Camino al Jubileo de 2031",
            en: "Vol. I · Road to the 2031 Jubilee",
          })}
        </span>
        <span className="hidden md:inline">
          {t({
            es: "Archivado en: Tepeyac, 1531 · Acontecimiento Guadalupano",
            en: "Filed under: Tepeyac, 1531 · The Guadalupan Event",
          })}
        </span>
        <span className="flex items-center gap-2">
          <span
            className="inline-block h-1.5 w-1.5 rounded-full bg-accentRose animate-pulse-soft"
            aria-hidden
          />
          <span className="hidden sm:inline">{site.domain}</span>
          <span className="text-accentRose">{lang.toUpperCase()}</span>
        </span>
      </Container>
    </div>
  );
}

/** §4 Mandatory fixed side rails — 36px, visible only at ≥1280px. */
export function SideRails() {
  const { t } = useLang();
  return (
    <>
      <div className="gd-rail gd-rail-left" aria-hidden>
        <span>{t({ es: "Tepeyac · 1531", en: "Tepeyac · 1531" })}</span>
      </div>
      <div className="gd-rail gd-rail-right" aria-hidden>
        <span>{t({ es: "Jubileo · 2031", en: "Jubilee · 2031" })}</span>
      </div>
    </>
  );
}

/**
 * §5 Mandatory section rule:
 *   I.   LABEL   ·············   004 / 008
 * Roman numerals must be sequential — never skipped.
 */
export function SectionRule({
  roman,
  label,
  page,
  className = "",
}: {
  roman: string;
  label: string;
  page?: string;
  className?: string;
}) {
  return (
    <div className={`gd-section-rule ${className}`}>
      <span className="gd-roman">{roman}.</span>
      <span className="gd-label">{label}</span>
      <span className="gd-leader" aria-hidden />
      {page ? <span className="gd-pageofpages">{page}</span> : null}
    </div>
  );
}

/** §3 Eyebrow — 11px, 0.22em tracking, accent, prefixed by an 18px hairline. */
export function Eyebrow({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`gd-eyebrow ${className}`}>{children}</span>;
}

/** §3 Monospace annotation — coordinates, plate numbers, SHAs. */
export function Coord({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <span className={`gd-coord ${className}`}>{children}</span>;
}

/** §3 Terminating accent dot — one per display headline, never more. */
export function Dot() {
  return (
    <span className="gd-dot" aria-hidden>
      .
    </span>
  );
}
