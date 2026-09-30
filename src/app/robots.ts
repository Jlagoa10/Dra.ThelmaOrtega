import type { MetadataRoute } from 'next'
import { allowIndexing, siteUrl } from '@/lib/seo'

export default function robots(): MetadataRoute.Robots {
  // Preview: nada é rastreado até o domínio definitivo ser configurado (ver lib/seo.ts).
  if (!allowIndexing) {
    return { rules: { userAgent: '*', disallow: '/' } }
  }

  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
