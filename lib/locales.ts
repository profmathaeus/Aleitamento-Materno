export const locales = ["pt", "en", "es", "ja", "de", "ar", "it", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

interface LanguageMeta {
  code: Locale;
  label: string;
  nativeLabel: string;
  isRtl: boolean;
  // Fase 1: só o conteúdo em português está pronto. Os demais idiomas
  // entram na Fase 2 (pipeline de tradução automática + glossário técnico).
  enabled: boolean;
}

export const languages: Record<Locale, LanguageMeta> = {
  pt: { code: "pt", label: "Português", nativeLabel: "Português", isRtl: false, enabled: true },
  en: { code: "en", label: "English", nativeLabel: "English", isRtl: false, enabled: false },
  es: { code: "es", label: "Spanish", nativeLabel: "Español", isRtl: false, enabled: false },
  ja: { code: "ja", label: "Japanese", nativeLabel: "日本語", isRtl: false, enabled: false },
  de: { code: "de", label: "German", nativeLabel: "Deutsch", isRtl: false, enabled: false },
  ar: { code: "ar", label: "Arabic", nativeLabel: "العربية", isRtl: true, enabled: false },
  it: { code: "it", label: "Italian", nativeLabel: "Italiano", isRtl: false, enabled: false },
  fr: { code: "fr", label: "French", nativeLabel: "Français", isRtl: false, enabled: false },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
