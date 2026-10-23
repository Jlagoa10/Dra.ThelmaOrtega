import { faq } from '@/data/content'
import { site } from '@/data/site'
import { mapsUrl } from '@/lib/links'

/**
 * URL pública do site, usada em canonical, Open Graph, sitemap e Schema.org.
 * 1. NEXT_PUBLIC_SITE_URL, quando o domínio definitivo estiver configurado;
 * 2. na Vercel, o endereço do próprio deploy: o do branch em previews e o
 *    domínio do projeto em produção (variáveis que a Vercel já fornece);
 * 3. localhost, no desenvolvimento.
 */
function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL

  const vercelHost =
    process.env.VERCEL_ENV === 'preview'
      ? (process.env.VERCEL_BRANCH_URL ?? process.env.VERCEL_URL)
      : process.env.VERCEL_PROJECT_PRODUCTION_URL

  return vercelHost ? `https://${vercelHost}` : 'http://localhost:3000'
}

export const siteUrl = resolveSiteUrl().replace(/\/$/, '')

/**
 * O site só pede para ser indexado quando o domínio definitivo estiver
 * configurado. Enquanto for preview (*.vercel.app), fica fora dos buscadores,
 * para o endereço provisório não competir com o domínio final.
 */
export const allowIndexing = Boolean(process.env.NEXT_PUBLIC_SITE_URL)

/** Serviços que aparecem no site; entram no catálogo do Schema.org. */
const services = [
  'Fisioterapia no pós-operatório de cirurgias plásticas',
  'Fisioterapia oncológica com foco em câncer de mama',
  'Fisioterapia na recuperação pós-parto',
  'Laser terapêutico',
  'Acompanhamento hospitalar no pós-operatório',
]

function localBusiness(imagePath: string) {
  return {
    '@type': 'Physiotherapy',
    '@id': `${siteUrl}/#fisioterapia`,
    name: site.name,
    description: site.positioning,
    url: `${siteUrl}/`,
    image: `${siteUrl}${imagePath}`,
    telephone: site.phone.e164,
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.street} - ${site.address.district}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    areaServed: [
      { '@type': 'City', name: site.address.city },
      ...site.serviceArea.map((name) => ({ '@type': 'Place', name })),
    ],
    hasMap: mapsUrl,
    sameAs: [site.instagram.url],
    knowsAbout: [
      'Fisioterapia pós-operatória',
      'Pós-operatório de cirurgia plástica',
      'Fisioterapia oncológica',
      'Câncer de mama',
      'Fisioterapia pós-parto',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Atendimentos de fisioterapia',
      itemListElement: services.map((name) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name },
      })),
    },
    employee: {
      '@type': 'Person',
      name: site.professional,
      jobTitle: 'Fisioterapeuta',
    },
  }
}

function faqPage() {
  return {
    '@type': 'FAQPage',
    '@id': `${siteUrl}/#duvidas`,
    mainEntity: faq.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }
}

/** Dados estruturados da página: o consultório (negócio local) e as dúvidas frequentes. */
export function structuredData(imagePath: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [localBusiness(imagePath), faqPage()],
  }
}
