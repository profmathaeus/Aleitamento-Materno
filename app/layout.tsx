import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

export const metadata: Metadata = {
  title: "Aleitamento Materno — Guia para famílias e profissionais",
  description:
    "Recomendações essenciais, manejo de dificuldades comuns, direitos e legislação sobre aleitamento materno.",
};

// Layout raiz único, compartilhado pelo site público e por /admin.
// O cabeçalho/rodapé do site público ficam em app/(site)/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
