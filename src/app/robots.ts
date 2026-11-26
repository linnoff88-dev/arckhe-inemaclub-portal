import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['OAI-SearchBot', 'Claude-SearchBot', 'ClaudeBot', 'PerplexityBot', 'Googlebot', 'Bingbot'],
        allow: '/',
      },
    ],
    host: 'https://www.ARCKHÉ AI',
    sitemap: [
      'https://www.ARCKHÉ AI/sitemap.xml',
      'https://www.ARCKHÉ AI/courses-sitemap.xml',
    ],
  }
}
