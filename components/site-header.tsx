import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { Icon } from "./icon";
import { LanguageSwitcher } from "./language-switcher";

export function SiteHeader({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-30 border-b border-coral-800/10 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${locale}`} className="flex items-center gap-2 font-semibold text-coral-800">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coral-glow text-white">
            <Icon name="Heart" size={16} />
          </span>
          <span className="text-balance">Aleitamento Materno</span>
        </Link>
        <LanguageSwitcher current={locale} />
      </div>
    </header>
  );
}
