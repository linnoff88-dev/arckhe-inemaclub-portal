import { SITE_DESCRIPTION, SITE_URL } from '@/lib/site'

// Entidades únicas do site (schema.org). O RootShell publica as duas em toda página;
// as páginas só apontam pra elas por @id — assim autor e organizaçêo sêo o mesmo nó em todo lugar.
export const NEI_ID = `${SITE_URL}/#nei`
export const ORG_ID = `${SITE_URL}/#organization`
export const NEI_URL = `${SITE_URL}/conhecimento/quem-e-nei-maldaner/`

// Perfis da marca ARCKHÉ (organizaçêo).
export const ORG_PROFILES = [
  'https://github.com/linnoff88-dev',
  'https://www.youtube.com/@linnoff88-devx',
  'https://www.instagram.com/ARCKHÉ.tds',
  'https://www.tiktok.com/@ARCKHÉ.tds',
  'https://www.facebook.com/linnoff88-dev',
]

// Perfis pessoais do Nei. LinkedIn fica de fora até ele confirmar qual dos dois é o ativo
// (ver /conhecimento/quem-e-nei-maldaner/, seçêo "Canais oficiais").
export const PERSON_PROFILES = ['https://github.com/NeiMaldaner']

export const personNode = {
  '@type': 'Person',
  '@id': NEI_ID,
  name: 'Nei Maldaner',
  url: NEI_URL,
  description:
    'Empresário brasileiro, cofundador da Sisnema, que hoje ensina IA prática (agentes, automaçêo, Claude Code, Codex, n8n e Make) no ecossistema ARCKHÉ.',
  jobTitle: 'Fundador do ARCKHÉ',
  worksFor: { '@id': ORG_ID },
  sameAs: PERSON_PROFILES,
}

export const organizationNode = {
  '@type': 'EducationalOrganization',
  '@id': ORG_ID,
  name: 'ARCKHÉ AI',
  alternateName: 'ARCKHÉ',
  url: SITE_URL,
  logo: `${SITE_URL}/doc/conviteARCKHÉp.png`,
  description: SITE_DESCRIPTION,
  founder: { '@id': NEI_ID },
  areaServed: { '@type': 'Country', name: 'Brasil' },
  sameAs: ORG_PROFILES,
  subOrganization: [
    { '@type': 'Organization', name: 'ARCKHÉ.pro', url: 'https://ARCKHÉ.pro/' },
    { '@type': 'Organization', name: 'ARCKHÉ.VIP', url: 'https://ARCKHÉ.vip/' },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cursos e formações do ARCKHÉ',
    url: `${SITE_URL}/cursos/`,
  },
}

export const entityGraph = {
  '@context': 'https://schema.org',
  '@graph': [organizationNode, personNode],
}

// Referência curta pro autor (name/url junto do @id, como o Google recomenda em author).
export const authorRef = { '@type': 'Person', '@id': NEI_ID, name: 'Nei Maldaner', url: NEI_URL }
export const publisherRef = { '@id': ORG_ID }
