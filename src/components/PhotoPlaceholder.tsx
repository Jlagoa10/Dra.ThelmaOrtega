import { Icon } from '@/components/Icon'
import styles from './PhotoPlaceholder.module.css'

type PhotoPlaceholderProps = {
  label: string
  className?: string
}

/** Ocupa o lugar de uma foto que ainda não foi enviada, mantendo a composição. */
export function PhotoPlaceholder({ label, className }: PhotoPlaceholderProps) {
  return (
    <div
      className={[styles.placeholder, className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`Espaço reservado para foto: ${label}`}
    >
      <Icon name="camera" size={26} className={styles.icon} />
      <span className={styles.label}>{label}</span>
      <span className={styles.note}>Foto em breve</span>
    </div>
  )
}
