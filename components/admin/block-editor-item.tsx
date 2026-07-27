"use client";

import type { Block } from "@/lib/content/types";
import { Icon } from "@/components/icon";

const blockLabel: Record<Block["type"], string> = {
  heading: "Título",
  paragraph: "Parágrafo",
  list: "Lista",
  callout: "Destaque",
  table: "Tabela",
};

interface Props {
  block: Block;
  onChange: (block: Block) => void;
  onRemove: () => void;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export function BlockEditorItem({ block, onChange, onRemove, onMoveUp, onMoveDown, isFirst, isLast }: Props) {
  return (
    <div className="rounded-xl border border-coral-800/15 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="rounded-full bg-coral-50 px-2.5 py-0.5 text-xs font-medium text-coral-800">
          {blockLabel[block.type]}
        </span>
        <div className="flex items-center gap-1 text-ink/50">
          <button type="button" onClick={onMoveUp} disabled={isFirst} className="p-1 disabled:opacity-30" title="Mover para cima">
            <Icon name="ChevronUp" size={16} />
          </button>
          <button type="button" onClick={onMoveDown} disabled={isLast} className="p-1 disabled:opacity-30" title="Mover para baixo">
            <Icon name="ChevronDown" size={16} />
          </button>
          <button type="button" onClick={onRemove} className="p-1 text-red-600" title="Remover">
            <Icon name="Trash2" size={16} />
          </button>
        </div>
      </div>

      {block.type === "heading" && (
        <div className="flex gap-2">
          <select
            value={block.level}
            onChange={(e) => onChange({ ...block, level: Number(e.target.value) as 2 | 3 })}
            className="rounded-lg border border-coral-800/20 px-2 py-2 text-sm"
          >
            <option value={2}>Grande</option>
            <option value={3}>Pequeno</option>
          </select>
          <input
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
            placeholder="Texto do título"
            className="flex-1 rounded-lg border border-coral-800/20 px-3 py-2 text-sm outline-none focus:border-coral-600"
          />
        </div>
      )}

      {block.type === "paragraph" && (
        <textarea
          value={block.text}
          onChange={(e) => onChange({ ...block, text: e.target.value })}
          rows={4}
          placeholder="Texto do parágrafo"
          className="w-full rounded-lg border border-coral-800/20 px-3 py-2 text-sm outline-none focus:border-coral-600"
        />
      )}

      {block.type === "list" && (
        <ListItemsEditor
          items={block.items}
          onChange={(items) => onChange({ ...block, items })}
        />
      )}

      {block.type === "callout" && (
        <div className="space-y-2">
          <select
            value={block.tone}
            onChange={(e) => onChange({ ...block, tone: e.target.value as "info" | "warning" | "danger" })}
            className="rounded-lg border border-coral-800/20 px-2 py-2 text-sm"
          >
            <option value="info">Informação</option>
            <option value="warning">Atenção</option>
            <option value="danger">Perigo</option>
          </select>
          <input
            value={block.title}
            onChange={(e) => onChange({ ...block, title: e.target.value })}
            placeholder="Título do destaque"
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 text-sm outline-none focus:border-coral-600"
          />
          <textarea
            value={block.text}
            onChange={(e) => onChange({ ...block, text: e.target.value })}
            rows={3}
            placeholder="Texto do destaque"
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 text-sm outline-none focus:border-coral-600"
          />
        </div>
      )}

      {block.type === "table" && (
        <TableEditor
          caption={block.caption}
          columns={block.columns}
          rows={block.rows}
          onChange={(patch) => onChange({ ...block, ...patch })}
        />
      )}
    </div>
  );
}

function ListItemsEditor({ items, onChange }: { items: string[]; onChange: (items: string[]) => void }) {
  return (
    <div className="space-y-2">
      {items.map((item, i) => (
        <div key={i} className="flex gap-2">
          <input
            value={item}
            onChange={(e) => {
              const next = [...items];
              next[i] = e.target.value;
              onChange(next);
            }}
            className="flex-1 rounded-lg border border-coral-800/20 px-3 py-1.5 text-sm outline-none focus:border-coral-600"
          />
          <button
            type="button"
            onClick={() => onChange(items.filter((_, j) => j !== i))}
            className="px-1 text-red-600"
          >
            <Icon name="X" size={16} />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, ""])}
        className="text-sm font-medium text-coral-800 hover:underline"
      >
        + Adicionar item
      </button>
    </div>
  );
}

function TableEditor({
  caption,
  columns,
  rows,
  onChange,
}: {
  caption?: string;
  columns: string[];
  rows: string[][];
  onChange: (patch: { caption?: string; columns: string[]; rows: string[][] }) => void;
}) {
  return (
    <div className="space-y-3">
      <input
        value={caption ?? ""}
        onChange={(e) => onChange({ caption: e.target.value, columns, rows })}
        placeholder="Legenda da tabela (opcional)"
        className="w-full rounded-lg border border-coral-800/20 px-3 py-1.5 text-sm outline-none focus:border-coral-600"
      />

      <div className="overflow-x-auto">
        <table className="w-full min-w-[400px] border-collapse text-sm">
          <thead>
            <tr>
              {columns.map((col, c) => (
                <th key={c} className="border border-coral-800/15 p-1">
                  <div className="flex items-center gap-1">
                    <input
                      value={col}
                      onChange={(e) => {
                        const next = [...columns];
                        next[c] = e.target.value;
                        onChange({ caption, columns: next, rows });
                      }}
                      className="w-full rounded border border-coral-800/20 px-2 py-1 text-xs font-semibold"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        const nextCols = columns.filter((_, i) => i !== c);
                        const nextRows = rows.map((row) => row.filter((_, i) => i !== c));
                        onChange({ caption, columns: nextCols, rows: nextRows });
                      }}
                      className="text-red-600"
                    >
                      <Icon name="X" size={12} />
                    </button>
                  </div>
                </th>
              ))}
              <th className="border border-coral-800/15 p-1">
                <button
                  type="button"
                  onClick={() =>
                    onChange({
                      caption,
                      columns: [...columns, "Nova coluna"],
                      rows: rows.map((row) => [...row, ""]),
                    })
                  }
                  className="whitespace-nowrap px-2 text-xs font-medium text-coral-800"
                >
                  + Coluna
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={r}>
                {row.map((cell, c) => (
                  <td key={c} className="border border-coral-800/15 p-1">
                    <textarea
                      value={cell}
                      rows={2}
                      onChange={(e) => {
                        const next = rows.map((rr) => [...rr]);
                        next[r][c] = e.target.value;
                        onChange({ caption, columns, rows: next });
                      }}
                      className="w-full rounded border border-coral-800/20 px-2 py-1 text-xs"
                    />
                  </td>
                ))}
                <td className="border border-coral-800/15 p-1 text-center">
                  <button
                    type="button"
                    onClick={() => onChange({ caption, columns, rows: rows.filter((_, i) => i !== r) })}
                    className="text-red-600"
                  >
                    <Icon name="X" size={14} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={() => onChange({ caption, columns, rows: [...rows, columns.map(() => "")] })}
        className="text-sm font-medium text-coral-800 hover:underline"
      >
        + Adicionar linha
      </button>
    </div>
  );
}
