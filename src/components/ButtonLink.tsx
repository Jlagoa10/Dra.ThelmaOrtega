import type { ReactNode } from 'react'
import { Icon, type IconName } from '@/components/Icon'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'light' | 'ghost' | 'ghost-light'
  size?: 'default' | 'small'
  icon?: IconName
  trailingArrow?: boolean
  className?: string
}

export function ButtonLink({
  href,
  children,
  variant = 'primary',
  size = 'default',
  icon,
  trailingArrow,
  className,
}: ButtonLinkProps) {
  const external = href.startsWith('http')
  const classes = ['btn', variant !== 'primary' && `btn--${variant}`, size === 'small' && 'btn--small', className]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {icon && <Icon name={icon} />}
      <span>{children}</span>
      {trailingArrow && <Icon name="arrow" className="btn__arrow" size={18} />}
      {external && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  )
}
