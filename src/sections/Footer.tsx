import { Icon } from '@/components/Icon'
import { site } from '@/data/site'
import { mapsUrl, telUrl, whatsappUrl } from '@/lib/links'
import styles from './Footer.module.css'

export function Footer() {
  const { street, district, city, state, postalCode } = site.address

  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <a className={styles.brand} href="#inicio">
              <span className={styles.brandName}>{site.professional}</span>
              <span className={styles.brandRole}>Fisioterapeuta</span>
            </a>
            <p className={styles.tagline}>{site.tagline}</p>
          </div>

          <div>
            <h2 className={styles.heading}>Endereço</h2>
            <address className={styles.address}>
              {street} - {district}
              <br />
              {city} - {state}
              <br />
              CEP {postalCode}
            </address>
          </div>

          <div>
            <h2 className={styles.heading}>Contato</h2>
            <ul className={styles.links}>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={18} />
                  WhatsApp
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a href={telUrl}>
                  <Icon name="phone" size={18} />
                  {site.phone.display}
                </a>
              </li>
              <li>
                <a href={site.instagram.url} target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" size={18} />
                  {site.instagram.handle}
                  <span className="sr-only"> (abre em nova aba)</span>
                </a>
              </li>
              <li>
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <Icon name="pin" size={18} />
                  Localização
                  <span className="sr-only"> (abre o Google Maps em nova aba)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.legal}>
            <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
            <span className={styles.separator} aria-hidden="true">
              ·
            </span>
            <p>
              Feito por{' '}
              <a className={styles.credit} href="https://jlkoficial.com" target="_blank" rel="noopener noreferrer">
                JLK Web &amp; Digital Services
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </p>
          </div>
          <a className={styles.top} href="#inicio">
            Voltar ao topo
            <Icon name="arrowUp" size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
