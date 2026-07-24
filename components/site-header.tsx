import Link from "next/link";
import { Icon } from "./icon";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-coral-800/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold text-coral-800">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral-glow text-white">
            <Icon name="Heart" size={16} />
          </span>
          <span className="text-balance">Aleitamento Materno</span>
        </Link>
        <span
          title="Use o tradutor do seu navegador (ex: Chrome) para ler este site em outro idioma"
          className="flex items-center gap-1.5 rounded-full border border-coral-800/20 bg-white/70 px-3 py-1.5 text-xs text-coral-800/80"
        >
          <Icon name="Globe" size={14} />
          Traduza pelo seu navegador
        </span>
      </div>
    </header>
  );
}
