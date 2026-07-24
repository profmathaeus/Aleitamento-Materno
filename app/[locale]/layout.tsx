import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, languages, isLocale, type Locale } from "@/lib/locales";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Aleitamento Materno — Guia para famílias e profissionais",
  description:
    "Recomendações essenciais, manejo de dificuldades comuns, direitos e legislação sobre aleitamento materno.",
};

export function generateStaticParams() {
  // Fase 1: só pt tem conteúdo pronto; os outros 7 idiomas entram na Fase 2.
  return locales.filter((locale) => languages[locale].enabled).map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;
  const { isRtl } = languages[locale];

  return (
    <div dir={isRtl ? "rtl" : "ltr"} className="min-h-screen bg-coral-glow">
      <SiteHeader locale={locale} />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
      <SiteFooter />
    </div>
  );
}
