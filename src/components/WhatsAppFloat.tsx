'use client'

import { useEffect, useState } from 'react'
import { Icon } from '@/components/Icon'
import { whatsappUrl } from '@/lib/links'
import styles from './WhatsAppFloat.module.css'

/**
 * Aparece depois do hero e some na seção de contato,
 * onde o mesmo convite já está em destaque.
 */
export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('inicio')
    const contact = document.getElementById('contato')
    const state = { heroVisible: true, contactVisible: false }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === hero) state.heroVisible = entry.isIntersecting
        if (entry.target === contact) state.contactVisible = entry.isIntersecting
      }
      setVisible(!state.heroVisible && !state.contactVisible)
    })

    if (hero) observer.observe(hero)
    if (contact) observer.observe(contact)
    return () => observer.disconnect()
  }, [])

  return (
    <a
      data-float
      className={styles.float}
      data-visible={visible || undefined}
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp (abre em nova aba)"
      tabIndex={visible ? undefined : -1}
    >
      <Icon name="whatsapp" size={24} />
      <span className={styles.label}>Agendar avaliação</span>
    </a>
  )
}
