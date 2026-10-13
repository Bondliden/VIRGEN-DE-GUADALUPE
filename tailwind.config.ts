import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ── Tilma de Guadalupe palette ──
        // Sampled from the image venerated in the Basilica of Guadalupe, Mexico City.
        guadalupe: {
          mantle: "hsl(190, 40%, 36%)",     // verde azulado del manto
          mantleDeep: "hsl(191, 52%, 11%)", // cielo nocturno de la tilma
          mantleMid: "hsl(191, 44%, 22%)",
          mantleSoft: "hsl(188, 30%, 88%)",
          salmon: "hsl(20, 55%, 75%)",      // salmón claro del vestido
          salmonDeep: "hsl(18, 48%, 58%)",
          salmonSoft: "hsl(24, 60%, 93%)",
          gold: "hsl(45, 68%, 47%)",        // dorado de los rayos y las estrellas
          goldSoft: "hsl(45, 70%, 78%)",
          rose: "hsl(351, 47%, 53%)",       // rosas de Castilla
          ivory: "hsl(38, 45%, 93%)",       // ayate / fibra de maguey
          sand: "hsl(35, 34%, 85%)",
          stone: "hsl(195, 10%, 45%)",
        },
        ink: "hsl(191, 46%, 9%)",

        // ── Atelier Zero structural layer (Open Design) ──
        // DESIGN.md authority. Colour slots keep the tilma values.
        paper: {
          DEFAULT: "hsl(40, 42%, 88%)", // #efe7d2 warm paper canvas
          warm: "hsl(41, 41%, 86%)",
          dark: "hsl(41, 34%, 79%)",
        },
        bone: "hsl(43, 58%, 92%)",
        // Ink ladder — pure black is forbidden in Atelier Zero
        inkMain: "hsl(40, 16%, 7%)", // #15140f
        inkSoft: "hsl(36, 13%, 15%)",
        inkMute: "hsl(40, 11%, 32%)",
        inkFaint: "hsl(42, 11%, 50%)",
        accentRose: "hsl(351, 47%, 53%)", // single accent slot
        // El mismo rosa, más hondo, para TEXTO pequeño sobre papel: el
        // accentRose se queda en 3,6:1 y no llega al AA; este da ~5,9:1.
        accentRoseInk: "hsl(351, 55%, 38%)",
        mustard: "hsl(45, 68%, 47%)", // jewelry only
        olive: "hsl(82, 22%, 37%)", // quiet third accent
      },
      fontFamily: {
        display: ["Cinzel", "Playfair Display", "Georgia", "serif"],
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],
        sans: ["DM Sans", "Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      letterSpacing: {
        sacred: "0.32em",
        meta: "0.16em",
        eyebrow: "0.22em",
        rail: "0.42em",
      },
      fontSize: {
        // Atelier Zero scale (px)
        micro: ["9.5px", { lineHeight: "1.4" }],
        coord: ["10px", { lineHeight: "1.4" }],
        meta: ["10.5px", { lineHeight: "1.4" }],
        eyebrow: ["11px", { lineHeight: "1.5" }],
        body: ["17px", { lineHeight: "1.55" }],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "0.4" },
          "50%": { transform: "scale(1.06)", opacity: "0.75" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both",
        shimmer: "shimmer 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 7s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
      maxWidth: {
        container: "1360px",
        prose: "68ch",
      },
    },
  },
  plugins: [],
} satisfies Config;
