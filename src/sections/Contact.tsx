import { ButtonLink } from '@/components/ButtonLink'
import { CopyPhoneButton } from '@/components/CopyPhoneButton'
import { Icon } from '@/components/Icon'
import { site } from '@/data/site'
import { telUrl, whatsappUrl } from '@/lib/links'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contato" className={`section ${styles.contact}`} aria-labelledby="contato-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy} data-reveal>
          <span className={`eyebrow ${styles.eyebrow}`}>Contato</span>
          <h2 id="contato-title" className={styles.title}>
            Seu processo merece <em className={styles.script}>cuidado.</em>
          </h2>
          <p className={styles.text}>
            Converse com a Dra. Thelma e saiba como funciona o acompanhamento fisioterapêutico.
          </p>
          <div>
            <ButtonLink href={whatsappUrl()} icon="whatsapp">
              Agendar avaliação pelo WhatsApp
            </ButtonLink>
          </div>
        </div>

        <ul className={styles.channels} data-reveal>
          <li className={styles.channel}>
            <span className={styles.channelLabel}>
              <Icon name="whatsapp" size={16} />
              WhatsApp / Telefone
            </span>
            <div className={styles.phoneRow}>
              <a id="telefone" className={styles.channelValue} href={telUrl}>
                {site.phone.display}
              </a>
              <CopyPhoneButton phone={site.phone.display} targetId="telefone" className={styles.copyButton} />
            </div>
          </li>
          <li className={styles.channel}>
            <span className={styles.channelLabel}>
              <Icon name="instagram" size={16} />
              Instagram
            </span>
            <a
              className={`${styles.channelValue} ${styles.instagram}`}
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {site.instagram.handle}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
