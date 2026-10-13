import { useState } from "react";
import { createPortal } from "react-dom";
import { Music2, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { tracks, youtubeEmbed, youtubeWatch } from "@/data/links";

/* The harmony discovered in the mantle. Never autoplays — the visitor
   chooses. The trigger lives in the header, right under the brand: it used
   to float in the bottom-left corner and sat on top of the content. The
   player opens through a portal, because the header moves (it hides on
   scroll) and a transformed parent would carry a fixed panel with it. */
export function BackgroundMusic() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const track = tracks[index];

  const player = (
    <div className="fixed left-5 top-24 z-50 w-[min(22rem,calc(100vw-2.5rem))] border border-ink/20 bg-bone shadow-[0_24px_60px_-30px_hsl(var(--gd-ink)/0.6)] print:hidden">
      <div className="flex items-center justify-between border-b border-ink/15 px-3 py-2">
        <span className="gd-eyebrow">
          {t({ es: "Música del manto", en: "Music of the mantle" })}
        </span>
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label={t({ es: "Cerrar", en: "Close" })}
          className="text-inkMute hover:text-ink"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="aspect-video w-full">
        <iframe
          key={track.id}
          src={youtubeEmbed(track.id)}
          title={t(track.title)}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="h-full w-full"
        />
      </div>

      <div className="px-3 py-2">
        <p className="text-[13px] leading-snug text-inkSoft">{t(track.title)}</p>
        <p className="gd-coord mt-1 uppercase">{track.author}</p>

        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1">
          {tracks.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setIndex(i)}
              className={[
                "gd-coord uppercase transition-colors",
                i === index ? "text-accentRose" : "hover:text-ink",
              ].join(" ")}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
          <a
            href={youtubeWatch(track.id)}
            target="_blank"
            rel="noreferrer noopener"
            className="gd-coord ml-auto uppercase hover:text-ink"
          >
            {t({ es: "Ver en YouTube", en: "Watch on YouTube" })}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="inline-flex items-center gap-1.5 whitespace-nowrap font-display text-[12px] font-extrabold uppercase leading-none tracking-[0.08em] text-accentRoseInk transition-colors hover:text-ink sm:text-[13px]"
      >
        <Music2 className="h-3.5 w-3.5 shrink-0" aria-hidden />
        {t({ es: "Música del manto", en: "Music of the mantle" })}
      </button>

      {open ? createPortal(player, document.body) : null}
    </>
  );
}
