import type { Block } from "./types";

// HTML simples usado como cache renderizado (SSR / preview) — não é a
// representação canônica do conteúdo, que continua sendo o array de blocks.
export function blocksToHtml(blocks: Block[]): string {
  return blocks
    .map((block) => {
      switch (block.type) {
        case "heading":
          return `<h${block.level}>${block.text}</h${block.level}>`;
        case "paragraph":
          return `<p>${block.text}</p>`;
        case "list":
          return `<ul>${block.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
        case "callout":
          return `<div class="callout callout-${block.tone}"><strong>${block.title}</strong><p>${block.text}</p></div>`;
        case "table":
          return (
            `<table>` +
            (block.caption ? `<caption>${block.caption}</caption>` : "") +
            `<thead><tr>${block.columns.map((c) => `<th>${c}</th>`).join("")}</tr></thead>` +
            `<tbody>${block.rows
              .map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join("")}</tr>`)
              .join("")}</tbody></table>`
          );
        default:
          return "";
      }
    })
    .join("\n");
}
