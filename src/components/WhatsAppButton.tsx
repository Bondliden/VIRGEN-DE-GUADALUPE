import { useLang } from "@/lib/lang";
import { site } from "@/data/links";

/* Direct WhatsApp button.
   The number comes from VITE_WHATSAPP_NUMBER (international format, digits
   only — e.g. 525512345678). When it is empty the button renders nothing,
   which is deliberate: a placeholder number would send pilgrims to a
   stranger's phone. */

const DEFAULT_MESSAGE =
  "Hola, quiero informacion sobre las peregrinaciones a la Basilica de Guadalupe.";

function WhatsAppGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden focusable="false">
      <path
        fill="currentColor"
        d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.79-1.67-2.09-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47 0 1.46 1.06 2.87 1.21 3.07.15.2 2.09 3.2 5.07 4.49.71.3 1.26.48 1.69.62.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.42.25-.7.25-1.29.18-1.42-.07-.12-.27-.2-.57-.35ZM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4a9.34 9.34 0 0 1 6.65 2.76 9.34 9.34 0 0 1 2.75 6.65c0 5.19-4.22 9.41-9.4 9.41Zm8-17.41A11.29 11.29 0 0 0 12.05.75C5.82.75.76 5.81.76 12.04c0 1.99.52 3.93 1.51 5.64L.66 23.25l5.71-1.5a11.27 11.27 0 0 0 5.68 1.45h.01c6.22 0 11.29-5.06 11.29-11.29 0-3.02-1.17-5.85-3.3-7.98Z"
      />
    </svg>
  );
}

export function WhatsAppButton() {
  const { t } = useLang();

  if (!site.whatsapp) return null;

  const message = import.meta.env.VITE_WHATSAPP_MESSAGE || DEFAULT_MESSAGE;
  const href = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="pointer-events-auto flex items-center gap-2 bg-[#1faa59] px-4 py-3 text-eyebrow font-semibold uppercase tracking-eyebrow text-white shadow-[0_16px_36px_-18px_rgba(31,170,89,0.85)] transition-transform hover:scale-[1.03]"
      aria-label={t({ es: "Escribir por WhatsApp", en: "Message us on WhatsApp" })}
    >
      <WhatsAppGlyph className="h-4 w-4" />
      <span>{t({ es: "Hablar por WhatsApp", en: "Chat on WhatsApp" })}</span>
    </a>
  );
}
