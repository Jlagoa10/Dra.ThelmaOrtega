import type { ReactNode } from 'react'

const stroke = (children: ReactNode) => (
  <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
    {children}
  </g>
)

const icons = {
  play: <path fill="currentColor" d="M8 5.5a.8.8 0 0 1 1.2-.7l10 6.5a.8.8 0 0 1 0 1.4l-10 6.5a.8.8 0 0 1-1.2-.7z" />,
  pause: <g fill="currentColor"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></g>,
  volume: stroke(<g strokeWidth="1.7"><path d="M11 5 6 9H3v6h3l5 4zM15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" /></g>),
  volumeOff: stroke(<g strokeWidth="1.7"><path d="M11 5 6 9H3v6h3l5 4zM16 9l6 6M22 9l-6 6" /></g>),
  whatsapp: (
    <path
      fill="currentColor"
      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
    />
  ),
  arrow: stroke(<path strokeWidth="1.6" d="M5 12h14M13 6l6 6-6 6" />),
  arrowUp: stroke(<path strokeWidth="1.6" d="M12 19V5M6 11l6-6 6 6" />),
  chevronLeft: stroke(<path strokeWidth="1.5" d="M15 5l-7 7 7 7" />),
  chevronRight: stroke(<path strokeWidth="1.5" d="M9 5l7 7-7 7" />),
  close: stroke(<path strokeWidth="1.5" d="M6 6l12 12M18 6L6 18" />),
  plus: stroke(<path strokeWidth="1.5" d="M12 5v14M5 12h14" />),
  check: stroke(<path strokeWidth="1.6" d="M5 12.5l4.5 4.5L19 7.5" />),
  copy: stroke(
    <g strokeWidth="1.5">
      <rect x="8.5" y="8.5" width="11" height="11" rx="2.5" />
      <path d="M15.5 8.5V7a2.5 2.5 0 0 0-2.5-2.5H7A2.5 2.5 0 0 0 4.5 7v6A2.5 2.5 0 0 0 7 15.5h1.5" />
    </g>,
  ),
  pin: stroke(
    <g strokeWidth="1.5">
      <path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.3" />
    </g>,
  ),
  instagram: stroke(
    <g strokeWidth="1.5">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r=".6" fill="currentColor" />
    </g>,
  ),
  phone: stroke(
    <path
      strokeWidth="1.5"
      d="M6.6 3.8 9 3.5l1.6 4-2 1.4a11 11 0 0 0 6.5 6.5l1.4-2 4 1.6-.3 2.4a2 2 0 0 1-2.1 1.7C10.7 18.6 5.4 13.3 4.9 6a2 2 0 0 1 1.7-2.2z"
    />,
  ),
  camera: stroke(
    <g strokeWidth="1.2">
      <path d="M4 8h3l1.6-2.2h6.8L17 8h3v11H4z" />
      <circle cx="12" cy="13.2" r="3.4" />
    </g>,
  ),
  scar: stroke(
    <g strokeWidth="1.1">
      <path d="M3 15c5-7 13-7 18 0" />
      <path d="M6.2 10.1l1.6 2.3M12 8.4v2.7M17.8 10.1l-1.6 2.3M9 9l.9 2.5M15 9l-.9 2.5" />
    </g>,
  ),
  ribbon: stroke(
    <g strokeWidth="1.1">
      <path d="M12 3.2c-2 0-3.4 1.5-3.4 3.4 0 2.5 2 4.9 5.6 10.1L16.8 21" />
      <path d="M12 3.2c2 0 3.4 1.5 3.4 3.4 0 2.5-2 4.9-5.6 10.1L7.2 21" />
    </g>,
  ),
  motherhood: stroke(
    <g strokeWidth="1.1">
      <circle cx="9" cy="6.8" r="2.8" />
      <path d="M4 21c0-4.6 2.3-7.9 5.8-8.4" />
      <circle cx="15.6" cy="13.8" r="2.2" />
      <path d="M11.2 21c.6-2.5 2.3-4 4.4-4s3.8 1.5 4.4 4" />
    </g>,
  ),
  compass: stroke(
    <g strokeWidth="1.2">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.2 8.8l-1.9 4.5-4.5 1.9 1.9-4.5z" />
    </g>,
  ),
  together: stroke(
    <g strokeWidth="1.2">
      <circle cx="9" cy="12" r="5" />
      <circle cx="15" cy="12" r="5" />
    </g>,
  ),
  heart: stroke(
    <path strokeWidth="1.2" d="M12 19.5s-7-4.3-7-9.6A3.9 3.9 0 0 1 12 7.6a3.9 3.9 0 0 1 7 2.3c0 5.3-7 9.6-7 9.6z" />,
  ),
} satisfies Record<string, ReactNode>

export type IconName = keyof typeof icons

type IconProps = {
  name: IconName
  className?: string
  size?: number
}

export function Icon({ name, className, size = 20 }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {icons[name]}
    </svg>
  )
}
