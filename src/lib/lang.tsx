import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "es" | "en";

/** Any bilingual string pair used across the site. */
export type Bi = { es: string; en: string };

type LangContextValue = {
  lang: Lang;
  isEs: boolean;
  setLang: (lang: Lang) => void;
  toggle: () => void;
  /** Resolve a bilingual value, or pick with a custom selector. */
  t: <T>(value: { es: T; en: T }) => T;
};

const LangContext = createContext<LangContextValue | null>(null);
const STORAGE_KEY = "guadalupe-lang";

function detectInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    /* storage can be blocked — fall through to browser detection */
  }
  const nav = window.navigator.language?.toLowerCase() ?? "es";
  return nav.startsWith("en") ? "en" : "es";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectInitialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggle = useCallback(
    () => setLangState((prev) => (prev === "es" ? "en" : "es")),
    []
  );
  const t = useCallback(
    <T,>(value: { es: T; en: T }) => (lang === "es" ? value.es : value.en),
    [lang]
  );

  const value = useMemo<LangContextValue>(
    () => ({ lang, isEs: lang === "es", setLang, toggle, t }),
    [lang, setLang, toggle, t]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
