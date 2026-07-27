// Envia as traduções de lib/content/translations/<code>.ts para o Supabase
// (section_translations). Roda de novo sempre que uma tradução for
// adicionada/atualizada. Idiomas sem arquivo de tradução ainda são
// simplesmente pulados (o site cai de volta pro português nesse caso).
//
// Uso: export $(grep -v '^#' .env.local | xargs) && npx tsx scripts/seed-translations.ts
import { createClient } from "@supabase/supabase-js";
import { sections } from "../lib/content/sections";
import { blocksToHtml } from "../lib/content/render-html";
import { locales } from "../lib/locales";
import type { SectionTranslation } from "../lib/content/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceKey) {
  console.error("Faltam NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY no ambiente.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function main() {
  const { data: dbSections, error: sectionsError } = await supabase.from("sections").select("id, slug");
  if (sectionsError || !dbSections) {
    console.error("Erro ao ler sections:", sectionsError?.message);
    process.exit(1);
  }
  const idBySlug = new Map(dbSections.map((s) => [s.slug, s.id as string]));

  for (const locale of locales) {
    if (locale === "pt") continue;

    let translations: Record<string, SectionTranslation> | null = null;
    try {
      const mod = await import(`../lib/content/translations/${locale}.ts`);
      translations = mod.default;
    } catch {
      console.log(`[${locale}] sem arquivo de tradução ainda — pulando.`);
      continue;
    }
    if (!translations) continue;

    let ok = 0;
    for (const section of sections) {
      const t = translations[section.slug];
      if (!t) {
        console.warn(`[${locale}] faltando slug "${section.slug}"`);
        continue;
      }
      const sectionId = idBySlug.get(section.slug);
      if (!sectionId) continue;

      const isFaq = section.contentKind === "faq";
      const html = isFaq ? "" : blocksToHtml(t.blocks);

      const { error } = await supabase
        .from("section_translations")
        .upsert(
          {
            section_id: sectionId,
            language_code: locale,
            title: t.title,
            subtitle: t.subtitle ?? null,
            body: { blocks: t.blocks, faqItems: t.faqItems ?? [] },
            body_html_cache: html,
            status: "published",
            needs_retranslation: false,
            translation_engine: "claude",
            translated_at: new Date().toISOString(),
          },
          { onConflict: "section_id,language_code" }
        );

      if (error) {
        console.error(`[${locale}] erro em "${section.slug}":`, error.message);
      } else {
        ok++;
      }
    }
    console.log(`[${locale}] ${ok}/${sections.length} seções salvas no Supabase.`);
  }
}

main();
