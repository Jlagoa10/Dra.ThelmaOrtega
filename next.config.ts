import type { NextConfig } from 'next'

const isDev = process.env.NODE_ENV === 'development'
// Nos previews da Vercel, a barra de comentários carrega recursos de vercel.live.
const vercelLive = process.env.VERCEL_ENV === 'preview' ? ' https://vercel.live' : ''

/**
 * CSP sem nonce, para as páginas continuarem estáticas. Fora o próprio site,
 * só o mapa do Google (iframe) é carregado; WhatsApp e Instagram são links.
 */
const contentSecurityPolicy = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}${vercelLive}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' blob: data:",
  "font-src 'self'",
  "media-src 'self'",
  `connect-src 'self'${vercelLive}`,
  `frame-src https://www.google.com${vercelLive}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  'upgrade-insecure-requests',
].join('; ')

// A Vercel já envia HSTS; fora dela (ex.: Hostinger com Node.js) o próprio site envia.
const hsts = process.env.VERCEL ? [] : [{ key: 'Strict-Transport-Security', value: 'max-age=63072000' }]

const securityHeaders = [
  ...hsts,
  { key: 'Content-Security-Policy', value: contentSecurityPolicy },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=()' },
]

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
  },
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }]
  },
}

export default nextConfig
