"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Block, FaqItem } from "@/lib/content/types";
import { createClient } from "@/lib/supabase/client";
import { blocksToHtml } from "@/lib/content/render-html";
import { Icon } from "@/components/icon";
import { BlockEditorItem } from "./block-editor-item";

interface Props {
  sectionId: string;
  isFaq: boolean;
  initialTitle: string;
  initialSubtitle: string;
  initialBlocks: Block[];
  initialFaqItems: FaqItem[];
}

function emptyBlock(type: Block["type"]): Block {
  switch (type) {
    case "heading":
      return { type: "heading", level: 2, text: "" };
    case "paragraph":
      return { type: "paragraph", text: "" };
    case "list":
      return { type: "list", items: [""] };
    case "callout":
      return { type: "callout", title: "", text: "", tone: "info" };
    case "table":
      return { type: "table", columns: ["Coluna 1", "Coluna 2"], rows: [["", ""]] };
  }
}

export function SectionEditor({
  sectionId,
  isFaq,
  initialTitle,
  initialSubtitle,
  initialBlocks,
  initialFaqItems,
}: Props) {
  const router = useRouter();
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setSubtitle] = useState(initialSubtitle);
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [faqItems, setFaqItems] = useState<FaqItem[]>(initialFaqItems);
  const [saving, setSaving] = useState(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);
  const [error, setError] = useState("");

  function updateBlock(index: number, block: Block) {
    setBlocks((prev) => prev.map((b, i) => (i === index ? block : b)));
  }

  function removeBlock(index: number) {
    setBlocks((prev) => prev.filter((_, i) => i !== index));
  }

  function moveBlock(index: number, direction: -1 | 1) {
    setBlocks((prev) => {
      const next = [...prev];
      const target = index + direction;
      if (target < 0 || target >= next.length) return prev;
      [next[index], next[target]] = [next[target], next[index]];
      return next;
    });
  }

  async function handleSave() {
    setSaving(true);
    setError("");
    const supabase = createClient();
    const body = { blocks, faqItems: isFaq ? faqItems : [] };
    const bodyHtmlCache = isFaq ? "" : blocksToHtml(blocks);

    const { error: updateError } = await supabase
      .from("section_translations")
      .update({
        title,
        subtitle: subtitle || null,
        body,
        body_html_cache: bodyHtmlCache,
        status: "published",
        updated_at: new Date().toISOString(),
      })
      .eq("section_id", sectionId)
      .eq("language_code", "pt");

    if (updateError) {
      setError(updateError.message);
      setSaving(false);
      return;
    }

    // Marca as traduções dos outros idiomas como desatualizadas — a admin
    // pede pra retraduzir quando quiser.
    await supabase
      .from("section_translations")
      .update({ needs_retranslation: true })
      .eq("section_id", sectionId)
      .neq("language_code", "pt");

    setSaving(false);
    setSavedAt(Date.now());
    router.refresh();
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">Título da seção</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-lg border border-coral-800/20 px-3 py-2 outline-none focus:border-coral-600"
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-ink">Subtítulo (opcional)</label>
        <input
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
          className="w-full rounded-lg border border-coral-800/20 px-3 py-2 outline-none focus:border-coral-600"
        />
      </div>

      {isFaq ? (
        <FaqItemsEditor items={faqItems} onChange={setFaqItems} />
      ) : (
        <div className="space-y-3">
          <p className="text-sm font-medium text-ink">Conteúdo</p>
          {blocks.map((block, i) => (
            <BlockEditorItem
              key={i}
              block={block}
              onChange={(b) => updateBlock(i, b)}
              onRemove={() => removeBlock(i)}
              onMoveUp={() => moveBlock(i, -1)}
              onMoveDown={() => moveBlock(i, 1)}
              isFirst={i === 0}
              isLast={i === blocks.length - 1}
            />
          ))}

          <div className="flex flex-wrap gap-2 pt-1">
            {(["heading", "paragraph", "list", "callout", "table"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setBlocks((prev) => [...prev, emptyBlock(type)])}
                className="rounded-lg border border-coral-800/20 px-3 py-1.5 text-sm text-coral-800 hover:bg-coral-50"
              >
                + {{ heading: "Título", paragraph: "Parágrafo", list: "Lista", callout: "Destaque", table: "Tabela" }[type]}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex items-center gap-3 border-t border-coral-800/10 pt-4">
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          className="rounded-lg bg-coral-glow px-5 py-2 font-medium text-white shadow-sm disabled:opacity-60"
        >
          {saving ? "Salvando..." : "Salvar e publicar"}
        </button>
        {savedAt && <span className="text-sm text-green-700">Salvo!</span>}
        {error && <span className="text-sm text-red-700">{error}</span>}
      </div>
    </div>
  );
}

function FaqItemsEditor({ items, onChange }: { items: FaqItem[]; onChange: (items: FaqItem[]) => void }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-medium text-ink">Perguntas e respostas</p>
      {items.map((item, i) => (
        <div key={i} className="rounded-xl border border-coral-800/15 bg-white p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-coral-800">Pergunta {i + 1}</span>
            <button
              type="button"
              onClick={() => onChange(items.filter((_, j) => j !== i))}
              className="text-red-600"
            >
              <Icon name="Trash2" size={16} />
            </button>
          </div>
          <input
            value={item.question}
            onChange={(e) => {
              const next = [...items];
              next[i] = { ...next[i], question: e.target.value };
              onChange(next);
            }}
            placeholder="Pergunta"
            className="mb-2 w-full rounded-lg border border-coral-800/20 px-3 py-2 text-sm outline-none focus:border-coral-600"
          />
          <textarea
            value={item.answer}
            onChange={(e) => {
              const next = [...items];
              next[i] = { ...next[i], answer: e.target.value };
              onChange(next);
            }}
            rows={2}
            placeholder="Resposta"
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 text-sm outline-none focus:border-coral-600"
          />
        </div>
      ))}
      <button
        type="button"
        onClick={() => onChange([...items, { question: "", answer: "" }])}
        className="text-sm font-medium text-coral-800 hover:underline"
      >
        + Adicionar pergunta
      </button>
    </div>
  );
}
