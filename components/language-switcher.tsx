"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { languages, locales, type Locale } from "@/lib/locales";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentMeta = languages[current];

  function switchTo(locale: Locale) {
    setOpen(false);
    const rest = pathname.split("/").slice(2).join("/");
    router.push(`/${locale}${rest ? `/${rest}` : ""}`);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-full border border-coral-800/20 bg-white/70 px-3 py-1.5 text-sm font-medium text-coral-800 shadow-sm transition hover:bg-white"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Icon name="Globe" size={16} />
        {currentMeta.nativeLabel}
        <Icon name="ChevronDown" size={14} />
      </button>

      {open && (
        <>
          <button
            aria-label="Fechar seletor de idioma"
            className="fixed inset-0 z-10 cursor-default"
            onClick={() => setOpen(false)}
          />
          <ul
            role="listbox"
            className="absolute right-0 z-20 mt-2 w-56 overflow-hidden rounded-xl border border-coral-800/10 bg-white py-1 shadow-lg"
          >
            {locales.map((code) => {
              const lang = languages[code];
              return (
                <li key={code}>
                  <button
                    type="button"
                    onClick={() => switchTo(code)}
                    className={cn(
                      "flex w-full items-center justify-between px-4 py-2 text-left text-sm text-ink hover:bg-coral-50",
                      code === current && "font-semibold text-coral-800"
                    )}
                  >
                    <span>{lang.nativeLabel}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
