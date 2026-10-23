import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Italianno, Manrope } from 'next/font/google'
import portrait from '@/assets/images/dra-thelma-ortega.webp'
import { Header } from '@/components/Header'
import { RevealObserver } from '@/components/RevealObserver'
import { WhatsAppFloat } from '@/components/WhatsAppFloat'
import { site } from '@/data/site'
import { allowIndexing, localBusinessJsonLd, siteUrl } from '@/lib/seo'
import { Footer } from '@/sections/Footer'

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

const italianno = Italianno({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-italianno',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: site.title,
  description: site.description,
  applicationName: site.name,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: `${site.name} — Fisioterapia`,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
  },
  robots: allowIndexing ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false, address: false, email: false },
  other: {
    'geo.region': 'BR-SP',
    'geo.placename': 'São Bernardo do Campo',
  },
}

export const viewport: Viewport = {
  themeColor: '#f9efe5',
  colorScheme: 'light',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = JSON.stringify(localBusinessJsonLd(portrait.src)).replace(/</g, '\\u003c')

  return (
    <html lang="pt-BR" data-scroll-behavior="smooth" className={`${manrope.variable} ${italianno.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  )
}
