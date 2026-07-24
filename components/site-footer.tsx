import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-coral-800/10 bg-coral-50/60">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-ink/70 sm:px-6">
        <p>
          Este material é informativo e não substitui avaliação de um profissional de saúde.
          Leis, fluxos municipais e protocolos podem mudar — confirme a versão vigente nas
          fontes oficiais antes de usar como norma institucional.
        </p>
        <Link href="/admin" className="mt-4 inline-block text-xs text-ink/40 hover:text-coral-800 hover:underline">
          Área administrativa
        </Link>
      </div>
    </footer>
  );
}
