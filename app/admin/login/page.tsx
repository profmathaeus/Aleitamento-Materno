"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Icon } from "@/components/icon";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/auth/callback`,
      },
    });
    setStatus(error ? "error" : "sent");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-coral-glow px-4">
      <div className="w-full max-w-sm rounded-2xl border border-coral-800/10 bg-white/90 p-8 shadow-sm">
        <div className="mb-6 flex items-center gap-2 text-coral-800">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-coral-glow text-white">
            <Icon name="Heart" size={18} />
          </span>
          <span className="font-semibold">Painel de conteúdo</span>
        </div>

        {status === "sent" ? (
          <p className="leading-relaxed text-ink">
            Enviamos um link de acesso para <strong>{email}</strong>. Abra o e-mail e clique no
            link para entrar — não precisa de senha.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-ink">
                Seu e-mail
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@exemplo.com"
                className="w-full rounded-lg border border-coral-800/20 px-3 py-2 text-ink outline-none focus:border-coral-600"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-lg bg-coral-glow px-4 py-2 font-medium text-white shadow-sm disabled:opacity-60"
            >
              {status === "sending" ? "Enviando..." : "Receber link de acesso"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-700">
                Não deu para enviar o link. Confira o e-mail e tente de novo.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
