import Link from "next/link";
import { sections } from "@/lib/content/sections";
import { Icon } from "@/components/icon";

export default function HomePage() {
  return (
    <div>
      <section className="mb-10 text-center sm:mb-14">
        <h1 className="text-balance text-3xl font-bold text-coral-800 sm:text-4xl">
          Guia de Aleitamento Materno
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-balance leading-relaxed text-ink/80">
          Recomendações essenciais, manejo de dificuldades comuns, direitos e legislação —
          organizado para famílias e para a equipe de enfermagem.
        </p>
      </section>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.slug}
            href={`/${section.slug}`}
            className="group flex items-start gap-4 rounded-2xl border border-coral-800/10 bg-white/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-coral-glow text-white">
              <Icon name={section.icon} size={20} />
            </span>
            <span>
              <span className="block font-semibold text-coral-800 group-hover:underline">
                {section.title}
              </span>
              {section.subtitle && (
                <span className="mt-0.5 block text-sm text-ink/70">{section.subtitle}</span>
              )}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
