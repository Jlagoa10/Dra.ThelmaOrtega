import Image from 'next/image'
import portrait from '@/assets/images/dra-thelma-ortega.webp'
import { profile } from '@/data/content'
import styles from './Profile.module.css'

export function Profile() {
  const body = profile.paragraphs.slice(0, -1)
  const highlight = profile.paragraphs.at(-1)

  return (
    <section id="perfil" className={`section ${styles.profile}`} aria-labelledby="perfil-title">
      <div className={`wrap ${styles.grid}`}>
        <figure className={styles.figure} data-reveal="scale">
          <div className={styles.frameWrap}>
            <div className={styles.frame}>
              <Image
                src={portrait}
                alt="Dra. Thelma Ortega, fisioterapeuta, de uniforme branco no consultório"
                sizes="(max-width: 900px) 88vw, 42vw"
                placeholder="blur"
                className={styles.photo}
              />
            </div>
          </div>
          <figcaption className={styles.caption}>Dra. Thelma Ortega · Fisioterapeuta</figcaption>
        </figure>

        <div className={styles.copy} data-reveal>
          <span className="eyebrow">Perfil</span>
          <h2 id="perfil-title" className={styles.title}>
            Quem sou eu?
          </h2>
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className={styles.highlight}>{highlight}</p>

          <ul className={styles.pillars} aria-label="Pilares do atendimento">
            {profile.pillars.map((pillar, index) => (
              <li key={pillar}>
                <span className={styles.pillarIndex} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {pillar}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
