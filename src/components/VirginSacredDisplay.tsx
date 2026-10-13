import { useState } from "react";
import { Sparkles, Flame, Shield, ZoomIn, ZoomOut } from "lucide-react";
import { useLang } from "@/lib/lang";
import { Coord, Dot } from "@/components/Chrome";

export type VirginDisplayVariant =
  | "hero-plate"        // Portada: relicario dorado interactivo
  | "sanctuary-altar"   // Peregrinaciones: altar mayor como meta del peregrino
  | "miracle-relic"     // Acontecimiento: el milagro del ayate ante Zumárraga
  | "devotional-chapel" // Voces: capilla de oración con veladoras votivas
  | "gallery-relic"     // Tienda: sello y placa de autenticidad sacra
  | "jubilee-climax";   // Jubileo: gran coronación de los 500 años

interface VirginSacredDisplayProps {
  variant: VirginDisplayVariant;
  className?: string;
}

export function VirginSacredDisplay({ variant, className = "" }: VirginSacredDisplayProps) {
  const { t } = useLang();
  const [zoomed, setZoomed] = useState(false);
  const [candles, setCandles] = useState(1531);
  const [candleLit, setCandleLit] = useState(false);

  const lightCandle = () => {
    if (!candleLit) {
      setCandles((c) => c + 1);
      setCandleLit(true);
    }
  };

  /* ══════════════════════════════════════════════════════════════════
     1. PEREGRINACIONES: ALTAR MAYOR / META DEL PEREGRINO
     ══════════════════════════════════════════════════════════════════ */
  if (variant === "sanctuary-altar") {
    return (
      <section className={`my-16 overflow-hidden border border-guadalupe-gold/30 bg-[#0c1a2c] p-6 text-bone shadow-[0_12px_40px_rgba(0,0,0,0.5)] sm:p-10 lg:p-12 ${className}`}>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Columna Izquierda: El Cuadro Sagrado en Altar */}
          <div className="relative mx-auto w-full max-w-md">
            {/* Resplandor áureo celestial */}
            <div
              className="absolute -inset-4 rounded-full opacity-40 blur-2xl"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.5) 0%, rgba(14, 42, 71, 0) 70%)",
              }}
              aria-hidden
            />
            {/* Marco de Retablo con moldura dorada */}
            <div className="relative z-10 border-4 border-guadalupe-gold bg-[#08121f] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.8)]">
              <div className="relative overflow-hidden border border-guadalupe-gold/40">
                <img
                  src="/images/guadalupe/tilma-hero.jpg"
                  alt={t({
                    es: "Sagrada Imagen de Santa María de Guadalupe en el Altar Mayor de la Basílica",
                    en: "Sacred Image of Saint Mary of Guadalupe on the High Altar of the Basilica",
                  })}
                  width={1536}
                  height={2048}
                  loading="lazy"
                  className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 text-center">
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-guadalupe-goldSoft">
                    ✦ Altar Mayor del Tepeyac ✦
                  </span>
                </div>
              </div>
            </div>
            <figcaption className="mt-4 text-center">
              <Coord className="text-guadalupe-goldSoft/80 uppercase">
                {t({
                  es: "Fig. 02 · La Mirada Maternal que acoge a más de 12 millones de peregrinos",
                  en: "Fig. 02 · The Maternal Gaze that welcomes over 12 million pilgrims",
                })}
              </Coord>
            </figcaption>
          </div>

          {/* Columna Derecha: El Sentido del Destino */}
          <div className="flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft">
              <Sparkles className="h-4 w-4 text-guadalupe-gold" />
              <span>{t({ es: "La Meta de Todo Peregrino", en: "The Goal of Every Pilgrim" })}</span>
            </div>

            <h3 className="mt-4 font-display text-[clamp(28px,3.8vw,44px)] font-bold uppercase leading-tight text-white">
              {t({
                es: "Llegar a sus plantas en la Basílica",
                en: "Reaching Her Feet at the Basilica",
              })}
              <Dot className="text-guadalupe-gold" />
            </h3>

            <blockquote className="mt-6 border-l-2 border-guadalupe-gold/60 pl-5 text-bone/95">
              <p className="font-serif text-xl italic leading-relaxed sm:text-2xl">
                {t({
                  es: "«No se turbe tu corazón, ni te inquiete cosa alguna: ¿Acaso no estoy yo aquí, que tengo el honor de ser tu madre?»",
                  en: "«Let not your heart be disturbed, nor anything grieve you: Am I not here, who have the honor of being your mother?»",
                })}
              </p>
              <footer className="mt-2 font-mono text-xs uppercase tracking-wider text-guadalupe-goldSoft">
                — Nican Mopohua, v. 119
              </footer>
            </blockquote>

            <p className="mt-6 text-[16px] leading-relaxed text-bone/80">
              {t({
                es: "Cada paso en la calzada, cada noche bajo las estrellas y cada canto encuentran su culminación al cruzar la puerta de la Nueva Basílica. Allí, suspendida sobre la banda móvil, la Tilma original de 1531 permanece viva, sin retoque ni deterioro, bendiciendo a quien la mira con fe.",
                en: "Every step along the road, every night under the stars and every hymn finds its culmination upon crossing the threshold of the New Basilica. There, suspended above the walkway, the original 1531 Tilma remains alive, without retouching or decay, blessing all who gaze upon Her with faith.",
              })}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#capitanes"
                className="inline-flex items-center gap-2 border border-guadalupe-gold bg-guadalupe-gold/20 px-5 py-2.5 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft transition-colors hover:bg-guadalupe-gold hover:text-[#08121f]"
              >
                <span>{t({ es: "Contactar a un Capitán de Ruta", en: "Contact a Route Captain" })}</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ══════════════════════════════════════════════════════════════════
     2. ACONTECIMIENTO: EL MILAGRO DEL AYATE ANTE ZUMÁRRAGA
     ══════════════════════════════════════════════════════════════════ */
  if (variant === "miracle-relic") {
    return (
      <section className={`my-16 border-y-2 border-guadalupe-gold/30 bg-[#091524] py-14 text-bone ${className}`}>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft">
              <Sparkles className="h-4 w-4 text-guadalupe-gold" />
              <span>{t({ es: "12 de Diciembre de 1531 · El Milagro Impreso", en: "December 12, 1531 · The Miraculous Imprint" })}</span>
            </span>
            <h3 className="mt-3 font-display text-[clamp(28px,4.5vw,50px)] font-bold uppercase tracking-tight text-white">
              {t({ es: "La Imagen que no Pintó Mano Humana", en: "The Image Painted by No Human Hand" })}
              <Dot className="text-guadalupe-gold" />
            </h3>
            <p className="mx-auto mt-4 max-w-2xl font-serif text-xl italic text-bone/90">
              {t({
                es: "«Y al caer al suelo las flores, de repente se dibujó en la tilma la preciosa imagen de la siempre Virgen Santa María, Madre de Dios...»",
                en: "«And as the flowers fell to the ground, suddenly there appeared drawn upon the tilma the precious image of the ever Virgin Holy Mary, Mother of God...»",
              })}
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            {/* Cuadro a gran escala con botón de zoom */}
            <div className="relative mx-auto max-w-md">
              <div className="relative border-4 border-guadalupe-gold/70 bg-black/60 p-2 shadow-[0_16px_50px_rgba(0,0,0,0.9)]">
                <img
                  src="/images/guadalupe/tilma-hero.jpg"
                  alt={t({
                    es: "El Sagrado Lienzo de la Virgen de Guadalupe en su totalidad",
                    en: "The Sacred Canvas of the Virgin of Guadalupe in its entirety",
                  })}
                  width={1536}
                  height={2048}
                  className={`h-auto w-full object-cover transition-all duration-500 ${zoomed ? "scale-125 cursor-zoom-out" : "cursor-zoom-in"}`}
                  onClick={() => setZoomed(!zoomed)}
                />
                <button
                  type="button"
                  onClick={() => setZoomed(!zoomed)}
                  className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded bg-black/80 px-3 py-1 font-mono text-[10px] uppercase text-guadalupe-goldSoft backdrop-blur-sm hover:text-white"
                >
                  {zoomed ? <ZoomOut className="h-3.5 w-3.5" /> : <ZoomIn className="h-3.5 w-3.5" />}
                  <span>{zoomed ? "Reducir" : "Ampliar"}</span>
                </button>
              </div>
              <p className="mt-3 text-center font-mono text-[10.5px] uppercase tracking-wider text-guadalupe-goldSoft/70">
                Fig. 03 · Ayate original · 1.70 m × 1.05 m · Fibra de Agave Popotule
              </p>
            </div>

            {/* Los 4 Enigmas Sagrados Científicos */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-guadalupe-gold">01. LAS CONSTELACIONES</span>
                <h4 className="mt-2 font-display text-base font-semibold text-white">46 Estrellas Exactas</h4>
                <p className="mt-2 text-xs leading-relaxed text-bone/80">
                  {t({
                    es: "Las estrellas del manto corresponden con asombrosa precisión matemática al cielo del solsticio de invierno del 12 de diciembre de 1531, vistas desde el cosmos.",
                    en: "The stars on the mantle correspond with mathematical precision to the winter solstice sky of Dec 12, 1531, viewed from the cosmos.",
                  })}
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-guadalupe-gold">02. PIGMENTO INCORPÓREO</span>
                <h4 className="mt-2 font-display text-base font-semibold text-white">Sin Pincelada ni Imprimación</h4>
                <p className="mt-2 text-xs leading-relaxed text-bone/80">
                  {t({
                    es: "Científicos de la NASA y Premios Nobel confirmaron que la fibra carece de imprimación o barniz previo, y los colores flotan a 3 décimas de milímetro sin penetrar los hilos.",
                    en: "Nobel laureates and NASA researchers confirmed the fiber has no sizing or primer; colors float 0.3mm above the weave.",
                  })}
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-guadalupe-gold">03. TEMPERATURA VIVA</span>
                <h4 className="mt-2 font-display text-base font-semibold text-white">Constante 36.5 °C</h4>
                <p className="mt-2 text-xs leading-relaxed text-bone/80">
                  {t({
                    es: "El ayate mantiene de manera inexplicable una temperatura biológica constante idéntica a la de un cuerpo humano vivo, sin importar el frío o calor del templo.",
                    en: "The cloth inexplicably maintains a constant biological temperature of 36.5°C, matching a living human body.",
                  })}
                </p>
              </div>

              <div className="border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <span className="font-mono text-xs font-bold text-guadalupe-gold">04. LOS OJOS VIVOS</span>
                <h4 className="mt-2 font-display text-base font-semibold text-white">Reflejos en la Córnea</h4>
                <p className="mt-2 text-xs leading-relaxed text-bone/80">
                  {t({
                    es: "En las pupilas de la Virgen, microscopios computarizados descubrieron 13 figuras humanas reflejadas: Juan Diego, Zumárraga y la comitiva del milagro.",
                    en: "In the Virgin's corneas, digital magnification discovered 13 human figures mirrored, including Juan Diego and Zumárraga.",
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ══════════════════════════════════════════════════════════════════
     3. VOCES: CAPILLA DE ORACIÓN Y VELADORAS VOTIVAS
     ══════════════════════════════════════════════════════════════════ */
  if (variant === "devotional-chapel") {
    return (
      <section className={`my-16 border border-guadalupe-gold/30 bg-[#071322] p-6 text-bone sm:p-10 ${className}`}>
        <div className="grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr]">
          {/* Cuadro Sagrado con Altar de Velas */}
          <div className="relative mx-auto w-full max-w-sm text-center">
            <div className="relative border-4 border-guadalupe-gold bg-black/80 p-2 shadow-[0_12px_40px_rgba(0,0,0,0.8)]">
              <img
                src="/images/guadalupe/tilma-detail.jpg"
                alt={t({
                  es: "Detalle del rostro compasivo de la Virgen de Guadalupe",
                  en: "Detail of the compassionate face of Our Lady of Guadalupe",
                })}
                width={640}
                height={773}
                className="h-auto w-full object-cover"
              />
              <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/60 pointer-events-none" />
            </div>

            {/* Fila de Veladoras Votivas debajo del Cuadro */}
            <div className="mt-4 flex items-center justify-center gap-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative">
                    <span className="inline-block h-3.5 w-2 rounded-full bg-amber-400 blur-[1px] animate-pulse" />
                    <span className="absolute -top-1 left-0.5 h-2 w-1 rounded-full bg-white blur-[0.5px]" />
                  </div>
                  <div className="h-5 w-3.5 rounded-t-sm bg-gradient-to-b from-amber-100 to-amber-200 border border-amber-300 shadow-sm" />
                </div>
              ))}
            </div>

            <p className="mt-3 font-mono text-[10.5px] uppercase tracking-wider text-guadalupe-goldSoft">
              Fig. 04 · Rostro Venerado en Oración Continua
            </p>
          </div>

          {/* Acción Devocional: Ofrenda de Plegaria y Veladora */}
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft">
              <Flame className="h-4 w-4 text-amber-400" />
              <span>{t({ es: "Oratorio Guadalupano", en: "Guadalupan Oratory" })}</span>
            </div>

            <h3 className="mt-3 font-display text-[clamp(26px,3.6vw,40px)] font-bold uppercase leading-tight text-white">
              {t({
                es: "Enciende una Veladora ante su Mirada",
                en: "Light a Candle Before Her Gaze",
              })}
              <Dot className="text-guadalupe-gold" />
            </h3>

            <p className="mt-4 font-serif text-lg leading-relaxed text-bone/90 sm:text-xl">
              {t({
                es: "Cientos de miles de intenciones, oraciones y gracias se elevan a diario desde todos los rincones del mundo. Deposita tu súplica o gratitud en esta capilla virtual.",
                en: "Hundreds of thousands of intentions, prayers, and thanksgivings rise daily from every corner of the world. Place your petition or gratitude in this digital shrine.",
              })}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={lightCandle}
                disabled={candleLit}
                className={`inline-flex items-center gap-3 border px-6 py-3.5 font-sans text-xs font-bold uppercase tracking-[0.18em] transition-all ${
                  candleLit
                    ? "border-amber-400/50 bg-amber-400/20 text-amber-300"
                    : "border-guadalupe-gold bg-guadalupe-gold text-[#071322] hover:bg-guadalupe-goldSoft shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
                }`}
              >
                <Flame className={`h-4 w-4 ${candleLit ? "text-amber-300" : "text-[#071322]"}`} />
                <span>
                  {candleLit
                    ? t({ es: "Veladora Encendida con Fe", en: "Candle Lit in Faith" })
                    : t({ es: "Encender mi Veladora", en: "Light My Candle" })}
                </span>
              </button>

              <div className="font-mono text-xs text-guadalupe-goldSoft">
                <span className="text-base font-bold text-white">{candles.toLocaleString()}</span>{" "}
                {t({ es: "veladoras encendidas", en: "candles offered" })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  /* ══════════════════════════════════════════════════════════════════
     4. TIENDA: PLACA Y CERTIFICADO DE AUTENTICIDAD SACRA
     ══════════════════════════════════════════════════════════════════ */
  if (variant === "gallery-relic") {
    return (
      <aside className={`my-12 border-2 border-guadalupe-gold/40 bg-gradient-to-r from-[#0c1c2e] via-[#091524] to-[#0c1c2e] p-6 text-bone shadow-lg sm:p-8 ${className}`}>
        <div className="grid items-center gap-8 md:grid-cols-[0.4fr_0.6fr]">
          <div className="relative mx-auto w-full max-w-[200px]">
            <div className="border-2 border-guadalupe-gold bg-black p-2 shadow-md">
              <img
                src="/images/guadalupe/tilma-plate.jpg"
                alt={t({
                  es: "La Tilma Sagrada Original: modelo para toda reproducción fiel",
                  en: "The Original Sacred Tilma: template for every faithful reproduction",
                })}
                width={640}
                height={773}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-center font-mono text-[10px] uppercase text-guadalupe-goldSoft">
              Fig. 05 · Archivo del Tepeyac
            </figcaption>
          </div>

          <div>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft">
              <Shield className="h-4 w-4 text-guadalupe-gold" />
              <span>{t({ es: "Fidelidad Litúrgica e Histórica", en: "Liturgical & Historical Fidelity" })}</span>
            </div>

            <h3 className="mt-2 font-display text-xl font-bold uppercase text-white sm:text-2xl">
              {t({
                es: "Inspirado en la Sagrada Tilma de 1531",
                en: "Inspired by the Sacred 1531 Tilma",
              })}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-bone/80">
              {t({
                es: "Cada libro, medalla, estampa y reproducción artística disponible en este memorial se confecciona con estricto apego a las proporciones, cromatismos y simbolismos del ayate original resguardado en la Basílica de Guadalupe.",
                en: "Every book, medal, holy card, and artistic reproduction in this memorial is produced with strict fidelity to the proportions, chromatic fidelity, and symbolism of the original ayate kept in the Basilica.",
              })}
            </p>

            <div className="mt-4 flex items-center gap-4 text-xs font-mono text-guadalupe-goldSoft/90">
              <span>✦ Impresión de Arte Giclée</span>
              <span>✦ Metal Noble</span>
              <span>✦ Tepeyac 500 Años</span>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  /* ══════════════════════════════════════════════════════════════════
     5. JUBILEO: GRAN CORONACIÓN FINAL HACIA EL 2031
     ══════════════════════════════════════════════════════════════════ */
  if (variant === "jubilee-climax") {
    return (
      <section className={`my-20 border-t-2 border-b-2 border-guadalupe-gold bg-[#06101d] py-16 text-bone shadow-2xl ${className}`}>
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-guadalupe-gold">
            <Sparkles className="h-4 w-4" />
            <span>1531 · EL QUINTO CENTENARIO · 2031</span>
            <Sparkles className="h-4 w-4" />
          </div>

          <h3 className="mt-4 font-display text-[clamp(32px,5.5vw,64px)] font-extrabold uppercase leading-[0.95] text-white">
            {t({
              es: "Quinientos Años de Protección Maternal",
              en: "Five Hundred Years of Maternal Protection",
            })}
            <Dot className="text-guadalupe-gold" />
          </h3>

          <p className="mx-auto mt-4 max-w-2xl font-serif text-xl italic text-guadalupe-goldSoft sm:text-2xl">
            {t({
              es: "«¿Acaso no estoy yo aquí, que tengo el honor y la dicha de ser tu madre?»",
              en: "«Am I not here, who have the honor and joy of being your mother?»",
            })}
          </p>

          <div className="relative mx-auto mt-10 max-w-md">
            {/* Halo radiante expansivo */}
            <div
              className="absolute -inset-8 rounded-full opacity-60 blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(212, 175, 55, 0.45) 0%, rgba(14, 42, 71, 0.1) 70%)",
              }}
              aria-hidden
            />

            <div className="relative z-10 border-4 border-guadalupe-gold bg-[#08121f] p-4 shadow-[0_20px_60px_rgba(0,0,0,0.9)]">
              <img
                src="/images/guadalupe/tilma-hero.jpg"
                alt={t({
                  es: "La Reina de México y Emperatriz de América: 500 Años en el Tepeyac",
                  en: "Queen of Mexico and Empress of the Americas: 500 Years at Tepeyac",
                })}
                width={1536}
                height={2048}
                className="h-auto w-full object-cover"
              />
            </div>
            <figcaption className="mt-4 font-mono text-[11px] uppercase tracking-widest text-guadalupe-goldSoft">
              Fig. 06 · Santa María de Guadalupe · Reina de México y Emperatriz de las Américas
            </figcaption>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="#inicio"
              className="border border-guadalupe-gold bg-guadalupe-gold px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#06101d] transition-transform hover:scale-105 shadow-[0_6px_24px_rgba(212,175,55,0.4)]"
            >
              {t({ es: "Volver a la Portada", en: "Return to Cover" })}
            </a>
            <a
              href="#peregrinaciones"
              className="border border-white/30 bg-white/10 px-8 py-4 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white hover:bg-white/20"
            >
              {t({ es: "Peregrinar al Tepeyac", en: "Pilgrimage to Tepeyac" })}
            </a>
          </div>
        </div>
      </section>
    );
  }

  /* Fallback: Hero Plate estándar */
  return null;
}
