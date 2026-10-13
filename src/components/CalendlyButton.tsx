import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { site } from "@/data/links";

/* Reservar una videollamada con Azucena.

   Botón redondo encima del de WhatsApp, en el color del manto. Abre
   Calendly en un panel dentro de la propia web, con un iframe: la página
   de reservas de Calendly admite incrustarse así y no hace falta cargar su
   script externo. Si el iframe no carga, el enlace del pie del panel la
   abre en Calendly.

   El enlace sale de VITE_CALENDLY_URL. Vacío, el botón no se pinta: igual
   que con WhatsApp, un enlace de relleno mandaría a la gente a la agenda de
   otra persona. */

export function CalendlyButton({ className = "flex h-14 w-14" }: { className?: string }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!site.calendly) return null;

  const label = t({
    es: "Reservar la videollamada con Azucena",
    en: "Book the video call with Azucena",
  });
  const separator = site.calendly.includes("?") ? "&" : "?";
  const embedUrl = `${site.calendly}${separator}embed_type=Inline&hide_gdpr_banner=1&embed_domain=${encodeURIComponent(
    window.location.host
  )}`;

  const panel = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#08121f]/60 p-3 backdrop-blur-sm sm:p-6 print:hidden"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="flex h-[min(88vh,760px)] w-full max-w-4xl flex-col border border-ink/25 bg-paper shadow-[0_30px_70px_-30px_hsl(var(--gd-ink)/0.65)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink/20 px-4 py-3">
          <p className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-inkSoft">
            {t({ es: "Reservar la videollamada con Azucena Cierco", en: "Book the video call with Azucena Cierco" })}
          </p>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t({ es: "Cerrar", en: "Close" })}
            className="flex h-10 w-10 items-center justify-center text-inkMute transition-colors hover:text-ink"
            autoFocus
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <iframe src={embedUrl} title={label} className="w-full flex-1 bg-white" />
        <div className="border-t border-ink/20 px-4 py-2.5 text-right">
          <a
            href={site.calendly}
            target="_blank"
            rel="noreferrer noopener"
            className="gd-link-underline text-[14px] font-semibold text-inkSoft hover:text-ink"
          >
            {t({ es: "Abrir en Calendly ↗", en: "Open in Calendly ↗" })}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={label}
        title={label}
        className={`${className} pointer-events-auto shrink-0 items-center justify-center rounded-full bg-guadalupe-mantle text-white shadow-[0_16px_36px_-18px_rgba(30,90,100,0.85)] transition-transform hover:scale-[1.06]`}
      >
        <CalendarDays className="h-6 w-6" aria-hidden />
      </button>
      {open ? createPortal(panel, document.body) : null}
    </>
  );
}
