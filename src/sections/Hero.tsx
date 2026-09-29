import Image from 'next/image'
import heroFigure from '@/assets/images/hero-figura.webp'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section id="inicio" className={styles.hero} aria-labelledby="hero-title">
      {/* O "palco" tem a proporção da ilustração: o texto é posicionado em
          relação à figura, e não à tela, para ficar sempre sobre ela. */}
      <div className={styles.stage}>
        {/* Camada separada para a profundidade no scroll (só CSS). */}
        <div className={styles.depth}>
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
        </div>
      </div>
    </section>
  )
}
