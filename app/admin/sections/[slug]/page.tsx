import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { SectionEditor } from "@/components/admin/section-editor";
import { Icon } from "@/components/icon";
import type { Block, FaqItem } from "@/lib/content/types";

export default async function EditSectionPage({ params }: { params: { slug: string } }) {
  const supabase = createClient();

  const { data: section } = await supabase
    .from("sections")
    .select("id, slug, content_kind")
    .eq("slug", params.slug)
    .maybeSingle();

  if (!section) notFound();

  const { data: translation } = await supabase
    .from("section_translations")
    .select("title, subtitle, body")
    .eq("section_id", section.id)
    .eq("language_code", "pt")
    .maybeSingle();

  const body = (translation?.body ?? {}) as { blocks?: Block[]; faqItems?: FaqItem[] };

  return (
    <div>
      <Link href="/admin" className="mb-4 inline-flex items-center gap-1.5 text-sm font-medium text-coral-800 hover:underline">
        <Icon name="ArrowLeft" size={16} />
        Todas as seções
      </Link>
      <h1 className="mb-6 text-2xl font-bold text-coral-800">Editar seção</h1>
      <SectionEditor
        sectionId={section.id}
        isFaq={section.content_kind === "faq"}
        initialTitle={translation?.title ?? ""}
        initialSubtitle={translation?.subtitle ?? ""}
        initialBlocks={body.blocks ?? []}
        initialFaqItems={body.faqItems ?? []}
      />
    </div>
  );
}
