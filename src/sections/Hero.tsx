import Image from 'next/image'
import heroFigure from '@/assets/images/hero-figura.webp'
import { ButtonLink } from '@/components/ButtonLink'
import { whatsappUrl } from '@/lib/links'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.media}>
        <Image
          src={heroFigure}
          alt=""
          loading="eager"
          fetchPriority="high"
          quality={85}
          sizes="(max-width: 767px) 260vw, 90vw"
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          <span className={styles.name}>Thelma Ortega</span>
          <span className="sr-only"> — </span>
          <span className={styles.role}>Fisioterapia Pós-Cirúrgica</span>
        </h1>
        <p className={styles.areas}>
          Oncológica <span aria-hidden="true">·</span> Pós-parto
        </p>
        <ButtonLink href={whatsappUrl()} icon="whatsapp" className={styles.cta}>
          Agendar avaliação
        </ButtonLink>
      </div>
    </section>
  )
}
