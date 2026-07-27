export const locales = ["pt", "en", "es", "ja", "de", "ar", "it", "fr"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pt";

interface LanguageMeta {
  code: Locale;
  label: string;
  nativeLabel: string;
  isRtl: boolean;
}

export const languages: Record<Locale, LanguageMeta> = {
  pt: { code: "pt", label: "Português", nativeLabel: "Português", isRtl: false },
  en: { code: "en", label: "English", nativeLabel: "English", isRtl: false },
  es: { code: "es", label: "Spanish", nativeLabel: "Español", isRtl: false },
  ja: { code: "ja", label: "Japanese", nativeLabel: "日本語", isRtl: false },
  de: { code: "de", label: "German", nativeLabel: "Deutsch", isRtl: false },
  ar: { code: "ar", label: "Arabic", nativeLabel: "العربية", isRtl: true },
  it: { code: "it", label: "Italian", nativeLabel: "Italiano", isRtl: false },
  fr: { code: "fr", label: "French", nativeLabel: "Français", isRtl: false },
};

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
