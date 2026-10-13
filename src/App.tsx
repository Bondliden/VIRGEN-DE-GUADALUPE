import { LangProvider } from "@/lib/lang";
import { MetadataStrip, SideRails } from "@/components/Chrome";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Disclosure, Purpose } from "@/components/Purpose";
import { Pilgrimages } from "@/components/Pilgrimages";
import { Acontecimiento } from "@/components/Acontecimiento";
import { Voices } from "@/components/Voices";
import { Shop } from "@/components/Shop";
import { Closing, Footer } from "@/components/Closing";
import { BackgroundMusic } from "@/components/Audio";
import { ChatBox } from "@/components/ChatBox";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function App() {
  return (
    <LangProvider>
      {/* Atelier Zero §5 chrome: metadata strip above, side rails beside. */}
      <MetadataStrip />
      <Navbar />
      <SideRails />

      <main>
        <Hero />
        <Purpose />
        <Disclosure />
        <Pilgrimages />
        <Acontecimiento />
        <Voices />
        <Shop />
        <Closing />
      </main>

      <Footer />

      {/* Floating dock: the assistant sits above the direct WhatsApp button,
          so the panel grows upward without ever covering the CTA. */}
      <div className="pointer-events-none fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 print:hidden">
        <ChatBox />
        <WhatsAppButton />
      </div>

      <BackgroundMusic />
    </LangProvider>
  );
}
