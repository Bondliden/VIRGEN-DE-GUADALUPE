import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { CalendarDays, MessageCircle, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { site } from "@/data/links";

/* Reservar una videollamada o un podcast con Azucena.

   Botón redondo encima del de WhatsApp, en el color del manto. Siempre
   visible; lo que abre depende de si ya hay agenda:

   · Con VITE_CALENDLY_URL, su Calendly en un panel dentro de la propia web,
     con un iframe: la página de reservas de Calendly admite incrustarse así
     y no hace falta cargar su script externo. Si el iframe no carga, el
     enlace del pie del panel la abre en Calendly.
   · Sin él, un panel que pide la cita a mano: WhatsApp con el mensaje ya
     escrito y el correo a la vista. Nunca un enlace de relleno a la agenda
     de otra persona. */

const WHATSAPP_REQUEST = {
  es: "Hola, quiero reservar una videollamada o un podcast con Azucena Cierco.",
  en: "Hello, I would like to book a video call or a podcast with Azucena Cierco.",
};

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

  const label = t({
    es: "Reservar videollamada o podcast con Azucena",
    en: "Book a video call or podcast with Azucena",
  });
  const heading = t({
    es: "Reservar videollamada o podcast con Azucena Cierco",
    en: "Book a video call or podcast with Azucena Cierco",
  });

  const closeButton = (
    <button
      type="button"
      onClick={() => setOpen(false)}
      aria-label={t({ es: "Cerrar", en: "Close" })}
      className="flex h-10 w-10 flex-none items-center justify-center text-inkMute transition-colors hover:text-ink"
      autoFocus
    >
      <X className="h-5 w-5" />
    </button>
  );

  const calendlyPanel = site.calendly ? (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={heading}
      className="flex h-[min(88vh,760px)] w-full max-w-4xl flex-col border border-ink/25 bg-paper shadow-[0_30px_70px_-30px_hsl(var(--gd-ink)/0.65)]"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-center justify-between gap-4 border-b border-ink/20 px-4 py-3">
        <p className="font-display text-[15px] font-bold uppercase tracking-[0.08em] text-inkSoft">{heading}</p>
        {closeButton}
      </div>
      <iframe
        src={`${site.calendly}${site.calendly.includes("?") ? "&" : "?"}embed_type=Inline&hide_gdpr_banner=1&embed_domain=${encodeURIComponent(
          window.location.host
        )}`}
        title={heading}
        className="w-full flex-1 bg-white"
      />
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
  ) : null;

  const requestPanel = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={heading}
      className="w-full max-w-lg border border-ink/25 bg-paper shadow-[0_30px_70px_-30px_hsl(var(--gd-ink)/0.65)]"
      onClick={(event) => event.stopPropagation()}
    >
      <div className="flex items-start justify-between gap-4 border-b border-ink/20 px-5 py-4">
        <p className="font-display text-[16px] font-bold uppercase leading-snug tracking-[0.06em] text-inkSoft">
          {heading}
        </p>
        {closeButton}
      </div>
      <div className="px-5 py-5 text-left">
        <p className="text-left text-[16px] leading-relaxed text-inkSoft">
          {t({
            es: "Muy pronto podrás elegir día y hora aquí mismo. Mientras tanto, pídela por WhatsApp o por correo y te respondemos para acordarla.",
            en: "Soon you will be able to choose a day and time right here. Meanwhile, ask for it on WhatsApp or by email and we will reply to arrange it.",
          })}
        </p>
        {site.whatsapp ? (
          <a
            href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t(WHATSAPP_REQUEST))}`}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-5 inline-flex items-center gap-2 bg-[#1faa59] px-5 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-white transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            {t({ es: "Pedirla por WhatsApp", en: "Ask on WhatsApp" })}
          </a>
        ) : null}
        <p className="mt-4 text-[14px] text-inkMute">
          {t({ es: "O escribe a", en: "Or write to" })}{" "}
          <span className="select-all font-semibold text-inkSoft">{site.contactEmail}</span>
        </p>
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
      {open
        ? createPortal(
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-[#08121f]/60 p-3 backdrop-blur-sm sm:p-6 print:hidden"
              onClick={() => setOpen(false)}
            >
              {calendlyPanel ?? requestPanel}
            </div>,
            document.body
          )
        : null}
    </>
  );
}
