import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-coral-glow">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
      <SiteFooter />
    </div>
  );
}
