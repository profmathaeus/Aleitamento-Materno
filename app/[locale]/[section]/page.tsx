import Link from "next/link";
import { notFound } from "next/navigation";
import { getSection, getSectionList } from "@/lib/content/get-section";
import { isLocale, type Locale } from "@/lib/locales";
import { uiStrings } from "@/lib/content/ui-strings";
import { Icon } from "@/components/icon";
import { BlockRenderer } from "@/components/block-renderer";
import { FaqAccordion } from "@/components/faq-accordion";

export const revalidate = 60;

export default async function SectionPage({
  params,
}: {
  params: { locale: string; section: string };
}) {
  if (!isLocale(params.locale)) notFound();
  const locale = params.locale as Locale;

  const [section, allSections] = await Promise.all([
    getSection(params.section, locale),
    getSectionList(locale),
  ]);
  if (!section) notFound();

  const t = uiStrings[locale];
  const index = allSections.findIndex((s) => s.slug === section.slug);
  const prev = allSections[index - 1];
  const next = allSections[index + 1];

  return (
    <article>
      <Link
        href={`/${locale}`}
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-coral-800 hover:underline"
      >
        <Icon name="ArrowLeft" size={16} />
        {t.backToAll}
      </Link>

      {section.usedFallback && (
        <p className="mb-4 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-800">
          {t.fallbackNotice}
        </p>
      )}

      <header className="mb-6 flex items-start gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-coral-glow text-white">
          <Icon name={section.icon} size={22} />
        </span>
        <div>
          <h1 className="text-balance text-2xl font-bold text-coral-800 sm:text-3xl">
            {section.title}
          </h1>
          {section.subtitle && <p className="mt-1 text-ink/70">{section.subtitle}</p>}
        </div>
      </header>

      <div className="rounded-2xl border border-coral-800/10 bg-white/90 p-5 shadow-sm sm:p-8">
        {section.contentKind === "faq" && section.faqItems && section.faqItems.length > 0 ? (
          <FaqAccordion items={section.faqItems} />
        ) : (
          <BlockRenderer blocks={section.blocks} />
        )}
      </div>

      <nav className="mt-8 flex items-center justify-between gap-4 text-sm">
        {prev ? (
          <Link
            href={`/${locale}/${prev.slug}`}
            className="flex items-center gap-1.5 font-medium text-coral-800 hover:underline"
          >
            <Icon name="ArrowLeft" size={16} />
            {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link
            href={`/${locale}/${next.slug}`}
            className="flex items-center gap-1.5 font-medium text-coral-800 hover:underline"
          >
            {next.title}
            <Icon name="ArrowRight" size={16} />
          </Link>
        )}
      </nav>
    </article>
  );
}
