import type { CSSProperties } from 'react'
import { ButtonLink } from '@/components/ButtonLink'
import { postOp } from '@/data/content'
import { whatsappUrl } from '@/lib/links'
import styles from './PostOp.module.css'

// Gráfico ilustrativo (viewBox 600×300). As etapas ficam em x = 50, 150 … 550,
// o mesmo ritmo das 6 colunas de rótulos abaixo do gráfico.
const BASELINE = 270
const stagePoints: [number, number][] = [
  [50, 210],
  [150, 250],
  [250, 224],
  [350, 188],
  [450, 132],
  [550, 72],
]
const realPath =
  'M50 210 C58.3 214.3 83.3 229.3 100 236 C116.7 242.7 133.3 250.7 150 250 C166.7 249.3 183.3 236.3 200 232 C216.7 227.7 235.8 224.3 250 224 C264.2 223.7 273.3 233 285 230 C296.7 227 309.2 213 320 206 C330.8 199 338.3 192.7 350 188 C361.7 183.3 378.3 181.7 390 178 C401.7 174.3 410 173.7 420 166 C430 158.3 438.7 140.3 450 132 C461.3 123.7 476.7 121.3 488 116 C499.3 110.7 507.7 107.3 518 100 C528.3 92.7 544.7 76.7 550 72'
const imaginedPath = 'M50 210 C130 96 250 74 550 72'

export function PostOp() {
  return (
    <section id="pos-operatorio" className={`section ${styles.postop}`} aria-labelledby="posop-title">
      <div className="wrap">
        <header className={styles.head} data-reveal>
          <div className={styles.headTitle}>
            <span className={`eyebrow ${styles.eyebrow}`}>Pós-operatório</span>
            <h2 id="posop-title" className={`title ${styles.title}`}>
              O resultado não acontece de um dia para o <em className="script">outro.</em>
            </h2>
          </div>
          <p className={styles.intro}>
            O pós-operatório pede paciência. Depois da cirurgia, o corpo passa por um processo intenso de
            transformação, e cada fase tem o seu tempo.
          </p>
        </header>

        <div className={styles.grid}>
          <figure className={styles.chart} data-reveal>
            <div className={styles.legend} aria-hidden="true">
              <span>
                <i className={styles.swatchImagined} />
                Como muitas pessoas imaginam
              </span>
              <span>
                <i className={styles.swatchReal} />
                Como costuma ser
              </span>
            </div>

            <svg viewBox="0 0 600 300" className={styles.svg} role="img" aria-labelledby="chart-title chart-desc">
              <title id="chart-title">Como muitas pessoas imaginam o pós-operatório e como ele costuma ser</title>
              <desc id="chart-desc">
                Muitas pessoas imaginam uma melhora rápida e contínua logo após a cirurgia. Na prática, o caminho
                costuma ter altos e baixos: passa por inflamação, inchaço, recuperação dos tecidos e evolução
                funcional até chegar ao resultado.
              </desc>
              <defs>
                <linearGradient id="chart-area" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#f9b695" stopOpacity="0.22" />
                  <stop offset="1" stopColor="#f9b695" stopOpacity="0" />
                </linearGradient>
              </defs>

              {stagePoints.map(([x, y]) => (
                <line key={x} x1={x} y1={BASELINE} x2={x} y2={y} className={styles.guide} />
              ))}
              <line x1="30" y1={BASELINE} x2="575" y2={BASELINE} className={styles.axis} />

              <path d={imaginedPath} className={styles.imagined} />
              <path d={`${realPath} L550 ${BASELINE} L50 ${BASELINE} Z`} className={styles.area} fill="url(#chart-area)" />
              <path d={realPath} pathLength={1} className={styles.real} />

              {stagePoints.map(([x, y], index) => (
                <circle
                  key={x}
                  cx={x}
                  cy={y}
                  r={index === stagePoints.length - 1 ? 7 : 4.5}
                  className={index === stagePoints.length - 1 ? styles.dotEnd : styles.dot}
                  style={{ '--d': `${0.5 + index * 0.3}s` } as CSSProperties}
                />
              ))}
            </svg>

            <ol className={styles.stages} aria-label="Etapas da recuperação">
              {postOp.stages.map((stage, index) => (
                <li key={stage}>
                  <span className={styles.stageNumber} aria-hidden="true">
                    {index + 1}
                  </span>
                  <span className={styles.stageName}>{stage}</span>
                </li>
              ))}
            </ol>

            <figcaption className={styles.footnote}>
              Representação ilustrativa. Cada organismo tem seu próprio ritmo.
            </figcaption>
          </figure>

          <div className={styles.aside} data-reveal>
            <p className={styles.label}>Nesse processo, o corpo passa por</p>
            <ul className={styles.processes}>
              {postOp.processes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.text}>
              Nos primeiros dias, inchaço, hematomas, sensibilidade e limitação de movimentos podem fazer parte desse
              processo. Cada organismo tem seu próprio ritmo.
            </p>
            <p className={styles.note}>
              Por isso, o acompanhamento adequado e o respeito às orientações profissionais são importantes durante
              toda a recuperação.
            </p>
            <ButtonLink
              href={whatsappUrl('Olá, Dra. Thelma! Gostaria de tirar dúvidas sobre a fisioterapia no pós-operatório.')}
              icon="whatsapp"
              className={styles.cta}
            >
              Tirar dúvidas pelo WhatsApp
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  )
}
