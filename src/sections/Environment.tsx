import Image from 'next/image'
import { PhotoPlaceholder } from '@/components/PhotoPlaceholder'
import { environment, type GalleryItem } from '@/data/content'
import styles from './Environment.module.css'

function Media({ item, className, sizes }: { item: GalleryItem; className: string; sizes: string }) {
  return (
    <div className={className}>
      {item.image ? (
        <Image
          src={item.image}
          alt={item.alt ?? ''}
          fill
          sizes={sizes}
          placeholder="blur"
          className={styles.image}
          style={{ objectPosition: item.position }}
        />
      ) : (
        <PhotoPlaceholder label={item.caption} />
      )}
    </div>
  )
}

export function Environment() {
  return (
    <section id="ambiente" className={`section ${styles.environment}`} aria-labelledby="ambiente-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.composition} data-reveal="scale">
          <Media item={environment.main} className={styles.main} sizes="(max-width: 900px) 80vw, 45vw" />
          <Media item={environment.detail} className={styles.detail} sizes="(max-width: 900px) 45vw, 22vw" />
        </div>

        <div className={styles.copy} data-reveal>
          <span className="eyebrow">Ambiente</span>
          <h2 id="ambiente-title" className="title">
            Experiência, cuidado e atenção em cada <em className="script">etapa.</em>
          </h2>
          <span className={styles.rule} aria-hidden="true" />
          <p className="lead">
            Um trabalho que une conhecimento técnico e olhar humano para acompanhar diferentes momentos da jornada de
            recuperação.
          </p>
        </div>
      </div>
    </section>
  )
}
