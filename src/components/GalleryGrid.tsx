'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Icon'
import type { GalleryItem } from '@/data/content'
import styles from './GalleryGrid.module.css'


function GalleryVideo({ item }: { item: GalleryItem }) {
  const [playing, setPlaying] = useState(false)
  const [failed, setFailed] = useState(false)
  const [paused, setPaused] = useState(false)
  const [muted, setMuted] = useState(false)
  const [volume, setVolume] = useState(100)
  const [time, setTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) videoRef.current.volume = volume / 100
  }, [playing, volume])

  useEffect(() => {
    const video = videoRef.current
    if (!playing || !video) return

    const reset = () => {
      video.pause()
      video.currentTime = 0
      setTime(0)
      setPlaying(false)
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) reset()
    }, { threshold: 0 })
    observer.observe(video)

    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [playing])

  return (
    <div className={styles.videoCard}>
      {playing ? (
        <div className={styles.player}>
        <video
          ref={videoRef}
          className={styles.video}
          src={item.videoUrl}
          poster={item.poster?.src}
          disablePictureInPicture
          disableRemotePlayback
          muted={muted}
          autoPlay
          playsInline
          preload="none"
          aria-label={item.caption}
          onPlay={() => setPaused(false)}
          onPause={() => setPaused(true)}
          onTimeUpdate={(event) => setTime(event.currentTarget.currentTime)}
          onDurationChange={(event) => setDuration(Number.isFinite(event.currentTarget.duration) ? event.currentTarget.duration : 0)}
          onError={() => { setFailed(true); setPlaying(false) }}
        />
          <div className={styles.playerControls} role="group" aria-label={`Controles: ${item.caption}`}>
            <button type="button" aria-label={paused ? 'Reproduzir' : 'Pausar'} onClick={() => {
              const video = videoRef.current
              if (!video) return
              if (video.paused) void video.play().catch(() => setPaused(true))
              else video.pause()
            }}><Icon name={paused ? 'play' : 'pause'} size={20} /></button>
            <input className={styles.progress} type="range" min={0} max={duration || 1} step={0.1} value={Math.min(time, duration || 1)} disabled={!duration} aria-label="Progresso do vídeo" onChange={(event) => {
              const nextTime = Number(event.target.value)
              if (videoRef.current) videoRef.current.currentTime = nextTime
              setTime(nextTime)
            }} />
            <div className={styles.volumeGroup} onPointerLeave={(event) => {
              if (event.pointerType !== 'mouse') return
              const focused = event.currentTarget.querySelector(':focus')
              if (focused instanceof HTMLElement) focused.blur()
            }}>
            <button type="button" aria-label={muted || volume === 0 ? 'Ativar som e ajustar volume' : 'Silenciar e ajustar volume'} aria-pressed={muted || volume === 0} onClick={() => {
              if (muted || volume === 0) { setMuted(false); if (volume === 0) setVolume(100) }
              else setMuted(true)
            }}><Icon name={muted || volume === 0 ? 'volumeOff' : 'volume'} size={20} /></button>
            <label className={styles.volumeControl}>
              <input type="range" min={0} max={100} step={1} value={muted ? 0 : volume} aria-label="Volume do vídeo" aria-orientation="vertical" aria-valuetext={`${muted ? 0 : volume}%`} onChange={(event) => {
                setVolume(Number(event.target.value))
                setMuted(false)
              }} />
              <span className={styles.volumeValue}>{muted ? 0 : volume}%</span>
            </label>
            </div>
          </div>
        </div>
      ) : (
        <button type="button" className={styles.videoTrigger} onClick={() => { setFailed(false); setPlaying(true) }} aria-label={`Reproduzir vídeo: ${item.caption}`}>
          {item.poster && <Image src={item.poster} alt="" sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" placeholder="blur" className={styles.poster} />}
          <span className={styles.play} aria-hidden="true"><Icon name="play" size={24} /></span>
          <span className={styles.videoLabel}>Assistir vídeo</span>
        </button>
      )}
      {failed && <p className={styles.videoError} role="status">Vídeo indisponível no momento. Tente novamente mais tarde.</p>}
      <p className={styles.videoTitle}>{item.caption}</p>
    </div>
  )
}

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <ul className={styles.grid}>
        {items.map((item, index) => (
          <li key={`${item.caption}-${index}`} className={styles.item} data-reveal="scale">
            {item.image ? (
              <div className={styles.photo}>
                <Image
                  src={item.image}
                  alt={item.alt ?? ''}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw"
                  placeholder="blur"
                  className={styles.image}
                  style={{ objectPosition: item.position }}
                />
                <span className={styles.caption} aria-hidden="true">
                  {item.caption}
                </span>
              </div>
            ) : item.videoUrl ? (
              <GalleryVideo item={item} />
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
  )
}
