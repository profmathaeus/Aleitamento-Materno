import { createClient } from "@/lib/supabase/server";
import type { Block, FaqItem } from "./types";
import type { Locale } from "@/lib/locales";

export interface PublicSection {
  slug: string;
  icon: string;
  contentKind: string;
  title: string;
  subtitle?: string;
  blocks: Block[];
  faqItems?: FaqItem[];
  usedFallback: boolean;
}

interface RawTranslationRow {
  language_code: string;
  title: string;
  subtitle: string | null;
  body: { blocks?: Block[]; faqItems?: FaqItem[] } | null;
  status: string;
}

function pickTranslation(rows: RawTranslationRow[], locale: Locale) {
  const requested = rows.find((r) => r.language_code === locale && r.status === "published");
  if (requested) return { row: requested, usedFallback: false };
  const fallback = rows.find((r) => r.language_code === "pt" && r.status === "published");
  return fallback ? { row: fallback, usedFallback: locale !== "pt" } : null;
}

export async function getSectionList(locale: Locale): Promise<PublicSection[]> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("sections")
    .select(
      "slug, icon, content_kind, order_index, section_translations(language_code, title, subtitle, body, status)"
    )
    .order("order_index");

  if (error || !data) return [];

  return data
    .map((section): PublicSection | null => {
      const picked = pickTranslation(section.section_translations ?? [], locale);
      if (!picked) return null;
      return {
        slug: section.slug,
        icon: section.icon ?? "FileText",
        contentKind: section.content_kind,
        title: picked.row.title,
        subtitle: picked.row.subtitle ?? undefined,
        blocks: picked.row.body?.blocks ?? [],
        faqItems: picked.row.body?.faqItems ?? [],
        usedFallback: picked.usedFallback,
      };
    })
    .filter((s): s is PublicSection => s !== null);
}

export async function getSection(slug: string, locale: Locale): Promise<PublicSection | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("sections")
    .select("slug, icon, content_kind, section_translations(language_code, title, subtitle, body, status)")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !data) return null;

  const picked = pickTranslation(data.section_translations ?? [], locale);
  if (!picked) return null;

  return {
    slug: data.slug,
    icon: data.icon ?? "FileText",
    contentKind: data.content_kind,
    title: picked.row.title,
    subtitle: picked.row.subtitle ?? undefined,
    blocks: picked.row.body?.blocks ?? [],
    faqItems: picked.row.body?.faqItems ?? [],
    usedFallback: picked.usedFallback,
  };
}
