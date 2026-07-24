# Aleitamento Materno — Guia para famílias e profissionais

Site com o guia de aleitamento materno da cliente. Plano completo em
`.claude/plans` (referência: `proud-bubbling-yeti.md` na sessão em que foi
criado) e resumo das fases abaixo.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000 — redireciona para `/pt`.

## Onde está o conteúdo (Fase 1)

Nesta fase o site funciona **sem precisar de banco de dados**: todo o
conteúdo em português vem de [lib/content/sections.ts](lib/content/sections.ts)
(19 seções + tabelas, extraídas do guia original da cliente). Para editar
um texto agora, é esse o arquivo a alterar.

## Identidade visual

Paleta "coral glow" (mesma do tema configurado no Gamma da cliente) e fonte
DM Sans, configuradas em [tailwind.config.ts](tailwind.config.ts) e
[app/globals.css](app/globals.css).

## Estrutura de idiomas

8 idiomas estão modelados em [lib/locales.ts](lib/locales.ts) (PT, EN, ES,
JA, DE, AR, IT, FR), mas só **PT está habilitado** por enquanto — os outros
aparecem no seletor de idioma como "em breve". Isso evita retrabalho: as
rotas já são `app/[locale]/...`, então ativar um idioma na Fase 2 é só
marcar `enabled: true` depois que o conteúdo traduzido existir.

## Próximos passos (Fase 2 — banco de dados + tradução automática + admin)

Isso exige decisões e contas que só quem é dona do projeto pode
criar/fornecer:

1. **Criar um projeto no [Supabase](https://supabase.com)** (gratuito para
   começar) e me passar a Project URL + as chaves (anon key e service role
   key) — nunca cole a service role key em um chat público, prefira colar
   num arquivo `.env.local` que eu leio localmente.
2. Rodar [supabase/schema.sql](supabase/schema.sql) no SQL Editor do
   projeto — cria todas as tabelas (seções, traduções, glossário técnico,
   perfis de admin) já com as políticas de segurança (RLS).
3. Rodar `npx tsx scripts/generate-seed-sql.ts` sempre que
   `lib/content/sections.ts` mudar, para gerar/atualizar
   [supabase/seed.sql](supabase/seed.sql) com o conteúdo real — depois
   rodar esse arquivo no SQL Editor para popular o banco.
4. Criar um projeto no **[Google Cloud](https://cloud.google.com/translate)**
   e ativar a Cloud Translation API (tem plano gratuito com limite mensal)
   para a tradução automática dos outros 7 idiomas.
5. Conectar o repositório a uma conta no **GitHub** e um projeto na
   **Vercel** para o deploy (posso te guiar nesse passo, mas a criação da
   conta e login são feitos por você).

Depois disso eu implemento: o painel de admin com login por magic link,
editor de texto rico para as leigas incluírem conteúdo, e o pipeline de
tradução automática com o glossário técnico (termos em inglês dentro dos
textos em japonês/alemão/árabe/italiano/francês).
