import { Icon } from '@/components/Icon'
import { specialties } from '@/data/content'
import styles from './Specialties.module.css'

export function Specialties() {
  return (
    <section id="especialidades" className={`section ${styles.specialties}`} aria-labelledby="especialidades-title">
      <div className="wrap">
        <header className={styles.head} data-reveal>
          <div className={styles.headTitle}>
            <span className="eyebrow">Especialidades</span>
            <h2 id="especialidades-title" className="title">
              Um cuidado dedicado a cada <em className="script">fase</em>
            </h2>
          </div>
          <p className="lead">
            Três momentos diferentes da vida da mulher, cada um com necessidades próprias de acompanhamento.
          </p>
        </header>

        <ul className={styles.cards}>
          {specialties.map((item, index) => {
            const external = item.link.external
            return (
              <li key={item.title} className={styles.card} data-reveal>
                <div className={styles.cardTop}>
                  <span className={styles.icon}>
                    <Icon name={item.icon} size={36} />
                  </span>
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className={styles.kicker}>{item.kicker}</span>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.text}>{item.text}</p>
                <a
                  className={`link-arrow ${styles.link}`}
                  href={item.link.href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span>{item.link.label}</span>
                  <Icon name="arrow" size={16} />
                  <span className="sr-only">
                    {` — ${item.title}`}
                    {external && ' (abre em nova aba)'}
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
