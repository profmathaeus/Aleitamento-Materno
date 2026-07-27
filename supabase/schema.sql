-- Aleitamento Materno — schema do Supabase (Fase 2)
-- Rode este arquivo no SQL Editor do seu projeto Supabase depois de criar o
-- projeto (Fase 0). Veja README.md para o passo a passo.

create extension if not exists "pgcrypto";

-- ---------------------------------------------------------------------------
-- Idiomas: conjunto fixo de 8, modelado como dado (não só constante no app)
-- para o admin poder ver o status de cada idioma sem precisar de novo deploy.
-- ---------------------------------------------------------------------------
create table languages (
  code text primary key,              -- 'pt','en','es','ja','de','ar','it','fr'
  label text not null,
  is_source boolean not null default false,        -- true só para 'pt'
  is_rtl boolean not null default false,            -- true só para 'ar'
  auto_translate boolean not null default true,     -- false para 'pt'
  apply_glossary_override boolean not null default false, -- true para ja/de/ar/it/fr
  reference_language text not null default 'en' references languages(code),
  sort_order integer not null
);

insert into languages (code, label, is_source, is_rtl, auto_translate, apply_glossary_override, reference_language, sort_order) values
  ('pt', 'Português', true,  false, false, false, 'en', 0),
  ('en', 'English',   false, false, true,  false, 'en', 1),
  ('es', 'Español',   false, false, true,  false, 'en', 2),
  ('ja', '日本語',      false, false, true,  true,  'en', 3),
  ('de', 'Deutsch',    false, false, true,  true,  'en', 4),
  ('ar', 'العربية',    false, true,  true,  true,  'en', 5),
  ('it', 'Italiano',   false, false, true,  true,  'en', 6),
  ('fr', 'Français',   false, false, true,  true,  'en', 7);

-- ---------------------------------------------------------------------------
-- Esqueleto estrutural do guia — agnóstico de idioma
-- ---------------------------------------------------------------------------
create table sections (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  parent_id uuid references sections(id),
  order_index integer not null,
  icon text,
  content_kind text not null default 'article'
    check (content_kind in ('article','myths_facts','legislation','checklist','faq')),
  created_at timestamptz not null default now()
);

-- Uma linha por (seção, idioma)
create table section_translations (
  id uuid primary key default gen_random_uuid(),
  section_id uuid not null references sections(id) on delete cascade,
  language_code text not null references languages(code),
  title text,
  subtitle text,
  body jsonb,                    -- documento Tiptap
  body_html_cache text,          -- HTML renderizado (SSR + input da tradução)
  status text not null default 'draft'
    check (status in ('draft','machine_translated','reviewed','published')),
  is_manual_override boolean not null default false,  -- protege correção manual de re-tradução
  needs_retranslation boolean not null default false,  -- true quando o PT mudou e esse idioma ainda não foi atualizado
  source_hash text,
  translated_at timestamptz,
  translation_engine text,
  updated_at timestamptz not null default now(),
  unique (section_id, language_code)
);

-- Conteúdo estruturado em tabela (mitos/verdades, legislação, checklist etc.)
create table content_tables (
  id uuid primary key default gen_random_uuid(),
  section_id uuid not null references sections(id) on delete cascade,
  table_type text not null,   -- 'myths_facts' | 'legislation' | 'special_conditions' | 'checklist' | 'tracking_diary'
  order_index integer not null
);

create table content_table_rows (
  id uuid primary key default gen_random_uuid(),
  table_id uuid not null references content_tables(id) on delete cascade,
  order_index integer not null,
  cells jsonb not null default '{}'
);

create table content_table_row_translations (
  id uuid primary key default gen_random_uuid(),
  row_id uuid not null references content_table_rows(id) on delete cascade,
  language_code text not null references languages(code),
  cells jsonb not null default '{}',
  is_manual_override boolean not null default false,
  unique (row_id, language_code)
);

