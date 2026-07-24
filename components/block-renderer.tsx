import type { Block } from "@/lib/content/types";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

const calloutStyles = {
  info: { icon: "Info", classes: "border-coral-500/30 bg-coral-50 text-coral-800" },
  warning: { icon: "TriangleAlert", classes: "border-amber-400/40 bg-amber-50 text-amber-900" },
  danger: { icon: "OctagonAlert", classes: "border-red-400/40 bg-red-50 text-red-900" },
} as const;

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-5">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 2 ? "h2" : "h3";
            return (
              <Tag
                key={i}
                className={cn(
                  "font-semibold text-coral-800",
                  block.level === 2 ? "mt-8 text-xl sm:text-2xl" : "mt-6 text-lg"
                )}
              >
                {block.text}
              </Tag>
            );
          }
          case "paragraph":
            return (
              <p key={i} className="leading-relaxed text-ink">
                {block.text}
              </p>
            );
          case "list":
            return (
              <ul key={i} className="list-disc space-y-1.5 pl-5 leading-relaxed text-ink">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "callout": {
            const style = calloutStyles[block.tone];
            return (
              <div key={i} className={cn("flex gap-3 rounded-xl border p-4", style.classes)}>
                <Icon name={style.icon} size={20} className="mt-0.5 shrink-0" />
                <div>
                  <p className="font-semibold">{block.title}</p>
                  <p className="mt-1 text-sm leading-relaxed">{block.text}</p>
                </div>
              </div>
            );
          }
          case "table":
            return (
              <div key={i} className="overflow-x-auto rounded-xl border border-coral-800/10">
                {block.caption && (
                  <p className="border-b border-coral-800/10 bg-coral-50 px-4 py-2 text-sm font-medium text-coral-800">
                    {block.caption}
                  </p>
                )}
                <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-coral-50/70">
                      {block.columns.map((col, j) => (
                        <th key={j} className="px-4 py-2 font-semibold text-coral-800">
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, r) => (
                      <tr key={r} className="border-t border-coral-800/10 align-top odd:bg-white even:bg-coral-50/30">
                        {row.map((cell, c) => (
                          <td key={c} className="px-4 py-3 leading-relaxed text-ink">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
