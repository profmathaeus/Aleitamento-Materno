import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });

// Layout raiz único (compartilhado por /admin e por /[locale]/...).
// A tag <html> não pode variar por idioma aqui porque /admin não é
// localizado; o atributo dir="rtl" por idioma é aplicado num wrapper
// dentro de app/[locale]/layout.tsx.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}
