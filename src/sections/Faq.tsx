import { ButtonLink } from '@/components/ButtonLink'
import { faq } from '@/data/content'
import { whatsappUrl } from '@/lib/links'
import styles from './Faq.module.css'

export function Faq() {
  return (
    <section id="duvidas" className={`section ${styles.faq}`} aria-labelledby="duvidas-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.side} data-reveal>
          <span className="eyebrow">Dúvidas</span>
          <h2 id="duvidas-title" className="title">
            Perguntas frequentes
          </h2>
          <p className={styles.sideText}>Não encontrou o que procurava? Envie sua dúvida pelo WhatsApp.</p>
          <div>
            <ButtonLink
              href={whatsappUrl('Olá, Dra. Thelma! Tenho uma dúvida sobre o atendimento.')}
              variant="ghost"
              icon="whatsapp"
            >
              Enviar uma dúvida
            </ButtonLink>
          </div>
        </div>

        <div className={styles.list} data-reveal>
          {faq.map((item, index) => (
            <details key={item.question} name="duvidas" className={styles.item} open={index === 0}>
              <summary className={styles.question}>
                <span>{item.question}</span>
                <span className={styles.toggle} aria-hidden="true" />
              </summary>
              <div className={styles.answer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