-- Glossário: termo em PT -> termo de referência (padrão inglês) mostrado
-- nos 5 idiomas que não são PT/EN/ES.
create table glossary_terms (
  id uuid primary key default gen_random_uuid(),
  term_pt text not null,
  variants text[] not null default '{}',
  reference_term text not null,             -- ex: 'mastitis'
  reference_language text not null default 'en' references languages(code),
  notes text,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

-- Log auditável de cada tentativa de tradução
create table translation_log (
  id uuid primary key default gen_random_uuid(),
  section_id uuid references sections(id),
  row_id uuid references content_table_rows(id),
  language_code text not null references languages(code),
  status text not null check (status in ('pending','success','failed')),
  engine text,
  error_message text,
  requested_at timestamptz not null default now(),
  completed_at timestamptz
);

-- Admin: Supabase Auth (auth.users) + papel
create table admin_profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  display_name text not null,
  role text not null default 'editor' check (role in ('admin','editor')),
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

-- Mídia (imagens referenciadas no corpo Tiptap)
create table media_assets (
  id uuid primary key default gen_random_uuid(),
  storage_path text not null,
  alt_text jsonb not null default '{}',        -- {"pt": "...", "en": "..."}
  section_id uuid references sections(id),
  uploaded_by uuid references auth.users(id),
  created_at timestamptz not null default now()
);

-- ---------------------------------------------------------------------------
-- RLS: leitura pública só do que está publicado; CRUD completo para admins.
-- ---------------------------------------------------------------------------
alter table languages enable row level security;
alter table sections enable row level security;
alter table section_translations enable row level security;
alter table content_tables enable row level security;
alter table content_table_rows enable row level security;
alter table content_table_row_translations enable row level security;
alter table glossary_terms enable row level security;
alter table translation_log enable row level security;
alter table admin_profiles enable row level security;
alter table media_assets enable row level security;

create function is_admin_or_editor()
returns boolean
language sql
security definer
stable
as $$
  select exists (
    select 1 from admin_profiles
    where user_id = auth.uid() and is_active = true
  );
$$;

-- Idiomas e estrutura de seções: leitura pública livre (não expõe conteúdo)
create policy "languages_public_read" on languages for select using (true);
create policy "sections_public_read" on sections for select using (true);
create policy "content_tables_public_read" on content_tables for select using (true);
create policy "content_table_rows_public_read" on content_table_rows for select using (true);

-- Conteúdo traduzido: público só vê o que está publicado
create policy "section_translations_public_read" on section_translations
  for select using (status = 'published');

create policy "content_table_row_translations_public_read" on content_table_row_translations
  for select using (
    exists (
      select 1 from content_table_rows r
      join content_tables t on t.id = r.table_id
      join section_translations st on st.section_id = t.section_id
        and st.language_code = content_table_row_translations.language_code
      where r.id = content_table_row_translations.row_id
        and st.status = 'published'
    )
  );

-- Admin/editor: CRUD completo em todas as tabelas de conteúdo
create policy "languages_admin_write" on languages for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "sections_admin_write" on sections for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "section_translations_admin_write" on section_translations for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "content_tables_admin_write" on content_tables for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "content_table_rows_admin_write" on content_table_rows for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "content_table_row_translations_admin_write" on content_table_row_translations for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "glossary_terms_admin_all" on glossary_terms for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());
create policy "translation_log_admin_read" on translation_log for select
  using (is_admin_or_editor());
create policy "media_assets_public_read" on media_assets for select using (true);
create policy "media_assets_admin_write" on media_assets for all
  using (is_admin_or_editor()) with check (is_admin_or_editor());

-- admin_profiles: cada admin vê o próprio perfil; só role='admin' gerencia outros
create policy "admin_profiles_self_read" on admin_profiles for select
  using (user_id = auth.uid() or is_admin_or_editor());
create policy "admin_profiles_admin_manage" on admin_profiles for all
  using (
    exists (select 1 from admin_profiles p where p.user_id = auth.uid() and p.role = 'admin')
  )
  with check (
    exists (select 1 from admin_profiles p where p.user_id = auth.uid() and p.role = 'admin')
  );
