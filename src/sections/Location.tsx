import { ButtonLink } from '@/components/ButtonLink'
import { Icon } from '@/components/Icon'
import { site } from '@/data/site'
import { directionsUrl, mapsEmbedUrl } from '@/lib/links'
import styles from './Location.module.css'

export function Location() {
  const { street, district, city, state, postalCode } = site.address

  return (
    <section id="localizacao" className={`section ${styles.location}`} aria-labelledby="localizacao-title">
      <div className={`wrap ${styles.grid}`}>
        <div className={styles.copy} data-reveal>
          <span className="eyebrow">Localização</span>
          <h2 id="localizacao-title" className="title">
            Vamos cuidar de você de <em className="script">perto.</em>
          </h2>

          <div className={styles.addressBlock}>
            <span className={styles.pin}>
              <Icon name="pin" size={22} />
            </span>
            <address className={styles.address}>
              {street} - {district}
              <br />
              {city} - {state}
              <br />
              <span className={styles.cep}>CEP {postalCode}</span>
            </address>
          </div>

          <div>
            <ButtonLink href={directionsUrl} icon="pin">
              Como chegar
            </ButtonLink>
          </div>
        </div>

        <div className={styles.map} data-reveal="fade">
          <iframe
            src={mapsEmbedUrl}
            title={`Mapa: ${street}, ${district}, ${city} - ${state}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
