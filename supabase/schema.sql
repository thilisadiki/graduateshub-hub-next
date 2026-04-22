-- Graduates Hub: Proof of Work portfolio schema (Phase 1)
-- Run this once in the Supabase SQL editor.

create extension if not exists pgcrypto;

create table if not exists public.portfolio_proofs (
  id text primary key,
  task_id text not null,
  task_title text not null,
  task_field text not null,
  graduate_name text not null,
  submission text not null,
  submission_links jsonb not null default '[]'::jsonb,
  evaluation jsonb not null,
  created_at timestamptz not null default now()
);

create index if not exists portfolio_proofs_created_at_idx
  on public.portfolio_proofs (created_at desc);

create index if not exists portfolio_proofs_task_id_idx
  on public.portfolio_proofs (task_id);

alter table public.portfolio_proofs enable row level security;

-- Public, anonymous read by slug. Writes go through the service role
-- from our API route, so no public insert/update/delete policy is needed.
drop policy if exists "Public read portfolio proofs" on public.portfolio_proofs;
create policy "Public read portfolio proofs"
  on public.portfolio_proofs
  for select
  using (true);
