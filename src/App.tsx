import { useEffect } from "react";
import { LangProvider, useLang } from "@/lib/lang";
import { MetadataStrip, SideRails } from "@/components/Chrome";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Disclosure, Purpose } from "@/components/Purpose";
import { Pilgrimages } from "@/components/Pilgrimages";
import { Acontecimiento } from "@/components/Acontecimiento";
import { Voices } from "@/components/Voices";
import { Shop } from "@/components/Shop";
import { Closing, Footer } from "@/components/Closing";
import { ChatBox } from "@/components/ChatBox";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { anchorFromHash, routes, useRoute } from "@/lib/useRoute";

export default function App() {
  return (
    <LangProvider>
      <Pages />
    </LangProvider>
  );
}

/* Una página a la vez, y la barra de direcciones decide cuál: recargar,
   compartir un enlace y los botones atrás y adelante siguen funcionando. */
function Pages() {
  const { t, lang } = useLang();
  const route = useRoute();

  /* Cada página lleva su propio título: un enlace al Acontecimiento no debe
     abrirse con el título de la portada. */
  useEffect(() => {
    const page = routes.find((item) => item.id === route);
    if (page) document.title = t(page.title);
  }, [route, lang, t]);

  /* Página nueva, arriba del todo. Una dirección interna (#peregrinar) salta
     a su bloque, y por eso el anclaje se busca ya pintado: en un enlace
     profundo el salto es instantáneo, no una animación larga por la página. */
  useEffect(() => {
    const anchor = anchorFromHash(window.location.hash);
    const target = anchor === route ? null : document.getElementById(anchor);
    if (target) target.scrollIntoView({ block: "start", behavior: "instant" });
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [route]);

  return (
    <>
      {/* Atelier Zero §5 chrome: metadata strip above, side rails beside. */}
      <MetadataStrip />
      <Navbar />
      <SideRails />

      <main>
        {route === "portada" ? (
          <>
            <Hero />
            <Purpose />
            <Disclosure />
          </>
        ) : null}
        {route === "peregrinaciones" ? <Pilgrimages /> : null}
        {route === "acontecimiento" ? <Acontecimiento /> : null}
        {route === "voces" ? <Voices /> : null}
        {route === "tienda" ? <Shop /> : null}
        {route === "jubileo" ? <Closing /> : null}
      </main>

      <Footer />

      {/* Floating dock, one per corner: WhatsApp as a round button bottom
          left, the assistant bottom right. Small enough not to cover the
          content; the music moved into the header, under the brand. */}
      <div className="pointer-events-none fixed bottom-5 left-5 z-40 print:hidden">
        <WhatsAppButton className="flex h-14 w-14" />
      </div>
      <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
        <ChatBox />
      </div>
    </>
  );
}
