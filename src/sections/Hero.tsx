import Image from 'next/image'
import heroFigure from '@/assets/images/hero-figura.webp'
import { ButtonLink } from '@/components/ButtonLink'
import { whatsappUrl } from '@/lib/links'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      {/* O "palco" tem a proporção da ilustração: o texto é posicionado em
          relação à figura, e não à tela, para ficar sempre sobre ela. */}
      <div className={styles.stage}>
        <Image
          src={heroFigure}
          alt=""
          fill
          loading="eager"
          fetchPriority="high"
          quality={85}
          sizes="(max-width: 767px) 280vw, (max-width: 1100px) 240vw, 115vw"
          className={styles.image}
        />

        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            <span className={styles.name}>Thelma Ortega</span>
            <span className="sr-only"> — </span>
            <span className={styles.role}>Fisioterapia Pós-Cirúrgica</span>
          </h1>
          <p className={styles.areas}>
            Oncológica <span aria-hidden="true">·</span> Pós-parto
          </p>
        </div>
      </div>

      <div className={styles.ctaWrap}>
        <ButtonLink href={whatsappUrl()} icon="whatsapp" className={styles.cta}>
          Agendar avaliação
        </ButtonLink>
      </div>
    </section>
  )
}
