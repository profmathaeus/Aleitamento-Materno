import type { Locale } from "@/lib/locales";

interface UiStrings {
  backToAll: string;
  fallbackNotice: string;
  footerDisclaimer: string;
  footerAdminLink: string;
}

export const uiStrings: Record<Locale, UiStrings> = {
  pt: {
    backToAll: "Todas as seções",
    fallbackNotice: "Esta página ainda não tem tradução — mostrando a versão em português.",
    footerDisclaimer:
      "Este material é informativo e não substitui avaliação de um profissional de saúde. Leis, fluxos municipais e protocolos podem mudar — confirme a versão vigente nas fontes oficiais antes de usar como norma institucional.",
    footerAdminLink: "Área administrativa",
  },
  en: {
    backToAll: "All sections",
    fallbackNotice: "This page isn't translated yet — showing the Portuguese version.",
    footerDisclaimer:
      "This material is for information only and does not replace evaluation by a health professional. Laws, local procedures, and protocols may change — confirm the current version with official sources before using it as institutional guidance.",
    footerAdminLink: "Admin area",
  },
  es: {
    backToAll: "Todas las secciones",
    fallbackNotice: "Esta página aún no tiene traducción — mostrando la versión en portugués.",
    footerDisclaimer:
      "Este material es informativo y no sustituye la evaluación de un profesional de la salud. Las leyes, los procedimientos municipales y los protocolos pueden cambiar — confirme la versión vigente en las fuentes oficiales antes de usarlo como norma institucional.",
    footerAdminLink: "Área administrativa",
  },
  ja: {
    backToAll: "すべてのセクション",
    fallbackNotice: "このページはまだ翻訳されていません。ポルトガル語版を表示しています。",
    footerDisclaimer:
      "この資料は情報提供のみを目的としており、医療専門家による評価に代わるものではありません。法律、地域の手続き、プロトコルは変更される可能性があります。施設の基準として使用する前に、公式情報源で最新版をご確認ください。",
    footerAdminLink: "管理画面",
  },
  de: {
    backToAll: "Alle Abschnitte",
    fallbackNotice: "Diese Seite ist noch nicht übersetzt — es wird die portugiesische Version angezeigt.",
    footerDisclaimer:
      "Dieses Material dient nur zur Information und ersetzt nicht die Beurteilung durch eine Fachkraft im Gesundheitswesen. Gesetze, kommunale Abläufe und Protokolle können sich ändern — bestätigen Sie die aktuelle Version über offizielle Quellen, bevor Sie sie als institutionelle Richtlinie verwenden.",
    footerAdminLink: "Verwaltungsbereich",
  },
  ar: {
    backToAll: "جميع الأقسام",
    fallbackNotice: "لم تتم ترجمة هذه الصفحة بعد — يتم عرض النسخة البرتغالية.",
    footerDisclaimer:
      "هذه المواد إعلامية فقط ولا تحل محل تقييم أخصائي الرعاية الصحية. قد تتغير القوانين والإجراءات المحلية والبروتوكولات — يرجى التأكد من النسخة السارية من المصادر الرسمية قبل استخدامها كمعيار مؤسسي.",
    footerAdminLink: "منطقة الإدارة",
  },
  it: {
    backToAll: "Tutte le sezioni",
    fallbackNotice: "Questa pagina non è ancora tradotta — viene mostrata la versione in portoghese.",
    footerDisclaimer:
      "Questo materiale è a scopo informativo e non sostituisce la valutazione di un professionista sanitario. Leggi, procedure locali e protocolli possono cambiare — verificare la versione vigente presso le fonti ufficiali prima di utilizzarlo come norma istituzionale.",
    footerAdminLink: "Area amministrativa",
  },
  fr: {
    backToAll: "Toutes les sections",
    fallbackNotice: "Cette page n'est pas encore traduite — affichage de la version portugaise.",
    footerDisclaimer:
      "Ce document est fourni à titre informatif uniquement et ne remplace pas l'évaluation d'un professionnel de santé. Les lois, procédures locales et protocoles peuvent changer — vérifiez la version en vigueur auprès des sources officielles avant de l'utiliser comme norme institutionnelle.",
    footerAdminLink: "Espace administrateur",
  },
};
