"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Icon } from "@/components/icon";
import type { ContentKind } from "@/lib/content/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const contentKindOptions: { value: ContentKind; label: string }[] = [
  { value: "article", label: "Artigo (texto comum)" },
  { value: "myths_facts", label: "Mitos e verdades" },
  { value: "legislation", label: "Legislação" },
  { value: "checklist", label: "Checklist" },
  { value: "faq", label: "Perguntas frequentes" },
];

export default function NewSectionPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [slugTouched, setSlugTouched] = useState(false);
  const [subtitle, setSubtitle] = useState("");
  const [icon, setIcon] = useState("Heart");
  const [contentKind, setContentKind] = useState<ContentKind>("article");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");
    const supabase = createClient();

    const { count } = await supabase.from("sections").select("id", { count: "exact", head: true });

    const { data: section, error: sectionError } = await supabase
      .from("sections")
      .insert({ slug, order_index: count ?? 0, icon, content_kind: contentKind })
      .select("id")
      .single();

    if (sectionError || !section) {
      setError(sectionError?.message ?? "Não foi possível criar a seção.");
      setSaving(false);
      return;
    }

    const isFaq = contentKind === "faq";
    const { error: translationError } = await supabase.from("section_translations").insert({
      section_id: section.id,
      language_code: "pt",
      title,
      subtitle: subtitle || null,
      body: { blocks: isFaq ? [] : [{ type: "paragraph", text: "" }], faqItems: isFaq ? [{ question: "", answer: "" }] : [] },
      body_html_cache: "",
      status: "published",
    });

    if (translationError) {
      setError(translationError.message);
      setSaving(false);
      return;
    }

    router.push(`/admin/sections/${slug}`);
  }

  return (
    <div>
      <Link href="/admin" className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-coral-800 hover:underline">
        <Icon name="ArrowLeft" size={16} />
        Todas as seções
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-coral-800">Nova seção</h1>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Título</label>
          <input
            required
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (!slugTouched) setSlug(slugify(e.target.value));
            }}
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 outline-none focus:border-coral-600"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Endereço na URL (slug)</label>
          <input
            required
            value={slug}
            onChange={(e) => {
              setSlug(slugify(e.target.value));
              setSlugTouched(true);
            }}
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 font-mono text-sm outline-none focus:border-coral-600"
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
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">
            Ícone (nome do <a href="https://lucide.dev/icons" target="_blank" className="underline">lucide.dev</a>)
          </label>
          <input
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 font-mono text-sm outline-none focus:border-coral-600"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-ink">Tipo de conteúdo</label>
          <select
            value={contentKind}
            onChange={(e) => setContentKind(e.target.value as ContentKind)}
            className="w-full rounded-lg border border-coral-800/20 px-3 py-2 outline-none focus:border-coral-600"
          >
            {contentKindOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="rounded-lg bg-coral-glow px-5 py-2 font-medium text-white shadow-sm disabled:opacity-60"
        >
          {saving ? "Criando..." : "Criar seção"}
        </button>
        {error && <p className="text-sm text-red-700">{error}</p>}
      </form>
    </div>
  );
}
