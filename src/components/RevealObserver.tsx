'use client'

import { useEffect } from 'react'

const STAGGER_MS = 90
const MAX_STAGGER_STEPS = 6

/**
 * Anima a entrada dos elementos marcados com `data-reveal` (ver globals.css).
 * - Só esconde o que está abaixo da primeira tela: se o JS falhar ou o
 *   usuário preferir menos movimento, todo o conteúdo continua visível.
 * - Elementos que entram na tela juntos são escalonados em ordem de leitura,
 *   para nada aparecer tudo de uma vez.
 * - Cada elemento anima uma única vez.
 */
export function RevealObserver() {
  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) return

    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const fold = window.innerHeight * 0.92

    const observer = new IntersectionObserver(
      (entries) => {
        const entering = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target as HTMLElement)
          .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1))

        entering.forEach((el, index) => {
          const delay = Math.min(index, MAX_STAGGER_STEPS) * STAGGER_MS
          el.style.setProperty('--reveal-delay', `${delay}ms`)
          el.classList.remove('is-pending')
          el.classList.add('is-revealed')
          observer.unobserve(el)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0 },
    )

    for (const el of elements) {
      if (el.getBoundingClientRect().top < fold) continue
      el.classList.add('is-pending')
      observer.observe(el)
    }

    return () => observer.disconnect()
  }, [])

  return null
}
