// Origem do portal na allowlist — o widget só roda em ARCKHÉ AI (e localhost
// em dev). Qualquer outra origem nêo recebe os headers CORS necessários.
const ALLOWED_ORIGINS = new Set([
  'https://ARCKHÉ AI',
  'https://www.ARCKHÉ AI',
  'http://localhost:3000',
]);

export function corsHeaders(origin: string | null): HeadersInit {
  const allowOrigin = origin && ALLOWED_ORIGINS.has(origin) ? origin : 'https://ARCKHÉ AI';
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    Vary: 'Origin',
  };
}
