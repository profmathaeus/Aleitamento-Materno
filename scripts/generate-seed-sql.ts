// Gera supabase/seed.sql a partir de lib/content/sections.ts (fonte única de
// verdade usada pelo site na Fase 1). Rode com: npx tsx scripts/generate-seed-sql.ts
// Rodar de novo sempre que o conteúdo em lib/content/sections.ts mudar.
import { writeFileSync } from "node:fs";
import { sections } from "../lib/content/sections";
import { blocksToHtml } from "../lib/content/render-html";

function esc(value: string): string {
  return value.replace(/'/g, "''");
}

const lines: string[] = [
  "-- Gerado automaticamente por scripts/generate-seed-sql.ts — não editar à mão.",
  "-- Popula sections + section_translations (pt) + content_tables/rows a partir",
  "-- do conteúdo real do guia. Rode depois de aplicar supabase/schema.sql.",
  "",
];

sections.forEach((section, index) => {
  const sectionVar = `sec_${index}`;
  lines.push(
    `with ${sectionVar} as (`,
    `  insert into sections (slug, order_index, icon, content_kind)`,
    `  values ('${esc(section.slug)}', ${index}, '${esc(section.icon)}', '${section.contentKind}')`,
    `  returning id`,
    `)`
  );

  const html = blocksToHtml(section.blocks);
  const bodyJson = JSON.stringify({ blocks: section.blocks, faqItems: section.faqItems ?? [] });

  const subtitleValue = section.subtitle ? `'${esc(section.subtitle)}'` : "null";
  lines.push(
    `insert into section_translations (section_id, language_code, title, subtitle, body, body_html_cache, status, translated_at, translation_engine)`,
    `select id, 'pt', '${esc(section.title)}', ${subtitleValue}, '${esc(bodyJson)}'::jsonb, '${esc(html)}', 'published', now(), 'manual'`,
    `from ${sectionVar};`,
    ""
  );

  const tablesInSection = section.blocks.filter((b) => b.type === "table");
  if (tablesInSection.length > 0 && section.contentKind !== "article") {
    // Para os content_kind estruturados (myths_facts, legislation, checklist),
    // além do cache em body_html_cache acima, grava também nas tabelas
    // relacionais (content_tables/content_table_rows) para uso pelo admin.
    tablesInSection.forEach((block, tIndex) => {
      if (block.type !== "table") return;
      const tableVar = `${sectionVar}_tbl_${tIndex}`;
      lines.push(
        `with ${tableVar} as (`,
        `  insert into content_tables (section_id, table_type, order_index)`,
        `  select id, '${section.contentKind}', ${tIndex} from sections where slug = '${esc(section.slug)}'`,
        `  returning id`,
        `)`,
        `insert into content_table_rows (table_id, order_index, cells)`,
        `select id, row_num - 1, cells::jsonb from ${tableVar}, `,
        `  (values ${block.rows
          .map((row, r) => {
            const cellsObj: Record<string, string> = {};
            block.columns.forEach((col, c) => (cellsObj[col] = row[c] ?? ""));
            return `(${r + 1}, '${esc(JSON.stringify(cellsObj))}')`;
          })
          .join(", ")}) as t(row_num, cells);`,
        ""
      );
    });
  }
});

writeFileSync(new URL("../supabase/seed.sql", import.meta.url), lines.join("\n"));
console.log(`Gerado supabase/seed.sql com ${sections.length} seções.`);
