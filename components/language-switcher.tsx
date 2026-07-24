"use client";

import { useState } from "react";
import { languages, type Locale } from "@/lib/locales";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ current }: { current: Locale }) {
  const [open, setOpen] = useState(false);
  const currentMeta = languages[current];

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
            {Object.values(languages).map((lang) => (
              <li key={lang.code}>
                <button
                  type="button"
                  disabled={!lang.enabled}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex w-full items-center justify-between px-4 py-2 text-left text-sm",
                    lang.enabled
                      ? "text-ink hover:bg-coral-50"
                      : "cursor-not-allowed text-ink/40",
                    lang.code === current && "font-semibold text-coral-800"
                  )}
                >
                  <span>{lang.nativeLabel}</span>
                  {!lang.enabled && <span className="text-xs">em breve</span>}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
