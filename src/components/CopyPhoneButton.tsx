'use client'

import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Icon'

type Status = 'idle' | 'copied' | 'selected'

const labels: Record<Status, string> = {
  idle: 'Copiar',
  copied: 'Copiado',
  selected: 'Selecionado',
}

/** Copia o telefone; se a área de transferência falhar, seleciona o número na tela. */
export function CopyPhoneButton({ phone, targetId, className }: { phone: string; targetId: string; className?: string }) {
  const [status, setStatus] = useState<Status>('idle')
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timer.current), [])

  const flash = (next: Status) => {
    setStatus(next)
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setStatus('idle'), 2000)
  }

  const selectFallback = () => {
    const target = document.getElementById(targetId)
    const selection = window.getSelection()
    if (!target || !selection) return
    const range = document.createRange()
    range.selectNodeContents(target)
    selection.removeAllRanges()
    selection.addRange(range)
    flash('selected')
  }

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(phone)
      flash('copied')
    } catch {
      selectFallback()
    }
  }

  return (
    <button type="button" className={className} onClick={copy} data-status={status}>
      <Icon name={status === 'copied' ? 'check' : 'copy'} size={16} />
      <span aria-live="polite">{labels[status]}</span>
      {status === 'idle' && <span className="sr-only"> telefone</span>}
    </button>
  )
}
