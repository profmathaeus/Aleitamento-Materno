import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Icon } from "@/components/icon";

const statusLabel: Record<string, string> = {
  draft: "Rascunho",
  machine_translated: "Traduzido automaticamente",
  reviewed: "Revisado",
  published: "Publicado",
};

export default async function AdminHomePage() {
  const supabase = createClient();

  const { data: sections, error } = await supabase
    .from("sections")
    .select("id, slug, icon, content_kind, order_index, section_translations(status, title, language_code)")
    .order("order_index");

  if (error) {
    return (
      <div className="rounded-xl border border-red-300 bg-red-50 p-4 text-red-800">
        Não consegui carregar as seções: {error.message}
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-coral-800">Seções do guia</h1>
      <p className="mt-1 text-ink/70">
        {sections?.length ?? 0} seções carregadas do Supabase. Edição de conteúdo chega na
        próxima etapa — por enquanto esta tela confirma que o banco está conectado.
      </p>

      <div className="mt-6 divide-y divide-coral-800/10 overflow-hidden rounded-xl border border-coral-800/10 bg-white">
        {sections?.map((section) => {
          const ptTranslation = section.section_translations?.find(
            (t) => t.language_code === "pt"
          );
          return (
            <div key={section.id} className="flex items-center gap-3 px-4 py-3">
              <Icon name={section.icon ?? "FileText"} size={18} className="text-coral-800" />
              <div className="flex-1">
                <p className="font-medium text-ink">{ptTranslation?.title ?? section.slug}</p>
                <p className="text-xs text-ink/60">{section.slug}</p>
              </div>
              <span className="rounded-full bg-coral-50 px-2.5 py-1 text-xs font-medium text-coral-800">
                {statusLabel[ptTranslation?.status ?? ""] ?? "—"}
              </span>
              <Link
                href={`/pt/${section.slug}`}
                target="_blank"
                className="text-xs font-medium text-coral-800 hover:underline"
              >
                Ver no site
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
