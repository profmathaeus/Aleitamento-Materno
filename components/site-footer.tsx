import Link from "next/link";
import type { Locale } from "@/lib/locales";
import { uiStrings } from "@/lib/content/ui-strings";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = uiStrings[locale];
  return (
    <footer className="border-t border-coral-800/10 bg-coral-50/60">
      <div className="mx-auto max-w-5xl px-4 py-8 text-sm text-ink/70 sm:px-6">
        <p>{t.footerDisclaimer}</p>
        <Link href="/admin" className="mt-4 inline-block text-xs text-ink/40 hover:text-coral-800 hover:underline">
          {t.footerAdminLink}
        </Link>
      </div>
    </footer>
  );
}
