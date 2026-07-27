// Preenche subtitle nas linhas 'pt' de section_translations que já existiam
// no banco antes da coluna subtitle existir. Rodar uma vez só.
// Uso: export $(grep -v '^#' .env.local | xargs) && npx tsx scripts/backfill-pt-subtitle.ts
import { createClient } from "@supabase/supabase-js";
import { sections } from "../lib/content/sections";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !serviceKey) {
  console.error("Faltam variáveis de ambiente.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

async function main() {
  const { data: dbSections } = await supabase.from("sections").select("id, slug");
  if (!dbSections) return;
  const idBySlug = new Map(dbSections.map((s) => [s.slug, s.id as string]));

  for (const section of sections) {
    const sectionId = idBySlug.get(section.slug);
    if (!sectionId) continue;
    const { error } = await supabase
      .from("section_translations")
      .update({ subtitle: section.subtitle ?? null })
      .eq("section_id", sectionId)
      .eq("language_code", "pt");
    if (error) console.error(`erro em ${section.slug}:`, error.message);
    else console.log(`ok: ${section.slug}`);
  }
}

main();
