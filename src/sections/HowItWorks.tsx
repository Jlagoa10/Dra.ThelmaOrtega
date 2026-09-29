import type { CSSProperties } from 'react'
import { ButtonLink } from '@/components/ButtonLink'
import { steps } from '@/data/content'
import { whatsappUrl } from '@/lib/links'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
  return (
    <section id="como-funciona" className={`section ${styles.how}`} aria-labelledby="como-funciona-title">
      <div className="wrap">
        <header className={styles.head} data-reveal>
          <span className="eyebrow">Como funciona</span>
          <h2 id="como-funciona-title" className="title">
            Do primeiro contato ao acompanhamento
          </h2>
        </header>

        <ol className={styles.steps} data-reveal="sequence">
          {steps.map((step, index) => (
            <li key={step.title} className={styles.step} style={{ '--i': index } as CSSProperties}>
              <span className={styles.number} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className={styles.stepTitle}>
                <span className="sr-only">Etapa {index + 1}: </span>
                {step.title}
              </h3>
              <p className={styles.stepText}>{step.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.cta} data-reveal>
          <ButtonLink href={whatsappUrl()} icon="whatsapp">
            Começar pelo agendamento
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
