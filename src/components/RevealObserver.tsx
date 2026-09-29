'use client'

import { useEffect } from 'react'

/**
 * Anima a entrada dos elementos marcados com `data-reveal`.
 * Só esconde o que está abaixo da primeira tela: se o JS falhar ou o
 * usuário preferir menos movimento, todo o conteúdo continua visível.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const fold = window.innerHeight * 0.92

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const el = entry.target as HTMLElement
          const siblings = Array.from(el.parentElement?.children ?? []).filter((child) =>
            child.hasAttribute('data-reveal'),
          )
          const delay = Math.max(0, siblings.indexOf(el)) * 90
          el.style.transitionDelay = `${delay}ms`
          el.classList.remove('is-pending')
          observer.unobserve(el)
          window.setTimeout(() => {
            el.style.transitionDelay = ''
          }, 1200 + delay)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.06 },
    )

    for (const el of elements) {
      if (el.getBoundingClientRect().top < fold) continue
      el.classList.add('is-pending', 'reveal-on')
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
