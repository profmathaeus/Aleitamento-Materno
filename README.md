# Aleitamento Materno — Guia para famílias e profissionais

Site com o guia de aleitamento materno da cliente. Online em produção via
Vercel, conectado ao GitHub (`profmathaeus/Aleitamento-Materno`).

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Onde está o conteúdo

Todo o conteúdo em português vem de
[lib/content/sections.ts](lib/content/sections.ts) (19 seções + tabelas,
extraídas do guia original da cliente) — isso alimenta tanto o site público
quanto o `supabase/seed.sql`.

## Identidade visual

Paleta "coral glow" (mesma do tema configurado no Gamma da cliente) e fonte
DM Sans, configuradas em [tailwind.config.ts](tailwind.config.ts) e
[app/globals.css](app/globals.css).

## Idiomas

O site é só em português. Quem lê em outro idioma usa a **tradução nativa
do próprio navegador** (Chrome/Edge/Safari oferecem isso automaticamente,
sem custo e sem configuração) — por isso não existe roteamento por idioma
nem pipeline de tradução próprio no código.

## Painel de administração

- `/admin` — protegido por login com **magic link** (Supabase Auth, sem
  senha). Link discreto "Área administrativa" no rodapé do site público.
- Primeiro acesso: a pessoa faz login normalmente (cria conta no
  Supabase Auth), mas só enxerga o painel depois de alguém rodar, no SQL
  Editor do Supabase:
  ```sql
  insert into admin_profiles (user_id, display_name, role)
  select id, 'Nome da pessoa', 'admin' from auth.users where email = 'email@da-pessoa.com';
  ```
- Schema completo do banco em [supabase/schema.sql](supabase/schema.sql).
- Para atualizar o conteúdo semeado no banco depois de editar
  `lib/content/sections.ts`, rode `npx tsx scripts/generate-seed-sql.ts` e
  execute o `supabase/seed.sql` gerado no SQL Editor.

## Variáveis de ambiente

Necessárias em `.env.local` (local) e nas Environment Variables do projeto
na Vercel (produção):

```
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

## Ainda pendente

- Adicionar o domínio de produção (Vercel) na lista de **Redirect URLs**
  em Supabase → Authentication → URL Configuration, para o login por
  magic link funcionar também online (hoje só está liberado para
  `localhost`).
- Editor de conteúdo dentro do `/admin` (por enquanto o painel só lista as
  seções para conferir que o banco está conectado — editar ainda é feito
  em `lib/content/sections.ts`).
