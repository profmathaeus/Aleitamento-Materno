import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Icon } from "@/components/icon";
import { languages, locales } from "@/lib/locales";

export default async function AdminHomePage() {
  const supabase = createClient();

  const { data: sections, error } = await supabase
    .from("sections")
    .select("id, slug, icon, content_kind, order_index, section_translations(status, title, language_code, needs_retranslation)")
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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-coral-800">Seções do guia</h1>
          <p className="mt-1 text-ink/70">{sections?.length ?? 0} seções.</p>
        </div>
        <Link
          href="/admin/sections/new"
          className="rounded-lg bg-coral-glow px-4 py-2 text-sm font-medium text-white shadow-sm"
        >
          + Nova seção
        </Link>
      </div>

      <div className="mt-6 divide-y divide-coral-800/10 overflow-hidden rounded-xl border border-coral-800/10 bg-white">
        {sections?.map((section) => {
          const translations = section.section_translations ?? [];
          const ptTranslation = translations.find((t) => t.language_code === "pt");
          const pendingLanguages = locales.filter((code) => {
            if (code === "pt") return false;
            const t = translations.find((tr) => tr.language_code === code);
            return !t || t.needs_retranslation;
          });

          return (
            <div key={section.id} className="flex flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:gap-3">
              <Icon name={section.icon ?? "FileText"} size={18} className="shrink-0 text-coral-800" />
              <div className="min-w-0 flex-1">
                <p className="truncate font-medium text-ink">{ptTranslation?.title ?? section.slug}</p>
                <p className="text-xs text-ink/60">{section.slug}</p>
              </div>

              {pendingLanguages.length > 0 && (
                <span
                  title={`Idiomas pendentes: ${pendingLanguages.map((c) => languages[c].nativeLabel).join(", ")}`}
                  className="flex shrink-0 items-center gap-1 rounded-full bg-amber-100 px-2.5 py-1 text-xs font-medium text-amber-800"
                >
                  <Icon name="RefreshCcw" size={12} />
                  {pendingLanguages.length} tradução(ões) pendente(s)
                </span>
              )}

              <div className="flex shrink-0 items-center gap-3">
                <Link
                  href={`/admin/sections/${section.slug}`}
                  className="text-xs font-medium text-coral-800 hover:underline"
                >
                  Editar
                </Link>
                <Link
                  href={`/pt/${section.slug}`}
                  target="_blank"
                  className="text-xs font-medium text-coral-800 hover:underline"
                >
                  Ver no site
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
