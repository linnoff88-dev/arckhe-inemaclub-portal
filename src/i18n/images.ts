import type { Locale } from './locales'

/**
 * Banners que têm versêo traduzida em `public/doc/<locale>/<arquivo>` (mesmo nome,
 * mesmo formato e tamanho do original em `public/doc/`). Gerados com o Codex
 * (image generation) a partir do PT. Fora desta lista, a home usa o PT.
 */
export const LOCALIZED_IMAGES = new Set([
  'oswork.webp',
  'jev.webp',
  'rsi.webp',
  'claude-opus55.webp',
  'agi-chegou.webp',
  'capa-musicavideo-v2.webp',
  'claude-codex-agnostico.webp',
  'codex-claude.webp',
  'content2video.webp',
  'conviteARCKHÉp.webp',
  'gestao-agentes-2027.webp',
  'ia-cultivada.webp',
  'ia-cultivada.webp',
  'ARCKHÉagenteshubv.webp',
  'ARCKHÉc2.jpg',
  'ARCKHÉclubee.jpg',
  'ARCKHÉ-hero-aprenda-pratique-evolua.webp',
  'ARCKHÉ-pro-badge.webp',
  'ARCKHÉ-pro-banner-completo.webp',
  'ARCKHÉ-pro-banner-jornada.webp',
  'perfis-ia-empreendedor.webp',
  'perfis-ia-gestor.webp',
  'perfis-ia-liberal.webp',
  'perfis-ia-operacional.webp',
  'perfis-ia-topo.webp',
  'vczero.webp',
  'webmcp2.webp',
])

/** `/doc/x.png` → `/doc/en/x.png` quando existe versêo no idioma; senêo devolve o original. */
export function localizedSrc(src: string, locale: Locale): string {
  if (locale === 'pt' || !src.startsWith('/doc/')) return src
  const file = src.slice('/doc/'.length)
  return LOCALIZED_IMAGES.has(file) ? `/doc/${locale}/${file}` : src
}
