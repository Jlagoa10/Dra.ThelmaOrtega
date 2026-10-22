'use client'

import Image from 'next/image'
import { useRef, useState, type KeyboardEvent, type MouseEvent, type TouchEvent } from 'react'
import { Icon } from '@/components/Icon'
import type { GalleryItem } from '@/data/content'
import styles from './GalleryGrid.module.css'

type Photo = Required<Pick<GalleryItem, 'image' | 'caption'>> & GalleryItem

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const photos = items.filter((item): item is Photo => Boolean(item.image))
  const [current, setCurrent] = useState<number | null>(null)
  const [closing, setClosing] = useState(false)
  const [videoOpen, setVideoOpen] = useState(false)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const touchStart = useRef<number | null>(null)

  const total = photos.length
  const wrap = (index: number) => (index + total) % total

  const open = (photo: Photo) => {
    setCurrent(photos.indexOf(photo))
    dialogRef.current?.showModal()
  }

  // Fecha com um fade curto (ou na hora, se o usuário preferir menos movimento).
  const close = () => {
    const dialog = dialogRef.current
    if (!dialog?.open || closing) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      dialog.close()
      return
    }
    setClosing(true)
    window.setTimeout(() => {
      dialog.close()
      setClosing(false)
    }, 260)
  }
  const go = (delta: number) => setCurrent((index) => (index === null ? index : wrap(index + delta)))

  const onDialogClick = (event: MouseEvent<HTMLDialogElement>) => {
    const target = event.target as HTMLElement
    if (target === event.currentTarget || target.hasAttribute('data-close-area')) close()
  }

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (total < 2) return
    if (event.key === 'ArrowLeft') go(-1)
    if (event.key === 'ArrowRight') go(1)
  }

  const onTouchStart = (event: TouchEvent) => {
    touchStart.current = event.touches[0].clientX
  }

  const onTouchEnd = (event: TouchEvent) => {
    if (touchStart.current === null || total < 2) return
    const delta = event.changedTouches[0].clientX - touchStart.current
    touchStart.current = null
    if (Math.abs(delta) > 50) go(delta < 0 ? 1 : -1)
  }

  // Renderiza a foto atual e as vizinhas, para a navegação não esperar o carregamento.
  const visible = current === null ? [] : [...new Set([current, wrap(current + 1), wrap(current - 1)])]
  const active = current === null ? null : photos[current]

  return (
    <>
      <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={`${item.caption}-${index}`} className={styles.item} data-reveal="scale">
            {item.image ? (
              <button
                type="button"
                className={styles.photo}
                onClick={() => open(item as Photo)}
                aria-label={`Ampliar foto: ${item.caption}`}
                aria-haspopup="dialog"
              >
                <Image
                  src={item.image}
                  alt={item.alt ?? ''}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                  placeholder="blur"
                  className={styles.image}
                  style={{ objectPosition: item.position }}
                />
                <span className={styles.caption} aria-hidden="true">
                  {item.caption}
                </span>
              </button>
            ) : item.videoUrl ? (
              <div className={styles.videoCard}>
                {videoOpen ? (
                  <iframe
                    src={`${item.videoUrl}embed/`}
                    title="Publicação da Thelma no Instagram"
                    className={styles.videoFrame}
                    allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                  />
                ) : (
                  <button type="button" className={styles.videoTrigger} onClick={() => setVideoOpen(true)}>
                    <span className={styles.play} aria-hidden="true">▶</span>
                    <span className="eyebrow">Thelma em vídeo</span>
                    <strong>{item.caption}</strong>
                    <span>Toque para carregar o vídeo</span>
                  </button>
                )}
                <a className={styles.videoLink} href={item.videoUrl} target="_blank" rel="noopener noreferrer">
                  Assistir no Instagram ↗
                </a>
              </div>
            ) : (
              <div className={styles.contentCard}>
                <Icon name={item.icon ?? 'heart'} size={28} />
                <h3>{item.caption}</h3>
                <p>{item.text}</p>
              </div>
            )}
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className={styles.lightbox}
        aria-label="Foto ampliada"
        data-closing={closing || undefined}
        onCancel={(event) => {
          event.preventDefault()
          close()
        }}
        onClose={() => {
          setCurrent(null)
          setClosing(false)
        }}
        onClick={onDialogClick}
        onKeyDown={onKeyDown}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className={styles.stage} data-close-area>
          <button type="button" className={`${styles.control} ${styles.close}`} onClick={close} aria-label="Fechar">
            <Icon name="close" size={20} />
          </button>

          <figure className={styles.figure} data-close-area>
            <div className={styles.media} data-close-area>
              {visible.map((index) => (
                <Image
                  key={index}
                  src={photos[index].image}
                  alt={photos[index].alt ?? ''}
                  sizes="(max-width: 900px) 100vw, 80vw"
                  loading="eager"
                  className={index === current ? styles.lbImage : styles.lbImageHidden}
                  aria-hidden={index === current ? undefined : true}
                />
              ))}
            </div>
            {active && (
              <figcaption className={styles.lbCaption} aria-live="polite">
                {active.caption}
                {total > 1 && (
                  <span className={styles.counter}>
                    {(current ?? 0) + 1} / {total}
                  </span>
                )}
              </figcaption>
            )}
          </figure>

          {total > 1 && (
            <>
              <button type="button" className={`${styles.control} ${styles.prev}`} onClick={() => go(-1)} aria-label="Foto anterior">
                <Icon name="chevronLeft" size={20} />
              </button>
              <button type="button" className={`${styles.control} ${styles.next}`} onClick={() => go(1)} aria-label="Próxima foto">
                <Icon name="chevronRight" size={20} />
              </button>
            </>
          )}
        </div>
      </dialog>
    </>
  )
}
