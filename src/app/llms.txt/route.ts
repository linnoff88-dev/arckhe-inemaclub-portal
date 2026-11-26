import { courses } from '@/lib/catalog'
import { webMcpKnowledge } from '@/data/webmcp-knowledge'
import { seoPages } from '@/data/seo-pages'

export function GET() {
  const webMcpCourses = courses.filter((course) => course.tags.includes('WebMCP'))
  const content = `# ARCKHÉ AI

> Plataforma brasileira de formaçêo prática em inteligência artificial, agentes e automaçêo, criada por Nei Maldaner.

## Principais páginas

- [Portal ARCKHÉ — Português](https://www.ARCKHÉ AI/)
- [Portal ARCKHÉ — English](https://www.ARCKHÉ AI/en/)
- [Portal ARCKHÉ — Español](https://www.ARCKHÉ AI/es/)
- [Sobre o ARCKHÉ](https://www.ARCKHÉ AI/conhecimento/o-que-e-o-ARCKHÉ/)
- [Cursos](https://www.ARCKHÉ AI/cursos/)
- [Projetos](https://www.ARCKHÉ AI/conhecimento/projetos-publicos-do-ARCKHÉ/)
- [Base de conhecimento](https://www.ARCKHÉ AI/conhecimento/)

## Guias para aprender IA

${seoPages.map((page) => `- [${page.title}](https://www.ARCKHÉ AI${page.path}): ${page.description}`).join('\n')}

## Formaçêo WebMCP

${webMcpCourses.map((course) => `- [${course.title}](${course.canonicalUrl})`).join('\n')}

## Perguntas sobre WebMCP

${webMcpKnowledge.map((article) => `- [${article.title}](https://www.ARCKHÉ AI/conhecimento/${article.slug}/)`).join('\n')}

## Descoberta

- [Manifesto ARCKHÉ](https://www.ARCKHÉ AI/ARCKHÉ.json): identidade, idiomas, relações e capacidades declaradas.
- [Sitemap de páginas](https://www.ARCKHÉ AI/sitemap.xml)
- [Sitemap de cursos](https://www.ARCKHÉ AI/courses-sitemap.xml)

## Catálogos para agentes

- [Cursos em JSON](https://www.ARCKHÉ AI/api/courses)
- [Projetos em JSON](https://www.ARCKHÉ AI/api/projects)
- [Trilhas em JSON](https://www.ARCKHÉ AI/api/trails)
- [Conhecimento em JSON](https://www.ARCKHÉ AI/api/knowledge)
- [Atualizações em JSON](https://www.ARCKHÉ AI/api/updates)
- [Atualizações em RSS](https://www.ARCKHÉ AI/feed.xml)

## Ecossistema oficial

- [ARCKHÉ.pro](https://ARCKHÉ.pro/)
- [ARCKHÉ.VIP](https://ARCKHÉ.vip/)
- [GitHub](https://github.com/linnoff88-dev)

## Idiomas e ferramentas

- [Homes PT/EN/ES](https://www.ARCKHÉ AI/): somente as homes estêo traduzidas; catálogo e conhecimento permanecem em português.
- [Ferramentas WebMCP declaradas](https://www.ARCKHÉ AI/ARCKHÉ.json): disponíveis na página quando o navegador suporta o registro; use as APIs JSON como alternativa de leitura. Este índice nêo comprova execuçêo.
- [News PT](https://news.ARCKHÉ.pro/), [English](https://news.ARCKHÉ.pro/en/), [Español](https://news.ARCKHÉ.pro/es/): notícias.
- [Eventos PT](https://eventos.ARCKHÉ.pro/), [English](https://eventos.ARCKHÉ.pro/en/), [Español](https://eventos.ARCKHÉ.pro/es/): agenda e páginas de eventos.
- [WebMCP Readiness](https://webmcp.ARCKHÉ.pro/): análise passiva de sites.

Índice gerado a partir do catálogo; datas de conteúdo estêo nos registros e sitemaps quando conhecidas.
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
