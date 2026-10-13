import { useState } from "react";
import { Music2, X } from "lucide-react";
import { useLang } from "@/lib/lang";
import { tracks, youtubeEmbed, youtubeWatch } from "@/data/links";

/* The harmony discovered in the mantle. Never autoplays — the visitor
   chooses. A discreet pill opens a small player with a track switcher. */
export function BackgroundMusic() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const track = tracks[index];

  return (
    <div className="fixed bottom-5 left-5 z-40 print:hidden">
      {open ? (
        <div className="w-[min(22rem,calc(100vw-2.5rem))] border border-ink/20 bg-bone shadow-[0_24px_60px_-30px_hsl(var(--gd-ink)/0.6)]">
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
      ) : (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group flex items-center gap-2 border border-ink/20 bg-bone/95 px-3 py-2 shadow-[0_12px_30px_-18px_hsl(var(--gd-ink)/0.7)] backdrop-blur transition-colors hover:border-accentRose"
        >
          <Music2 className="h-4 w-4 text-accentRose" />
          <span className="gd-coord uppercase">
            {t({ es: "Escuchar la música del manto", en: "Hear the music of the mantle" })}
          </span>
        </button>
      )}
    </div>
  );
}
