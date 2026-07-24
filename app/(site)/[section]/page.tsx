import Link from "next/link";
import { notFound } from "next/navigation";
import { getSectionBySlug, sections } from "@/lib/content/sections";
import { Icon } from "@/components/icon";
import { BlockRenderer } from "@/components/block-renderer";
import { FaqAccordion } from "@/components/faq-accordion";

export function generateStaticParams() {
  return sections.map((section) => ({ section: section.slug }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const section = getSectionBySlug(params.section);
  if (!section) notFound();

  const index = sections.findIndex((s) => s.slug === section.slug);
  const prev = sections[index - 1];
  const next = sections[index + 1];

  return (
    <article>
      <Link
        href="/"
        className="mb-6 inline-flex items-center gap-1.5 text-sm font-medium text-coral-800 hover:underline"
      >
        <Icon name="ArrowLeft" size={16} />
        Todas as seções
      </Link>

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
        {section.contentKind === "faq" && section.faqItems ? (
          <FaqAccordion items={section.faqItems} />
        ) : (
          <BlockRenderer blocks={section.blocks} />
        )}
      </div>

      <nav className="mt-8 flex items-center justify-between gap-4 text-sm">
        {prev ? (
          <Link
            href={`/${prev.slug}`}
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
            href={`/${next.slug}`}
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
