import { site } from '@/data/site'
import { mapsUrl } from '@/lib/links'

/**
 * URL pública do site. Defina NEXT_PUBLIC_SITE_URL quando o domínio existir;
 * na Vercel, o domínio de produção do projeto é usado automaticamente.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')
).replace(/\/$/, '')

export function localBusinessJsonLd(imagePath: string) {
  return {
    '@context': 'https://schema.org',
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
    areaServed: { '@type': 'City', name: site.address.city },
    hasMap: mapsUrl,
    sameAs: [site.instagram.url],
    knowsAbout: ['Fisioterapia pós-operatória', 'Fisioterapia oncológica', 'Fisioterapia pós-parto'],
    employee: {
      '@type': 'Person',
      name: site.professional,
      jobTitle: 'Fisioterapeuta',
    },
  }
}
