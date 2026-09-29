import { GalleryGrid } from '@/components/GalleryGrid'
import { gallery } from '@/data/content'
import styles from './Gallery.module.css'

export function Gallery() {
  const hasPhotos = gallery.some((item) => item.image)

  return (
    <section id="galeria" className={`section ${styles.gallery}`} aria-labelledby="galeria-title">
      <div className="wrap">
        <header className={styles.head} data-reveal>
          <div className={styles.headTitle}>
            <span className="eyebrow">Galeria</span>
            <h2 id="galeria-title" className="title">
              Um pouco do dia a dia
            </h2>
          </div>
          {hasPhotos && <p className={styles.hint}>Toque em uma foto para ampliar.</p>}
        </header>

        <GalleryGrid items={gallery} />
      </div>
    </section>
  )
}
