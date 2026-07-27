export type ContentKind =
  | "article"
  | "myths_facts"
  | "legislation"
  | "checklist"
  | "faq";

export type Block =
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; text: string; tone: "info" | "warning" | "danger" }
  | { type: "table"; caption?: string; columns: string[]; rows: string[][] };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Section {
  slug: string;
  title: string;
  subtitle?: string;
  icon: string;
  contentKind: ContentKind;
  blocks: Block[];
  faqItems?: FaqItem[];
}

// Conteúdo traduzido de uma seção (mesma forma de Section, sem os campos
// agnósticos de idioma como slug/icon/contentKind, que vêm de sections.ts).
export interface SectionTranslation {
  title: string;
  subtitle?: string;
  blocks: Block[];
  faqItems?: FaqItem[];
}
