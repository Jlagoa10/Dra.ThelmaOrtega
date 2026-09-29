'use client'

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react'
import { ButtonLink } from '@/components/ButtonLink'
import { Icon } from '@/components/Icon'
import { navLinks, site } from '@/data/site'
import { whatsappUrl } from '@/lib/links'
import styles from './Header.module.css'

const DESKTOP_QUERY = '(min-width: 1180px)'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const close = useCallback((returnFocus = false) => {
    setOpen(false)
    if (returnFocus) toggleRef.current?.focus()
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Destaca no menu a seção que está no meio da tela.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.getElementById(href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((section) => observer.observe(section))

    const hero = document.getElementById('inicio')
    const heroObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setActive(null)
    })
    if (hero) heroObserver.observe(hero)

    return () => {
      observer.disconnect()
      heroObserver.disconnect()
    }
  }, [])

  // Menu mobile: trava o scroll, isola o resto da página e fecha no Esc.
  useEffect(() => {
    const root = document.documentElement
    const outside = document.querySelectorAll<HTMLElement>('main, footer, [data-float]')

    if (open) {
      root.setAttribute('data-menu-open', '')
      outside.forEach((el) => (el.inert = true))
      requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>('a')?.focus())
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close(true)
    }
    if (open) document.addEventListener('keydown', onKey)

    return () => {
      root.removeAttribute('data-menu-open')
      outside.forEach((el) => (el.inert = false))
      document.removeEventListener('keydown', onKey)
    }
  }, [open, close])

  useEffect(() => {
    const media = window.matchMedia(DESKTOP_QUERY)
    const onChange = () => media.matches && setOpen(false)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return (
    <header className={styles.header} data-scrolled={scrolled || undefined} data-open={open || undefined}>
      <div className={`wrap ${styles.bar}`}>
        <a className={styles.brand} href="#inicio" onClick={() => close()}>
          <span className={styles.brandName}>{site.name}</span>
          <span className={styles.brandRole}>Fisioterapia</span>
        </a>

        <nav className={styles.nav} aria-label="Principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} aria-current={active === link.href ? 'true' : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <ButtonLink href={whatsappUrl()} size="small" className={styles.cta}>
          Agendar avaliação
        </ButtonLink>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span aria-hidden="true" />
        </button>
      </div>

      <div
        id="menu-mobile"
        ref={panelRef}
        className={styles.panel}
        inert={!open}
      >
        <nav aria-label="Menu" className={`wrap ${styles.panelInner}`}>
          <ol className={styles.panelLinks}>
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ '--i': index } as CSSProperties}>
                <a href={link.href} onClick={() => close()}>
                  <span className={styles.panelIndex} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {link.label}
                </a>
              </li>
            ))}
          </ol>
          <div className={styles.panelFoot}>
            <ButtonLink href={whatsappUrl()} icon="whatsapp">
              Agendar avaliação pelo WhatsApp
            </ButtonLink>
            <a className={styles.panelSocial} href={site.instagram.url} target="_blank" rel="noopener noreferrer">
              <Icon name="instagram" size={18} />
              {site.instagram.handle}
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
