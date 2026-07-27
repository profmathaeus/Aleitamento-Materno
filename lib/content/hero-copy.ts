import type { Locale } from "@/lib/locales";

export const heroCopy: Record<Locale, { title: string; description: string }> = {
  pt: {
    title: "Guia de Aleitamento Materno",
    description:
      "Recomendações essenciais, manejo de dificuldades comuns, direitos e legislação — organizado para famílias e para a equipe de enfermagem.",
  },
  en: {
    title: "Breastfeeding Guide",
    description:
      "Essential recommendations, managing common difficulties, rights and legislation — organized for families and the nursing team.",
  },
  es: {
    title: "Guía de Lactancia Materna",
    description:
      "Recomendaciones esenciales, manejo de dificultades comunes, derechos y legislación — organizado para las familias y el equipo de enfermería.",
  },
  ja: {
    title: "母乳育児ガイド",
    description:
      "基本的な推奨事項、よくある困難への対処法、権利と法律について、ご家族と看護チームのためにまとめました。",
  },
  de: {
    title: "Stillleitfaden",
    description:
      "Wichtige Empfehlungen, der Umgang mit häufigen Schwierigkeiten, Rechte und Gesetzgebung — zusammengestellt für Familien und das Pflegeteam.",
  },
  ar: {
    title: "دليل الرضاعة الطبيعية",
    description:
      "التوصيات الأساسية، والتعامل مع الصعوبات الشائعة، والحقوق والتشريعات — مُنظَّم للأسر ولفريق التمريض.",
  },
  it: {
    title: "Guida all'Allattamento al Seno",
    description:
      "Raccomandazioni essenziali, gestione delle difficoltà comuni, diritti e legislazione — organizzato per le famiglie e per il team infermieristico.",
  },
  fr: {
    title: "Guide de l'Allaitement Maternel",
    description:
      "Recommandations essentielles, gestion des difficultés courantes, droits et législation — organisé pour les familles et l'équipe soignante.",
  },
};
