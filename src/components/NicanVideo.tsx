import { Headphones } from "lucide-react";
import { useLang } from "@/lib/lang";
import { links } from "@/data/links";
import { Coord } from "@/components/Chrome";

/* La narración completa del Nican Mopohua, en la voz de Azucena. El enlace
   se pone en data/links.ts (nicanMopohuaVideo): sin enlace no se pinta nada,
   para no dejar un reproductor vacío. Acepta YouTube, Google Drive o un
   archivo de vídeo (.mp4 / .webm). */

function toEmbed(url: string): { kind: "iframe" | "video"; src: string } {
  const youtube = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|live\/|shorts\/))([\w-]{11})/);
  if (youtube) {
    return { kind: "iframe", src: `https://www.youtube.com/embed/${youtube[1]}?rel=0&playsinline=1` };
  }
  const drive = url.match(/drive\.google\.com\/file\/d\/([\w-]+)/);
  if (drive) {
    return { kind: "iframe", src: `https://drive.google.com/file/d/${drive[1]}/preview` };
  }
  if (/\.(mp4|webm|mov)(\?|$)/i.test(url)) return { kind: "video", src: url };
  return { kind: "iframe", src: url };
}

export function NicanVideo() {
  const { t } = useLang();
  const url = links.nicanMopohuaVideo;
  if (!url) return null;
  const media = toEmbed(url);
  const title = t({
    es: "El Nican Mopohua completo, narrado por Azucena Cierco",
    en: "The complete Nican Mopohua, narrated by Azucena Cierco",
  });

  return (
    <div className="mt-12 border border-ink/20 bg-bone p-4 sm:p-6">
      <div className="flex items-center gap-3">
        <Headphones className="h-6 w-6 flex-none text-accentRose" aria-hidden />
        <h4 className="font-serif text-[clamp(22px,2.6vw,32px)] font-medium italic leading-tight text-inkSoft">
          {t({ es: "¿Quieres escuchar el Nican Mopohua completo?", en: "Do you want to listen to the complete Nican Mopohua?" })}
        </h4>
      </div>
      <div className="mt-5 aspect-video w-full bg-ink/20">
        {media.kind === "video" ? (
          <video src={media.src} controls preload="metadata" className="h-full w-full" title={title} />
        ) : (
          <iframe
            src={media.src}
            title={title}
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
            loading="lazy"
            className="h-full w-full"
          />
        )}
      </div>
      <Coord className="mt-3 block uppercase">{title}</Coord>
    </div>
  );
}
