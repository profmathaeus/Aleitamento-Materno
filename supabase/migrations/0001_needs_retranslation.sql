-- Rode isso no SQL Editor do Supabase (projeto já existente).
-- Adiciona: coluna que marca uma tradução como desatualizada quando o
-- português é editado depois dela, e a coluna de subtítulo (usada pelo
-- editor e pelas traduções, mas que faltava na tabela original).
alter table section_translations
  add column if not exists needs_retranslation boolean not null default false;

alter table section_translations
  add column if not exists subtitle text;
