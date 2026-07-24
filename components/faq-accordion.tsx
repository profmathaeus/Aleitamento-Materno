"use client";

import { useState } from "react";
import type { FaqItem } from "@/lib/content/types";
import { Icon } from "./icon";
import { cn } from "@/lib/utils";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-coral-800/10 overflow-hidden rounded-xl border border-coral-800/10 bg-white">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left font-medium text-coral-800"
              aria-expanded={isOpen}
            >
              {item.question}
              <Icon
                name="ChevronDown"
                size={18}
                className={cn("shrink-0 transition-transform", isOpen && "rotate-180")}
              />
            </button>
            {isOpen && (
              <p className="px-4 pb-4 leading-relaxed text-ink">{item.answer}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
