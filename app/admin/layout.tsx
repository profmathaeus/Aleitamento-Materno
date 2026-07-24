import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { Icon } from "@/components/icon";

export const metadata = { title: "Painel de conteúdo — Aleitamento Materno" };

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Rotas públicas do admin (login, callback) não passam por essa checagem
  // adicional de perfil — o middleware já cuida da sessão.
  if (!user) {
    return children;
  }

  const { data: profile } = await supabase
    .from("admin_profiles")
    .select("display_name, role, is_active")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!profile || !profile.is_active) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-coral-glow px-4">
        <div className="max-w-md rounded-2xl border border-coral-800/10 bg-white/90 p-8 text-center shadow-sm">
          <p className="font-semibold text-coral-800">Conta sem permissão de admin</p>
          <p className="mt-2 text-sm leading-relaxed text-ink/80">
            Você entrou como <strong>{user.email}</strong>, mas essa conta ainda não foi
            liberada para editar conteúdo. Peça para um admin te adicionar na tabela
            <code className="mx-1 rounded bg-coral-50 px-1.5 py-0.5">admin_profiles</code>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-coral-50/40">
      <header className="border-b border-coral-800/10 bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/admin" className="flex items-center gap-2 font-semibold text-coral-800">
            <Icon name="Heart" size={18} />
            Painel de conteúdo
          </Link>
          <span className="text-sm text-ink/70">
            {profile.display_name} · {profile.role === "admin" ? "admin" : "editor"}
          </span>
        </div>
      </header>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}

// evita cache de dados de auth entre requisições
export const dynamic = "force-dynamic";
